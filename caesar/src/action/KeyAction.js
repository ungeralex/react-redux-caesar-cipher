import keyConstants from "../constants/KeyConstants";
import keyService from "../service/KeyService";

export const keyAction = {
    sendKeyToServer
};

function sendKeyToServer(key) {
    return dispatch =>
        keyService.sendKeyToServer(key)
            .then(
                response => dispatch(sendKeySuccess(response)),
                error => dispatch(sendKeyFailure(error))
            );

    function sendKeySuccess(response) { return { type: keyConstants.SEND_KEY_SUCCESS, response }; }
    function sendKeyFailure(error) { return { type: keyConstants.SEND_KEY_FAILURE, error }; }
}