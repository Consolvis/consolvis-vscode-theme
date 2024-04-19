import * as colors from "./colors";
import transparency from "./transparency";

const darkTheme = {
	name: "Consolvis Dark Theme",
	type: "dark",
	colors: {
		// Base colors
		focusBorder: colors.GRAY_DARK,
		foreground: colors.GRAY_MEDIUM_LIGHT,
		descriptionForeground: colors.GRAY_MEDIUM,

		disabledForeground: colors.GRAY_MEDIUM_DARK,
		"widget.border": colors.GRAY_DARK,
		"widget.shadow": colors.GRAY_DEEPER,
		"selection.background": colors.GRAY_DEEP,
		"icon.foreground": colors.GRAY_MEDIUM,
		"sash.hoverBorder": colors.GRAY_MEDIUM,

		"editor.background": colors.GRAY_ALMOST_BLACK,
		"editor.foreground": colors.GRAY_MEDIUM,
		"editorLineNumber.foreground": colors.GRAY_DARK,
		"editorLineNumber.activeForeground": colors.GRAY_MEDIUM_LIGHT,
		"editorLineNumber.dimmedForeground": colors.GRAY_MEDIUM_DARK,
		"editorCursor.background": colors.GRAY_MEDIUM_LIGHT,
		"editorCursor.foreground": colors.ACCENT_ORANGE,

		"textLink.activeForeground": colors.GRAY_MEDIUM_DARK,
		"textLink.foreground": colors.GRAY_MEDIUM,
		"textPreformat.foreground": colors.GRAY_MEDIUM,
		"textSeparator.foreground": colors.GRAY_DEEPER,

		"toolbar.hoverBackground": colors.GRAY_DEEP,
		"toolbar.hoverOutline": colors.GRAY_MEDIUM_LIGHT,
		"toolbar.activeBackground": colors.GRAY_DEEP,

		"button.background": colors.GRAY_DEEPER,
		"button.foreground": colors.GRAY_MEDIUM_LIGHT,
		"button.border": colors.GRAY_DARK,
		"button.separator": colors.GRAY_BLACK,
		"button.hoverBackground": colors.GRAY_DEEPER,
		"button.secondaryForeground": colors.GRAY_MEDIUM_DARK,
		"button.secondaryBackground": colors.GRAY_DEEPER,
		"button.secondaryHoverBackground": colors.GRAY_DEEP,
		"checkbox.background": colors.GRAY_DEEPER,
		"checkbox.foreground": colors.GRAY_MEDIUM_LIGHT,
		"checkbox.border": colors.GRAY_DEEP,
		"checkbox.selectBackground": colors.GRAY_DEEP,
		"checkbox.selectBorder": colors.GRAY_DEEP,

		// Dropdown control
		"dropdown.background": colors.GRAY_DEEPER,
		"dropdown.listBackground": colors.GRAY_DEEP,
		"dropdown.border": colors.GRAY_DEEP,
		"dropdown.foreground": colors.GRAY_MEDIUM_LIGHT,
		"input.background": colors.GRAY_DEEPER,
		"input.border": colors.GRAY_DEEP,
		"input.foreground": colors.GRAY_MEDIUM_LIGHT,
		"input.placeholderForeground": colors.GRAY_MEDIUM_DARK,
		"inputOption.activeBackground": colors.GRAY_DEEP,
		"inputOption.activeBorder": colors.GRAY_DEEP,
		"inputOption.activeForeground": colors.GRAY_MEDIUM_LIGHT,
		"inputOption.hoverBackground": colors.GRAY_DEEPER,

		// Scrollbar control
		"scrollbar.shadow": colors.GRAY_DEEPER,
		"scrollbarSlider.activeBackground": transparency.nearlySolid(
			colors.GRAY_DEEP,
		),
		"scrollbarSlider.background": transparency.nearlySolid(colors.GRAY_DEEP),
		"scrollbarSlider.hoverBackground": transparency.nearlySolid(
			colors.GRAY_DARK,
		),

		// Badge
		"badge.foreground": colors.GRAY_MEDIUM_LIGHT,
		"badge.background": colors.GRAY_DEEP,

		// Progress bar
		"progressBar.background": colors.ACCENT_ORANGE,

		// Lists and trees
		"list.activeSelectionBackground": colors.GRAY_DEEP,
		"list.activeSelectionForeground": colors.GRAY_MEDIUM_LIGHT,
		"list.activeSelectionIconForeground": colors.GRAY_MEDIUM_LIGHT,
		"list.dropBackground": colors.GRAY_DEEP,
		"list.focusBackground": colors.GRAY_DEEP,
		"list.focusForeground": colors.GRAY_MEDIUM_LIGHT,
		"list.focusHighlightForeground": colors.GRAY_MEDIUM_LIGHT,
		"list.focusOutline": colors.GRAY_MEDIUM,
		"list.focusAndSelectionOutline": colors.GRAY_MEDIUM,
		"list.highlightForeground": colors.GRAY_MEDIUM_LIGHT,
		"list.hoverBackground": colors.GRAY_DEEP,
		"list.hoverForeground": colors.GRAY_MEDIUM_LIGHT,
		"list.inactiveSelectionBackground": colors.GRAY_DEEP,
		"list.inactiveSelectionForeground": colors.GRAY_MEDIUM_LIGHT,
		"list.inactiveSelectionIconForeground": colors.GRAY_MEDIUM_LIGHT,
		"list.inactiveFocusBackground": transparency.nearlyTransparent(
			colors.ACCENT_ORANGE,
		),
		"list.inactiveFocusOutline": transparency.nearlySolid(colors.GRAY_DEEP),
		"list.invalidItemForeground": colors.RED_MEDIUM_DARK,
		"listFilterWidget.background": colors.GRAY_DEEPER,
		"listFilterWidget.outline": colors.GRAY_DEEP,
		"listFilterWidget.noMatchesOutline": colors.RED_MEDIUM_DARK,
		"listFilterWidget.shadow": colors.GRAY_DEEPER,
		"list.filterMatchBackground": colors.GRAY_DEEP,
		"list.filterMatchBorder": colors.GRAY_DEEP,
		"list.deemphasizedForeground": colors.GRAY_MEDIUM_DARK,
		"tree.indentGuidesStroke": colors.GRAY_DEEP,
		"tree.inactiveIndentGuidesStroke": colors.GRAY_DEEP,
		"tree.tableColumnsBorder": colors.GRAY_DEEP,
		"tree.tableOddRowsBackground": colors.GRAY_DEEP,

		// Activity Bar
		"activityBar.background": colors.GRAY_DEEP,
		"activityBar.dropBorder": colors.ACCENT_ORANGE,
		"activityBar.foreground": colors.GRAY_MEDIUM_LIGHT,
		"activityBar.inactiveForeground": colors.GRAY_MEDIUM_DARK,
		"activityBar.border": colors.GRAY_DEEP,
		"activityBarBadge.background": transparency.nearlySolid(
			colors.ACCENT_ORANGE,
		),
		"activityBarBadge.foreground": colors.GRAY_MEDIUM_LIGHT,
		"activityBar.activeBorder": colors.ACCENT_ORANGE,
		"activityBar.activeBackground": colors.GRAY_DARK,
		"activityBar.activeFocusBorder": colors.GRAY_DARK,

		// Profiles
		"profileBadge.background": colors.ACCENT_ORANGE,
		"profileBadge.foreground": colors.GRAY_MEDIUM_LIGHT,

		// Side Bar
		"sideBar.background": colors.GRAY_DEEPER,
		"sideBar.foreground": colors.GRAY_MEDIUM,
		"sideBar.border": colors.GRAY_DEEP,
		"sideBar.dropBackground": colors.GRAY_DEEP,
		"sideBarTitle.foreground": colors.GRAY_MEDIUM_LIGHT,
		"sideBarSectionHeader.background": colors.GRAY_DEEP,
		"sideBarSectionHeader.foreground": colors.GRAY_MEDIUM_LIGHT,
		"sideBarSectionHeader.border": colors.GRAY_DEEP,

		// Minimap
		"minimap.findMatchHighlight": colors.ACCENT_ORANGE,
		"minimap.selectionHighlight": colors.GRAY_DEEPER,
		"minimap.background": colors.GRAY_DEEPER,
		"minimap.selectionOccurrenceHighlight": colors.ACCENT_ORANGE,
		"minimap.foregroundOpacity": "#000000c0",
		"minimapSlider.background": transparency.halfwayTransparent(
			colors.GRAY_DEEPER,
		),
		"minimapSlider.hoverBackground": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),
		"minimapSlider.activeBackground": transparency.nearlyTransparent(
			colors.GRAY_DEEP,
		),

		// Editor Groups & Tabs
		"editorGroup.border": colors.GRAY_DEEP,
		"editorGroup.dropBackground": colors.GRAY_DEEP,
		"editorGroupHeader.noTabsBackground": colors.GRAY_DEEP,
		"editorGroupHeader.tabsBackground": colors.GRAY_DEEP,
		"editorGroupHeader.tabsBorder": colors.GRAY_DEEP,
		"editorGroupHeader.border": colors.GRAY_DEEP,
		"editorGroup.emptyBackground": colors.GRAY_DEEP,
		"editorGroup.focusedEmptyBorder": colors.GRAY_MEDIUM,
		"editorGroup.dropIntoPromptForeground": colors.GRAY_DEEP,
		"editorGroup.dropIntoPromptBackground": colors.GRAY_DEEP,
		"editorGroup.dropIntoPromptBorder": colors.GRAY_DEEP,
		"tab.activeBackground": colors.GRAY_DARK,
		"tab.unfocusedActiveBackground": colors.GRAY_DARK,
		"tab.activeForeground": colors.GRAY_MEDIUM_LIGHT,
		"tab.border": colors.GRAY_DARK,
		"tab.activeBorder": colors.GRAY_DARK,
		"tab.unfocusedActiveBorder": colors.GRAY_DARK,
		"tab.activeBorderTop": colors.ACCENT_ORANGE,
		"tab.unfocusedActiveBorderTop": colors.ACCENT_ORANGE,
		"tab.lastPinnedBorder": colors.GRAY_DARK,
		"tab.inactiveBackground": colors.GRAY_DEEP,
		"tab.unfocusedInactiveBackground": colors.GRAY_DEEP,
		"tab.inactiveForeground": colors.GRAY_MEDIUM,
		"tab.unfocusedActiveForeground": colors.GRAY_MEDIUM_LIGHT,
		"tab.unfocusedInactiveForeground": colors.GRAY_MEDIUM,
		"tab.hoverBackground": colors.GRAY_DARK,
		"tab.unfocusedHoverBackground": colors.GRAY_DARK,
		"tab.hoverForeground": colors.GRAY_MEDIUM_LIGHT,
		"tab.unfocusedHoverForeground": colors.GRAY_MEDIUM_LIGHT,
		"tab.hoverBorder": colors.GRAY_DARK,
		"tab.unfocusedHoverBorder": colors.GRAY_DARK,
		"tab.activeModifiedBorder": colors.ACCENT_ORANGE,
		"tab.inactiveModifiedBorder": colors.ACCENT_ORANGE,
		"tab.unfocusedActiveModifiedBorder": colors.ACCENT_ORANGE,
		"tab.unfocusedInactiveModifiedBorder": colors.ACCENT_ORANGE,
		"editorPane.background": colors.GRAY_DEEPER,
		"sideBySideEditor.horizontalBorder": colors.GRAY_DEEP,
		"sideBySideEditor.verticalBorder": colors.GRAY_DEEP,

		// Selection colors
		"editor.selectionBackground": transparency.nearlySolid(colors.GRAY_DEEP),
		"editor.selectionForeground": colors.GRAY_MEDIUM_LIGHT,
		"editor.inactiveSelectionBackground": transparency.nearlySolid(
			colors.GRAY_DEEP,
		),
		"editor.selectionHighlightBackground": transparency.nearlySolid(
			colors.GRAY_DEEPER,
		),
		"editor.selectionHighlightBorder": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),

		// Word highlight colors
		"editor.wordHighlightBackground": transparency.halfwayTransparent(
			colors.GRAY_MEDIUM_DARK,
		),
		"editor.wordHighlightBorder": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),
		"editor.wordHighlightStrongBackground": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),
		"editor.wordHighlightStrongBorder": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),
		"editor.wordHighlightTextBackground": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),
		"editor.wordHighlightTextBorder": transparency.nearlyTransparent(
			colors.GRAY_DEEP,
		),

		// Find colors
		"editor.findMatchBackground": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),
		"editor.findMatchHighlightBackground": transparency.nearlyTransparent(
			colors.GRAY_DEEP,
		),
		"editor.findRangeHighlightBackground": colors.GRAY_DEEP,
		"editor.findMatchBorder": transparency.halfwayTransparent(colors.GRAY_DEEP),
		"editor.findMatchHighlightBorder": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),
		"editor.findRangeHighlightBorder": colors.GRAY_DEEP,

		// Search Results
		"search.resultsInfoForeground": colors.GRAY_MEDIUM_DARK,
		"searchEditor.findMatchBackground": colors.ACCENT_ORANGE,
		"searchEditor.findMatchBorder": colors.GRAY_DEEP,
		"searchEditor.textInputBorder": colors.GRAY_DEEP,

		// Hover Highlight
		"editor.hoverHighlightBackground": transparency.nearlySolid(
			colors.GRAY_DEEP,
		),

		// Line Highlight
		"editor.lineHighlightBackground": transparency.nearlyTransparent(
			colors.GRAY_DEEP,
		),
		"editor.lineHighlightBorder": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),

		// Unicode Highlight
		"editorUnicodeHighlight.border": colors.ACCENT_ORANGE,
		"editorUnicodeHighlight.background": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),

		// Link
		"editorLink.activeForeground": colors.GRAY_MEDIUM,

		// Range Highlight
		"editor.rangeHighlightBackground": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),
		"editor.rangeHighlightBorder": colors.ACCENT_ORANGE,

		// Symbol Highlight
		"editor.symbolHighlightBackground": colors.ACCENT_ORANGE,
		"editor.symbolHighlightBorder": colors.GRAY_DEEP,

		// Editor Whitespaces
		"editorWhitespace.foreground": colors.GRAY_DARK,

		// Editor Indent Guides
		"editorIndentGuide.background": colors.GRAY_DARK,
		"editorIndentGuide.activeBackground": colors.ACCENT_ORANGE,

		// Editor Inline Hints
		"editorInlayHint.background": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),
		"editorInlayHint.foreground": colors.GRAY_MEDIUM,

		// Editor Rulers
		"editorRuler.foreground": colors.GRAY_DEEP,

		// Linked Editing Mode
		"editor.linkedEditingBackground": colors.GRAY_DEEPER,

		// CodeLens
		"editorCodeLens.foreground": colors.GRAY_DARK,

		// Lightbulb
		"editorLightBulb.foreground": colors.GRAY_DEEP,
		"editorLightBulbAutoFix.foreground": colors.GRAY_DEEP,

		// Bracket matches
		"editorBracketMatch.background": transparency.quarterTransparent(
			colors.ACCENT_ORANGE,
		),
		"editorBracketMatch.border": transparency.quarterTransparent(
			colors.ACCENT_ORANGE,
		),

		// Bracket pair colorization
		"editorBracketHighlight.foreground1": colors.ORANGE_LIGHT,
		"editorBracketHighlight.foreground2": colors.LIME_LIGHT,
		"editorBracketHighlight.foreground3": colors.BLUE_LIGHT,
		"editorBracketHighlight.foreground4": colors.RED_LIGHT,
		"editorBracketHighlight.foreground5": colors.CYAN_LIGHT,
		"editorBracketHighlight.foreground6": colors.AMBER_LIGHT,
		"editorBracketHighlight.unexpectedBracket.foreground":
			transparency.halfwayTransparent(colors.AMBER_MEDIUM_LIGHT),

		// Bracket pair guides
		"editorBracketPairGuide.activeBackground1": colors.ORANGE_LIGHT,
		"editorBracketPairGuide.activeBackground2": colors.LIME_LIGHT,
		"editorBracketPairGuide.activeBackground3": colors.BLUE_LIGHT,
		"editorBracketPairGuide.activeBackground4": colors.RED_LIGHT,
		"editorBracketPairGuide.activeBackground5": colors.CYAN_LIGHT,
		"editorBracketPairGuide.activeBackground6": colors.AMBER_LIGHT,
		"editorBracketPairGuide.background1": colors.ORANGE_LIGHT,
		"editorBracketPairGuide.background2": colors.LIME_LIGHT,
		"editorBracketPairGuide.background3": colors.BLUE_LIGHT,
		"editorBracketPairGuide.background4": colors.RED_LIGHT,
		"editorBracketPairGuide.background5": colors.CYAN_LIGHT,
		"editorBracketPairGuide.background6": colors.AMBER_LIGHT,

		// Folding
		"editor.foldBackground": transparency.nearlyTransparent(colors.GRAY_DEEPER),

		// Overview ruler
		"editorOverviewRuler.background": colors.GRAY_DEEPER,
		"editorOverviewRuler.border": colors.GRAY_DEEP,
		"editorOverviewRuler.findMatchForeground": "#fe420d66",
		"editorOverviewRuler.rangeHighlightForeground": "#fe420d66",
		"editorOverviewRuler.selectionHighlightForeground": "#cbd5e066",
		"editorOverviewRuler.wordHighlightForeground": "#fe420d66",
		"editorOverviewRuler.wordHighlightStrongForeground": "#48BB7866",
		"editorOverviewRuler.wordHighlightTextForeground": "#3c485666",

		"editorOverviewRuler.bracketMatchForeground":
			transparency.halfwayTransparent(colors.ACCENT_ORANGE),

		// Errors
		errorForeground: colors.ERROR_FOREGROUND,
		"editorError.foreground": colors.ERROR_FOREGROUND,
		"editorError.border": colors.ERROR_BACKGROUND,
		"editorError.background": transparency.quarterTransparent(
			colors.ERROR_BACKGROUND,
		),
		"problemsErrorIcon.foreground": colors.ERROR_FOREGROUND,
		"editorOverviewRuler.errorForeground": colors.ERROR_FOREGROUND,
		"inputValidation.errorBackground": transparency.quarterTransparent(
			colors.ERROR_BACKGROUND,
		),
		"inputValidation.errorForeground": colors.ERROR_FOREGROUND,
		"inputValidation.errorBorder": colors.ERROR_BACKGROUND,
		"list.errorForeground": colors.ERROR_FOREGROUND,
		"minimap.errorHighlight": colors.ERROR_BACKGROUND,
		"editorMarkerNavigationError.background": transparency.quarterTransparent(
			colors.ERROR_BACKGROUND,
		),
		"editorMarkerNavigationError.headerBackground":
			transparency.quarterTransparent(colors.ERROR_BACKGROUND),
		"statusBarItem.errorBackground": transparency.quarterTransparent(
			colors.ERROR_BACKGROUND,
		),
		"statusBarItem.errorForeground": colors.ERROR_FOREGROUND,
		"notificationsErrorIcon.foreground": colors.ERROR_FOREGROUND,
		"testing.message.error.decorationForeground": colors.ERROR_FOREGROUND,
		"testing.message.error.lineBackground": transparency.quarterTransparent(
			colors.ERROR_BACKGROUND,
		),
		"debugConsole.errorForeground": colors.ERROR_FOREGROUND,
		"notebookStatusErrorIcon.foreground": colors.ERROR_FOREGROUND,
		"debugTokenExpression.error": colors.ERROR_FOREGROUND,
		"testing.iconFailed": colors.FAILURE_BACKGROUND,
		"testing.iconErrored": colors.ERROR_FOREGROUND,

		// Warnings
		"editorWarning.foreground": colors.WARNING_FOREGROUND,
		"editorWarning.border": colors.WARNING_BACKGROUND,
		"editorWarning.background": transparency.quarterTransparent(
			colors.WARNING_BACKGROUND,
		),
		"problemsWarningIcon.foreground": colors.WARNING_FOREGROUND,
		"editorOverviewRuler.warningForeground": colors.WARNING_FOREGROUND,
		"inputValidation.warningBackground": transparency.quarterTransparent(
			colors.WARNING_BACKGROUND,
		),
		"inputValidation.warningForeground": colors.WARNING_FOREGROUND,
		"inputValidation.warningBorder": colors.WARNING_BACKGROUND,
		"list.warningForeground": colors.WARNING_FOREGROUND,
		"minimap.warningHighlight": colors.WARNING_FOREGROUND,
		"editorMarkerNavigationWarning.background": transparency.quarterTransparent(
			colors.WARNING_BACKGROUND,
		),
		"editorMarkerNavigationWarning.headerBackground":
			transparency.quarterTransparent(colors.WARNING_BACKGROUND),
		"statusBarItem.warningBackground": transparency.quarterTransparent(
			colors.WARNING_BACKGROUND,
		),
		"statusBarItem.warningForeground": colors.WARNING_FOREGROUND,
		"notificationsWarningIcon.foreground": colors.WARNING_FOREGROUND,
		"debugConsole.warningForeground": colors.WARNING_FOREGROUND,

		// Info
		"editorInfo.foreground": colors.INFO_FOREGROUND,
		"editorInfo.border": colors.INFO_BACKGROUND,
		"editorInfo.background": transparency.quarterTransparent(
			colors.INFO_BACKGROUND,
		),
		"problemsInfoIcon.foreground": colors.INFO_FOREGROUND,
		"editorOverviewRuler.infoForeground": colors.INFO_FOREGROUND,
		"inputValidation.infoBackground": transparency.quarterTransparent(
			colors.INFO_BACKGROUND,
		),
		"inputValidation.infoForeground": colors.INFO_FOREGROUND,
		"inputValidation.infoBorder": colors.INFO_BACKGROUND,
		"editorMarkerNavigationInfo.background": transparency.quarterTransparent(
			colors.INFO_BACKGROUND,
		),
		"editorMarkerNavigationInfo.headerBackground":
			transparency.quarterTransparent(colors.INFO_BACKGROUND),
		"notificationsInfoIcon.foreground": colors.INFO_FOREGROUND,
		"testing.message.info.decorationForeground": colors.INFO_FOREGROUND,
		"testing.message.info.lineBackground": transparency.quarterTransparent(
			colors.INFO_BACKGROUND,
		),
		"debugConsole.infoForeground": colors.INFO_FOREGROUND,

		// Hints
		"editorHint.foreground": colors.HINT_FOREGROUND,
		"editorHint.border": colors.HINT_BACKGROUND,

		// Added
		"editorGutter.addedBackground": transparency.quarterTransparent(
			colors.ADDED_BACKGROUND,
		),
		"gitDecoration.addedResourceForeground": colors.ADDED_FOREGROUND,
		"minimapGutter.addedBackground": transparency.quarterTransparent(
			colors.ADDED_BACKGROUND,
		),
		"editorOverviewRuler.addedForeground": colors.ADDED_FOREGROUND,

		// Modified
		"editorGutter.modifiedBackground": transparency.quarterTransparent(
			colors.MODIFIED_BACKGROUND,
		),
		"settings.modifiedItemIndicator": transparency.halfwayTransparent(
			colors.AMBER_MEDIUM_LIGHT,
		),
		"gitDecoration.modifiedResourceForeground": colors.MODIFIED_FOREGROUND,
		"gitDecoration.renamedResourceForeground": colors.MODIFIED_FOREGROUND,
		"gitDecoration.stageModifiedResourceForeground": colors.MODIFIED_FOREGROUND,
		"minimapGutter.modifiedBackground": transparency.quarterTransparent(
			colors.MODIFIED_BACKGROUND,
		),
		"editorOverviewRuler.modifiedForeground": colors.MODIFIED_FOREGROUND,

		// Deleted
		"editorGutter.deletedBackground": transparency.quarterTransparent(
			colors.DELETED_BACKGROUND,
		),
		"gitDecoration.deletedResourceForeground": colors.DELETED_FOREGROUND,
		"gitDecoration.stageDeletedResourceForeground": colors.DELETED_FOREGROUND,
		"minimapGutter.deletedBackground": transparency.quarterTransparent(
			colors.DELETED_BACKGROUND,
		),
		"editorOverviewRuler.deletedForeground": colors.DELETED_FOREGROUND,

		// Colors for unused source code
		"editorUnnecessaryCode.border": colors.GRAY_DEEP,
		"editorUnnecessaryCode.opacity": transparency.nearlySolid(colors.GRAY_DEEP),

		// Colors for gutter
		"editorGutter.background": colors.GRAY_ALMOST_BLACK,

		"editorGutter.commentRangeForeground": colors.GRAY_DEEP,
		"editorGutter.commentGlyphForeground": colors.GRAY_DEEP,
		"editorGutter.commentUnresolvedGlyphForeground":
			transparency.halfwayTransparent(colors.AMBER_MEDIUM_LIGHT),
		"editorGutter.foldingControlForeground": colors.GRAY_MEDIUM_LIGHT,

		// Colors for editor comments widget
		"editorCommentsWidget.resolvedBorder": colors.LIME_MEDIUM,
		"editorCommentsWidget.unresolvedBorder": colors.AMBER_MEDIUM_LIGHT,
		"editorCommentsWidget.rangeBackground": colors.GRAY_DEEP,
		"editorCommentsWidget.rangeBorder": colors.GRAY_DEEP,
		"editorCommentsWidget.rangeActiveBackground": colors.GRAY_DEEP,
		"editorCommentsWidget.rangeActiveBorder": colors.GRAY_DEEP,

		// Colors for diff editor
		"diffEditor.insertedTextBackground": transparency.nearlyTransparent(
			colors.LIME_MEDIUM_LIGHT,
		),
		"diffEditor.insertedTextBorder": colors.LIME_MEDIUM,
		"diffEditor.removedTextBackground": transparency.nearlyTransparent(
			colors.RED_MEDIUM_LIGHT,
		),
		"diffEditor.removedTextBorder": colors.RED_MEDIUM_DARK,
		"diffEditor.border": colors.GRAY_DEEP,
		"diffEditor.diagonalFill": colors.GRAY_DEEP,
		"diffEditor.insertedLineBackground": transparency.nearlyTransparent(
			colors.LIME_MEDIUM_DARK,
		),
		"diffEditor.removedLineBackground": transparency.nearlyTransparent(
			colors.RED_MEDIUM_DARK,
		),
		"diffEditorGutter.insertedLineBackground": transparency.nearlySolid(
			colors.LIME_MEDIUM,
		),
		"diffEditorGutter.removedLineBackground": transparency.nearlySolid(
			colors.RED_MEDIUM_DARK,
		),
		"diffEditorOverview.insertedForeground": colors.LIME_MEDIUM,
		"diffEditorOverview.removedForeground": colors.RED_MEDIUM_DARK,

		// Editor widget colors
		"editorWidget.foreground": colors.GRAY_MEDIUM_DARK,
		"editorWidget.background": colors.GRAY_DEEP,
		"editorWidget.border": colors.GRAY_DEEP,
		"editorWidget.resizeBorder": colors.GRAY_DEEP,
		"editorSuggestWidget.background": colors.GRAY_DEEP,
		"editorSuggestWidget.border": colors.GRAY_DEEP,
		"editorSuggestWidget.foreground": colors.GRAY_MEDIUM_DARK,
		"editorSuggestWidget.focusHighlightForeground": colors.GRAY_MEDIUM_LIGHT,
		"editorSuggestWidget.highlightForeground": colors.GRAY_MEDIUM_LIGHT,
		"editorSuggestWidget.selectedBackground": colors.GRAY_DEEP,
		"editorSuggestWidget.selectedForeground": colors.GRAY_MEDIUM_LIGHT,
		"editorSuggestWidget.selectedIconForeground": colors.GRAY_MEDIUM_LIGHT,
		"editorSuggestWidgetStatus.foreground": colors.GRAY_MEDIUM_LIGHT,
		"editorHoverWidget.foreground": colors.GRAY_MEDIUM_DARK,
		"editorHoverWidget.background": colors.GRAY_DEEPER,
		"editorHoverWidget.border": colors.GRAY_DEEP,
		"editorHoverWidget.highlightForeground": colors.GRAY_MEDIUM_LIGHT,
		"editorHoverWidget.statusBarBackground": colors.GRAY_DEEPER,
		"editorGhostText.border": transparency.nearlySolid(colors.GRAY_DEEP),
		"editorGhostText.background": transparency.nearlySolid(colors.GRAY_DEEP),
		"editorGhostText.foreground": colors.GRAY_DARK,
		"editorStickyScroll.background": colors.GRAY_DEEPER,
		"editorStickyScrollHover.background": colors.GRAY_DEEP,

		// Debug Exception widget colors
		"debugExceptionWidget.background": colors.GRAY_DEEPER,
		"debugExceptionWidget.border": colors.GRAY_DEEP,

		// Editor marker view colors
		"editorMarkerNavigation.background": colors.GRAY_DEEPER,

		// Peek view colors
		"peekView.border": colors.GRAY_DEEP,
		"peekViewEditor.background": colors.GRAY_DEEPER,
		"peekViewEditorGutter.background": colors.GRAY_DEEPER,
		"peekViewEditor.matchHighlightBackground": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),
		"peekViewEditor.matchHighlightBorder": transparency.nearlySolid(
			colors.ACCENT_ORANGE,
		),
		"peekViewEditorStickyScroll.background": colors.GRAY_DEEPER,
		"peekViewResult.background": colors.GRAY_DEEPER,
		"peekViewResult.fileForeground": colors.GRAY_MEDIUM_LIGHT,
		"peekViewResult.lineForeground": colors.GRAY_MEDIUM_DARK,
		"peekViewResult.matchHighlightBackground": transparency.halfwayTransparent(
			colors.GRAY_DEEP,
		),
		"peekViewResult.selectionBackground": colors.GRAY_DEEP,
		"peekViewResult.selectionForeground": colors.GRAY_MEDIUM_LIGHT,
		"peekViewTitle.background": colors.GRAY_DEEP,
		"peekViewTitleDescription.foreground": colors.GRAY_MEDIUM_DARK,
		"peekViewTitleLabel.foreground": colors.GRAY_MEDIUM_LIGHT,

		// Merge conflicts colors
		"merge.currentHeaderBackground": transparency.quarterTransparent(
			colors.ACCENT_ORANGE,
		),
		"merge.currentContentBackground": transparency.nearlyTransparent(
			colors.ACCENT_ORANGE,
		),
		"merge.incomingHeaderBackground": transparency.quarterTransparent(
			colors.LIME_MEDIUM,
		),
		"merge.incomingContentBackground": transparency.nearlyTransparent(
			colors.LIME_MEDIUM,
		),
		"merge.border": colors.GRAY_DEEP,
		"merge.commonContentBackground": colors.GRAY_DEEP,
		"merge.commonHeaderBackground": colors.GRAY_DEEP,
		"editorOverviewRuler.currentContentForeground": colors.ACCENT_ORANGE,
		"editorOverviewRuler.incomingContentForeground": colors.LIME_MEDIUM,
		"editorOverviewRuler.commonContentForeground": colors.GRAY_DEEP,
		"mergeEditor.change.background": transparency.nearlyTransparent(
			colors.ACCENT_ORANGE,
		),
		"mergeEditor.change.word.background": transparency.quarterTransparent(
			colors.ACCENT_ORANGE,
		),
		"mergeEditor.conflict.unhandledUnfocused.border": colors.AMBER_MEDIUM_LIGHT,
		"mergeEditor.conflict.unhandledFocused.border": colors.AMBER_MEDIUM_LIGHT,
		"mergeEditor.conflict.handledUnfocused.border": colors.AMBER_MEDIUM_LIGHT,
		"mergeEditor.conflict.handledFocused.border": colors.AMBER_MEDIUM_LIGHT,
		"mergeEditor.conflict.handled.minimapOverViewRuler": colors.ACCENT_ORANGE,
		"mergeEditor.conflict.unhandled.minimapOverViewRuler": colors.ACCENT_ORANGE,
		"mergeEditor.conflictingLines.background": transparency.nearlyTransparent(
			colors.AMBER_MEDIUM_LIGHT,
		),
		"mergeEditor.changeBase.background": colors.GRAY_DEEP,
		"mergeEditor.changeBase.word.background": colors.GRAY_DEEP,
		"mergeEditor.conflict.input1.background": transparency.nearlyTransparent(
			colors.ACCENT_ORANGE,
		),
		"mergeEditor.conflict.input2.background": transparency.nearlyTransparent(
			colors.LIME_MEDIUM,
		),

		// Panel colors
		"panel.background": colors.GRAY_DEEPER,
		"panel.border": colors.GRAY_DEEP,
		"panel.dropBorder": colors.GRAY_DEEP,
		"panelTitle.activeBorder": colors.GRAY_DEEP,
		"panelTitle.activeForeground": colors.GRAY_MEDIUM_LIGHT,
		"panelTitle.inactiveForeground": colors.GRAY_MEDIUM_DARK,
		"panelInput.border": colors.GRAY_DEEP,
		"panelSection.border": colors.GRAY_DEEP,
		"panelSection.dropBackground": colors.GRAY_DEEP,
		"panelSectionHeader.background": colors.GRAY_DEEP,
		"panelSectionHeader.foreground": colors.GRAY_MEDIUM_LIGHT,
		"panelSectionHeader.border": colors.GRAY_DEEP,

		// Status Bar colors
		"statusBar.background": colors.GRAY_DEEP,
		"statusBar.foreground": colors.GRAY_MEDIUM_DARK,
		"statusBar.border": colors.GRAY_DEEP,
		"statusBar.debuggingBackground": transparency.nearlySolid(
			colors.AMBER_MEDIUM_DARK,
		),
		"statusBar.debuggingForeground": colors.GRAY_MEDIUM_LIGHT,
		"statusBar.debuggingBorder": colors.GRAY_DEEP,
		"statusBar.noFolderForeground": colors.GRAY_MEDIUM_DARK,
		"statusBar.noFolderBackground": colors.GRAY_DEEPER,
		"statusBar.noFolderBorder": colors.GRAY_DEEP,
		"statusBarItem.activeBackground": colors.GRAY_DARK,
		"statusBarItem.hoverBackground": colors.GRAY_DARK,
		"statusBarItem.prominentForeground": colors.ACCENT_ORANGE,
		"statusBarItem.prominentBackground": colors.GRAY_DEEP,
		"statusBarItem.prominentHoverBackground": transparency.nearlyTransparent(
			colors.ACCENT_ORANGE,
		),
		"statusBarItem.remoteBackground": colors.GRAY_DEEPER,
		"statusBarItem.remoteForeground": colors.GRAY_MEDIUM_DARK,
		"statusBarItem.compactHoverBackground": transparency.nearlyTransparent(
			colors.ACCENT_ORANGE,
		),
		"statusBarItem.focusBorder": colors.GRAY_MEDIUM_DARK,
		"statusBar.focusBorder": colors.GRAY_DARK,

		// Title Bar colors
		"titleBar.activeBackground": colors.GRAY_DEEP,
		"titleBar.activeForeground": colors.GRAY_MEDIUM_LIGHT,
		"titleBar.inactiveBackground": colors.GRAY_DEEP,
		"titleBar.inactiveForeground": colors.GRAY_MEDIUM_DARK,
		"titleBar.border": colors.GRAY_DEEP,

		// Menu Bar colors
		"menubar.selectionForeground": colors.GRAY_MEDIUM_LIGHT,
		"menubar.selectionBackground": colors.ACCENT_ORANGE,
		"menubar.selectionBorder": colors.ACCENT_ORANGE,
		"menu.foreground": colors.GRAY_MEDIUM_LIGHT,
		"menu.background": colors.GRAY_DEEPER,
		"menu.selectionForeground": colors.GRAY_MEDIUM_LIGHT,
		"menu.selectionBackground": colors.ACCENT_ORANGE,
		"menu.selectionBorder": colors.ACCENT_ORANGE,
		"menu.separatorBackground": colors.GRAY_DEEP,
		"menu.border": colors.GRAY_DEEP,

		// Command Center colors
		"commandCenter.foreground": colors.GRAY_MEDIUM_LIGHT,
		"commandCenter.activeForeground": colors.ACCENT_ORANGE,
		"commandCenter.background": colors.GRAY_DEEPER,
		"commandCenter.activeBackground": colors.GRAY_DEEP,
		"commandCenter.border": colors.GRAY_MEDIUM_DARK,
		"commandCenter.inactiveForeground": colors.GRAY_MEDIUM_LIGHT,
		"commandCenter.inactiveBorder": colors.GRAY_MEDIUM_DARK,
		"commandCenter.activeBorder": colors.GRAY_MEDIUM_LIGHT,

		// Notification colors
		"notificationCenter.border": colors.GRAY_DEEP,
		"notificationCenterHeader.foreground": colors.GRAY_MEDIUM_LIGHT,
		"notificationCenterHeader.background": colors.GRAY_DEEP,
		"notificationToast.border": colors.GRAY_DARK,
		"notifications.foreground": colors.GRAY_MEDIUM_DARK,
		"notifications.background": colors.GRAY_DEEPER,
		"notifications.border": colors.GRAY_DEEP,
		"notificationLink.foreground": colors.GRAY_MEDIUM,

		// Banner colors
		"banner.background": colors.GRAY_DEEP,
		"banner.foreground": colors.GRAY_MEDIUM_LIGHT,
		"banner.iconForeground": colors.GRAY_MEDIUM_LIGHT,

		// Extension colors
		"extensionButton.prominentForeground": colors.GRAY_MEDIUM_LIGHT,
		"extensionButton.prominentBackground": colors.GRAY_DEEP,
		"extensionButton.prominentHoverBackground": colors.GRAY_DEEP,
		"extensionButton.background": colors.GRAY_DEEP,
		"extensionButton.foreground": colors.GRAY_MEDIUM_LIGHT,
		"extensionButton.hoverBackground": colors.GRAY_DEEP,
		"extensionButton.separator": colors.GRAY_DEEP,
		"extensionBadge.remoteBackground": colors.GRAY_DEEP,
		"extensionBadge.remoteForeground": colors.GRAY_MEDIUM_DARK,
		"extensionIcon.starForeground": colors.GRAY_MEDIUM_DARK,
		"extensionIcon.verifiedForeground": colors.LIME_MEDIUM,
		"extensionIcon.preReleaseForeground": colors.GRAY_MEDIUM_LIGHT,
		"extensionIcon.sponsorForeground": colors.GRAY_MEDIUM_DARK,

		// Quick picker colors
		"pickerGroup.border": colors.GRAY_DEEP,
		"pickerGroup.foreground": colors.GRAY_MEDIUM_DARK,
		"quickInput.background": colors.GRAY_DEEPER,
		"quickInput.foreground": colors.GRAY_MEDIUM_DARK,
		"quickInputList.focusBackground": colors.GRAY_DEEP,
		"quickInputList.focusForeground": colors.GRAY_MEDIUM_LIGHT,
		"quickInputList.focusIconForeground": colors.GRAY_MEDIUM_LIGHT,
		"quickInputTitle.background": colors.GRAY_DEEP,

		// Keybinding label colors
		"keybindingLabel.background": colors.GRAY_MEDIUM_DARK,
		"keybindingLabel.foreground": colors.GRAY_BLACK,
		"keybindingLabel.border": colors.GRAY_MEDIUM_LIGHT,
		"keybindingLabel.bottomBorder": colors.GRAY_DEEPER,

		// Keyboard shortcut table colors
		"keybindingTable.headerBackground": colors.GRAY_DEEPER,
		"keybindingTable.rowsBackground": colors.GRAY_DEEPER,

		// Integrated Terminal colors
		"terminal.background": colors.GRAY_DEEPER,
		"terminal.border": colors.GRAY_DEEP,
		"terminal.foreground": colors.GRAY_MEDIUM_DARK,
		"terminal.ansiBlack": colors.GRAY_BLACK,
		"terminal.ansiBlue": colors.BLUE_MEDIUM,
		"terminal.ansiBrightBlack": colors.GRAY_DEEPER,
		"terminal.ansiBrightBlue": colors.BLUE_DEEP,
		"terminal.ansiBrightCyan": colors.CYAN_DARK,
		"terminal.ansiBrightGreen": colors.LIME_DEEP,
		"terminal.ansiBrightMagenta": colors.ORANGE_DARK,
		"terminal.ansiBrightRed": colors.RED_DARK,
		"terminal.ansiBrightWhite": colors.GRAY_MEDIUM_DARK,
		"terminal.ansiBrightYellow": colors.AMBER_DEEP,
		"terminal.ansiCyan": colors.CYAN_MEDIUM,
		"terminal.ansiGreen": colors.LIME_MEDIUM,
		"terminal.ansiMagenta": colors.ORANGE_MEDIUM,
		"terminal.ansiRed": colors.RED_MEDIUM,
		"terminal.ansiWhite": colors.GRAY_LIGHT,
		"terminal.ansiYellow": colors.AMBER_MEDIUM,
		"terminal.selectionBackground": colors.GRAY_DEEP,
		"terminal.selectionForeground": colors.GRAY_MEDIUM_DARK,
		"terminal.inactiveSelectionBackground": colors.GRAY_DEEP,
		"terminal.findMatchBackground": transparency.halfwayTransparent(
			colors.ACCENT_ORANGE,
		),
		"terminal.findMatchBorder": colors.ACCENT_ORANGE,
		"terminal.findMatchHighlightBackground": transparency.nearlyTransparent(
			colors.ACCENT_ORANGE,
		),
		"terminal.findMatchHighlightBorder": transparency.halfwayTransparent(
			colors.ACCENT_ORANGE,
		),
		"terminal.hoverHighlightBackground": transparency.halfwayTransparent(
			colors.ACCENT_ORANGE,
		),
		"terminalCursor.background": colors.ACCENT_ORANGE,
		"terminalCursor.foreground": colors.GRAY_DEEP,
		"terminal.dropBackground": transparency.nearlyTransparent(
			colors.ACCENT_ORANGE,
		),
		"terminal.tab.activeBorder": colors.ACCENT_ORANGE,
		"terminalCommandDecoration.defaultBackground": colors.ACCENT_ORANGE,
		"terminalCommandDecoration.successBackground":
			transparency.quarterTransparent(colors.SUCCESS_BACKGROUND),
		"terminalCommandDecoration.errorBackground":
			transparency.quarterTransparent(colors.ERROR_BACKGROUND),
		"terminalOverviewRuler.cursorForeground": colors.ACCENT_ORANGE,
		"terminalOverviewRuler.findMatchForeground": colors.ACCENT_ORANGE,

		// Debug colors
		"debugToolBar.background": colors.GRAY_DEEP,
		"debugToolBar.border": colors.GRAY_DARK,
		"editor.stackFrameHighlightBackground": transparency.halfwayTransparent(
			colors.AMBER_MEDIUM_LIGHT,
		),
		"editor.focusedStackFrameHighlightBackground":
			transparency.halfwayTransparent(colors.LIME_MEDIUM),
		"editor.inlineValuesForeground": colors.ACCENT_ORANGE,
		"editor.inlineValuesBackground": transparency.halfwayTransparent(
			colors.ACCENT_ORANGE,
		),
		"debugView.exceptionLabelForeground": colors.RED_MEDIUM_DARK,
		"debugView.exceptionLabelBackground": transparency.halfwayTransparent(
			colors.ACCENT_ORANGE,
		),
		"debugView.stateLabelForeground": colors.GRAY_DEEP,
		"debugView.stateLabelBackground": transparency.halfwayTransparent(
			colors.ACCENT_ORANGE,
		),
		"debugView.valueChangedHighlight": colors.LIME_MEDIUM,
		"debugTokenExpression.name": colors.BLUE_LIGHT,
		"debugTokenExpression.value": colors.BLUE_LIGHTER,
		"debugTokenExpression.string": colors.BLUE_LIGHTER,
		"debugTokenExpression.boolean": colors.LIME_LIGHT,
		"debugTokenExpression.number": colors.LIME_LIGHT,

		// Testing colors

		"testing.iconPassed": colors.LIME_MEDIUM,
		"testing.runAction": colors.ACCENT_ORANGE,
		"testing.iconQueued": colors.AMBER_MEDIUM_LIGHT,
		"testing.iconUnset": colors.GRAY_DEEP,
		"testing.iconSkipped": colors.AMBER_MEDIUM_LIGHT,
		"testing.peekBorder": colors.ACCENT_ORANGE,
		"testing.peekHeaderBackground": colors.GRAY_DEEPER,

		// Welcome page colors
		"welcomePage.background": colors.GRAY_DEEPER,
		"welcomePage.progress.background": colors.GRAY_DEEP,
		"welcomePage.progress.foreground": colors.ACCENT_ORANGE,
		"welcomePage.tileBackground": colors.GRAY_DEEP,
		"welcomePage.tileHoverBackground": colors.GRAY_DEEP,
		"welcomePage.tileBorder": colors.GRAY_DEEP,

		// Walkthrough colors
		"walkThrough.embeddedEditorBackground": colors.GRAY_DEEP,
		"walkthrough.stepTitle.foreground": colors.ACCENT_ORANGE,

		// Source Control colors
		"scm.providerBorder": colors.GRAY_DEEP,

		// Git colors
		"gitDecoration.untrackedResourceForeground": colors.GRAY_MEDIUM_DARK,
		"gitDecoration.ignoredResourceForeground": colors.NEUTRAL_DARK_GRAY,
		"gitDecoration.conflictingResourceForeground": colors.AMBER_MEDIUM_LIGHT,
		"gitDecoration.submoduleResourceForeground": colors.GRAY_DARK,

		// Settings Editor colors
		"settings.headerForeground": colors.NEUTRAL_GRAY,

		"settings.dropdownBackground": colors.GRAY_DEEPER,
		"settings.dropdownForeground": colors.GRAY_MEDIUM_DARK,
		"settings.dropdownBorder": colors.GRAY_DEEP,
		"settings.dropdownListBorder": colors.GRAY_DEEP,
		"settings.checkboxBackground": colors.GRAY_DEEPER,
		"settings.checkboxForeground": colors.GRAY_MEDIUM_DARK,
		"settings.checkboxBorder": colors.GRAY_DEEP,
		"settings.rowHoverBackground": colors.GRAY_DEEP,
		"settings.textInputBackground": colors.GRAY_DEEPER,
		"settings.textInputForeground": colors.GRAY_MEDIUM_DARK,
		"settings.textInputBorder": colors.GRAY_DEEP,
		"settings.numberInputBackground": colors.GRAY_DEEPER,
		"settings.numberInputForeground": colors.GRAY_MEDIUM_DARK,
		"settings.numberInputBorder": colors.GRAY_DEEP,
		"settings.focusedRowBackground": colors.GRAY_DEEP,
		"settings.focusedRowBorder": colors.ACCENT_ORANGE,
		"settings.headerBorder": colors.GRAY_DEEP,
		"settings.sashBorder": colors.GRAY_DEEP,
		"settings.settingsHeaderHoverForeground": colors.ACCENT_ORANGE,

		// Breadcrumbs colors
		"breadcrumb.foreground": colors.GRAY_MEDIUM_DARK,
		"breadcrumb.background": colors.GRAY_DEEPER,
		"breadcrumb.focusForeground": colors.GRAY_MEDIUM_LIGHT,
		"breadcrumb.activeSelectionForeground": colors.GRAY_MEDIUM_LIGHT,
		"breadcrumbPicker.background": colors.GRAY_DEEP,

		// Snippets colors
		"editor.snippetTabstopHighlightBackground": colors.GRAY_DEEP,
		"editor.snippetTabstopHighlightBorder": colors.ACCENT_ORANGE,
		"editor.snippetFinalTabstopHighlightBackground": colors.GRAY_DEEP,
		"editor.snippetFinalTabstopHighlightBorder": colors.ACCENT_ORANGE,

		// Symbol Icons colors
		"symbolIcon.arrayForeground": colors.ORANGE_MEDIUM_LIGHT,
		"symbolIcon.booleanForeground": colors.BLUE_MEDIUM_LIGHT,
		"symbolIcon.classForeground": colors.ORANGE_MEDIUM_LIGHT,
		"symbolIcon.colorForeground": colors.BLUE_LIGHT,
		"symbolIcon.constantForeground": colors.LIME_MEDIUM_LIGHT,
		"symbolIcon.constructorForeground": colors.CYAN_LIGHT,
		"symbolIcon.enumeratorForeground": colors.ORANGE_MEDIUM_LIGHT,
		"symbolIcon.enumeratorMemberForeground": colors.BLUE_MEDIUM_LIGHT,
		"symbolIcon.eventForeground": colors.GRAY_DEEP,
		"symbolIcon.fieldForeground": colors.ORANGE_MEDIUM_LIGHT,
		"symbolIcon.fileForeground": colors.AMBER_MEDIUM,
		"symbolIcon.folderForeground": colors.AMBER_MEDIUM,
		"symbolIcon.functionForeground": colors.CYAN_MEDIUM_LIGHT,
		"symbolIcon.interfaceForeground": colors.ORANGE_MEDIUM_LIGHT,
		"symbolIcon.keyForeground": colors.BLUE_MEDIUM_LIGHT,
		"symbolIcon.keywordForeground": colors.RED_MEDIUM_LIGHT,
		"symbolIcon.methodForeground": colors.CYAN_MEDIUM_LIGHT,
		"symbolIcon.moduleForeground": colors.RED_MEDIUM_LIGHT,
		"symbolIcon.namespaceForeground": colors.RED_MEDIUM_LIGHT,
		"symbolIcon.nullForeground": colors.BLUE_MEDIUM_LIGHT,
		"symbolIcon.numberForeground": colors.LIME_MEDIUM_LIGHT,
		"symbolIcon.objectForeground": colors.ORANGE_MEDIUM_LIGHT,
		"symbolIcon.operatorForeground": colors.BLUE_LIGHT,
		"symbolIcon.packageForeground": colors.ORANGE_MEDIUM_LIGHT,
		"symbolIcon.propertyForeground": colors.ORANGE_MEDIUM_LIGHT,
		"symbolIcon.referenceForeground": colors.BLUE_MEDIUM_LIGHT,
		"symbolIcon.snippetForeground": colors.BLUE_MEDIUM_LIGHT,
		"symbolIcon.stringForeground": colors.BLUE_LIGHT,
		"symbolIcon.structForeground": colors.ORANGE_MEDIUM_LIGHT,
		"symbolIcon.textForeground": colors.BLUE_LIGHT,
		"symbolIcon.typeParameterForeground": colors.BLUE_LIGHT,
		"symbolIcon.unitForeground": colors.BLUE_MEDIUM_LIGHT,
		"symbolIcon.variableForeground": colors.ORANGE_MEDIUM_LIGHT,

		// Debug Icons colors
		"debugIcon.breakpointForeground": colors.RED_MEDIUM_DARK,
		"debugIcon.breakpointDisabledForeground": colors.GRAY_DARK,
		"debugIcon.breakpointUnverifiedForeground": colors.GRAY_DARK,
		"debugIcon.breakpointCurrentStackframeForeground": colors.LIME_MEDIUM,
		"debugIcon.breakpointStackframeForeground": colors.GRAY_DARK,
		"debugIcon.startForeground": colors.LIME_MEDIUM,
		"debugIcon.pauseForeground": colors.AMBER_MEDIUM_LIGHT,
		"debugIcon.stopForeground": colors.RED_MEDIUM_DARK,
		"debugIcon.disconnectForeground": colors.RED_MEDIUM_DARK,
		"debugIcon.restartForeground": colors.ORANGE_MEDIUM,
		"debugIcon.stepOverForeground": colors.LIME_MEDIUM,
		"debugIcon.stepIntoForeground": colors.AMBER_MEDIUM_LIGHT,
		"debugIcon.stepOutForeground": colors.AMBER_MEDIUM_LIGHT,
		"debugIcon.continueForeground": colors.LIME_MEDIUM,
		"debugIcon.stepBackForeground": colors.AMBER_MEDIUM_LIGHT,
		"debugConsole.sourceForeground": colors.AMBER_MEDIUM_LIGHT,
		"debugConsoleInputIcon.foreground": colors.CYAN_MEDIUM_LIGHT,

		// Notebook colors
		"notebook.editorBackground": colors.GRAY_DEEPER,
		"notebook.cellBorderColor": colors.GRAY_DEEP,
		"notebook.cellHoverBackground": colors.GRAY_DEEPER,
		"notebook.cellInsertionIndicator": colors.ACCENT_ORANGE,
		"notebook.cellStatusBarItemHoverBackground": colors.GRAY_DEEP,
		"notebook.cellToolbarSeparator": colors.GRAY_DEEP,
		"notebook.cellEditorBackground": colors.GRAY_DEEPER,
		"notebook.focusedCellBackground": colors.GRAY_DEEPER,
		"notebook.focusedCellBorder": colors.GRAY_MEDIUM,
		"notebook.focusedEditorBorder": colors.GRAY_MEDIUM,
		"notebook.inactiveFocusedCellBorder": colors.GRAY_DEEP,
		"notebook.inactiveSelectedCellBorder": colors.GRAY_DEEP,
		"notebook.outputContainerBackgroundColor": colors.GRAY_DEEPER,
		"notebook.outputContainerBorderColor": colors.GRAY_DEEP,
		"notebook.selectedCellBackground": colors.GRAY_DEEP,
		"notebook.selectedCellBorder": colors.GRAY_DEEP,
		"notebook.symbolHighlightBackground": colors.ACCENT_ORANGE,
		"notebookScrollbarSlider.activeBackground": colors.ACCENT_ORANGE,
		"notebookScrollbarSlider.background": colors.GRAY_DEEP,
		"notebookScrollbarSlider.hoverBackground": colors.GRAY_DEEP,

		"notebookStatusRunningIcon.foreground": colors.ACCENT_ORANGE,
		"notebookStatusSuccessIcon.foreground": colors.SUCCESS_FOREGROUND,
		"notebookEditorOverviewRuler.runningCellForeground": colors.ACCENT_ORANGE,

		// Chart colors
		"charts.foreground": colors.GRAY_DEEP,
		"charts.lines": colors.GRAY_DEEP,
		"charts.red": colors.RED_MEDIUM_DARK,
		"charts.blue": colors.BLUE_DEEP,
		"charts.yellow": colors.AMBER_MEDIUM_LIGHT,
		"charts.orange": colors.ORANGE_MEDIUM_LIGHT,
		"charts.green": colors.LIME_MEDIUM,
		"charts.purple": "#805AD5",

		// Ports Colors
		"ports.iconRunningProcessForeground": colors.LIME_MEDIUM,
	},
	semanticHighlighting: true,
	semanticTokenColors: {
		namespace: { foreground: colors.GRAY_PALER },
		class: { foreground: colors.RED_MEDIUM_DARK },
		"class.declaration": { underline: true },
		interface: { foreground: colors.AMBER_LIGHTER },
		"interface.declaration": { underline: true },
		function: { foreground: colors.ACCENT_ORANGE, italic: true },
		"function.declaration": { underline: true },
		"function.async": { bold: true },
		method: { foreground: colors.ORANGE_MEDIUM_DARK, italic: true },
		"method.declaration": { underline: true },
		variable: { foreground: colors.BLUE_MEDIUM },
		"variable.readonly": {
			foreground: colors.LIME_LIGHT,
			italic: true,
		},
		"variable.declaration": { underline: true },
		property: { foreground: colors.TEAL },
		"property.declaration": {
			underline: true,
		},
		string: { foreground: colors.GRAY_PALEST },
		keyword: { foreground: colors.AMBER_MEDIUM_DARK, bold: true },
		enum: { foreground: colors.AMBER_DARK },
		enumMember: { foreground: colors.AMBER_MEDIUM_DARK },
		typeParameter: { foreground: colors.BLUE_LIGHTER, italic: true },
		regexp: { foreground: colors.RED_DEEP, underline: true },
		comment: { foreground: colors.GRAY_MEDIUM_DARK, italic: true },
		struct: { foreground: colors.GRAY_MEDIUM_LIGHT, bold: true },
		type: { foreground: colors.AMBER_LIGHTER },
		"type.declaration": { underline: true },
		parameter: { foreground: colors.BLUE },
		"parameter.declaration": { underline: true },
		decorator: { foreground: colors.LIME_MEDIUM, bold: true },
		event: { foreground: colors.ORANGE_MEDIUM, italic: true },
		macro: { foreground: colors.GRAY_DARK, bold: true },
		label: { foreground: colors.GRAY_MEDIUM, italic: true },
		number: { foreground: colors.LIME_MEDIUM_LIGHT },
		operator: { foreground: colors.AMBER_LIGHT, bold: true },
	},
	tokenColors: [
		{
			scope: ["variable", "meta.definition.variable"],
			settings: {
				foreground: colors.BLUE_MEDIUM,
			},
		},
		{
			scope: ["entity.name.type.class", "meta.class"],
			settings: {
				foreground: colors.RED_MEDIUM_DARK,
			},
		},
		{
			scope: ["entity.name.type.interface", "meta.interface"],
			settings: {
				foreground: colors.AMBER_LIGHT,
			},
		},
		{
			scope: ["variable.parameter"],
			settings: {
				foreground: colors.BLUE,
			},
		},
		{
			scope: ["storage.type"],
			settings: {
				foreground: colors.GRAY_PALEST,
			},
		},
		{
			scope: ["storage.type.function"],
			settings: {
				foreground: colors.ACCENT_ORANGE,
			},
		},
		{
			scope: ["entity.name.function"],
			settings: {
				foreground: colors.ACCENT_ORANGE,
				fontStyle: "italic",
			},
		},
		{
			scope: [
				"variable.other.property",
				"support.type.property-name",
				"meta.object-literal.key",
			],
			settings: {
				foreground: colors.TEAL,
			},
		},
		{
			scope: ["variable.other.object"],
			settings: {
				foreground: colors.RED_MEDIUM_LIGHT,
			},
		},
		{
			scope: ["constant", "variable.other.constant"],
			settings: {
				foreground: colors.LIME_MEDIUM_LIGHT,
			},
		},
		{
			scope: ["string"],
			settings: {
				foreground: colors.GRAY_PALER,
			},
		},
		{
			scope: ["comment"],
			settings: {
				foreground: colors.GRAY_MEDIUM_DARK,
				fontStyle: "italic",
			},
		},
		{
			scope: [
				"keyword.control.import",
				"keyword.control.export",
				"keyword.control.from",
				"keyword.control.as",
			],
			settings: {
				foreground: colors.GRAY_MEDIUM,
			},
		},
		{
			scope: [
				"keyword.operator.type",
				"support.type",
				"entity.name.type",
				"meta.type.declaration",
			],
			settings: {
				foreground: colors.AMBER_LIGHTER,
			},
		},
		{
			scope: [
				"keyword.operator.ternary",
				"keyword.operator.logical",
				"keyword.operator.arithmetic",
				"keyword.operator.comparison",
				"keyword.operator.optional",
				"keyword.operator.relational",
				"punctuation.accessor.optional",
				"keyword.operator.assignment",
				"keyword.control.trycatch",
				"keyword.control.conditional",
				"keyword.control.switch",
				"keyword.control.while",
				"keyword.control.for",
				"keyword.control.loop",
				"markup.fenced_code",
			],
			settings: {
				foreground: colors.AMBER_LIGHT,
				fontStyle: "bold",
			},
		},
		{
			scope: [
				"keyword.control.flow",
				"keyword.generator.asterisk",
				"keyword.operator.new",
				"storage.modifier",
				"meta.link.inline",
				"markup.inline.raw",
				"keyword.strong",
				"meta.tag",
			],
			settings: {
				foreground: colors.AMBER_LIGHT,
			},
		},
		{
			scope: [
				"keyword.control.export",
				"keyword.control.import",
				"keyword.control.as",
				"keyword.control.from",
				"keyword",
			],
			settings: {
				foreground: colors.AMBER_LIGHTEST,
			},
		},
		{
			scope: ["heading"],
			settings: {
				foreground: colors.GRAY_LIGHT,
			},
		},
		{
			scope: ["heading.1"],
			settings: {
				fontStyle: "bold",
			},
		},
		{
			scope: ["meta.paragraph.markdown"],
			settings: {
				foreground: colors.GRAY_MEDIUM_LIGHT,
			},
		},
		{
			scope: ["meta.link.inline"],
			settings: {
				foreground: colors.ORANGE_LIGHTER,
			},
		},
	],
};

Bun.write(
	"./themes/consolvis-dark-theme.json",
	JSON.stringify(darkTheme, null, 2),
);
