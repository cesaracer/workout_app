import React from 'react'
import { View, Text } from 'react-native'

function Workout({name, duration}){
    return(
        <View>
            <Text>{name}</Text>
            <Text>{duration}</Text>
        </View>
    )
}

export default Workout