import React from 'react'
import { View, Button, StyleSheet} from 'react-native'
import RoutineList from './RoutineList'
import { useNavigation } from '@react-navigation/native'

function Home(){
    const navigation = useNavigation()
    return(
        <View style={styles.page}>
            <RoutineList/>
            <View style={styles.btn}>
                <Button title='Add Routine' onPress={() => navigation.navigate('Create Routine')} color='orange'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        height: 100,
        justifyContent: 'center',
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    page: {
        paddingTop: 15,
        height: '100%'
    }
})

export default Home