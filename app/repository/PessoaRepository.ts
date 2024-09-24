import {Pessoa} from "../entity/Pessoa";
import {query} from "../config/connection";

export class PessoaRepository{
    async create(pessoa: Pessoa): Promise<Pessoa>{
        try {
            const {nome, telefone} = pessoa;
            const result = await query(
                'INSERT INTO tb_pessoa (nome, telefone) VALUES ($1, $2) RETURNING *',
                [nome, telefone]
            );
            return result.rows[0];
        } catch (error) {
            throw new Error('Erro no banco de dados ao criar Pessoa');
        }

    }
}