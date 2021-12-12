import React from 'react'
import {StyleSheet, View, Text} from 'react-native'


export default function TimeComp(){
    return (
        <View style={styles.container}>

            <View style={styles.dateStyle}>
                <Text style={styles.dayStyle}>17</Text>
                <View >
                    <Text>Nov</Text>
                    <Text>2021</Text>
                </View>
            </View>

            <View>
                <Text style={styles.today}>Monday</Text>
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