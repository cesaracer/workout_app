import Axios from 'axios'
import React, { useState } from 'react'
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native'
import FoodList from './FoodList'
import {connect} from 'react-redux'
import { loadFoods } from '../actions/action'

function Foods({fetch}){
    const [name, setName] = useState('')
    const [foodType, setFoodType] = useState('')

    const addFood = async () => {
        if(name !== ''|| foodType !== ''){
            await Axios.post('https://us-central1-routine-app-99182.cloudfunctions.net/app/food/add', {name: name, type: foodType})
            fetch()
        }
    }

    return(
        <View style={styles.page}>
            <View style={styles.section}>
                <TextInput style={styles.textbox} placeholder="Food" value={name} onChangeText={text => setName(text)}></TextInput>
                <TextInput style={styles.textbox} placeholder="Type" value={foodType} onChangeText={text => setFoodType(text)}></TextInput>
                <TouchableOpacity style={styles.btn} onPress={addFood}>
                    <Text style={{color: '#00002b'}}>Enter Food</Text>
                </TouchableOpacity>
            </View>
            <FoodList/>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#00002b',
        width: '100%',
        height: '100%',
        padding: 20,
    },
    section: {
        width: '100%', 
        marginTop: 30,
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
        width: '30%',
        height: 40,
        marginRight: 15,
        textAlign: 'center',
        borderBottomWidth: 2,
        borderColor: '#4AB5CE',
        color: '#4AB5CE',
        backgroundColor: '#272750'
    }
})

const mapDispatchToProps = (dispatch) => {
    return{
        fetch: () => dispatch(loadFoods())
    }
}

export default connect(null, mapDispatchToProps)(Foods)