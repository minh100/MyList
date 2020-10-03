import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer.js';

// initalizes the state
// if there are objects in localstorage 
// else assign empty arrays
const initialState = {
    activeAnimeList: localStorage.getItem('activeAnimeList') ?
        JSON.parse(localStorage.getItem('activeAnimeList')) : [],
    finishedAnimeList: localStorage.getItem('finishedAnimeList') ?
        JSON.parse(localStorage.getItem('finishedAnimeList')) : [],
    planningAnimeList: localStorage.getItem('planningAnimeList') ?
        JSON.parse(localStorage.getItem('planningAnimeList')) : [],
};


// // create context
export const GlobalContext = createContext(initialState);

// // provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('activeAnimeList', JSON.stringify(state.activeAnimeList));
        localStorage.setItem('finishedAnimeList', JSON.stringify(state.finishedAnimeList));
        localStorage.setItem('planningAnimeList', JSON.stringify(state.planningAnimeList));
    }, [state])

    //actions
    // removes anime from both active and finished list
    const removeAnimeBothList = (id) => {
        dispatch({ type: "REMOVE_ANIME_BOTH_LIST", payload: id });
    }
    // moves anime to active
    const moveAnimeToActive = anime => {
        dispatch({ type: "MOVE_ANIME_TO_ACTIVE", payload: anime});
    }
    // move anime to finished
    const moveAnimeToFinish = anime => {
        dispatch({ type: "MOVE_ANIME_TO_FINISH", payload: anime});
    }
    const moveAnimeToPlanning = anime => {
        dispatch({ type: "MOVE_ANIME_TO_PLANNING", payload: anime});
    }

    return (
        <GlobalContext.Provider
            value={{
                activeAnimeList: state.activeAnimeList,
                finishedAnimeList: state.finishedAnimeList,
                planningAnimeList: state.planningAnimeList,
                removeAnimeBothList,
                moveAnimeToActive,
                moveAnimeToFinish,
                moveAnimeToPlanning,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

