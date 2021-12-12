import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function Card({title, click}){
    return(
        <View style={styles.container}>
            <Text style={ click ? styles.textClick : styles.text }>{title}</Text>
            <Feather 
            name={ click ? 'check-circle' : 'circle'}
            size={24}
            color={ click ? 'green' : 'grey'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    text: {
        fontSize: 16,
        color: '#000000',
    },
    textClick : {
        fontSize: 16,
        color: '#AAAAAA',
        textDecorationLine: 'line-through',
    }
})