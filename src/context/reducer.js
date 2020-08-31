export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
                // if set user do it! 
            return {
                ...state,
                user: action.user
            }
        default:
            
    }
}

export default reducer;