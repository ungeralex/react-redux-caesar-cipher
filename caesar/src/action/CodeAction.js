import codeService from "../service/CodeService";
import codeConstants from "../constants/CodeConstants";

export const codingAction = {
    sendTextWithKeyToServer
};

function sendTextWithKeyToServer(text, shift, codeType) {
    return dispatch =>
        codeService.sendTextWithKeyToServer(text, shift, codeType)
            .then(
                response => dispatch(sendTextWithKeySuccess(response)),
                error => dispatch(sendTextWithKeyFailure(error))
            );

    function sendTextWithKeySuccess(response) { return { type: codeConstants.SEND_TEXT_WITH_KEY_SUCCESS, response }; }
    function sendTextWithKeyFailure(error) { return { type: codeConstants.SEND_TEXT_WITH_KEY_FAILURE, error }; }
}