import {ADD_ROUTINE, DEL_ROUTINE, EDIT_ROUTINE, SET_ROUTINE} from './actionTypes'

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