//Simple example of running the command 'ls' in the terminal.

const fs = require('fs');
const util = require('util');
const fs_readdir = util.promisify(fs.readdir);

(async () => {
    const files = await fs_readdir('.');
    for (let fn of files) {
        console.log(fn);
    }
})().catch(err => { console.error(err); }); 