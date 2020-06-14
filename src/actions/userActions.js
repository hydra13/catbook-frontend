export const setUser = user => dispatch => {
    console.log(`setUser: ${JSON.stringify(user)}`)
    dispatch({
        type: 'SET_USER',
        payload: user
    });
};

export const resetUser = () => dispatch => {
    dispatch({
        type: 'SET_USER',
        payload: null
    });
}