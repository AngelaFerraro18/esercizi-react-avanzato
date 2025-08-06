function taskReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.text,
                    completed: false
                }
            ];

        case 'remove':
            return state.filter(todo => todo.id !== action.id);

        case 'toggle':
            return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
        default: state;
    }
}

export default taskReducer;
