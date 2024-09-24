import {PessoaRepository} from "../repository/PessoaRepository";
import {Pessoa} from "../entity/Pessoa";

export class PessoaService{

    private pessoaRepository: PessoaRepository;

    constructor() {
        this.pessoaRepository = new PessoaRepository();
    }

    cadastrarPessoa(pessoa: Pessoa): Promise<Pessoa>{
        return this.pessoaRepository.create(pessoa);
    }
}