import pkg from '../package.json';
import { sets } from './sets';
import fs from 'fs-extra';

const VERSION = pkg.version;
const ENGINE = pkg.engines.vscode;

const START_CODEPOINT = 0xe000;

for (const set of sets) {
    const name = set.name;
    const displayName = set.display;

    fs.removeSync('temp');
    fs.ensureDirSync('temp/dist');
    fs.ensureDirSync('temp/icons');
    fs.ensureDirSync(`build/${name}`);
    fs.emptyDirSync(`build/${name}`);

    console.log(set.icons);
}
