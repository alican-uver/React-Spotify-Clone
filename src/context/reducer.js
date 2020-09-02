export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQC-OpK0uZDoyt56Dkp6bSp8bAX7yNy26lJUyWN1MNvCZ332BTinuJKJjsX2EAuoqOojNpej9VnKB3leExt5I01EnKsrgw3317_TFakHEFn99ut30cGoM6DpQJiJJpgx2k6tcmHfhxuEFre5K6SX-sT5FbR9qMv30Q"
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
                // if set user do it! 
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN': 
            return {
                ...state, 
                token: action.token,
            }
        default:
    }
}

export default reducer;