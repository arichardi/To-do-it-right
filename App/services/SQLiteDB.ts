import * as SQLite from 'expo-sqlite'

//create the db file
const db = SQLite.openDatabase('db.db')

export default db