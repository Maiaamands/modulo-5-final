import { Router } from "express";
import  { insertProduto, updateProduto, SelectProduto, SelectProdutos, DeleteProduto}  from './controller/produtos.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statuscode":200,
        "msg":"API RODANDO"
    })
})
// rota produtos 
router.get('/produtos', SelectProdutos);
router.get('/produto', SelectProduto);
router.post('/produto', insertProduto);
router.put('/produto', updateProduto);
router.delete('/produto', DeleteProduto);

//rota fornecedor


//rota Funcionários
//rota Usuário
//rota Estoque

export default router;