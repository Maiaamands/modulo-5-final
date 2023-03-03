// import res from "express/lib/response";
import { openDb } from "../configdb.js";
export async function SelectUsuario(req, res){


    openDb().then(db=>{
        db.all('SELECT * FROM Usuario')
           .then(Usuario=> res.json(Usuario))
       })
   }

export async function SelectUsuario(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Usuario WHERE id=?',[id])
           .then(Usuario=> res.json(Usuario) );
       });
    }   

export async function insertUsuario(req, res){
    let Usuario = req.body;
        openDb().then(db=>{
               db.run ('INSERT INTO Usuario (nome, idade) VALUES (?,?)', [Usuario.nome, Usuario.idade, ])
               .then(res=>res)
           });
           res.json({
            "statuscode":200
        })
       }

export async function updateUsuario(req, res){
    let Usuario = req.body;
    openDb().then(db=>{
           db.run ('UPDATE Usuario SET nome = ?, idade = ? WHERE id = ?', [Usuario.nome, Usuario.idade, Usuario.id])
           .then(res=>res)
       });
       res.json({
        "statuscode":200
    })
   }

export async function DeleteUsuario(req, res){
    let fornecedor = req.body.id;
     openDb().then(db=>{
        db.get ('DELETE FROM Usuario WHERE id=?',[id])
           .then(res=>res)
       });
       res.json({
        "statuscode":200
    })
    
   }   