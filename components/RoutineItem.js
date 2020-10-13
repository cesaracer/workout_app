import React from 'react'
import {Text, StyleSheet, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import { setRoutine } from '../actions/action'
import { useNavigation } from '@react-navigation/native'
import RoutineEdit from './RoutineEdit'

//renders routine block component
function RoutineItem({name, workouts, id, setRoutine}){
    const navigation = useNavigation()

    //setting routine state
    const handlePress = () => {
        setRoutine({
            id: id,
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
        width: '90%',
        marginLeft: '5%',
        height: 50,
        backgroundColor: '#00002b',
        borderWidth: 2,
        borderColor: '#4AB5CE',
        justifyContent: 'center', 
        marginTop: 10,
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20
    }
})

export default connect(null, mapDispatchToProps)(RoutineItem)