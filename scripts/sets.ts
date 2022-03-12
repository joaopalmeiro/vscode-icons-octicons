import { Codicon } from './ids';

export interface IconSet {
    name: string;
    display: string;
    // https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
    // https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
    icons: Partial<Record<Codicon, string>>;
}

const VALUE_PREFIX: string = 'octicon';

// https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
// https://icon-sets.iconify.design/octicon/
// https://primer.style/octicons/
// https://icon-sets.iconify.design/codicon/
// https://github.com/antfu/vscode-icons-carbon/blob/v0.2.4/scripts/sets.ts
export const sets: IconSet[] = [
    {
        name: 'icons-octicons',
        display: 'Octicons',
        icons: {
            'codicon:account': `${VALUE_PREFIX}:person-24`,
            'codicon:files': `${VALUE_PREFIX}:file-directory-24`,
            'codicon:search': `${VALUE_PREFIX}:search-24`,
            'codicon:source-control': `${VALUE_PREFIX}:git-branch-24`
        }
    }
];
