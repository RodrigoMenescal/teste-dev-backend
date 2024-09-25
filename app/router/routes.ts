import { Router } from 'express';
import {PessoaController} from "../controller/PessoaController";

const router = Router();
const pessoaController = new PessoaController();

router.post('/pessoa', (req, res) => pessoaController.createPessoa(req, res));
router.get('/pessoas', (req, res) => pessoaController.getAllPessoas(req, res));
router.get('/pessoa/:id', (req, res) => pessoaController.getPessoaById(req, res));
router.put('/pessoa/:id', (req, res) => pessoaController.updatePessoa(req, res));
router.delete('/pessoa/:id', (req, res) => pessoaController.deletePessoa(req, res));


export default router;
