import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ButtonApp({title, onPress}){
    return (
    <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        >
        <Text style={styles.title} >{title}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        borderRadius: 16,
        backgroundColor: '#640c85',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        color: '#DDDDDD',
        fontWeight: 'bold',
        fontSize: 16,
    }
})