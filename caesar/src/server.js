let express = require('express');
let app = express();

app.post('/api/sendKey', function (req, res) {
    console.log("Got a POST request to save key");
    res.send('Hello POST');
});

let server = app.listen(8081, () => {

    let host = server.address().address;
    let port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});