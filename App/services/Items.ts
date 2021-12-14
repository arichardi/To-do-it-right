import { de } from "date-fns/locale";
import db from "./SQLiteDB";

interface itemProp {
    data: string;
    click: boolean
}

//db initialization and table criation
db.transaction( tx => {
    try {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT, click BOOL);"
        )
        console.log(` the DB was open and the items table created`);      
    } catch (error) {
        console.log(`wasn't possible create the table: ${error}`)
    }
})


//function which insert the data in the table
export function createItem(item: itemProp){
    return new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "INSERT INTO items (data, click) values (?, ?);",
                [item.data, Number(item.click)],
            //------------------------
            (sqltx, result) => {
                console.log(`the line ${result.insertId} was inserted`)
            },
            (sqltx, error) => {
                console.log('An reading error occour' + error)
                reject('An error on read data accour')
                return false
            }
            );
        })
    })
}

//function which read the data in the table
//return a promise with the data readed

export function readItems(){

    return new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                `SELECT * FROM items`,
                [],
                //------------------------
                ( sqltx, result ) => {
                    console.log('table itens was read successfully')
                    resolve([... result.rows._array])
                    
                    
                },
                ( sqltx, error) => {
                    console.log('An reading error occour' + error)
                    reject('An error on read data accour')
                    return false
                    
                }
                )
        })

    })
    

}

//function that delete the item

export function deleteItems(){
    return new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
            "DELETE FROM items WHERE click=?;",
            [0],
            //------------------------
            ( sqltx, result ) => {
                console.log('the table with click items was clened')
                
            },
            ( sqltx, error) => {
                console.log('An eror occour' + error)
                reject('An error on delete data accour')
                return false
                                
                            }
            )
        })
    })
}