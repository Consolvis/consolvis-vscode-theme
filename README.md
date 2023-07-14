# Consolvis Theme 👨‍🚀

[Install on VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=consolvis.consolvis-vscode-theme)

As fellow voyagers in the dynamic realm of IT, we like tinkering and experimenting with new tools and technologies. This theme results from one such experiment, where we've tried to create a simple, clean, and minimalistic Visual Studio Code theme following our brand colors. 🚀

We've tested it on TypeScript files, where it works best, but it should also work well with other languages. 🤞🏽

The color scheme of this theme is straightforward. We designed to keep your focus on the content while using color to draw attention to key elements. 🎨

It highlights functions and classes in orange or red. Types and interfaces use light yellow tones. Constants are marked green, and variables are light blue. Properties are in teal, strings in white, and ternaries and conditionals are in yellow. Most other elements are greyish to keep your attention on these critical parts of your code.

We plan to update this theme and make it better. Your feedback would be valuable to us. Thanks for your understanding and support! 🙏🏽

## 📫 Reach us on

[![YouTube Badge](https://img.shields.io/youtube/channel/subscribers/UCBBAshw8YGzhF54lbNrmtUQ?style=for-the-badge&label=YouTube&logo=Youtube&color=FE420D)](https://www.youtube.com/@consolvis?sub_confirmation=1)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-Profile-informational?style=for-the-badge&logo=linkedin&color=FE420D)](https://www.linkedin.com/in/tobias-steckenborn/)
[![Twitter Badge](https://img.shields.io/badge/Twitter-Profile-informational?style=for-the-badge&logo=twitter&color=FE420D)](https://twitter.com/tsteckenborn)
[![GitHub badge](https://img.shields.io/github/followers/tsteckenborn?label=GitHub&logo=GitHub&style=for-the-badge&color=FE420D)](https://github.com/tsteckenborn)
[![SAP Community](https://img.shields.io/badge/SAP_Community-Profile-informational?style=for-the-badge&logo=SAP&color=FE420D)](https://people.sap.com/tobias_steckenborn)

<hr>

## 📷 Screenshots

### TypeScript

![Sample 1](https://raw.githubusercontent.com/Consolvis/consolvis-vscode-theme/main/assets/sample1.png)

![Sample 2](https://raw.githubusercontent.com/Consolvis/consolvis-vscode-theme/main/assets/sample2.png)

![Sample 3](https://raw.githubusercontent.com/Consolvis/consolvis-vscode-theme/main/assets/sample3.png)

### TSX

![Sample 4](https://raw.githubusercontent.com/Consolvis/consolvis-vscode-theme/main/assets/sample4.png)

<hr>

## Installation

Follow these steps to install and apply the Consolvis Dark Theme on Visual Studio Code:

1. Open the **Extensions** sidebar.
2. Enter `Consolvis Dark Theme` in the search bar.
3. Press **Install**.
4. Click **Reload** to refresh your editor.
5. Navigate: `Code/File` ＞ `Preferences` ＞ `Color Theme`, then select **Consolvis Dark Theme**.
6. _Optional:_ Adjust your settings as per our recommendations for the optimal experience.
7. Share your feedback for improvement via our [GitHub Repository](https://github.com/Consolvis/consolvis-vscode-theme/discussions).

## Recommended Settings

In the screenshots we made the following settings:

```json
{
  // This is all that matters
  "workbench.colorTheme": "Consolvis Dark Theme",
  // Other settings
  "editor.fontFamily": "FiraCode Nerd Font, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 17,
  "editor.fontWeight": "400",
  "editor.formatOnPaste": false,
  "editor.formatOnSave": true,
  "editor.glyphMargin": true,
  "editor.guides.bracketPairs": "active",
  "editor.guides.bracketPairsHorizontal": "active",
  "editor.hover.enabled": true,
  "editor.inlineSuggest.enabled": true,
  "editor.letterSpacing": 0.5,
  "editor.lightbulb.enabled": false,
  "editor.lineHeight": 25,
  "editor.cursorBlinking": "solid",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorStyle": "line",
  "editor.cursorWidth": 5,
  "editor.renderWhitespace": "selection",
  "editor.smoothScrolling": true,
  "terminal.integrated.fontFamily": "FiraCode Nerd Font, Menlo, Monaco, 'Courier New', monospace"
}
```

The font used is [FiraCode NerdFont](https://www.nerdfonts.com/font-downloads).

## You'd recommend to change something?

This is a new theme and we're still smoothing out the edges. Found an issue or a part of VS Code that doesn't look quite right? Please, open an [issue](https://github.com/Consolvis/consolvis-vscode-theme/issues)!

We have control over [these theme settings](https://code.visualstudio.com/docs/getstarted/theme-color-reference). Want to change something? You can submit a PR or simply adjust the colors in your `settings.json` file.

We're open to PRs, issues, and feedback on our [GitHub Repository](https://github.com/Consolvis/consolvis-vscode-theme).

## Contributing

For working on the theme:

1. Clone this repo and open in VS Code.
2. Run `bun install` after [installing bun](https://bun.sh/).
3. Use `bun watch` for auto-compiling and updating the theme.
4. Open `View → Run`.
5. Click `Launch Extension` to open a new VS Code Editor.
6. Edit files in the `src` folder and see changes live in the new editor.
7. When you're happy run `bun changeset` to generate the a changeset and submit the pull request.

When submitting a Pull Request, please include before/after screenshots.

<hr>

<div align="center">

## Show some ❤️

</div>
