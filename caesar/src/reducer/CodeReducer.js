import codeConstants from "../constants/CodeConstants";

export function sendTextWithKeyToServer(state = [], action) {
    switch (action.type) {
        case codeConstants.SEND_TEXT_WITH_KEY_SUCCESS:
            return {
                response: action.response
            };
        case codeConstants.SEND_TEXT_WITH_KEY_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}