function formReducer(state, action) {
    switch (action.type) {
        case 'update_field':
            return { ...state, [action.field]: action.value };
        case 'reset':
            return {
                name: '',
                email: '',
                password: ''
            }


        default: state;
    }
}

export default formReducer;