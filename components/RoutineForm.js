import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, ScrollView } from 'react-native'
import {connect} from 'react-redux'
import {addRoutine, loadRoutines} from '../actions/action'
import { useNavigation } from '@react-navigation/native'
import Workout from './Workout'
import Axios from 'axios'

//renders form to create routine
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
        <View style={styles.page}>
            <View style={styles.form_group}>
                <TextInput style={styles.textBox} placeholder='Routine Name' onChangeText={text => setRoutineName(text)}/>
            </View>
            <View style={styles.form_group}>
                <TextInput style={styles.textBox} placeholder='Exercise Name' onChangeText={text => setWorkoutName(text)} value={workoutName}/>
                <TextInput style={styles.textBox} placeholder='Minutes' onChangeText={text => validate(text)} value={duration}/>
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
    page: {
        backgroundColor: '#00002b',
        width: '100%',
        height: '100%',
        padding: 20
    },
    textBox: {
        backgroundColor: '#272750',
        borderColor: '#4AB5CE', 
        borderBottomWidth: 2, 
        height: 45,
        marginBottom: 10
    },
    form_group: {
        position: 'relative',
        marginTop: 15
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