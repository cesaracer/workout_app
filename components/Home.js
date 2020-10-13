import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text} from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import WeightItem from './WeightItem'
function Home(){
    const [weight, setWeight] = useState(0)
    const [resData, setData] = useState([])

    useEffect(() => {
        getWeights()
    },[])

    const sendWeight = async () => {
        await Axios.post('https://us-central1-routine-app-99182.cloudfunctions.net/app/weight/add', {weight: weight})
        setWeight(0)
        getWeights()
    }

    const getWeights = () => {
        fetch('https://us-central1-routine-app-99182.cloudfunctions.net/app/weight/all')
        .then(res => res.json())
        .then(data => setData(data))
    }

    return(
        <View style={styles.page}>
            <View style={styles.section}>
                <TextInput style={styles.textbox} placeholder="lbs" value={weight.toString()} onChangeText={text => setWeight(text)}></TextInput>
                <TouchableOpacity style={styles.btn} onPress={sendWeight}>
                    <Text style={{color: '#00002b'}}>Enter Weight</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{marginTop: 30}}>
                {
                    resData.map(w => <WeightItem key={w._id} {...w}/>)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#00002b',
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    section: {
        width: '100%', 
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn: {
        width: 120,
        height: 40,
        backgroundColor: 'orange',
        borderWidth: 2,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#4AB5CE',
        backgroundColor: '#4AB5CE'
    },
    textbox: {
        width: '50%',
        height: 40,
        marginRight: 15,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#4AB5CE',
        color: '#4AB5CE',
        backgroundColor: '#272750'
    }
})

export default Home