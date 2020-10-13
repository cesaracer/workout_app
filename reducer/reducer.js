import {ADD_ROUTINE, DEL_ROUTINE, SET_ROUTINE, FETCH_ROUTINES, FETCH_FOODS} from '../actions/actionTypes'
import { combineReducers } from 'redux';

const initialRoutine = {
    id: '',
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
        case FETCH_ROUTINES: 
            return state = action.routines
        default:
            return state
    }
}

function foodReducer(state = [], action){
    switch(action.type){
        case FETCH_FOODS:
            return state = action.foods
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
    routines: routineListReducer,
    foods: foodReducer
})

export default reducer;