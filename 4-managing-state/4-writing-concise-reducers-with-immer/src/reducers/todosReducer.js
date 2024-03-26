export const todosReducer = (draft, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            draft.push({
                id: action.id,
                text: action.text,
                done: false
            })

            break;
        }
        
        case 'CHANGED_TODO': {
            const index = draft.findIndex((todo) => todo.id === action.todo.id)
            draft[index] = action.todo;

            break;
        }
        
        case 'DELETE_TODO': {
            return draft.filter((todo) => todo.id !== action.id)
        }
    }
}