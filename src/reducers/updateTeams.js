const updateTeamsReducer = (state = true, action) => {
    switch (action.type) {
        case 'NO':
            return false;
        default:
            return state;
    }
}

export default updateTeamsReducer;