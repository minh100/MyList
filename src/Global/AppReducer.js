export default function AppReducer(state, action) {
    switch(action.type) {
        case "REMOVE_ANIME_BOTH_LIST":   // removes anime from both active and finished lists
            return {
                ...state,
                activeAnimeList: state.activeAnimeList.filter(  // returns those that are not the anime to be removed
                    anime => anime.id !== action.payload    // essentailly leaves them behind and take that anime out
                ),
                finishedAnimeList: state.finishedAnimeList.filter(
                    anime => anime.id !== action.payload
                ),
                planningAnimeList: state.planningAnimeList.filter(
                    anime => anime.id !== action.payload
                )
            };
        case "MOVE_ANIME_TO_ACTIVE":     // moves anime to active
            return {
                ...state,
                finishedAnimeList: state.finishedAnimeList.filter(  // returns those that are not the anime to be removed
                    anime => anime.id !== action.payload.id         // essentailly leaves them behind and take that anime out
                ),
                planningAnimeList: state.planningAnimeList.filter(
                    anime => anime.id !== action.payload.id
                ),
                activeAnimeList: [action.payload, ...state.activeAnimeList], // adds the anime back to the active list
            };
        case "MOVE_ANIME_TO_FINISH":    // moves anime to finished
            return {
                ...state,
                activeAnimeList: state.activeAnimeList.filter(      // returns those that are not the anime to be removed
                    anime => anime.id !== action.payload.id         // essentailly leaves them behind and take that anime out
                ),
                planningAnimeList: state.planningAnimeList.filter(
                    anime => anime.id !== action.payload.id
                ),
                finishedAnimeList: [action.payload, ...state.finishedAnimeList],    // adds the anime to finish
            };
        case "MOVE_ANIME_TO_PLANNING":  // moves anime to planning
            return {
                ...state,
                activeAnimeList: state.activeAnimeList.filter(      // returns those that are not the anime to be removed
                    anime => anime.id !== action.payload.id         // essentailly leaves them behind and take that anime out
                ),
                finishedAnimeList: state.finishedAnimeList.filter(  
                    anime => anime.id !== action.payload.id 
                ),
                planningAnimeList: [action.payload, ...state.planningAnimeList],
            }
        default:
            return state;
    }
}