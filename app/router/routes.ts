import { Router } from 'express';
import {PessoaController} from "../controller/PessoaController";

const router = Router();
const pessoaController = new PessoaController();

router.post('/pessoa', (req, res) => pessoaController.cadastrar(req, res));

export default router;