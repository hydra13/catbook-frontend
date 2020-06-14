const initState = {
    user: null
}
export default function reducer(state = initState, action) {
    switch (action.type) {
        case 'SET_USER': {
            return { ...state, user: action.payload }
        }
        default:
            return state;
    }
}