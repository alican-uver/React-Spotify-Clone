export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    chill_tracks: null,
    token: "BQC-OpK0uZDoyt56Dkp6bSp8bAX7yNy26lJUyWN1MNvCZ332BTinuJKJjsX2EAuoqOojNpej9VnKB3leExt5I01EnKsrgw3317_TFakHEFn99ut30cGoM6DpQJiJJpgx2k6tcmHfhxuEFre5K6SX-sT5FbR9qMv30Q"
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_CHILL_TRACKS':
            return {
                ...state,
                chill_tracks: action.response
            }
        default:
            return state;
    } 
}

export default reducer;