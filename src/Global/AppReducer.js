export default function AppReducer(state, action) {
    switch(action.type) {
        case "ADD_ANIME_TO_ACTIVE": // moves anime to active watchlist
            return {
                ...state,
                activeAnimeList: [action.payload, ...state.activeAnimeList], // adds anime to list
            };
        case "REMOVE_ANIME_BOTH_LIST":   // removes anime from both active and finished lists
            return {
                ...state,
                activeAnimeList: state.activeAnimeList.filter(  // returns those that are not the anime to be removed
                    anime => anime.mal_id !== action.payload    // essentailly leaves them behind and take that anime out
                ),
                finishedAnimeList: state.finishedAnimeList.filter(
                    anime => anime.mal_id !== action.payload
                ),
            };
        case "MOVE_ANIME_TO_ACTIVE":     // moves anime from finished to active
            return {
                ...state,
                finishedAnimeList: state.finishedAnimeList.filter(  // returns those that are not the anime to be removed
                    anime => anime.mal_id !== action.payload.mal_id // essentailly leaves them behind and take that anime out
                ),
                activeAnimeList: [action.payload, ...state.activeAnimeList], // adds the anime back to the active list
            };
        case "MOVE_ANIME_TO_FINISH":    // moves anime from active to finished
            return {
                ...state,
                activeAnimeList: state.activeAnimeList.filter(      // returns those that are not the anime to be removed
                    anime => anime.mal_id !== action.payload.mal_id // essentailly leaves them behind and take that anime out
                ),
                finishedAnimeList: [action.payload, ...state.finishedAnimeList],    // adds the anime to finish
            };
        default:
            return state;
    }
}