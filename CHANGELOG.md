# Change Log

## **1.2.22** released on 18th October 2017

- **Change:** Screenshots updated.
- **Fix:** Code refactoring caused regression: Extension not working at all when used without folder (workspace) open ([#79](https://github.com/bartosz-antosik/vscode-spellright/pull/79)).

## **1.2.20** released on 16th October 2017

- **Fix:** Regression ([#77](https://github.com/bartosz-antosik/vscode-spellright/pull/77)) introduced in 2.17: Failure when spelling programming languages which do not contain multiline string definition.

## **1.2.18** released on 11th October 2017

- **Change:** Added `erb` (Embedded Ruby) to list of file types using XML parser ([#74](https://github.com/bartosz-antosik/vscode-spellright/pull/74)). Thanks to [@segphault](https://github.com/segphault).

## **1.2.17** released on 9th October 2017

- **Change:** Multiline strings not spelled in Python ([#73](https://github.com/bartosz-antosik/vscode-spellright/issues/73)).

## **1.2.16** released on 6th October 2017

- **Fix:** Regression introduced in 2.12: Words composed only of dashes (e.g. horizontal rules in comments) considered misspelled when used with Hunspell back end.

## **1.2.15** released on 3rd October 2017

- **New:** Added spelling parser settings for Git Commit Message & Git Rebase Message document types ([#71](https://github.com/bartosz-antosik/vscode-spellright/issues/71)).
- **Change:** Icon touched a bit.

## **1.2.12** released on 3rd October 2017

- **New:** Spelling of words separated by dash as a whole not only as parts ([#70](https://github.com/bartosz-antosik/vscode-spellright/issues/70)).

## **1.2.10** released on 26th September 2017

- **New:** Added support for LaTeX 'magic comment' (`!TEX spellcheck = CODE`) which allow to switch spelling language inside LaTeX document, functionally identical to an `spellcheck-language CODE` In-Document command.

## **1.2.8** released on 20th September 2017

- **New:** Native module bindings for RPM based Linux distributions like RHEL, Fedora, CentoOS etc. ([#69](https://github.com/bartosz-antosik/vscode-spellright/issues/69)).

## **1.2.2** released on 15th September 2017

- **New:** Added spelling parser settings for Julia (comments & strings) source code files and Julia Markdown documents ([#68](https://github.com/bartosz-antosik/vscode-spellright/issues/68)).
- **New:** Extension can have multiple workspace dictionaries contained in `*.dict` files which may be useful to have separate dictionaries of medical terms, trademark names etc. ([#65](https://github.com/bartosz-antosik/vscode-spellright/issues/65)).
- **New:** New icon & documentation updates.
- **Fix:** In-Document commands parsing in strings stopped parsing of In-Document commands.

## **1.1.40** released on 12th September 2017

- **Fix:** Compound (e.g. CamelCase) words not consulted as whole with main spelling engine ([#66](https://github.com/bartosz-antosik/vscode-spellright/issues/66)).

## **1.1.38** released on 11th September 2017

- **Change:** Regular expression from `spellright.ignoreRegExps` settings item are now matched against raw document not extracted words to spell. This is a huge change and allows to eliminate parts of document from spelling, like LaTeX `\begin{equation} ... \end{equation}` sections etc. ([#64](https://github.com/bartosz-antosik/vscode-spellright/issues/64)).

## **1.1.34** released on 7th September 2017

- **New:** Added spelling parser settings for 'D' (comments & strings) source code files ([#63](https://github.com/bartosz-antosik/vscode-spellright/issues/63)).
- **New:** Added multiline strings parsing to source code parser, following requirements in ([#63](https://github.com/bartosz-antosik/vscode-spellright/issues/63)).

## **1.1.32** released on 5th September 2017

- **Change:** Word separation rules updated with tilde ('~') character which is used as non breaking space in LaTeX ([#62](https://github.com/bartosz-antosik/vscode-spellright/issues/62)).
- **Change:** Optimized spelling of whole document when In-Document Commands (like `spellcheck-off` etc.) are modified.

## **1.1.31** released on 1st September 2017

- **Fix:** Error in setting name in configuration contribution point (`spellright.notificationType` vs. `spellright.notificationClass`) ([#61](https://github.com/bartosz-antosik/vscode-spellright/issues/61)). Thanks to [@James-Yu](https://github.com/James-Yu) for the hint.

## **1.1.30** released on 30th August 2017

- **Change:** Comment in workspace configuration file removed ([#60](https://github.com/bartosz-antosik/vscode-spellright/issues/60)).

## **1.1.26** released on 28th August 2017

- **Change:** Native module bindings for Electron version 1.7.4 (insiders preview) for all three platforms.
- **Change:** Documentation in README.md polished in places.

## **1.1.25** released on 25th August 2017

- **Change:** Recently introduced `spellright.spellSyntax` renamed to `spellright.spellContext` and `spellright.spellSyntaxByClass` renamed to `spellright.spellContextByClass` respectively.
- **Fix:** Wrong syntactic identification of specific strings in programming languages parser ([#59](https://github.com/bartosz-antosik/vscode-spellright/issues/59)).
- **Fix:** 'Add to workspace dictionary' doesn't make red squiggle disappear immediately ([#58](https://github.com/bartosz-antosik/vscode-spellright/issues/58)).

## **1.1.24** released on 24th August 2017

- **New:** Spelling of body/comments/strings of documents & source code can be selectively enabled/disabled in configuration settings globally (`spellright.spellSyntax`) and per document type (`spellright.spellSyntaxByClass`) following inquiry ([#40](https://github.com/bartosz-antosik/vscode-spellright/issues/40)).

## **1.1.22** released on 22nd August 2017

- **Change:** CamelCase word is marked as correct when only one part was corrected ([#46](https://github.com/bartosz-antosik/vscode-spellright/issues/46)).
- **Change:** Undo editor action doesn't trigger word re-check ([#47](https://github.com/bartosz-antosik/vscode-spellright/issues/47)).
- **Fix:** Switching dictionaries often with Hunspell backend causes high CPU usage ([#51](https://github.com/bartosz-antosik/vscode-spellright/issues/51)).

## **1.1.16** released on 20th August 2017

- **New:** New commands to add text selected in editor to User/Workspace dictionary ([#43](https://github.com/bartosz-antosik/vscode-spellright/issues/43)).
- **New:** Configuration setting (`spellright.notificationClass`) to change class of diagnostic messages produced by Spell Right ([#49](https://github.com/bartosz-antosik/vscode-spellright/issues/49)).

## **1.1.14** released on 17th August 2017

- **New:** Added spelling parser settings for 'HTTP' (comments) document type (used by REST Client Extension, [#41](https://github.com/bartosz-antosik/vscode-spellright/issues/41)).
- **Change:** Documentation updated with dictionary reuse hint for Linux systems ([#45](https://github.com/bartosz-antosik/vscode-spellright/issues/45)). Thanks to [@slodki](https://github.com/slodki) for the hint.

## **1.1.12** released on 16th August 2017

- **Fix:** Spell Right starts off enabled when configured not to ([#48](https://github.com/bartosz-antosik/vscode-spellright/issues/48)).
- **Fix:** Right suggestion for wrong CamelCase word part displayed ([#44](https://github.com/bartosz-antosik/vscode-spellright/issues/44)).
- **Fix:** Language selected for file is reset to none after adding word to user dictionary ([#42](https://github.com/bartosz-antosik/vscode-spellright/issues/42)).

## **1.1.10** released on 14th August 2017

- **Fix:** Extensions fails to load when there's a trailing comma in settings.json ([#39](https://github.com/bartosz-antosik/vscode-spellright/issues/39)). Many thanks to [@DamianPereira](https://github.com/DamianPereira) for nailing the problem.

## **1.1.8** released on 12th August 2017

- **Change:** Removed spelling for compiler directives in 'Pascal' document type.

## **1.1.6** released on 11th August 2017

- **New:** Support for **macOS** and **Linux**.
- **Fix:** Turning off SpellRight leaves it stuck in enabled mode in other Editors ([#37](https://github.com/bartosz-antosik/vscode-spellright/issues/37)) and quick fix to quick fix ([#38](https://github.com/bartosz-antosik/vscode-spellright/issues/38)).

## **1.0.42** released on 6th August 2017

- **Change:** Some math expressions in latex should not be spelled ([#35](https://github.com/bartosz-antosik/vscode-spellright/issues/35)).
- **Change:** LaTeX parser now excludes more types of math braces, that is: `\(` ... `\)` and `\[` ... `\]`   ([#34](https://github.com/bartosz-antosik/vscode-spellright/issues/34)).

## **1.0.40** released on 4th August 2017

- **New:** Added spelling parser settings for 'Pascal' (comments & strings) document type.
- **Change:** README.md polished a bit (wrong Unicode characters prevented **In-Document** commands from being ready to cut & paste to use).

## **1.0.36** released on 2nd August 2017

- **New:** Added spelling for 'AsciiDoc' document type ([#30](https://github.com/bartosz-antosik/vscode-spellright/issues/30)).
- **Change:** Custom words are no longer stored in user/workspace configuration files but in dedicated `spellright.dict` files located in User and/or Workspace directories. It is meant to be easier to edit, compare, synchronize etc. custom lists of words considered as spelled correctly.
- **Change:** New settings flag `addToSystemDictionary` allows to store words added to user dictionary in appropriate system default custom spelling dictionary [#28](https://github.com/bartosz-antosik/vscode-spellright/issues/28).
- **Fix:** Multiple languages in document code action (bulb) suggestions always in default language ([#33](https://github.com/bartosz-antosik/vscode-spellright/issues/33)).

## **1.0.32** released on 25th July 2017

- **Change:** Added binary dependencies for both ia32 and x64 architectures on Windows. Should work in both 32 and 64-bit builds of Visual Studio Code on 64-bit Windows ([#29](https://github.com/bartosz-antosik/vscode-spellright/issues/29)). Many thanks to [@Moberstein](https://github.com/Moberstein), [@borekb](https://github.com/borekb), [@Eldaw](https://github.com/Eldaw) for nailing problem around it.

## **1.0.27** released on 12th July 2017

- **Change:** URLs in Markdown link excluded from spelling ([#27](https://github.com/bartosz-antosik/vscode-spellright/issues/27)).

## **1.0.25** released on 9th July 2017

- **New:** User settings are now watched for changes and reloaded after change (no restart required).

## **1.0.24** released on 4th July 2017

- **Change:** Inline code excluded from spelling in Markdown documents because of ([#24](https://github.com/bartosz-antosik/vscode-spellright/issues/24)) and as a consequence of ([#10](https://github.com/bartosz-antosik/vscode-spellright/issues/10)).
- **Change:** Dictionary grouping flag (`spellright.groupDictionaries`) exposed in settings.

## **1.0.23** released on 2nd July 2017

- **Change:** Word separation rules updated (pipe character).
- **Fix:** Extension improperly initialized spelling language in certain circumstances ([#23](https://github.com/bartosz-antosik/vscode-spellright/issues/23)).

## **1.0.22** released on 9th June 2017

- **Change:** Skipping Code Blocks from spelling in reStructuredText documents ([#20](https://github.com/bartosz-antosik/vscode-spellright/issues/20)).
- **Fix:** Language switching regression introduced by multiple languages in one document ([#21](https://github.com/bartosz-antosik/vscode-spellright/issues/21)).
- **Fix:** Incorrect reloading of `spellright.ignoreRegExps` when watching for manual file change.

## **1.0.21** released on 7th June 2017

- **Change:** Added spelling for 'reStructuredText' file type ([#19](https://github.com/bartosz-antosik/vscode-spellright/issues/19)).

## **1.0.20** released on 1st June 2017

- **New:** In-Document command to switch between languages in one document (see `spellcheck-language` in README.md).

## **1.0.19** released on 30th May 2017

- **Fix:** One wrong RegExp in `spellright.ignoreRegExps` will prevent other RegExps to be applied ([#18](https://github.com/bartosz-antosik/vscode-spellright/issues/18)). Many thanks to [@eilsustc](https://github.com/neilsustc) for help nailing this.

## **1.0.18** released on 23rd May 2017

- **New:** New settings item `ignoreFiles` to allow globally define files to be ignored (in reference to [#16](https://github.com/bartosz-antosik/vscode-spellright/issues/16)).
- **Change:** Screenshots & documents polished a bit.
- **Change:** Keywords provided in package metadata for easier reference.
- **Fix:** Status bar indicator show/hide functionality & coloring corrected ([#17](https://github.com/bartosz-antosik/vscode-spellright/issues/17)).

## **1.0.17** released on 20th May 2017

- **New:** In-Document commands to allow disabling/enabling spelling for the document independent of the global settings ([#14](https://github.com/bartosz-antosik/vscode-spellright/issues/14)).
- **New:** Status Bar indicator shows spelling state respecting the In-Document commands and `.spellignore` file actions (Language name when spelling enabled, OFF in white when disabled for document class; OFF in red when disabled by In-Document commands or `.spellignore` file pattern).
- **New:** Workspace settings `spellright.json` file is watched for changes (e.g. manually editing list of ignored words) and is reloaded in case it has been altered on the disk.
- **New:** Ignore file `.spellignore` located in workspace root directory allows to disable spelling for files indicated by [gitignore](https://git-scm.com/docs/gitignore) syntax patterns ([#16](https://github.com/bartosz-antosik/vscode-spellright/issues/16)). Also watched for changes.
- **Change:** Word separation rules updated (digit at the beginning/end, hash, dollar sign).
- **Fix:** Wrong file type handling in split view ([#15](https://github.com/bartosz-antosik/vscode-spellright/issues/15)).

## **1.0.16** released on 9th May 2017

- **Change:** Word separation rules updated (digit inside a word).
- **Change:** Spelling enabled for 'mustache' file type ([#13](https://github.com/bartosz-antosik/vscode-spellright/issues/13)).
- **Fix:** Global setting should be "spellright.documentTypes" not "spellright.documentType" ([#12](https://github.com/bartosz-antosik/vscode-spellright/issues/12)).

## **1.0.15** released on 5th May 2017

- **Change:** Native module recompiled for new Electron version that comes with VSCode 1.12.
- **Change:** Screenshots update.
- **Fix:** Word separation rules updated (period & apostrophe at the beginning of the word).

## **1.0.12** released on 29th April 2017

- **New:** Global/workspace dictionaries & regular expressions matched also on compound phrase, before separation of camel/snake case parts.
- **Change:** Significantly faster spelling of entire document (on save and document switch) especially for large documents.
- **Fix:** Word separation rules updated (period, curly braces, apostrophe).
- **Fix:** Small documentation improvements.

## **1.0.11** released on 26th April 2017

- **Fix:** Regression in word separation rules fixed ([#11](https://github.com/bartosz-antosik/vscode-spellright/issues/11)).

## **1.0.10** released on 25th April 2017

- **New:** CamelCase and snake_case separation & spelling.
- **New:** E-mails & URLs excluded from spelling in markdown/plaintext/LaTeX/source code documents.
- **Change:** Compound lexemes separation rules updated (period, quotation mark).
- **Change:** Code section excluded from spelling in Markdown documents ([#10](https://github.com/bartosz-antosik/vscode-spellright/issues/10)).
- **Change:** Small touches to text documents.

## **1.0.8** released on 19th April 2017

- **Fix:** Spell check improperly interprets punctuation with custom dictionary words ([#7](https://github.com/bartosz-antosik/vscode-spellright/issues/7)).
- **Fix:** Global/workspace dictionary incorrectly saving & naming ([#8](https://github.com/bartosz-antosik/vscode-spellright/issues/8)).

## **1.0.7** released on 18th April 2017

- **New:** Skipping math enclosed between $...$ in LaTeX documents.
- **New:** Diagnostics information is updated dynamically about every second while spelling whole document (useful when spelling large files).
- **New:** Hunspell dictionaries (when using in Windows 7 which does not have Spell Check API) can be used from language selection list.
- **New:** Information about installing on Windows 7 in README.md ([#6](https://github.com/bartosz-antosik/vscode-spellright/issues/6)).
- **Change:** Word separation rules updated (question mark).
- **Change:** Small touches to text documents & GUI elements.
- **Fix:** Parsing error when line/block comment inside string in source code parser.

## **1.0.6** released on 13th April 2017

- **Change:** All processing shifted to Idle state to prevent main thread clogging in case of spelling large file ([#1](https://github.com/bartosz-antosik/vscode-spellright/issues/1)).
- **Change:** Word separation rules updated.
- **Change:** Small touches to text documents & GUI elements.
- **Fix:** Highlights disappear on edit when more than 250 spelling errors in document ([#2](https://github.com/bartosz-antosik/vscode-spellright/issues/2)).
- **Change:** Dictionary grouping by base language name ([#4](https://github.com/bartosz-antosik/vscode-spellright/issues/4)).
- **Fix:** Norwegian Bokmål dictionary/culture name corrected ([#5](https://github.com/bartosz-antosik/vscode-spellright/issues/5)).
- **Fix:** Regression in switching dictionary/off functionality.

## **1.0.0** released on 4th April 2017

- Initial release.