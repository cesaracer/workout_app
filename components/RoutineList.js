import React from 'react'
import {ScrollView} from 'react-native'
import {connect} from 'react-redux'
import RoutineItem from './RoutineItem'
import { debug } from 'react-native-reanimated'

function RoutineList({routines}){
    return(
        <ScrollView>
            {
                routines.map(r => <RoutineItem name={r.name} workouts={r.workouts}/>)
            }
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return{
        routines: state.routines
    }
}

export default connect(mapStateToProps)(RoutineList)