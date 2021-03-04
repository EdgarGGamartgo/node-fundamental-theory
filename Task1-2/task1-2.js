

const csvtojson = require('csvtojson')
const fs = require('fs')

const csvfilepath = "./csv/nodejs-hw1-ex1.csv"

async function jsonToText () {
    try {
        const json = await csvtojson().fromFile(csvfilepath)
        let formattedJson = JSON.stringify(json).substring(1, JSON.stringify(json).length-1).split('},');
        let rowFormat = ''
        formattedJson.forEach(s => rowFormat = `${rowFormat}${s}}\n`);
        rowFormat = rowFormat.substring(0, rowFormat.length-2);
        fs.writeFile('./Task1-2/nodejs-hw1-ex1.txt', rowFormat, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    } catch(e) {
        console.log(`Read/Write Error: ${e}`);
    }
}

jsonToText()