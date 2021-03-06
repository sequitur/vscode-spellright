// -----------------------------------------------------------------------------
// Spell Right extension for Visual Studio Code (VSCode)
// Copyright (c) 2017 Bartosz Antosik. Licensed under the MIT License.
// -----------------------------------------------------------------------------

'use strict';

const vscode = require('vscode');

const Parser = require('../parser');
const DocumentTypes = require('../doctype');

class Plaintext extends Parser.default {

    _filter(document, text, options) {

        var match;

        // Matching RegExps from settings. They are "spaced out" just except
        // EOL chars so NOT to change the size/geometry of the document.
        for (var i = 0; i < options.ignoreRegExpsMap.length; i++) {
            while (match = options.ignoreRegExpsMap[i].exec(text)) {
                var replace = match[0].replace(/(?:[^\r\n]|\r(?!\n))/g, ' ');
                text = text.replaceAt(match.index, replace);
            }
        }

        // Remove URLs
        var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g;
        while (match = re.exec(text)) {
            var replace = ' '.repeat(match[0].length);
            text = text.replaceAt(match.index, replace);
        }

        // Remove e-mail addresses
        re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
        while (match = re.exec(text)) {
            var replace = ' '.repeat(match[0].length);
            text = text.replaceAt(match.index, replace);
        }

        if (document.languageId === 'git-commit' || document.languageId === 'git-rebase') {
            // Remove tail part after `# ------------------------ >8 -...`
            re = /\# -[-]+ >8 -[-][\s\S]*/gm;
            while (match = re.exec(text)) {
                var replace = ' '.repeat(match[0].length);
                text = text.replaceAt(match.index, replace);
            }
            // Remove line comments `# ...`
            re = /#.*$/gm;
            while (match = re.exec(text)) {
                var replace = ' '.repeat(match[0].length);
                text = text.replaceAt(match.index, replace);
            }
        }

        return text;
    }

    _parse(document, diagnostics, options, checkAndMark, interpretCommand, sline, scharacter, eline, echaracter) {

        var text = this._filter(document, document.getText(), options);

        var _pos = 0;
        var _linecount = 0;
        var _colcount = 0;
        var _syntax = 0;

        var InContent = true;

        var symbol;

        var token = '';
        var linenumber = 0;
        var colnumber = 0;

        if (typeof sline === 'undefined')
            sline = 0;
        if (typeof eline === 'undefined')
            eline = Number.MAX_SAFE_INTEGER;

        var context = '';

        // Extract areas to spellcheck (body, comments, strings etc.)
        while (_pos < text.length) {

            if (InContent) {
                // Build lexem to check
                if (LEXEM_BUILD.test(text[_pos])) {
                    if (token == '') {
                        linenumber = _linecount;
                        colnumber = _colcount;
                    }
                    token += text[_pos];
                }
                // Check spelling & tag diagnostics
                if (token && (LEXEM_SPELL.test(text[_pos]) || _pos == (text.length - 1))) {

                    context = 'body';

                    if (sline <= linenumber && linenumber <= eline) {
                        if (typeof echaracter !== 'undefined') {
                            // Here skip spelling token (word) currently being changed
                            if (echaracter != colnumber + (token.length - 1)) {
                                checkAndMark(document, context, diagnostics, token, linenumber, colnumber);
                            }
                        } else {
                            checkAndMark(document, context, diagnostics, token, linenumber, colnumber);
                        }
                    }
                    token = '';
                }
            }

            // Line end - finish token, block & line comment etc. Should be
            // fine for either LF or CRLF combination that VSCode supports.
            if (text[_pos] === '\n') {
                _linecount++;
                _colcount = 0;
            } else {
                _colcount++;
            }
            _pos++;
        }
        return { syntax: _syntax, linecount: _linecount };
    }
}
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = Plaintext;
