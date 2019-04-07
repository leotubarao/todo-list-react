export default function todos(state = [], action) {
    switch (action.type) {
        case "ADD_TODO":
        return [...state, { id: Date.now(), text: action.payload.text }];
        case "DELETE_TODO":
        return state.filter(todo => todo.id !== action.id);
        default:
        return state;
    }
}