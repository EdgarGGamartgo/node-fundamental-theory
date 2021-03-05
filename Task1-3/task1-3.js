import  readline  from 'readline'
import csvtojson from 'csvtojson'
import fs from 'fs'

const csvfilepath = "./csv/nodejs-hw1-ex1.csv"

export var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// jsonToText without pipeline method
export async function jsonToText () {
    try {
        const json = await csvtojson().fromFile(csvfilepath)
        let formattedJson = JSON.stringify(json).substring(1, JSON.stringify(json).length-1).split('},');
        let rowFormat = ''
        formattedJson.forEach(s => rowFormat = `${rowFormat}${s}}\n`);
        rowFormat = rowFormat.substring(0, rowFormat.length-2);
        fs.writeFile('./Task1-3/nodejs-hw1-ex1.txt', rowFormat, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    } catch(e) {
        console.log(`Read/Write Error: ${e}`);
    }
}

// jsonToText with pipeline method
export function jsonToTextPipelineMethod () {
    try {
        var readStream = fs.createReadStream(csvfilepath);
        var writeStream = fs.createWriteStream("./Task1-3/nodejs-hw1-ex1-pipeline-method.txt");
        readStream.pipe(writeStream);
    } catch(e) {
        console.log(`Read/Write Pipeline method Error: ${e}`);
    }
}

rl.on('line', function(line){
    console.log(line.split("").reverse().join(""));
})

jsonToText()
jsonToTextPipelineMethod()

