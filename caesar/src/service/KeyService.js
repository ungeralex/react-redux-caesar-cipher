import {handleResponse, URL} from "../util/serviceHelper";

const keyService = {
    sendKeyToServer
};

function sendKeyToServer(key) {
    return fetch(URL + '/sendKey', {
        method: 'POST',
        body: JSON.stringify({
            key: key
        }),
        headers: {"Content-Type": "application/json"}
    })
        .then(handleResponse);
}

export default keyService;

