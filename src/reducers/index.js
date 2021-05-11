const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LANG_TO_ENGLISH':
            return {
                ...state,
                language: 'English'
            };
        case 'CHANGE_LANG_TO_SPANISH':
            return {
                ...state,
                language: 'Spanish'
            };
        case 'OPEN_MENU':
            return {
                ...state,
                showingMenu: true
            };
        case 'CLOSE_MENU':
            return {
                ...state,
                showingMenu: false
            };
        // case 'SIGN_IN':
        //     return { };
        // case 'SIGN_OUT':
        //     return { };
        default:
            return state;
    }
};

export default reducer;