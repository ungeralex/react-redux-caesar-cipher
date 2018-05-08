import {handleResponse, URL} from "../util/serviceHelper";

const codeService = {
    sendTextWithKeyToServer
};

function sendTextWithKeyToServer(text, shift, codeType) {
    return fetch(URL + '/resolveText', {
        method: 'POST',
        body: JSON.stringify({
            text: text,
            shift: shift,
            codeType: codeType
        }),
        headers: {"Content-Type": "application/json"}
    })
        .then(handleResponse);
}

export default codeService;

