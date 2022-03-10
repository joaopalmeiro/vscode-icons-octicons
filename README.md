# vscode-icons-octicons

[Octicons](https://github.com/primer/octicons) Visual Studio Code product icon theme.

## References

- [Carbon Product Icons](https://marketplace.visualstudio.com/items?itemName=antfu.icons-carbon) by [Anthony Fu](https://github.com/antfu) ([repo](https://github.com/antfu/vscode-icons-carbon)).
- [Feather Product Icons](https://marketplace.visualstudio.com/items?itemName=melishev.feather-vscode) by [Matvey Melishev](https://github.com/melishev) ([repo](https://github.com/melishev/feather-vscode/)).
- [Codicons](https://github.com/microsoft/vscode-codicons).

## Development

- `pnpm install`.

## Notes

- VS Code:
  - [Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest) (`package.json`).
  - [Product Icon Reference](https://code.visualstudio.com/api/references/icons-in-labels#icon-listing):
    - `vscode-codicons` 0.0.14:
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
- [FontDrop!](https://fontdrop.info/).
