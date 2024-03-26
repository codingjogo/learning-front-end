export const initialState = {
    selectedId: 0, // default value named Taylor
    messages: {
        0: 'Hello, Taylor',
        1: 'Hello, Alice',
        2: 'Hello, Bob',
    }
};

export function messengerReducer(state, action) {
    switch (action.type) {
        case "changed_selection": {
            return {
                ...state,
                selectedId: action.contactId,
                message: "",
            };
        }
        case "edited_message": {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    // this will get the selectedID then clear the input field from textarea
                    [state.selectedId]: action.message,
                }
            };
        }
        // clears field
        case "sent_message": {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    // this will get the selectedID then clear the input field from textarea
                    [state.selectedId]: '',
                }
            };
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}
