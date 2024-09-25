import {PessoaRepository} from "../repository/PessoaRepository";
import {Pessoa} from "../entity/Pessoa";

export class PessoaService{

    private pessoaRepository: PessoaRepository;

    constructor() {
        this.pessoaRepository = new PessoaRepository();
    }

    createPessoa(pessoa: Pessoa): Promise<Pessoa>{
        return this.pessoaRepository.create(pessoa);
    }

    getAllPessoas(): Promise<Pessoa[]>{
        return this.pessoaRepository.findAll();
    }

    getPessoaById(id: number): Promise<Pessoa| null>{
        return this.pessoaRepository.findById(id);
    }

    updatePessoa(id: number,pessoa: Pessoa):Promise<Pessoa| null>{
        return this.pessoaRepository.update(id, pessoa);
    }

    deletePessoa(id: number): Promise<void>{
        return this.pessoaRepository.delete(id);
    }
}