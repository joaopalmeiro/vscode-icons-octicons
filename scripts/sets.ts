import { Codicon } from './ids';

export interface IconSet {
    name: string;
    display: string;
    // https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
    // https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
    icons: Partial<Record<Codicon, string>>;
}

// https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
// https://icon-sets.iconify.design/octicon/
// https://icon-sets.iconify.design/codicon/
export const sets: IconSet[] = [
    {
        name: 'icons-octicons',
        display: 'Octicons',
        icons: {
            'codicon:extensions': 'octicon:accessibility-16'
        }
    }
];
