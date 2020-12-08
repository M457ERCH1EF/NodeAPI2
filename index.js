const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// slice(2) to skip first 2 system arguments since the input arguments will start as 3rd arguments
let myArgs = process.argv.slice(2)

//set the default port
let portnum = 8000

let msg=""

console.log(myArgs)
// if got arguments
if (myArgs) {
    for (const item in myArgs) {
        // read the array content
        let str = myArgs[item]
        // check for port argument if the content contains p:
        if (str.includes("p:")) {
            //get the port number
            portnum = str.replace("p:","")
        // check for message argument if the content contains m:
        } else if (str.includes("m:")) {
            //get the message
            msg = str.replace("m:","")
        } else {
            console.log('no args :>> ', str);
        } 
    }
}
//if no arguments
else {
    console.log("No arguments");
}
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.send('Test API ' + msg);
});

app.get('/api/name', (req, res) => {
    res.json({name: 'My name is Envoy'})
});

app.listen(portnum, () => {
    console.log('Node API app listening on port ' + portnum + '!!');
});

