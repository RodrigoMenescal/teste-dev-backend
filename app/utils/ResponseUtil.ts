class ResponseDTO<T> {
    dados?: T;
    mensagem?: string;

    setDados(dados: T): void {
        this.dados = dados;
    }

    setMensagem(mensagem: string): void {
        this.mensagem = mensagem;
    }
}

export class ResponseUtil {

    public static montaResponse<T>(dados: T, mensagem: string): ResponseDTO<T>;
    public static montaResponse(mensagem: string): ResponseDTO<null>;
    public static montaResponse<T>(dados: T): ResponseDTO<T>;

    public static montaResponse<T>(dadosOrMensagem: T | string, mensagem?: string): ResponseDTO<T | null> {
        const response = new ResponseDTO<T | null>();

        if (typeof dadosOrMensagem === 'string') {
            response.setMensagem(dadosOrMensagem);
        } else {
            // Caso contrário, tratamos como os dados
            response.setDados(dadosOrMensagem);
            if (mensagem) {
                response.setMensagem(mensagem);
            }
        }

        return response;
    }
}