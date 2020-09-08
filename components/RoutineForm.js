import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, ScrollView, AsyncStorage } from 'react-native'
import {connect} from 'react-redux'
import {addRoutine, loadRoutines} from '../actions/action'
import { useNavigation } from '@react-navigation/native'
import Workout from './Workout'
import Axios from 'axios'

function RoutineForm(props){
    const [routineName, setRoutineName] = useState('')
    const [workouts, setWorkouts] = useState([])
    const [workoutName, setWorkoutName] = useState('')
    const [duration, setDuration] = useState(0)

    const navigation = useNavigation()

    const handleWorkoutAdd = () => {
        if(duration === 0){
            return
        }
        if(workoutName === ''){
            return
        }
        let workout = {
            name: workoutName,
            duration: duration
        }
        setWorkouts([
            ...workouts,
            workout
        ])
        setDuration(0)
        setWorkoutName('')
    }

    const handleRoutineAdd = () => {
        if(routineName === ''){
            return
        }
        if(workouts.length === 0){
            return
        }

        let routine = {
            name: routineName,
            workouts: workouts
        }

        props.addRoutine(routine)
        Axios.post('https://us-central1-routine-app-99182.cloudfunctions.net/app/routines/add', routine)
        props.fetchRoutines()
        navigation.navigate('Home')
    }

    const validate = (num) => {
        if(!isNaN(num)){
            setDuration(num)
        }
    }

    return(
        <View style={styles.form}>
            <View style={styles.form_group}>
                <TextInput placeholder='Routine Name' onChangeText={text => setRoutineName(text)}/>
            </View>
            <View style={styles.form_group}>
                <TextInput placeholder='Exercise Name' onChangeText={text => setWorkoutName(text)} value={workoutName}/>
                <TextInput placeholder='Minutes' onChangeText={text => validate(text)} value={duration}/>
                <Button color='orange' title='Add Workout' onPress={handleWorkoutAdd}/>
            </View>
            <ScrollView>
                {
                    workouts.map(w => <Workout name={w.name} duration={w.duration}/>)
                }
            </ScrollView>
            <Button color='orange' style={styles.add_btn} onPress={handleRoutineAdd} title='Save Routine'/>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        width: '90%',
        height: '100%',
        marginLeft: '5%'
    },
    form_group: {
        position: 'relative',
        marginTop: 20
    },
    add_btn: {
        position: 'absolute',
        bottom: 10
    }
})

const mapDispatchToProps = (dispatch) => {
    return{
        addRoutine: routine => dispatch(addRoutine(routine)),
        fetchRoutines: () => dispatch(loadRoutines())
    }
}

export default connect(null, mapDispatchToProps)(RoutineForm)