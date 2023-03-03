import { openDb } from "../configdb.js"

export async function createtableProduto(){
    openDb().then(db=>{
        db.exec( 'CREATE TABLE IF NOT EXISTS produto (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}