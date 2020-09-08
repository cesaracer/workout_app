import React, { useEffect, useState } from 'react'
import {ScrollView} from 'react-native'
import {connect} from 'react-redux'
import RoutineItem from './RoutineItem'
import { loadRoutines } from '../actions/action'
import Axios from 'axios'

function RoutineList(props){
    useEffect(() => {
        props.fetchList()
    },[])
    return(
        <ScrollView>
            {
                props.routines.map(r => <RoutineItem name={r.name} workouts={r.workouts}/>)
            }
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return{
        routines: state.routines
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchList: () => dispatch(loadRoutines())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutineList)