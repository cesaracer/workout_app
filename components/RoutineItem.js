import React from 'react'
import {Text, StyleSheet, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import { setRoutine } from '../actions/action'
import { useNavigation } from '@react-navigation/native'

function RoutineItem({name, workouts, setRoutine}){
    const navigation = useNavigation()

    const handlePress = () => {
        setRoutine({
            name: name,
            workouts: workouts
        })
        navigation.navigate('Details')
    }
    return(
        <TouchableHighlight style={styles.item} onPress={handlePress}>
            <Text style={styles.text}>{ name }</Text>
        </TouchableHighlight>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        setRoutine: routine => dispatch(setRoutine(routine))
    }
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        height: 50,
        backgroundColor: 'orange',
        justifyContent: 'center', 
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20
    }
})

export default connect(null, mapDispatchToProps)(RoutineItem)