import React, {useEffect} from 'react'
import Workout from './Workout'
import { View, Text, ScrollView, StyleSheet, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'

function Routine({routine}){
    
    const handleClick = () => {
        let res = AsyncStorage.getItem('bruh')
        alert(res)
    }

    return(
        <View style={styles.page}>
            <ScrollView>
                {
                    routine.workouts.map(w => <Workout name={w.name} duration={w.duration}/>)
                }
            </ScrollView>
            <TouchableOpacity style={styles.btn_edit}>
                <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn_edit: {
        backgroundColor: 'orange',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 15,
        right: -30,
        alignSelf: 'flex-end'
        
    },
    page: {
        width: '80%',
        height: '100%',
        marginLeft: '10%',
        flexDirection: 'column'
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})

const mapStateToProps = (state) => {
    return{
        routine: state.routine
    }
}

export default connect(mapStateToProps)(Routine)