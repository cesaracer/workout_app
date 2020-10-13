import Axios from 'axios'
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {connect} from 'react-redux'
import { loadFoods } from '../actions/action'

function FoodItem({name, foodType, _id, fetch}){
    const deleteFood = async () => {
        await Axios.delete(`https://us-central1-routine-app-99182.cloudfunctions.net/app/food/delete/${_id}`)
        fetch()
    }
    return(
        <View style={styles.item}>
            <View style={styles.section_1}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{foodType}</Text>
            </View>
            <View style={styles.section_2}>
                <Button title='X' color='#4AB5CE' onPress={deleteFood}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 2,
        borderColor: '#4AB5CE',
        flexDirection: 'row',
        marginTop: 10
    },
    section_1: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    section_2: {
        width: '10%'
    },
    text: {
        width: '50%',
        color: '#4AB5CE'
    }
})

const mapDispatchToProps = (dispatch) => {
    return{
        fetch: () => dispatch(loadFoods())
    }
}

export default connect(null, mapDispatchToProps)(FoodItem)