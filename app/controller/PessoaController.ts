import {PessoaService} from "../service/PessoaService";
import {ResponseUtil} from "../utils/ResponseUtil";
import {Mensagens} from "../utils/Mensagens";

export class PessoaController{
    private pessoaService: PessoaService;

    constructor() {
        this.pessoaService = new PessoaService();
    }

    async createPessoa(req: any, res: any): Promise<void> {
        try {
            await this.pessoaService.createPessoa(req.body)
            res.status(200).json(ResponseUtil.montaResponse(Mensagens.REGISTER_SALVED));
        } catch (error) {
            res.status(500).json(ResponseUtil.montaResponse(Mensagens.ERROR_REGISTER_SALVED));
        }
    }

    async getAllPessoas(req: any, res: any): Promise<void> {
        try {
            await this.pessoaService.getAllPessoas()
            res.status(200).json(ResponseUtil.montaResponse(
                await this.pessoaService.getAllPessoas())
            );
        } catch (error) {
            res.status(500).json(ResponseUtil.montaResponse(Mensagens.ERROR_EMPTY_REGISTER));
        }
    }

    async getPessoaById(req: any, res: any): Promise<void> {
        try {
            res.status(200).json(ResponseUtil.montaResponse(
                await this.pessoaService.getPessoaById(Number(req.params.id)))
            );
        } catch (error) {
            res.status(500).json(ResponseUtil.montaResponse(Mensagens.ERROR_REGISTER_SELECTED));
        }
    }

    async updatePessoa(req: any, res: any): Promise<void> {
        try {
            await this.pessoaService.updatePessoa(Number(req.params.id), req.body)
            res.status(200).json(ResponseUtil.montaResponse(
                Mensagens.REGISTER_UPDATE)
            );
        } catch (error) {
            res.status(500).json(ResponseUtil.montaResponse(Mensagens.ERROR_REGISTER_UPDATE));
        }
    }

    async deletePessoa(req: any, res: any): Promise<void> {
        try {
            await this.pessoaService.deletePessoa(Number(req.params.id))
            res.status(200).json(ResponseUtil.montaResponse(
                Mensagens.REGISTER_DELETE)
            );
        } catch (error) {
            res.status(500).json(ResponseUtil.montaResponse(Mensagens.ERROR_REGISTER_DELETE));
        }
    }

}