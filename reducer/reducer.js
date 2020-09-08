import {ADD_ROUTINE, DEL_ROUTINE, SET_ROUTINE, FETCH} from '../actions/actionTypes'
import { combineReducers } from 'redux';

const initialRoutine = {
    name: '',
    workouts: []
}

function routineListReducer(state = [], action){
    switch(action.type){
        case ADD_ROUTINE:
            return [
                ...state,
                action.routine
            ]
        case DEL_ROUTINE:
            let index = state.findIndex(r => r.id === action.id);
            return[
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        case FETCH: 
            return state = action.routines
        default:
            return state
    }
}

function routineReducer(state = initialRoutine, action){
    switch(action.type){
        case SET_ROUTINE:
            return state = action.routine
        default:
            return state
    }
}

const reducer = combineReducers({
    routine: routineReducer,
    routines: routineListReducer
})

export default reducer;