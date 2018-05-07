import keyConstants from "../constants/KeyConstants";

export function sendKeyToServer(state = [], action) {
    switch (action.type) {
        case keyConstants.SEND_KEY_SUCCESS:
            return {
                response: action.response
            };
        case keyConstants.SEND_KEY_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}