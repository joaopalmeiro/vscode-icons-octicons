import fs from 'fs-extra';
// @ts-ignore
import gen from 'webfonts-generator';
import pkg from '../package.json';
import { sets } from './sets';

const VERSION: string = pkg.version;
const ENGINE: string = pkg.engines.vscode;
const JSON_SPACE: number = 4;

const START_CODEPOINT: number = 0xe000;

function formatUnicode(unicode: number): string {
    return '\\' + unicode.toString(16);
}

// Source: https://github.com/antfu/vscode-icons-carbon/blob/master/scripts/build.ts
for (const set of sets) {
    const name = set.name;
    const displayName = set.display;

    fs.removeSync('temp');
    fs.ensureDirSync('temp/dist');
    fs.ensureDirSync('temp/icons');
    fs.ensureDirSync(`build/${name}`);
    fs.emptyDirSync(`build/${name}`);

    const icons = Object.entries(set.icons).map(([k, v]) => {
        k = k.replace('codicon:', '');
        const [id, name] = v.split(':');

        const json = require(`@iconify/json/json/${id}.json`);
        const icon = json.icons[name];

        const body = icon.body;
        const width = icon.width;
        const height = icon.height;

        // https://github.com/primer/octicons/blob/main/icons/person-24.svg?short_path=a933134
        fs.writeFileSync(
            `temp/icons/${k}.svg`,
            `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`,
            'utf-8'
        );

        return k;
    });

    gen(
        {
            files: icons.map((i) => `./temp/icons/${i}.svg`),
            dest: `./temp/dist`,
            types: ['woff'],
            fontName: name,
            css: false,
            html: true,
            startCodepoint: START_CODEPOINT
            // https://github.com/antfu/vscode-icons-carbon/pull/1
            // https://github.com/nfroidure/svgicons2svgfont#optionsnormalize
            // https://github.com/nfroidure/svgicons2svgfont#optionsfontheight
            // fontHeight: 1000,
            // normalize: true
        },
        (error: any) => {
            if (error) {
                console.log('Font creation failed.', error);
                process.exit(1);
            }

            fs.copyFileSync(`./temp/dist/${name}.woff`, `build/${name}/${name}.woff`);
        }
    );

    fs.writeJSONSync(
        `build/${name}/${name}.json`,
        {
            fonts: [
                {
                    id: name,
                    src: [
                        {
                            path: `./${name}.woff`,
                            format: 'woff'
                        }
                    ],
                    weight: 'normal',
                    style: 'normal'
                }
            ],

            iconDefinitions: Object.fromEntries(
                icons.map((i, idx) => [i, { fontCharacter: formatUnicode(START_CODEPOINT + idx) }])
            )
        },
        { spaces: JSON_SPACE }
    );

    fs.writeJSONSync(
        `build/${name}/package.json`,
        {
            name: name,
            publisher: 'joaopalmeiro',
            version: pkg.version,
            displayName: `${displayName} Product Icons`,
            description: `${displayName} Product Icons for VS Code`,
            categories: ['Themes'],
            engines: {
                vscode: pkg.engines.vscode
            },
            license: 'MIT',
            keywords: [displayName.toLowerCase(), 'icon', 'theme', 'product', 'product-icon-theme'],
            extensionKind: ['ui'],
            contributes: {
                productIconThemes: [
                    {
                        id: name,
                        label: `${displayName} Icons`,
                        path: `./${name}.json`
                    }
                ]
            },
            repository: {
                type: 'git',
                url: 'git+https://github.com/joaopalmeiro/vscode-icons-octicons.git'
            },
            bugs: {
                url: 'https://github.com/joaopalmeiro/vscode-icons-octicons/issues'
            },
            homepage: 'https://github.com/joaopalmeiro/vscode-icons-octicons#readme',
            author: {
                name: 'João Palmeiro',
                email: 'jm.palmeiro@campus.fct.unl.pt',
                url: 'https://joaopalmeiro.github.io/'
            }
        },
        { spaces: JSON_SPACE }
    );

    fs.copySync('README.md', `build/${name}/README.md`);
}
