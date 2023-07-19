import colors from "./colors";
import transparency from "./transparency";

const darkTheme = {
  name: "Consolvis Dark Theme",
  type: "dark",
  colors: {
    // Base colors
    focusBorder: colors.gray[6], // Overall border color for focused elements. This color is only used if not overridden by a component.
    foreground: colors.gray[4], // Overall foreground color. This color is only used if not overridden by a component.
    descriptionForeground: colors.gray[4], // Foreground color for description text providing additional information, for example for a label.
    errorForeground: colors.red[5],
    disabledForeground: colors.gray[6], // Overall foreground for disabled elements.
    "widget.border": colors.gray[6], // Border color of widgets such as Find/Replace inside the editor.
    "widget.shadow": colors.gray[8], // Shadow color of widgets such as Find/Replace inside the editor.
    "selection.background": colors.gray[7], // Background color of text selections in the workbench.
    "icon.foreground": colors.gray[4], // The default color for icons in the workbench.
    "sash.hoverBorder": colors.gray[4], // The hover border color for draggable sashes.

    // Editor colors
    "editor.background": colors.gray[9], // Editor background color.
    "editor.foreground": colors.gray[4], // Editor default foreground color.
    "editorLineNumber.foreground": colors.gray[6], // Color of editor line numbers.
    "editorLineNumber.activeForeground": colors.gray[5], // Color of the active editor line number.
    "editorLineNumber.dimmedForeground": colors.gray[5], // Color of the final editor line when editor.renderFinalNewline is set to dimmed.
    "editorCursor.background": colors.gray[4], // The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
    "editorCursor.foreground": colors.accent, // Color of the editor cursor.

    // Window border
    "window.activeBorder": colors.gray[6], // Border color for the active (focused) window.
    "window.inactiveBorder": transparency.lowTransparency(colors.gray[6]), // Border color for the inactive (unfocused) windows.

    // Text colors
    "textBlockQuote.background": colors.gray[8],
    "textBlockQuote.border": colors.gray[7],
    "textCodeBlock.background": colors.gray[8],
    "textLink.activeForeground": colors.accent,
    "textLink.foreground": colors.gray[3],
    "textPreformat.foreground": colors.gray[4],
    "textSeparator.foreground": colors.gray[8],

    // Action colors
    "toolbar.hoverBackground": colors.gray[7],
    "toolbar.hoverOutline": colors.gray[3],
    "toolbar.activeBackground": colors.gray[7],

    // Button control
    "button.background": colors.gray[8],
    "button.foreground": colors.gray[3],
    "button.border": colors.gray[6],
    "button.separator": colors.gray[10],
    "button.hoverBackground": colors.gray[8],
    "button.secondaryForeground": colors.gray[5],
    "button.secondaryBackground": colors.gray[8],
    "button.secondaryHoverBackground": colors.gray[7],
    "checkbox.background": colors.gray[8],
    "checkbox.foreground": colors.gray[3],
    "checkbox.border": colors.gray[7],
    "checkbox.selectBackground": colors.gray[7],
    "checkbox.selectBorder": colors.gray[7],

    // Dropdown control
    "dropdown.background": colors.gray[8],
    "dropdown.listBackground": colors.gray[7],
    "dropdown.border": colors.gray[7],
    "dropdown.foreground": colors.gray[3],
    // Input control
    "input.background": colors.gray[8],
    "input.border": colors.gray[7],
    "input.foreground": colors.gray[3],
    "input.placeholderForeground": colors.gray[5],
    "inputOption.activeBackground": colors.gray[7],
    "inputOption.activeBorder": colors.gray[7],
    "inputOption.activeForeground": colors.gray[3],
    "inputOption.hoverBackground": colors.gray[8],
    "inputValidation.errorBackground": colors.gray[7],
    "inputValidation.errorForeground": colors.gray[3],
    "inputValidation.errorBorder": colors.red[5],
    "inputValidation.infoBackground": colors.gray[7],
    "inputValidation.infoForeground": colors.gray[3],
    "inputValidation.infoBorder": colors.lime[4],
    "inputValidation.warningBackground": colors.gray[7],
    "inputValidation.warningForeground": colors.gray[3],
    "inputValidation.warningBorder": colors.amber[3],

    // Scrollbar control
    "scrollbar.shadow": colors.gray[8],
    "scrollbarSlider.activeBackground": transparency.lowTransparency(
      colors.gray[7]
    ),
    "scrollbarSlider.background": transparency.lowTransparency(colors.gray[7]),
    "scrollbarSlider.hoverBackground": transparency.lowTransparency(
      colors.gray[6]
    ),

    // Badge
    "badge.foreground": colors.gray[3],
    "badge.background": colors.gray[7],

    // Progress bar
    "progressBar.background": colors.accent,

    // Lists and trees
    "list.activeSelectionBackground": colors.gray[7],
    "list.activeSelectionForeground": colors.gray[3],
    "list.activeSelectionIconForeground": colors.gray[3],
    "list.dropBackground": colors.gray[7],
    "list.focusBackground": colors.gray[7],
    "list.focusForeground": colors.gray[3],
    "list.focusHighlightForeground": colors.gray[3],
    "list.focusOutline": colors.gray[4],
    "list.focusAndSelectionOutline": colors.gray[4],
    "list.highlightForeground": colors.gray[3],
    "list.hoverBackground": colors.gray[7],
    "list.hoverForeground": colors.gray[3],
    "list.inactiveSelectionBackground": colors.gray[7],
    "list.inactiveSelectionForeground": colors.gray[3],
    "list.inactiveSelectionIconForeground": colors.gray[3],
    "list.inactiveFocusBackground": transparency.semiClearTransparency(
      colors.accent
    ),
    "list.inactiveFocusOutline": transparency.lowTransparency(colors.gray[7]),
    "list.invalidItemForeground": colors.red[5],
    "list.errorForeground": colors.red[5],
    "list.warningForeground": colors.amber[3],
    "listFilterWidget.background": colors.gray[8],
    "listFilterWidget.outline": colors.gray[7],
    "listFilterWidget.noMatchesOutline": colors.red[5],
    "listFilterWidget.shadow": colors.gray[8],
    "list.filterMatchBackground": colors.gray[7],
    "list.filterMatchBorder": colors.gray[7],
    "list.deemphasizedForeground": colors.gray[5],
    "tree.indentGuidesStroke": colors.gray[7],
    "tree.inactiveIndentGuidesStroke": colors.gray[7],
    "tree.tableColumnsBorder": colors.gray[7],
    "tree.tableOddRowsBackground": colors.gray[7],

    // Activity Bar
    "activityBar.background": colors.gray[7],
    "activityBar.dropBorder": colors.accent,
    "activityBar.foreground": colors.gray[3],
    "activityBar.inactiveForeground": colors.gray[5],
    "activityBar.border": colors.gray[7],
    "activityBarBadge.background": transparency.lowTransparency(colors.accent),
    "activityBarBadge.foreground": colors.gray[3],
    "activityBar.activeBorder": colors.accent,
    "activityBar.activeBackground": colors.gray[6],
    "activityBar.activeFocusBorder": colors.gray[6],

    // Profiles
    "profileBadge.background": colors.accent,
    "profileBadge.foreground": colors.gray[3],

    // Side Bar
    "sideBar.background": colors.gray[8],
    "sideBar.foreground": colors.gray[4],
    "sideBar.border": colors.gray[7],
    "sideBar.dropBackground": colors.gray[7],
    "sideBarTitle.foreground": colors.gray[3],
    "sideBarSectionHeader.background": colors.gray[7],
    "sideBarSectionHeader.foreground": colors.gray[3],
    "sideBarSectionHeader.border": colors.gray[7],

    // Minimap
    "minimap.findMatchHighlight": colors.accent,
    "minimap.selectionHighlight": colors.gray[8],
    "minimap.errorHighlight": colors.red[5],
    "minimap.warningHighlight": colors.amber[3],
    "minimap.background": colors.gray[8],
    "minimap.selectionOccurrenceHighlight": colors.accent,
    "minimap.foregroundOpacity": "#000000c0",
    "minimapSlider.background": transparency.halfwayTransparency(
      colors.gray[8]
    ),
    "minimapSlider.hoverBackground": transparency.halfwayTransparency(
      colors.gray[7]
    ),
    "minimapSlider.activeBackground": transparency.semiClearTransparency(
      colors.gray[7]
    ),
    "minimapGutter.addedBackground": transparency.halfwayTransparency(
      colors.lime[4]
    ),
    "minimapGutter.modifiedBackground": transparency.halfwayTransparency(
      colors.amber[3]
    ),
    "minimapGutter.deletedBackground": transparency.halfwayTransparency(
      colors.red[5]
    ),

    // Editor Groups & Tabs
    "editorGroup.border": colors.gray[7],
    "editorGroup.dropBackground": colors.gray[7],
    "editorGroupHeader.noTabsBackground": colors.gray[7],
    "editorGroupHeader.tabsBackground": colors.gray[7],
    "editorGroupHeader.tabsBorder": colors.gray[7],
    "editorGroupHeader.border": colors.gray[7],
    "editorGroup.emptyBackground": colors.gray[7],
    "editorGroup.focusedEmptyBorder": colors.gray[4],
    "editorGroup.dropIntoPromptForeground": colors.gray[7],
    "editorGroup.dropIntoPromptBackground": colors.gray[7],
    "editorGroup.dropIntoPromptBorder": colors.gray[7],
    "tab.activeBackground": colors.gray[6],
    "tab.unfocusedActiveBackground": colors.gray[6],
    "tab.activeForeground": colors.gray[3],
    "tab.border": colors.gray[6],
    "tab.activeBorder": colors.gray[6],
    "tab.unfocusedActiveBorder": colors.gray[6],
    "tab.activeBorderTop": colors.accent,
    "tab.unfocusedActiveBorderTop": colors.accent,
    "tab.lastPinnedBorder": colors.gray[6],
    "tab.inactiveBackground": colors.gray[7],
    "tab.unfocusedInactiveBackground": colors.gray[7],
    "tab.inactiveForeground": colors.gray[5],
    "tab.unfocusedActiveForeground": colors.gray[3],
    "tab.unfocusedInactiveForeground": colors.gray[5],
    "tab.hoverBackground": colors.gray[6],
    "tab.unfocusedHoverBackground": colors.gray[6],
    "tab.hoverForeground": colors.gray[3],
    "tab.unfocusedHoverForeground": colors.gray[3],
    "tab.hoverBorder": colors.gray[6],
    "tab.unfocusedHoverBorder": colors.gray[6],
    "tab.activeModifiedBorder": colors.accent,
    "tab.inactiveModifiedBorder": colors.accent,
    "tab.unfocusedActiveModifiedBorder": colors.accent,
    "tab.unfocusedInactiveModifiedBorder": colors.accent,
    "editorPane.background": colors.gray[8],
    "sideBySideEditor.horizontalBorder": colors.gray[7],
    "sideBySideEditor.verticalBorder": colors.gray[7],

    // Selection colors
    "editor.selectionBackground": transparency.lowTransparency(colors.gray[7]), // Color of the editor selection.
    "editor.selectionForeground": colors.gray[3], // Color of the selected text for high contrast.
    "editor.inactiveSelectionBackground": transparency.lowTransparency(
      colors.gray[7]
    ), // Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
    "editor.selectionHighlightBackground": transparency.lowTransparency(
      colors.accent
    ), // Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
    "editor.selectionHighlightBorder": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Border color for regions with the same content as the selection.

    // Word highlight colors
    "editor.wordHighlightBackground": transparency.semiClearTransparency(
      colors.gray[7]
    ), // Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
    "editor.wordHighlightBorder": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Border color of a symbol during read-access, for example when reading a variable.
    "editor.wordHighlightStrongBackground": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
    "editor.wordHighlightStrongBorder": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Border color of a symbol during write-access, for example when writing to a variable.
    "editor.wordHighlightTextBackground": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
    "editor.wordHighlightTextBorder": transparency.semiClearTransparency(
      colors.gray[7]
    ), // Border color of a textual occurrence for a symbol.

    // Find colors
    "editor.findMatchBackground": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Color of the current search match.
    "editor.findMatchHighlightBackground": transparency.semiClearTransparency(
      colors.gray[7]
    ), // Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
    "editor.findRangeHighlightBackground": colors.gray[7], // Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.
    "editor.findMatchBorder": transparency.halfwayTransparency(colors.gray[7]), // Border color of the current search match.
    "editor.findMatchHighlightBorder": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Border color of the other search matches.
    "editor.findRangeHighlightBorder": colors.gray[7], // Border color the range limiting the search (Enable 'Find in Selection' in the find widget).

    // Search Results
    "search.resultsInfoForeground": colors.gray[5], // Color of the text in the search viewlet's completion message. For example, this color is used in the text

    // Search Editor Matches
    "searchEditor.findMatchBackground": colors.accent, // Color of the editor's results.
    "searchEditor.findMatchBorder": colors.gray[7], // Border color of the editor's results.
    "searchEditor.textInputBorder": colors.gray[7], // Search editor text input box border.

    // Hover Highlight
    "editor.hoverHighlightBackground": transparency.lowTransparency(
      colors.gray[7]
    ), // Highlight below the word for which a hover is shown.

    // Line Highlight
    "editor.lineHighlightBackground": transparency.semiClearTransparency(
      colors.gray[7]
    ), // Background color for the highlight of line at the cursor position.
    "editor.lineHighlightBorder": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Background color for the border around the line at the cursor position.

    // Unicode Highlight
    "editorUnicodeHighlight.border": colors.accent, // Border color used to highlight unicode characters.
    "editorUnicodeHighlight.background": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Background color used to highlight unicode characters.

    // Link
    "editorLink.activeForeground": colors.gray[4], // Color of active links.

    // Range Highlight
    "editor.rangeHighlightBackground": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features.
    "editor.rangeHighlightBorder": colors.accent, // Background color of the border around highlighted ranges.

    // Symbol Highlight
    "editor.symbolHighlightBackground": colors.accent, // Background color of highlighted symbol.
    "editor.symbolHighlightBorder": colors.gray[7], // Background color of the border around highlighted symbols.

    // Editor Whitespaces
    "editorWhitespace.foreground": colors.gray[7], // Color of whitespace characters in the editor.

    // Editor Indent Guides
    "editorIndentGuide.background": colors.gray[7], // Color of the editor indentation guides.
    "editorIndentGuide.activeBackground": colors.accent, // Color of the active editor indentation guide.

    // Editor Inline Hints
    "editorInlayHint.background": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Background color of inline hints.
    "editorInlayHint.foreground": colors.gray[5], // Foreground color of inline hints.
    "editorInlayHint.typeForeground": colors.gray[5], // Foreground color of inline hints for types
    "editorInlayHint.typeBackground": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Background color of inline hints for types
    "editorInlayHint.parameterForeground": colors.gray[5], // Foreground color of inline hints for parameters
    "editorInlayHint.parameterBackground": transparency.halfwayTransparency(
      colors.gray[7]
    ), // Background color of inline hints for parameters

    // Editor Rulers
    "editorRuler.foreground": colors.gray[7], // Color of the editor rulers.

    // Linked Editing Mode
    "editor.linkedEditingBackground": colors.gray[8], // Background color when the editor is in linked editing mode.

    // CodeLens
    "editorCodeLens.foreground": colors.gray[6], // Foreground color of an editor CodeLens.

    // Lightbulb
    "editorLightBulb.foreground": colors.gray[7], // The color used for the lightbulb actions icon.
    "editorLightBulbAutoFix.foreground": colors.gray[7], // The color used for the lightbulb auto fix actions icon.

    // Bracket matches
    "editorBracketMatch.background": transparency.semiClearTransparency(
      colors.accent
    ),
    "editorBracketMatch.border": transparency.halfwayTransparency(
      colors.lime[3]
    ),

    // Bracket pair colorization
    "editorBracketHighlight.foreground1": colors.blue[2],
    "editorBracketHighlight.foreground2": colors.lime[2],
    "editorBracketHighlight.foreground3": colors.cyan[2],
    "editorBracketHighlight.foreground4": colors.red[2],
    "editorBracketHighlight.foreground5": colors.blue[2],
    "editorBracketHighlight.foreground6": colors.cyan[2],
    "editorBracketHighlight.unexpectedBracket.foreground":
      transparency.halfwayTransparency(colors.amber[3]),

    // Bracket pair guides
    "editorBracketPairGuide.activeBackground1": colors.blue[2],
    "editorBracketPairGuide.activeBackground2": colors.lime[2],
    "editorBracketPairGuide.activeBackground3": colors.cyan[2],
    "editorBracketPairGuide.activeBackground4": colors.red[2],
    "editorBracketPairGuide.activeBackground5": colors.blue[2],
    "editorBracketPairGuide.activeBackground6": colors.cyan[2],
    "editorBracketPairGuide.background1": colors.blue[2],
    "editorBracketPairGuide.background2": colors.lime[2],
    "editorBracketPairGuide.background3": colors.cyan[2],
    "editorBracketPairGuide.background4": colors.red[2],
    "editorBracketPairGuide.background5": colors.blue[2],
    "editorBracketPairGuide.background6": colors.cyan[2],

    // Folding
    "editor.foldBackground": transparency.semiClearTransparency(colors.gray[8]),

    // Overview ruler
    "editorOverviewRuler.background": colors.gray[8],
    "editorOverviewRuler.border": colors.gray[7],
    "editorOverviewRuler.findMatchForeground": "#fe420d66",
    "editorOverviewRuler.rangeHighlightForeground": "#fe420d66",
    "editorOverviewRuler.selectionHighlightForeground": "#cbd5e066",
    "editorOverviewRuler.wordHighlightForeground": "#fe420d66",
    "editorOverviewRuler.wordHighlightStrongForeground": "#48BB7866",
    "editorOverviewRuler.wordHighlightTextForeground": "#3c485666",
    "editorOverviewRuler.modifiedForeground": transparency.halfwayTransparency(
      colors.amber[4]
    ),
    "editorOverviewRuler.addedForeground": transparency.halfwayTransparency(
      colors.lime[4]
    ),
    "editorOverviewRuler.deletedForeground": transparency.halfwayTransparency(
      colors.red[5]
    ),
    "editorOverviewRuler.errorForeground": transparency.halfwayTransparency(
      colors.red[5]
    ),
    "editorOverviewRuler.warningForeground": transparency.halfwayTransparency(
      colors.orange[3]
    ),
    "editorOverviewRuler.infoForeground": transparency.halfwayTransparency(
      colors.gray[7]
    ),
    "editorOverviewRuler.bracketMatchForeground":
      transparency.halfwayTransparency(colors.accent),

    // Errors and warnings

    "editorError.border": transparency.halfwayTransparency(colors.red[5]),
    "editorError.background": transparency.semiClearTransparency(colors.red[5]),
    "editorWarning.border": transparency.halfwayTransparency(colors.amber[3]),
    "editorWarning.background": transparency.semiClearTransparency(
      colors.amber[3]
    ),
    "editorInfo.border": transparency.halfwayTransparency(colors.lime[4]),
    "editorInfo.background": transparency.semiClearTransparency(colors.lime[4]),
    "editorHint.foreground": colors.gray[3],
    "editorHint.border": colors.gray[4],
    // Colors for problems
    "problemsErrorIcon.foreground": colors.red[5],
    "problemsWarningIcon.foreground": colors.amber[3],
    "problemsInfoIcon.foreground": colors.lime[4],

    // Colors for unused source code
    "editorUnnecessaryCode.border": colors.gray[7], // underline unnecessary code instead of fading it out.
    "editorUnnecessaryCode.opacity": transparency.moderateTransparency(
      colors.gray[7]
    ), // ender the code with 75% opacity.

    // Colors for gutter
    "editorGutter.background": colors.gray[9],
    "editorGutter.modifiedBackground": transparency.halfwayTransparency(
      colors.amber[3]
    ),
    "editorGutter.addedBackground": transparency.halfwayTransparency(
      colors.lime[4]
    ),
    "editorGutter.deletedBackground": transparency.halfwayTransparency(
      colors.red[5]
    ),
    "editorGutter.commentRangeForeground": colors.gray[7],
    "editorGutter.commentGlyphForeground": colors.gray[7],
    "editorGutter.commentUnresolvedGlyphForeground":
      transparency.halfwayTransparency(colors.amber[3]),
    "editorGutter.foldingControlForeground": colors.gray[3],

    // Colors for editor comments widget
    "editorCommentsWidget.resolvedBorder": colors.lime[4],
    "editorCommentsWidget.unresolvedBorder": colors.amber[3],
    "editorCommentsWidget.rangeBackground": colors.gray[7],
    "editorCommentsWidget.rangeBorder": colors.gray[7],
    "editorCommentsWidget.rangeActiveBackground": colors.gray[7],
    "editorCommentsWidget.rangeActiveBorder": colors.gray[7],

    // Colors for diff editor
    "diffEditor.insertedTextBackground": transparency.semiClearTransparency(
      colors.lime[3]
    ),
    "diffEditor.insertedTextBorder": colors.lime[4],
    "diffEditor.removedTextBackground": transparency.semiClearTransparency(
      colors.red[3]
    ),
    "diffEditor.removedTextBorder": colors.red[5],
    "diffEditor.border": colors.gray[7],
    "diffEditor.diagonalFill": colors.gray[7],
    "diffEditor.insertedLineBackground": transparency.semiClearTransparency(
      colors.lime[5]
    ),
    "diffEditor.removedLineBackground": transparency.semiClearTransparency(
      colors.red[5]
    ),
    "diffEditorGutter.insertedLineBackground": transparency.lowTransparency(
      colors.lime[4]
    ),
    "diffEditorGutter.removedLineBackground": transparency.lowTransparency(
      colors.red[5]
    ),
    "diffEditorOverview.insertedForeground": colors.lime[4],
    "diffEditorOverview.removedForeground": colors.red[5],

    // Editor widget colors
    "editorWidget.foreground": colors.gray[5],
    "editorWidget.background": colors.gray[7],
    "editorWidget.border": colors.gray[7],
    "editorWidget.resizeBorder": colors.gray[7],
    "editorSuggestWidget.background": colors.gray[7],
    "editorSuggestWidget.border": colors.gray[7],
    "editorSuggestWidget.foreground": colors.gray[5],
    "editorSuggestWidget.focusHighlightForeground": colors.gray[3],
    "editorSuggestWidget.highlightForeground": colors.gray[3],
    "editorSuggestWidget.selectedBackground": colors.gray[7],
    "editorSuggestWidget.selectedForeground": colors.gray[3],
    "editorSuggestWidget.selectedIconForeground": colors.gray[3],
    "editorSuggestWidgetStatus.foreground": colors.gray[3],
    "editorHoverWidget.foreground": colors.gray[5],
    "editorHoverWidget.background": colors.gray[8],
    "editorHoverWidget.border": colors.gray[7],
    "editorHoverWidget.highlightForeground": colors.gray[3],
    "editorHoverWidget.statusBarBackground": colors.gray[8],
    "editorGhostText.border": transparency.lowTransparency(colors.gray[7]),
    "editorGhostText.background": transparency.lowTransparency(colors.gray[7]),
    "editorGhostText.foreground": colors.gray[6],
    "editorStickyScroll.background": colors.gray[8],
    "editorStickyScrollHover.background": colors.gray[7],

    // Debug Exception widget colors
    "debugExceptionWidget.background": colors.gray[8],
    "debugExceptionWidget.border": colors.gray[7],

    // Editor marker view colors
    "editorMarkerNavigation.background": colors.gray[8],
    "editorMarkerNavigationError.background": colors.red[5],
    "editorMarkerNavigationWarning.background": colors.amber[3],
    "editorMarkerNavigationInfo.background": colors.lime[4],
    "editorMarkerNavigationError.headerBackground": colors.red[5],
    "editorMarkerNavigationWarning.headerBackground": colors.amber[3],
    "editorMarkerNavigationInfo.headerBackground": colors.lime[4],

    // Peek view colors
    "peekView.border": colors.gray[7],
    "peekViewEditor.background": colors.gray[8],
    "peekViewEditorGutter.background": colors.gray[8],
    "peekViewEditor.matchHighlightBackground": transparency.halfwayTransparency(
      colors.gray[7]
    ),
    "peekViewEditor.matchHighlightBorder": transparency.lowTransparency(
      colors.accent
    ),
    "peekViewEditorStickyScroll.background": colors.gray[8],
    "peekViewResult.background": colors.gray[8],
    "peekViewResult.fileForeground": colors.gray[3],
    "peekViewResult.lineForeground": colors.gray[5],
    "peekViewResult.matchHighlightBackground": transparency.halfwayTransparency(
      colors.gray[7]
    ),
    "peekViewResult.selectionBackground": colors.gray[7],
    "peekViewResult.selectionForeground": colors.gray[3],
    "peekViewTitle.background": colors.gray[7],
    "peekViewTitleDescription.foreground": colors.gray[5],
    "peekViewTitleLabel.foreground": colors.gray[3],

    // Merge conflicts colors
    "merge.currentHeaderBackground": colors.accent, // Current header background in inline merge conflicts.
    "merge.currentContentBackground": transparency.halfwayTransparency(
      colors.accent
    ), // Current content background in inline merge conflicts.
    "merge.incomingHeaderBackground": colors.lime[4], // Incoming header background in inline merge conflicts.
    "merge.incomingContentBackground": "#48BB781a", // Incoming content background in inline merge conflicts.
    "merge.border": colors.gray[7], // Border color on headers and the splitter in inline merge conflicts.
    "merge.commonContentBackground": colors.gray[7], // Common ancestor content background in inline merge-conflicts.
    "merge.commonHeaderBackground": colors.gray[7], // Common ancestor header background in inline merge-conflicts.
    "editorOverviewRuler.currentContentForeground": colors.accent, // Current overview ruler foreground for inline merge conflicts.
    "editorOverviewRuler.incomingContentForeground": colors.lime[4], // Incoming overview ruler foreground for inline merge conflicts.
    "editorOverviewRuler.commonContentForeground": colors.gray[7], // Common ancestor overview ruler foreground for inline merge conflicts.
    "mergeEditor.change.background": transparency.halfwayTransparency(
      colors.accent
    ), // The background color for changes.
    "mergeEditor.change.word.background": transparency.semiClearTransparency(
      colors.accent
    ), // The background color for word changes.
    "mergeEditor.conflict.unhandledUnfocused.border": colors.amber[3], // The border color of unhandled unfocused conflicts.
    "mergeEditor.conflict.unhandledFocused.border": colors.amber[3], // The border color of unhandled focused conflicts.
    "mergeEditor.conflict.handledUnfocused.border": colors.amber[3], // The border color of handled unfocused conflicts.
    "mergeEditor.conflict.handledFocused.border": colors.amber[3], // The border color of handled focused conflicts.
    "mergeEditor.conflict.handled.minimapOverViewRuler": colors.accent, // The foreground color for changes in input 1.
    "mergeEditor.conflict.unhandled.minimapOverViewRuler": colors.accent, // The foreground color for changes in input 1.
    "mergeEditor.conflictingLines.background": colors.amber[3], // The background of the "Conflicting Lines" text.
    "mergeEditor.changeBase.background": colors.gray[7], // The background color for changes in base.
    "mergeEditor.changeBase.word.background": "#3c485633", // The background color for word changes in base.
    "mergeEditor.conflict.input1.background":
      transparency.semiClearTransparency(colors.accent), // The background color of decorations in input 1.
    "mergeEditor.conflict.input2.background": "#48BB7833", // The background color of decorations in input 2.

    // Panel colors
    "panel.background": colors.gray[8],
    "panel.border": colors.gray[7],
    "panel.dropBorder": colors.gray[7],
    "panelTitle.activeBorder": colors.gray[7],
    "panelTitle.activeForeground": colors.gray[3],
    "panelTitle.inactiveForeground": colors.gray[5],
    "panelInput.border": colors.gray[7],
    "panelSection.border": colors.gray[7],
    "panelSection.dropBackground": colors.gray[7],
    "panelSectionHeader.background": colors.gray[7],
    "panelSectionHeader.foreground": colors.gray[3],
    "panelSectionHeader.border": colors.gray[7],

    // Status Bar colors
    "statusBar.background": colors.gray[7],
    "statusBar.foreground": colors.gray[5],
    "statusBar.border": colors.gray[7],
    "statusBar.debuggingBackground": transparency.lowTransparency(
      colors.amber[5]
    ),
    "statusBar.debuggingForeground": colors.gray[3],
    "statusBar.debuggingBorder": colors.gray[7],
    "statusBar.noFolderForeground": colors.gray[5],
    "statusBar.noFolderBackground": colors.gray[8],
    "statusBar.noFolderBorder": colors.gray[7],
    "statusBarItem.activeBackground": colors.gray[6],
    "statusBarItem.hoverBackground": colors.gray[6],
    "statusBarItem.prominentForeground": colors.accent,
    "statusBarItem.prominentBackground": colors.gray[7],
    "statusBarItem.prominentHoverBackground":
      transparency.semiClearTransparency(colors.accent),
    "statusBarItem.remoteBackground": colors.gray[8],
    "statusBarItem.remoteForeground": colors.gray[5],
    "statusBarItem.errorBackground": colors.red[5],
    "statusBarItem.errorForeground": colors.gray[5],
    "statusBarItem.warningBackground": colors.amber[3],
    "statusBarItem.warningForeground": colors.gray[5],
    "statusBarItem.compactHoverBackground": transparency.semiClearTransparency(
      colors.accent
    ),
    "statusBarItem.focusBorder": colors.gray[5],
    "statusBar.focusBorder": colors.gray[6],

    // Title Bar colors
    "titleBar.activeBackground": colors.gray[7],
    "titleBar.activeForeground": colors.gray[3],
    "titleBar.inactiveBackground": colors.gray[7],
    "titleBar.inactiveForeground": colors.gray[5],
    "titleBar.border": colors.gray[7],

    // Menu Bar colors
    "menubar.selectionForeground": colors.gray[3],
    "menubar.selectionBackground": colors.accent,
    "menubar.selectionBorder": colors.accent,
    "menu.foreground": colors.gray[3],
    "menu.background": colors.gray[8],
    "menu.selectionForeground": colors.gray[3],
    "menu.selectionBackground": colors.accent,
    "menu.selectionBorder": colors.accent,
    "menu.separatorBackground": colors.gray[7],
    "menu.border": colors.gray[7],

    // Command Center colors
    "commandCenter.foreground": colors.gray[3],
    "commandCenter.activeForeground": colors.accent,
    "commandCenter.background": colors.gray[8],
    "commandCenter.activeBackground": colors.gray[7],
    "commandCenter.border": colors.gray[5],
    "commandCenter.inactiveForeground": colors.gray[3],
    "commandCenter.inactiveBorder": colors.gray[5],
    "commandCenter.activeBorder": colors.gray[3],

    // Notification colors
    "notificationCenter.border": colors.gray[7],
    "notificationCenterHeader.foreground": colors.gray[3],
    "notificationCenterHeader.background": colors.gray[7],
    "notificationToast.border": colors.gray[6],
    "notifications.foreground": colors.gray[5],
    "notifications.background": colors.gray[8],
    "notifications.border": colors.gray[7],
    "notificationLink.foreground": colors.gray[4],
    "notificationsErrorIcon.foreground": colors.red[5],
    "notificationsWarningIcon.foreground": colors.amber[3],
    "notificationsInfoIcon.foreground": colors.gray[3],

    // Banner colors
    "banner.background": colors.gray[7],
    "banner.foreground": colors.gray[3],
    "banner.iconForeground": colors.gray[3],

    // Extension colors
    "extensionButton.prominentForeground": colors.gray[3],
    "extensionButton.prominentBackground": colors.gray[7],
    "extensionButton.prominentHoverBackground": colors.gray[7],
    "extensionButton.background": colors.gray[7],
    "extensionButton.foreground": colors.gray[3],
    "extensionButton.hoverBackground": colors.gray[7],
    "extensionButton.separator": colors.gray[7],
    "extensionBadge.remoteBackground": colors.gray[7],
    "extensionBadge.remoteForeground": colors.gray[5],
    "extensionIcon.starForeground": colors.gray[5],
    "extensionIcon.verifiedForeground": colors.lime[4],
    "extensionIcon.preReleaseForeground": colors.gray[3],
    "extensionIcon.sponsorForeground": colors.gray[5],

    // Quick picker colors
    "pickerGroup.border": colors.gray[7],
    "pickerGroup.foreground": colors.gray[5],
    "quickInput.background": colors.gray[8],
    "quickInput.foreground": colors.gray[5],
    "quickInputList.focusBackground": colors.gray[7],
    "quickInputList.focusForeground": colors.gray[3],
    "quickInputList.focusIconForeground": colors.gray[3],
    "quickInputTitle.background": colors.gray[7],

    // Keybinding label colors
    "keybindingLabel.background": colors.gray[5],
    "keybindingLabel.foreground": colors.gray[10],
    "keybindingLabel.border": colors.gray[3],
    "keybindingLabel.bottomBorder": colors.gray[8],

    // Keyboard shortcut table colors
    "keybindingTable.headerBackground": colors.gray[8],
    "keybindingTable.rowsBackground": colors.gray[8],

    // Integrated Terminal colors
    "terminal.background": colors.gray[8],
    "terminal.border": colors.gray[7],
    "terminal.foreground": colors.gray[5],
    "terminal.ansiBlack": colors.gray[11],
    "terminal.ansiBlue": colors.blue[4],
    "terminal.ansiBrightBlack": colors.gray[8],
    "terminal.ansiBrightBlue": colors.blue[7],
    "terminal.ansiBrightCyan": colors.cyan[7],
    "terminal.ansiBrightGreen": colors.lime[7],
    "terminal.ansiBrightMagenta": colors.orange[7],
    "terminal.ansiBrightRed": colors.red[7],
    "terminal.ansiBrightWhite": colors.gray[5],
    "terminal.ansiBrightYellow": colors.amber[7],
    "terminal.ansiCyan": colors.cyan[4],
    "terminal.ansiGreen": colors.lime[4],
    "terminal.ansiMagenta": colors.orange[4],
    "terminal.ansiRed": colors.red[4],
    "terminal.ansiWhite": colors.gray[2],
    "terminal.ansiYellow": colors.amber[4],
    "terminal.selectionBackground": colors.gray[7],
    "terminal.selectionForeground": colors.gray[5],
    "terminal.inactiveSelectionBackground": colors.gray[7],
    "terminal.findMatchBackground": transparency.halfwayTransparency(
      colors.accent
    ),
    "terminal.findMatchBorder": colors.accent,
    "terminal.findMatchHighlightBackground": transparency.semiClearTransparency(
      colors.accent
    ),
    "terminal.findMatchHighlightBorder": transparency.halfwayTransparency(
      colors.accent
    ),
    "terminal.hoverHighlightBackground": transparency.halfwayTransparency(
      colors.accent
    ),
    "terminalCursor.background": colors.accent,
    "terminalCursor.foreground": colors.gray[7],
    "terminal.dropBackground": transparency.semiClearTransparency(
      colors.accent
    ),
    "terminal.tab.activeBorder": colors.accent,
    "terminalCommandDecoration.defaultBackground": colors.accent,
    "terminalCommandDecoration.successBackground": colors.lime[4],
    "terminalCommandDecoration.errorBackground": colors.red[5],
    "terminalOverviewRuler.cursorForeground": colors.accent,
    "terminalOverviewRuler.findMatchForeground": colors.accent,

    // Debug colors
    "debugToolBar.background": colors.gray[7],
    "debugToolBar.border": colors.gray[6],
    "editor.stackFrameHighlightBackground": transparency.halfwayTransparency(
      colors.amber[3]
    ),
    "editor.focusedStackFrameHighlightBackground":
      transparency.halfwayTransparency(colors.lime[4]),
    "editor.inlineValuesForeground": colors.accent,
    "editor.inlineValuesBackground": transparency.halfwayTransparency(
      colors.accent
    ),
    "debugView.exceptionLabelForeground": colors.red[5],
    "debugView.exceptionLabelBackground": transparency.halfwayTransparency(
      colors.accent
    ),
    "debugView.stateLabelForeground": colors.gray[7],
    "debugView.stateLabelBackground": transparency.halfwayTransparency(
      colors.accent
    ),
    "debugView.valueChangedHighlight": colors.lime[4],
    "debugTokenExpression.name": colors.blue[2],
    "debugTokenExpression.value": colors.blue[1],
    "debugTokenExpression.string": colors.blue[1],
    "debugTokenExpression.boolean": colors.lime[2],
    "debugTokenExpression.number": colors.lime[2],
    "debugTokenExpression.error": colors.red[2],

    // Testing colors
    "testing.iconFailed": colors.red[5],
    "testing.iconErrored": colors.red[5],
    "testing.iconPassed": colors.lime[4],
    "testing.runAction": colors.accent,
    "testing.iconQueued": colors.amber[3],
    "testing.iconUnset": colors.gray[7],
    "testing.iconSkipped": colors.amber[3],
    "testing.peekBorder": colors.accent,
    "testing.peekHeaderBackground": colors.gray[8],
    "testing.message.error.decorationForeground": colors.red[5],
    "testing.message.error.lineBackground": colors.gray[8],
    "testing.message.info.decorationForeground": colors.gray[7],
    "testing.message.info.lineBackground": colors.gray[8],

    // Welcome page colors
    "welcomePage.background": colors.gray[8],
    "welcomePage.progress.background": colors.gray[7],
    "welcomePage.progress.foreground": colors.accent,
    "welcomePage.tileBackground": colors.gray[7],
    "welcomePage.tileHoverBackground": colors.gray[7],
    "welcomePage.tileBorder": colors.gray[7],

    // Walkthrough colors
    "walkThrough.embeddedEditorBackground": colors.gray[7],
    "walkthrough.stepTitle.foreground": colors.accent,

    // Source Control colors
    "scm.providerBorder": colors.gray[7],

    // Git colors
    "gitDecoration.addedResourceForeground": colors.lime[4],
    "gitDecoration.modifiedResourceForeground": colors.amber[3],
    "gitDecoration.deletedResourceForeground": colors.red[5],
    "gitDecoration.renamedResourceForeground": colors.amber[3],
    "gitDecoration.stageModifiedResourceForeground": colors.amber[4],
    "gitDecoration.stageDeletedResourceForeground": colors.red[6],
    "gitDecoration.untrackedResourceForeground": colors.gray[5],
    "gitDecoration.ignoredResourceForeground": colors.gray[6],
    "gitDecoration.conflictingResourceForeground": colors.amber[3],
    "gitDecoration.submoduleResourceForeground": colors.gray[6],

    // Settings Editor colors
    "settings.headerForeground": colors.gray[4],
    "settings.modifiedItemIndicator": transparency.halfwayTransparency(
      colors.amber[3]
    ),
    "settings.dropdownBackground": colors.gray[8],
    "settings.dropdownForeground": colors.gray[5],
    "settings.dropdownBorder": colors.gray[7],
    "settings.dropdownListBorder": colors.gray[7],
    "settings.checkboxBackground": colors.gray[8],
    "settings.checkboxForeground": colors.gray[5],
    "settings.checkboxBorder": colors.gray[7],
    "settings.rowHoverBackground": colors.gray[7],
    "settings.textInputBackground": colors.gray[8],
    "settings.textInputForeground": colors.gray[5],
    "settings.textInputBorder": colors.gray[7],
    "settings.numberInputBackground": colors.gray[8],
    "settings.numberInputForeground": colors.gray[5],
    "settings.numberInputBorder": colors.gray[7],
    "settings.focusedRowBackground": colors.gray[7],
    "settings.focusedRowBorder": colors.accent,
    "settings.headerBorder": colors.gray[7],
    "settings.sashBorder": colors.gray[7],
    "settings.settingsHeaderHoverForeground": colors.accent,

    // Breadcrumbs colors
    "breadcrumb.foreground": colors.gray[5],
    "breadcrumb.background": colors.gray[8],
    "breadcrumb.focusForeground": colors.gray[3],
    "breadcrumb.activeSelectionForeground": colors.gray[3],
    "breadcrumbPicker.background": colors.gray[7],

    // Snippets colors
    "editor.snippetTabstopHighlightBackground": colors.gray[7],
    "editor.snippetTabstopHighlightBorder": colors.accent,
    "editor.snippetFinalTabstopHighlightBackground": colors.gray[7],
    "editor.snippetFinalTabstopHighlightBorder": colors.accent,

    // Symbol Icons colors
    "symbolIcon.arrayForeground": colors.orange[3],
    "symbolIcon.booleanForeground": colors.blue[3],
    "symbolIcon.classForeground": colors.orange[3],
    "symbolIcon.colorForeground": colors.blue[2],
    "symbolIcon.constantForeground": colors.lime[3],
    "symbolIcon.constructorForeground": colors.cyan[2],
    "symbolIcon.enumeratorForeground": colors.orange[3],
    "symbolIcon.enumeratorMemberForeground": colors.blue[3],
    "symbolIcon.eventForeground": colors.gray[7],
    "symbolIcon.fieldForeground": colors.orange[3],
    "symbolIcon.fileForeground": colors.amber[4],
    "symbolIcon.folderForeground": colors.amber[4],
    "symbolIcon.functionForeground": colors.cyan[3],
    "symbolIcon.interfaceForeground": colors.orange[3],
    "symbolIcon.keyForeground": colors.blue[3],
    "symbolIcon.keywordForeground": colors.red[3],
    "symbolIcon.methodForeground": colors.cyan[3],
    "symbolIcon.moduleForeground": colors.red[3],
    "symbolIcon.namespaceForeground": colors.red[3],
    "symbolIcon.nullForeground": colors.blue[3],
    "symbolIcon.numberForeground": colors.lime[3],
    "symbolIcon.objectForeground": colors.orange[3],
    "symbolIcon.operatorForeground": colors.blue[2],
    "symbolIcon.packageForeground": colors.orange[3],
    "symbolIcon.propertyForeground": colors.orange[3],
    "symbolIcon.referenceForeground": colors.blue[3],
    "symbolIcon.snippetForeground": colors.blue[3],
    "symbolIcon.stringForeground": colors.blue[2],
    "symbolIcon.structForeground": colors.orange[3],
    "symbolIcon.textForeground": colors.blue[2],
    "symbolIcon.typeParameterForeground": colors.blue[2],
    "symbolIcon.unitForeground": colors.blue[3],
    "symbolIcon.variableForeground": colors.orange[3],

    // Debug Icons colors
    "debugIcon.breakpointForeground": colors.red[5],
    "debugIcon.breakpointDisabledForeground": colors.gray[6],
    "debugIcon.breakpointUnverifiedForeground": colors.gray[6],
    "debugIcon.breakpointCurrentStackframeForeground": colors.lime[4],
    "debugIcon.breakpointStackframeForeground": colors.gray[6],
    "debugIcon.startForeground": colors.lime[4],
    "debugIcon.pauseForeground": colors.amber[3],
    "debugIcon.stopForeground": colors.red[5],
    "debugIcon.disconnectForeground": colors.red[5],
    "debugIcon.restartForeground": colors.orange[4],
    "debugIcon.stepOverForeground": colors.lime[4],
    "debugIcon.stepIntoForeground": colors.amber[3],
    "debugIcon.stepOutForeground": colors.amber[3],
    "debugIcon.continueForeground": colors.lime[4],
    "debugIcon.stepBackForeground": colors.amber[3],
    "debugConsole.infoForeground": colors.gray[3],
    "debugConsole.warningForeground": colors.amber[4],
    "debugConsole.errorForeground": colors.red[2],
    "debugConsole.sourceForeground": colors.amber[3],
    "debugConsoleInputIcon.foreground": colors.cyan[3],

    // Notebook colors
    "notebook.editorBackground": colors.gray[8],
    "notebook.cellBorderColor": colors.gray[7],
    "notebook.cellHoverBackground": colors.gray[8],
    "notebook.cellInsertionIndicator": colors.accent,
    "notebook.cellStatusBarItemHoverBackground": colors.gray[7],
    "notebook.cellToolbarSeparator": colors.gray[7],
    "notebook.cellEditorBackground": colors.gray[8],
    "notebook.focusedCellBackground": colors.gray[8],
    "notebook.focusedCellBorder": colors.gray[4],
    "notebook.focusedEditorBorder": colors.gray[4],
    "notebook.inactiveFocusedCellBorder": colors.gray[7],
    "notebook.inactiveSelectedCellBorder": colors.gray[7],
    "notebook.outputContainerBackgroundColor": colors.gray[8],
    "notebook.outputContainerBorderColor": colors.gray[7],
    "notebook.selectedCellBackground": colors.gray[7],
    "notebook.selectedCellBorder": colors.gray[7],
    "notebook.symbolHighlightBackground": colors.accent,
    "notebookScrollbarSlider.activeBackground": colors.accent,
    "notebookScrollbarSlider.background": colors.gray[7],
    "notebookScrollbarSlider.hoverBackground": colors.gray[7],
    "notebookStatusErrorIcon.foreground": colors.red[5],
    "notebookStatusRunningIcon.foreground": colors.accent,
    "notebookStatusSuccessIcon.foreground": colors.lime[4],
    "notebookEditorOverviewRuler.runningCellForeground": colors.accent,

    // Chart colors
    "charts.foreground": colors.gray[7],
    "charts.lines": colors.gray[7],
    "charts.red": colors.red[5],
    "charts.blue": colors.blue[7],
    "charts.yellow": colors.amber[3],
    "charts.orange": colors.orange[3],
    "charts.green": colors.lime[4],
    "charts.purple": "#805AD5",

    // Ports Colors
    "ports.iconRunningProcessForeground": colors.lime[4],
  },
  semanticHighlighting: true,
  tokenColors: [
    {
      scope: "emphasis",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "strong",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: ["header", "meta.diff", "meta.diff.header"],
      settings: {
        foreground: colors.gray[7],
      },
    },
    {
      scope: "markup.inserted",
      settings: {
        foreground: colors.lime[4],
      },
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: colors.red[5],
      },
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: colors.amber[3],
      },
    },
    {
      scope: "invalid",
      settings: {
        foreground: colors.red[5],
        fontStyle: "underline italic",
      },
    },
    {
      scope: "invalid.deprecated",
      settings: {
        foreground: colors.gray[7],
        fontStyle: "underline italic",
      },
    },
    {
      scope: "storage.type",
      settings: {
        foreground: colors.gray[4],
      },
    },
    {
      scope: "entity.name.filename",
      settings: {
        foreground: colors.gray[5],
      },
    },
    {
      scope: "markup.error",
      settings: {
        foreground: colors.red[5],
      },
    },
    {
      name: "Underlined markup",
      scope: ["markup.underline"],
      settings: {
        fontStyle: "underline",
      },
    },
    {
      name: "Bold markup",
      scope: ["markup.bold"],
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "Markup headings",
      scope: ["markup.heading"],
      settings: {
        fontStyle: "bold",
        foreground: colors.accent,
      },
    },
    {
      name: "Markup italic",
      scope: ["markup.italic"],
      settings: {
        foreground: transparency.lowTransparency(colors.accent),
        fontStyle: "italic",
      },
    },
    {
      name: "Markup strikethrough",
      scope: ["markup.strikethrough"],
      settings: {
        foreground: colors.gray[6],
        fontStyle: "strikethrough",
      },
    },

    {
      scope: [
        "string.template",
        "string.quoted",
        "string",
        "string.regexp",
        "JSON.string",
        "Markdown.string",
      ],
      settings: {
        foreground: colors.neutral[1],
      },
    },
    {
      scope: [
        "keyword.control.import",
        "keyword.control.export",
        "keyword.control.from",
        "keyword.control.as",
        "keyword",
      ],
      settings: {
        foreground: colors.gray[5],
      },
    },
    {
      scope: [
        "keyword.operator",
        "punctuation.accessor.optional",
        "keyword.control.conditional",
        "storage.modifier.ts",
      ],
      settings: {
        foreground: colors.amber[3],
      },
    },
    {
      scope: ["variable"],
      settings: {
        foreground: colors.blue[3],
      },
    },
    {
      scope: [
        "constant.numeric",
        "JSON.number",
        "constant",
        "entity.name.constant",
        "variable.other.constant",
        "variable.other.enummember",
        "variable.language",
      ],
      settings: {
        foreground: colors.lime[4],
      },
    },
    {
      scope: ["variable.other.property"],
      settings: {
        foreground: colors.cyan[3],
      },
    },
    {
      scope: ["variable.language.this"],
      settings: {
        foreground: colors.cyan[2],
      },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "markup.heading",
        "entity.name.tag.tsx",
        "meta.tag.tsx",
        "meta.jsx.children",
      ],
      settings: {
        foreground: colors.accent,
      },
    },
    {
      scope: ["entity.name.method.tsx"],
      settings: {
        foreground: colors.amber[5],
      },
    },
    {
      scope: ["entity.name.type.class", "support.class"],
      settings: {
        foreground: colors.amber[6],
      },
    },
    {
      scope: ["entity.name.type", "support.type"],
      settings: {
        foreground: colors.amber[1],
      },
    },
    {
      scope: ["entity.name.type.interface", "support.interface"],
      settings: {
        foreground: colors.amber[2],
        fontStyle: "italic",
      },
    },
    {
      scope: ["keyword.control"],
      settings: {
        foreground: colors.neutral[3],
      },
    },

    {
      scope: [
        "entity.name.tag",
        "support.type.property-name",
        "JSON.property",
        "JSON.key",
        "variable.parameter.function",
      ],
      settings: {
        foreground: colors.accent,
      },
    },
    {
      scope: ["markup.bold"],
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: [
        "markup.italic",
        "markup.quote",
        "meta.tag.attributes",
        "string.other.link.title.markdown",
        "string.other.link.description.markdown",
      ],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "[The main comments color",
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: colors.gray[6],
        fontStyle: "italic",
      },
    },
    {
      name: "Punctuations",
      scope: [
        "punctuation",
        "JSON.punctuation",
        "Markdown.punctuation",
        "keyword.operator.type.annotation.ts",
        "meta.brace",
        "meta.brace.angle.ts",
        "meta.embedded.expression.jsx",
        "meta.embedded.expression.tsx",
        "meta.namespace.declaration.ts",
        "punctuation.definition.binding-pattern.array.js",
        "punctuation.definition.binding-pattern.array.ts",
        "punctuation.definition.binding-pattern.array.tsx",
        "punctuation.definition.binding-pattern.object.js",
        "punctuation.definition.binding-pattern.object.jsx",
        "punctuation.definition.binding-pattern.object.ts",
        "punctuation.definition.binding-pattern.object.tsx",
        "punctuation.definition.binding-pattern.object.tsx",
        "punctuation.definition.block",
        "punctuation.definition.entity.begin.bracket.square.css",
        "punctuation.definition.entity.end.bracket.square.css",
        "punctuation.definition.imports.begin.bracket.round.go",
        "punctuation.definition.parameters",
        "punctuation.definition.section.case-statement.tsx",
        "punctuation.definition.typeparameters.begin.ts",
        "punctuation.definition.typeparameters.begin.tsx",
        "punctuation.definition.typeparameters.end.ts",
        "punctuation.definition.typeparameters.end.tsx",
        "punctuation.section.function.begin.bracket.round.css",
        "punctuation.section.function.end.bracket.round.css",
        "punctuation.separator.comma",
        "punctuation.separator.key-value.css",
        "punctuation.separator.list.comma.css",
        "punctuation.separator.parameter.ts",
        "punctuation.separator.parameter.tsx",
        "punctuation.terminator.statement",
      ],
      settings: { foreground: colors.gray[4] },
    },
    {
      name: "JSX String",
      scope: "jsx.children.objectliteral.expression.embedded.tag.string.block",
      settings: { foreground: colors.lime[3] },
    },
  ],
};

Bun.write(
  "./themes/consolvis-dark-theme.json",
  JSON.stringify(darkTheme, null, 2)
);
