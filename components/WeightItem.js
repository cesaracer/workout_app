import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function WeightItem({amount, date}){
    return(
        <View style={styles.weightItem}>
            <View style={styles.section}>
                <Text style={styles.txt}>{amount}</Text>
                <Text style={styles.txt}>Lbs</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.txt}>Date Weighed</Text>
                <Text style={styles.txt}>{date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weightItem: {
        width: '95%',
        flexDirection: 'row',
        height: 70,
        marginLeft: '2.5%',
        marginTop: 10,        
        borderBottomWidth: 2,
        borderColor: '#4AB5CE',
        borderRadius: 8
    },
    section: {
        flexDirection: 'column',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 15,
        color: '#4AB5CE',
        width: '100%'
    }
})

export default WeightItem