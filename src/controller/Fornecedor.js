// import res from "express/lib/response";
import { openDb } from "../configdb.js";




export async function SelectFornecedor(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM fornecedor')
           .then(fornecedor=> res.json(fornecedor))
       })
   }

export async function SelectFornecedor(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM fornecedor WHERE id=?',[id])
           .then(fornecedor=> res.json(fornecedor) );
       });
    }   

export async function insertFornecedor(req, res){
    let fornecedor = req.body;
        openDb().then(db=>{
               db.run ('INSERT INTO fornecedor (nome, idade) VALUES (?,?)', [fornecedor.nome, fornecedor.idade])
               .then(res=>res)
           });
           res.json({
            "statuscode":200
        })
       }

export async function updateProduto(req, res){
    let fornecedor = req.body;
    openDb().then(db=>{
           db.run ('UPDATE fornecedor SET nome = ?, idade = ? WHERE id = ?', [fornecedor.nome, fornecedor.idade, fornecedor.id])
           .then(res=>res)
       });
       res.json({
        "statuscode":200
    })
   }

export async function Delete(req, res){
    let produto = req.body.id;
     openDb().then(db=>{
        db.get ('DELETE FROM produto WHERE id=?',[id])
           .then(res=>res)
       });
       res.json({
        "statuscode":200
    })
    
   }   