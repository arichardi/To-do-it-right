import React, {useState} from 'react'
import { View, StyleSheet, FlatList, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Card from '../Components/Card'
import TimeComp from '../Components/TimeComp'
import ButtonApp from '../Components/ButtonApp'

interface DataList{
    id: string,
    data: string,
    click: boolean
}

export default function Home(){

    const data = [
        {id: '1', data: "avião", click: false},
        {id: '2', data: "carro", click: false },
        {id: '3', data: "bicicleta", click: false},
        {id: '4', data: "trem", click: false}
    ]

    const [list, setList] = useState<DataList[]>(data)
    const [input, setInput] = useState('')

    function handleAdd(){
        const newId = Number(list[list.length -1].id) + 1
        const newData: DataList = {
            id: String(newId),
            data: input,
            click: false
        };
        const newList: DataList[] = [ ... list, newData]
        setList(newList)
        setInput('')
    }

    function handleCleanAll(){
        const fullList = [... list]
        const newList = fullList.filter( item => item.click === false)
        setList(newList)

    }

    function handleItemCheck(id: number){
        let newList = [... list]
        newList[id].click = !newList[id].click
        setList(newList)
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <TimeComp />
            
            <View style={styles.flatList}>    
                <FlatList 
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={ ({item, index}) => (
                        <Card 
                        title={item.data}
                        click={item.click}
                        onPress={ () => handleItemCheck(index) }
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
                <ButtonApp title={'Add'} onPress={handleAdd}/>
                <ButtonApp title={'Clean All'} onPress={handleCleanAll}/>
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