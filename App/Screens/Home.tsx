import React, {useState, useEffect} from 'react'
import { View, StyleSheet, FlatList, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {readItems, createItem, deleteItems, changeClick} from '../services/Items'
import Card from '../Components/Card'
import TimeComp from '../Components/TimeComp'
import ButtonApp from '../Components/ButtonApp'

interface DataList{
    id?: number
    data: string,
    click: boolean
}

export default function Home(){

    const [list, setList] = useState<DataList[]> ({} as DataList[])
    const [input, setInput] = useState('')

    useEffect( () => {
        
        const newItemsList = readItems()
        newItemsList.then( value => {
            let result: DataList[] = value
            result.forEach( item => 
            item.click = !!item.click
                )
            setList(result)
        })

    }, [])

    function handleAdd(){
        const newData: DataList = {
            data: input,
            click: false
        };
        const newItem = createItem(newData)
        newItem.then( value => console.log(value))
       
        const newItemsList = readItems()
        newItemsList.then( value => {
            let result: DataList[] = value
            result.forEach( item => 
            item.click = !!item.click
                )
            setList(result)
        })

    }

    function handleCleanAll(){
        const fullList = [... list]
        const newList = fullList.filter( item => item.click === false)
        setList(newList)
        deleteItems()

    }
    

    function handleItemCheck(id: number){
        const listValue = list.filter( value => value.id == id)
        const updateListDB = changeClick( !listValue[0].click , id )
        let newList = [... list]
        newList.forEach( item => {
            item.id == id ? item.click = !item.click : ""
        })
        setList(newList)
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <TimeComp />
            
            <View style={styles.flatList}>    
                <FlatList 
                    data={list}
                    keyExtractor={item => String(item.id)}
                    renderItem={ ({item}) => (
                        <Card 
                        title={item.data}
                        click={item.click}
                        onPress={ () => handleItemCheck(item.id) }
                        />
                        )}
                        />
            </View>

            <View style={styles.buttonAdd}>
                <View style={styles.form}>
                    <TextInput 
                        onChangeText={ text => setInput(text)}
                        placeholder='coloque o novo item'
                        autoCompleteType='off'
                        autoCorrect={false}
                        value={input}
                    />
                </View>
                <ButtonApp title={'Adicionar'} onPress={handleAdd}/>
                <ButtonApp title={'Limpar'} onPress={handleCleanAll}/>
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
        height: 100,
        width: "99.9%",
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
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: 'purple',

    }
})