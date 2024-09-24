import {PessoaService} from "../service/PessoaService";
import {ResponseUtil} from "../utils/ResponseUtil";
import {Mensagens} from "../utils/Mensagens";


export class PessoaController{
    private pessoaService: PessoaService;

    constructor() {
        this.pessoaService = new PessoaService();
    }

    async cadastrar(req: any, res: any): Promise<void> {
        try {
            await this.pessoaService.cadastrarPessoa(req.body)
            res.status(200).json(ResponseUtil.montaResponse(Mensagens.PESSOA_CADASTRADO));
        } catch (error) {
            res.status(500).json(ResponseUtil.montaResponse(Mensagens.ERROR_CADASTRO_PESSOA));
        }
    }

}