import express from 'express';
import {
    home,
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    resetUsuarios
} from './controller.js'; // Importando as funções do controller

const router = express.Router();

router.get('/', home)
router.get('/usuarios', getUsuarios); // Obter todos os usuários
router.get('/usuarios/:id', getUsuarioById); // Obter um usuário específico
router.post('/usuarios', createUsuario); // Criar um novo usuário
router.put('/usuarios/:id', updateUsuario); // Atualizar um usuário existente
router.delete('/usuarios/:id', deleteUsuario); // Deletar um usuário
router.post('/reset', resetUsuarios); // Rota para resetar os usuários

export default router;
