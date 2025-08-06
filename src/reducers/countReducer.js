// reducer per il contatore 

function counReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default: state;
    }
}

export default counReducer;