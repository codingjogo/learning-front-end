export const initialState = {
    selectedId: 0,
    messages: {
        0: '123',
        1: '',
        2: '',
    }
}

export const messengerReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGED_SELECTION' : {
            return {
                ...state,
                selectedId: action.contactId,
            }
        }

        case 'EDITED_MESSAGE': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message
                }
            }
        }

        case 'SENT_MESSAGE': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: ''
                }
            }
        }
    }
}