// import res from "express/lib/response";
import { openDb } from "../configdb.js";




export async function SelectFuncionarios(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM funcionarios')
           .then(funcionarios=> res.json(funcionarios))
       })
   }

export async function SelectFuncionarios(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM funcionarios WHERE id=?',[id])
           .then(funcionarios=> res.json(funcionarios) );
       });
    }   

export async function insertFuncionarios(req, res){
    let funcionarios = req.body;
        openDb().then(db=>{
               db.run ('INSERT INTO funcionarios (nome, idade, endereco, telefone, funcao, salario) VALUES (?,?)', [funcionarios.nome, funcionarios.idade, funcionarios.endereco, funcionarios.telefone, funcionarios.funcao, funcionarios.salario])
               .then(res=>res)
           });
           res.json({
            "statuscode":200
        })
       }

export async function updateFuncionarios(req, res){
    let funcionarios = req.body;
    openDb().then(db=>{
           db.run ('UPDATE funcionarios SET nome = ?, idade = ? WHERE id = ?', [funcionarios.nome, funcionarios.idade, funcionarios.id])
           .then(res=>res)
       });
       res.json({
        "statuscode":200
    })
   }

export async function DeleteFuncionarios(req, res){
    let funcionarios = req.body.id;
     openDb().then(db=>{
        db.get ('DELETE FROM funcionarios WHERE id=?',[funcionarios.id])
           .then(res=>res)
       });
       res.json({
        "statuscode":200
    })
    
   }   