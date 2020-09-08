import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Workout({name, duration}){
    return(
        <View style={styles.workout}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.time}>{duration} Minutes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    workout: {
        flex: 1, 
        flexDirection: 'row',
        width: '100%',
        height: 50,
        marginTop: 15,
        marginBottom: 10,
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'orange',
        borderRadius: 8
    },
    name: {
        color: 'orange',
        marginLeft: 10,
        alignSelf: 'center'
    },
    time: {
        color: 'orange',
        marginRight: 10,
        alignSelf: 'center'
    }

})

export default Workout