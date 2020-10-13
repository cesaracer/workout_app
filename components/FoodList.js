import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import FoodItem from './FoodItem'
import {connect} from 'react-redux'
import { loadFoods } from '../actions/action'

function FoodList({fetch, foods}){
    useEffect(() => {
        fetch()
    },[])

    return(
        <ScrollView>
            {
                foods.map(f => <FoodItem key={f._id} {...f}/>)
            }
        </ScrollView>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetch: () => dispatch(loadFoods())
    }
}

const mapStateToProps = (state) => {
    return{
        foods: state.foods
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)