import { request } from '@octokit/request';
import dedent from 'dedent';
import fs from 'fs-extra';
import { find, join, map } from 'lodash';
import { parse } from 'path';
import prettier from 'prettier';

// https://www.typescriptlang.org/docs/handbook/2/objects.html
// https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types
// https://www.typescriptlang.org/docs/handbook/basic-types.html
const ENDPOINT: string = 'GET /repos/{owner}/{repo}/git/trees/{tree_sha}';
const OWNER: string = 'microsoft';
const REPO: string = 'vscode-codicons';

const HEADER: string = 'export type IDS =';
const FOOTER: string = 'export type Codicon = `codicon:${IDS}`;';

// https://dmitripavlutin.com/typescript-index-signatures/
// https://github.com/octokit/types.ts/blob/master/src/RequestParameters.ts
function prepareFilename(n: { path: string; [index: string]: number | string }): string {
    const filename = parse(n.path).name;

    return `| '${filename}'`;
}

// https://docs.github.com/en/rest/reference/git#get-a-tree
// https://github.com/microsoft/vscode-codicons/tree/0.0.14/src/icons
// https://waiyanyoon.com/blog/2019-05-22---introduction-to-promise/
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
request(ENDPOINT, {
    owner: OWNER,
    repo: REPO,
    tree_sha: '0.0.14'
})
    .then(({ data }) => {
        const srcSha = find(data.tree, ['path', 'src'])?.sha;

        return request(ENDPOINT, {
            owner: OWNER,
            repo: REPO,
            tree_sha: srcSha!
        });
    })
    .then(({ data }) => {
        const srcSha = find(data.tree, ['path', 'icons'])?.sha;

        return request(ENDPOINT, {
            owner: OWNER,
            repo: REPO,
            tree_sha: srcSha!
        });
    })
    .then(({ data }) => {
        // const filenames = map(data.tree, "path");
        const filenames = map(data.tree, prepareFilename);
        const ids = join(filenames, '\n');

        const fileContent = dedent`
        ${HEADER}
        ${ids}
        
        ${FOOTER}
        `;

        // https://prettier.io/docs/en/api.html#prettierresolveconfigfilepath--options
        const prettierOptions = prettier.resolveConfig.sync('.prettierrc.json');

        fs.writeFileSync(
            'scripts/ids.ts',
            prettier.format(fileContent, { ...prettierOptions, parser: 'typescript' }),
            'utf-8'
        );
    });
