let express = require('express');
let bodyParser = require('body-parser');
let cache = require('memory-cache');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/sendKey', (req, res) => {
    console.log("Got a POST request to save key");
    let key = req.body.key;
    if (cache.get(key) !== undefined) {
        res.write(JSON.stringify(key.length));
    } else {
        cache.put(key, key.length);
        res.write(JSON.stringify(key.length));
    }
    res.sendStatus(200);
});

app.post('/api/resolveText', (req, res) => {
    console.log("Got a POST request to encode/decode text");
    let text = req.body.text;
    let shift = req.body.shift;
    let codeType = req.body.codeType;
    
    let codedText = '';
    if (codeType === 'encode') {
        for (let i = 0; i < text.length; i ++) {
            let c = text[i];
            if (c.match(/[a-z]/i)) {
                let code = text.charCodeAt(i);
                if ((code >= 65) && (code <= 90))
                    c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
                else if ((code >= 97) && (code <= 122))
                    c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
            codedText += c;
        }
    } else {
        for(let i = 0; i < text.length; i++) {
            let cipherCharacter = text.charCodeAt(i);
            if(cipherCharacter >= 97 && cipherCharacter <= 122) {
                codedText += String.fromCharCode((cipherCharacter - 97 - shift + 26) % 26 + 97);
            } else if(cipherCharacter >= 65 && cipherCharacter <= 90) {
                codedText += String.fromCharCode((cipherCharacter - 65 - shift + 26) % 26 + 65);
            } else {
                codedText += String.fromCharCode(cipherCharacter);
            }
        }
    }

    res.write(JSON.stringify(codedText));
    res.sendStatus(200);
});

let server = app.listen(8080, () => {

    let host = server.address().address;
    let port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
});