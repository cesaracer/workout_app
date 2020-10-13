import {ADD_ROUTINE, DEL_ROUTINE, EDIT_ROUTINE, SET_ROUTINE, FETCH_ROUTINES, FETCH_FOODS} from './actionTypes'
import Axios from 'axios'

export const addRoutine = (routine) => {
    return{
        type: ADD_ROUTINE,
        routine
    }
}

export const delRoutine = (id) => {
    return{
        type: DEL_ROUTINE,
        id
    }
}

export const editRoutine = (id, routine) => {
    return{
        type: EDIT_ROUTINE,
        id,
        routine
    }
}

export const setRoutine = (routine) => {
    return{
        type: SET_ROUTINE,
        routine
    }
}

export const setRoutines = (routines) => {
    return{
        type: FETCH_ROUTINES,
        routines
    }
}

export const setFoods = (foods) => {
    return{
        type: FETCH_FOODS,
        foods
    }
}

//retrieving workouts from db
export function loadRoutines(){
    return(dispatch) => {
        Axios.get('https://us-central1-routine-app-99182.cloudfunctions.net/app/routines/all')
        .then(result => {
            const res = result.data
            dispatch(setRoutines(res))
        })
    }
}

export function loadFoods(){
    return(dispatch) => {
        Axios.get('https://us-central1-routine-app-99182.cloudfunctions.net/app/food/all')
        .then(result => {
            const res = result.data
            dispatch(setFoods(res))
        })
    }
}
