import { Router } from 'express';
import {PessoaController} from "../controller/PessoaController";

const router = Router();
const pessoaController = new PessoaController();

router.post('/usuario', (req, res) => pessoaController.createPessoa(req, res));
router.get('/usuarios', (req, res) => pessoaController.getAllPessoas(req, res));
router.get('/usuario/:id', (req, res) => pessoaController.getPessoaById(req, res));
router.put('/usuario/:id', (req, res) => pessoaController.updatePessoa(req, res));
router.delete('/usuario/:id', (req, res) => pessoaController.deletePessoa(req, res));


export default router;
