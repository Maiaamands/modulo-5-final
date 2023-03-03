// import res from "express/lib/response";
import { openDb } from "../configdb.js";




export async function SelectProdutos(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM produto')
           .then(produtos=> res.json(produtos))
       })
   }

export async function SelectProduto(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM produto WHERE id=?',[id])
           .then(produto=> res.json(produto) );
       });
    }   

export async function insertProduto(req, res){
    let produto = req.body;
        openDb().then(db=>{
               db.run ('INSERT INTO produto (nome, idade) VALUES (?,?)', [produto.nome, produto.idade])
               .then(res=>res)
           });
           res.json({
            "statuscode":200
        })
       }

export async function updateProduto(req, res){
    let produto = req.body;
    openDb().then(db=>{
           db.run ('UPDATE produto SET nome = ?, idade = ? WHERE id = ?', [produto.nome, produto.idade, produto.id])
           
       });
       res.json({
        "statuscode":200
    })
   }

export async function DeleteProduto(req, res){
    let produto = req.body.id;
     openDb().then(db=>{
        db.get ('DELETE FROM produto WHERE id=?',[id])
           .then(res=>res)
       });
       res.json({
        "statuscode":200
    })
    
   }   