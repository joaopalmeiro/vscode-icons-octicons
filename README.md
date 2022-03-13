# vscode-icons-octicons

[Octicons](https://github.com/primer/octicons) Visual Studio Code product icon theme.

## References

- [Carbon Product Icons](https://marketplace.visualstudio.com/items?itemName=antfu.icons-carbon) by [Anthony Fu](https://github.com/antfu) ([repo](https://github.com/antfu/vscode-icons-carbon)).
- [Feather Product Icons](https://marketplace.visualstudio.com/items?itemName=melishev.feather-vscode) by [Matvey Melishev](https://github.com/melishev) ([repo](https://github.com/melishev/feather-vscode/)).
- [Codicons](https://github.com/microsoft/vscode-codicons).
- [Octicons](https://primer.style/octicons/).
- [GitHub Logos and Usage](https://github.com/logos).

## Development

- `pnpm install`.
- `pnpm build:ids`.
- `pnpm build`.
- macOS: `Fn`+`F5`.

## Deployment

- `pnpm version minor` or `pnpm version patch` or `pnpm version major`.
- `git tag`.
- `git push --follow-tags`.

## Notes

- Figma:
  - [react-profile-icons](https://www.figma.com/file/tibfRu8o2yQOaDZKwuJkVh/react-profile-icons?node-id=0%3A1).
  - [vscode-icons-octicons](https://www.figma.com/file/dsXalxOwiH6jq3SbjU2xhM/vscode-icons-octicons?node-id=0%3A1).
- VS Code:
  - [Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest) (`package.json`):
    - `icon`: at least 256x256 pixels.
  - [Product Icon Reference](https://code.visualstudio.com/api/references/icons-in-labels#icon-listing):
    - [`vscode-codicons` 0.0.14](https://github.com/microsoft/vscode-codicons/tree/0.0.14):
      - [`yarn.lock` file](https://github.com/microsoft/vscode/blob/release/1.65/extensions/simple-browser/yarn.lock#L16) and [`package.json` file](https://github.com/microsoft/vscode/blob/release/1.65/extensions/simple-browser/package.json#L76).
      - [`ThirdPartyNotices.txt` file](https://github.com/microsoft/vscode/blob/release/1.65/ThirdPartyNotices.txt#L72).
      - [`cgmanifest.json` file](https://github.com/microsoft/vscode/blob/release/1.65/cgmanifest.json#L133) ([0.0.14 release](https://github.com/microsoft/vscode-codicons/releases/tag/0.0.14)).
  - "Product Icon Themes can replace each icon individually, as well as all icons from the codicon library."
  - [Product Icon Theme](https://code.visualstudio.com/api/extension-guides/product-icon-theme).
  - [Product Icon Theme Sample](https://github.com/microsoft/vscode-extension-samples/tree/main/product-icon-theme-sample).
  - [February 2022 (version 1.65)](https://code.visualstudio.com/updates/v1_65):
    - [Codicons](https://github.com/microsoft/vscode/blob/release/1.65/src/vs/base/common/codicons.ts) and [font](https://github.com/microsoft/vscode/tree/release/1.65/src/vs/base/browser/ui/codicons/codicon).
    - [`vscode-codicons` 0.0.28](https://github.com/microsoft/vscode-codicons/releases/tag/0.0.28) ([icons](https://github.com/microsoft/vscode-codicons/tree/0.0.28/src/icons)).
  - [Vitesse Theme](https://marketplace.visualstudio.com/items?itemName=antfu.theme-vitesse).
  - [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension).
  - [Approved Badges](https://code.visualstudio.com/api/references/extension-manifest#approved-badges).
- [FontDrop!](https://fontdrop.info/).
- `pnpm install --save-dev @octokit/request`.
- `pnpm install --save-dev typescript esno`.
- `pnpm install --save-dev lodash @types/lodash`.
- `pnpm install --save-dev fs-extra @types/fs-extra`.
- `pnpm install --save-dev dedent @types/dedent`.
- `pnpm install --save-dev prettier @types/prettier @joaopalmeiro/prettier-config`.
- `pnpm install --save-dev webfonts-generator @iconify/json`.
- [conventional-github-releaser](https://www.npmjs.com/package/conventional-github-releaser) package.
- [Open VSX](https://open-vsx.org/):
  - [Publish to open-vsx](https://github.com/antfu/vscode-icons-carbon/issues/9) issue.
  - [Publishing Extensions](https://github.com/eclipse/openvsx/wiki/Publishing-Extensions).
  - [Repo](https://github.com/eclipse/openvsx).
  - [VSCodium](https://vscodium.com/).
  - `npx ovsx create-namespace joaopalmeiro -p <token>`.
- GitHub topics:
  - vscode
  - vscode-extension
  - vscode-product-icons
- `pnpm install --save-dev vsce ovsx`.
- [Publisher profile](https://marketplace.visualstudio.com/publishers/joaopalmeiro).
