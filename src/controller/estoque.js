// import res from "express/lib/response";
import { openDb } from "../configdb.js";




export async function SelectEstoque(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM estoque')
           .then(estoque=> res.json(estoque))
       })
   }

export async function SelectEstoque(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM estoque WHERE id=?',[id])
           .then(estoque=> res.json(estoque) );
       });
    }   

export async function inserteEstoque(req, res){
    let estoque = req.body;
        openDb().then(db=>{
               db.run ('INSERT INTO estoque (nome, idade) VALUES (?,?)', [estoque.produto, estoque.quantidade])
               .then(res=>res)
           });
           res.json({
            "statuscode":200
        })
       }

export async function updateEstoque(req, res){
    let estoque = req.body;
    openDb().then(db=>{
           db.run ('UPDATE estoque SET nome = ?, idade = ? WHERE id = ?', [estoque.produto, estoque.quantidade, estoque.id])
           .then(res=>res)
       });
       res.json({
        "statuscode":200
    })
   }

export async function DeleteEstoque(req, res){
    let estoque = req.body.id;
     openDb().then(db=>{
        db.get ('DELETE FROM estoque WHERE id=?',[id])
           .then(res=>res)
       });
       res.json({
        "statuscode":200
    })
    
   }   