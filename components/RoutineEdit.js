import React, { useState } from 'react'
import {View, TextInput, Button, StyleSheet, ScrollView} from 'react-native'
import Axios from 'axios'
import {connect} from 'react-redux'
import Workout from './Workout'
import { useNavigation } from '@react-navigation/native'
import { loadRoutines } from '../actions/action'

//renders page to edit routine
function RoutineEdit({routine, loadRoutines}){
    const [name, setName] = useState('')
    const [workoutName, setWorkoutName] = useState('')
    const [duration, setDuration] = useState(0)
    const [workouts, setWorkouts] = useState(routine.workouts)

    const navigation = useNavigation()

    //adding new exercise to selected routine
    const update = async () => {
        await Axios.patch(`https://us-central1-routine-app-99182.cloudfunctions.net/app/routines/edit/${routine.id}`, {"name": name, "workouts": workouts})
        navigation.navigate('Home')
        loadRoutines()
    }

    //prevents user from inputing non int value
    const validate = (num) => {
        if(!isNaN(num)){
            setDuration(num)
        }
    }

    const addWorkout = () => {
        let workout = {
            name: workoutName,
            duration: duration
        }

        setWorkouts([
            ...workouts,
            workout
        ])
    }

    return(
        <View style={styles.page}>
            <TextInput style={{marginTop: 15}} placeholder='New routine name' onChangeText={text => setName(text)}/>
            <View style={{marginTop: 15, marginBottom: 10}}>
                <TextInput placeholder='Exercise name' onChangeText={text => setWorkoutName(text)}/>
                <TextInput style={{marginBottom: 15}} placeholder='Minutes' onChangeText={text => validate(text)}/>
                <Button title='Add exercise' color='orange' onPress={addWorkout}/>
            </View>
            <ScrollView>
                {
                    workouts.map(w => <Workout name={w.name} duration={w.duration} />)
                }
            </ScrollView>
            <Button title='Save' onPress={update} color='orange'/>
        </View>
    )
}

const mapStateToProps = (state) => {
    return{
        routine: state.routine
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadRoutines: () => dispatch(loadRoutines())
    }
}

const styles = StyleSheet.create({
    page: {
        width: '80%',
        height: '95%',
        marginLeft: '10%'
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(RoutineEdit)