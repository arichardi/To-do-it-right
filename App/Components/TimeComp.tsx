import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export default function TimeComp(){

    const today = new Date()
    const [day, month, year, week] = format(today,'dd,MMM,yyyy,eeee', { locale : ptBR}).split(',')

    return (
        <View style={styles.container}>

            <View style={styles.dateStyle}>
                <Text style={styles.dayStyle}>{day}</Text>
                <View >
                    <Text>{month}</Text>
                    <Text>{year}</Text>
                </View>
            </View>

            <View>
                <Text style={styles.today}>{week}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dateStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dayStyle: {
        fontSize: 34,
        fontWeight: 'bold',
        marginRight: 8,
    },
    today: {
        fontSize: 32,
    }

})