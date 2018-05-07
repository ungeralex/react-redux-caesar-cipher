import {handleResponse, requestOptions, URL} from "../util/serviceHelper";

const keyService = {
    sendKeyToServer
};

function sendKeyToServer(key) {
    return fetch(URL + '/sendKey', requestOptions('POST', key))
        .then(handleResponse);
}

export default keyService;

