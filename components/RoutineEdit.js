import React, { useState } from 'react'
import {View, TextInput, Button} from 'react-native'

function RoutineEdit(){
    const [toggle, setToggle] = useState(false)
    const [desc, setDesc] = useState('Add new exercise')

    const changeDesc = () => {
        setToggle(!toggle)
        if(toggle){
            setDesc('Cancel')
        }
        else{
            setDesc('Add new exercise')
        }
    }

    

    return(
        <View>
            <TextInput placeholder='New routine name'/>
            <Button title={desc} onPress={changeDesc}/>
            {
                toggle ?
                <View>
                    <TextInput placeholder='Exercise name' onChangeText={}/>
                    <TextInput placeholder='Minutes'/>
                    <Button title='Add exercise' color='orange'/>
                </View>
                :
                <View></View>
            }
        </View>
    )
}
