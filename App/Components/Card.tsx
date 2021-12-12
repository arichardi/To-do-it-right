import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function Card({title}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Feather 
            name='circle'
            size={24}
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
    }
})