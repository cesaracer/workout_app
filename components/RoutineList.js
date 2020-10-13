import React, { useEffect } from 'react'
import {ScrollView} from 'react-native'
import {connect} from 'react-redux'
import RoutineItem from './RoutineItem'
import { loadRoutines } from '../actions/action'

//renders container for routines
function RoutineList(props){
    useEffect(() => {
        props.fetchList()
    },[])

    return(
        <ScrollView>
            {
                props.routines.map(r => <RoutineItem key={r._id} name={r.name} workouts={r.workouts} id={r._id}/>)
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