import React from 'react'
import Workout from './Workout'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { loadRoutines } from '../actions/action'
import { useNavigation } from '@react-navigation/native'
import Axios from 'axios'

//renders page to see routine info
function Routine({routine, loadRoutines}){
    const navigation = useNavigation()

    const del = async () => {
        await Axios.delete(`https://us-central1-routine-app-99182.cloudfunctions.net/app/routines/delete/${routine.id}`)
        
        //reloading routine list and redirecting user to home page
        loadRoutines()
        navigation.navigate('Home')
    }

    return(
        <View style={styles.page}>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btn_del} onPress={del}>
                    <Text style={styles.text}>Delete</Text>
                </TouchableOpacity>

                {/* directs user to edit page on click */}
                <TouchableOpacity style={styles.btn_edit} onPress={() => navigation.navigate('Edit')}>
                    <Text style={styles.text}>Edit</Text>
                </TouchableOpacity>
                
            </View>
            <ScrollView>
                {
                    routine.workouts.map(w => <Workout name={w.name} duration={w.duration}/>)
                }
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 20
    },
    btn_edit: {
        padding: 5,
        backgroundColor: 'orange',
        width: 70,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_del: {
        padding: 5,
        backgroundColor: 'red',
        width: 70,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    page: {
        backgroundColor: '#00002b',
        width: '100%',
        height: '100%',
        padding: 20,
        flexDirection: 'column'
    },
    text: {
        color: 'white',
        fontSize: 15
    }
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Routine)