import {Pessoa} from "../entity/Pessoa";
import {query} from "../config/connection";

export class PessoaRepository {
    async create(pessoa: Pessoa): Promise<Pessoa> {
        try {
            const {nome, telefone} = pessoa;
            const result = await query(
                'INSERT INTO tb_pessoa (nome, telefone) VALUES ($1, $2) RETURNING *',
                [nome, telefone]
            );
            return result.rows[0];
        } catch (error) {
            throw new Error('Erro ao salvar registro no banco de dados');
        }
    }

    async findAll(): Promise<Pessoa[]> {
        try {
            const result = await query(
                'SELECT * FROM tb_pessoa order by id asc'
            )

            return result.rows;
        } catch (error) {
            throw new Error('Erro ao buscar registro no banco de dados');
        }
    }

    async findById(id: number): Promise<Pessoa | null>{
        try {
            const result = await query(
                'SELECT * FROM tb_pessoa where id= $1',
                [id]
            )
            return result.rows[0] || null
        } catch (error) {
            throw new Error('Erro buscar registro no banco de dados');
        }
    }

    async update(id: number, pessoa: Pessoa): Promise<Pessoa | null>{
        try {
            const {nome, telefone} = pessoa
            const result = await query(
                'UPDATE tb_pessoa SET id = $1, nome = $2, telefone = $3  where id= $1',
                [id, nome, telefone]
            )

            if(result.rowCount == 0) throw new Error('Erro atualizar registro no banco de dado');

            return result.rows[0] || null
        } catch (error) {
            console.log('teste', error)
            throw new Error('Erro atualizar registro no banco de dado');
        }
    }

    async delete(id: number): Promise<void>{
        try {
            const result = await query(
                'DELETE FROM tb_pessoa where id= $1',
                [id]
            )
            if(result.rowCount == 0) throw new Error('Erro deletar registro no banco de dados');
        } catch (error) {
            throw new Error('Erro deletar registro no banco de dados');
        }
    }
}