import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Card from '../Components/Card'
import TimeComp from '../Components/TimeComp'



export default function Home(){

    const data = [
        {id: '1', data: "avião"},
        {id: '2', data: "carro"},
        {id: '3', data: "bicicleta"},
        {id: '4', data: "trem"}
    ]

    function handleAdd(){
        console.log('working')
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <TimeComp />
            
            <View style={styles.flatList}>    
            <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem={ ({item}) => (
                    <Card title={item.data}/>
                    )}
                    />
            </View>

            <View style={styles.buttonAdd}>
                <View style={styles.form}>
                    <TextInput />
                </View>
                <Button
                title='Add'
                onPress={handleAdd}
                color={'#640c85'}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24 ,
        marginTop: 80,
    },
    buttonAdd: {
        height: 50,
        width: "99%",
        marginBottom: 80,
    },
    flatList: {
        flex: 1,
        marginTop: 24,
    },
    form: {
        height: 45,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'purple',

    }
})