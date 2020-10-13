import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import RoutineList from './RoutineList'

function Routines(){
    const navigator = useNavigation()
    return(
        <View style={styles.page}>
            <RoutineList/>
            <TouchableOpacity style={styles.btn} onPress={() => navigator.navigate('Create Routine')}>
                <Text style={{fontSize: 40, color: 'orange'}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#00002b',
        height: '100%',
        width: '100%',
        flexDirection: 'column'
    },
    btn: {
        backgroundColor: '#00002b',
        borderWidth: 2,
        borderColor: 'orange',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Routines