import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import { Feather } from '@expo/vector-icons'

interface Props {
    title: string;
    click: boolean;
    onPress: () => void;
}

export default function Card({title, click, onPress}: Props){
    return(
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <Text style={ click ? styles.textClick : styles.text }>{title}</Text>

            <Feather 
                name={ click ? 'check-circle' : 'circle'}
                size={24}
                color={ click ? 'green' : 'grey'}
            />
            
        </View>
        </TouchableWithoutFeedback>
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