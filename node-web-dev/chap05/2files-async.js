const fs = require('fs-extra');
const util = require('util');

async function twoFiles() {
    var texts = [
        await fs.readFile('hello1.txt','utf8'),
        await fs.readFile('goodbye.txt','utf8')
    ];
    console.log(util.inspect(texts));
}

twoFiles().catch(err => { console.error(err)});