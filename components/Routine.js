import React from 'react'
import Workout from './Workout'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'

function Routine({routine}){
    return(
        <View>
            <Text>{routine.name}</Text>
            <ScrollView>
                {
                    routine.workouts.map(w => <Workout name={w.name} duration={w.duration}/>)
                }
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => {
    return{
        routine: state.routine
    }
}

export default connect(mapStateToProps)(Routine)