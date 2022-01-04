class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._valor = $('#valor');
        this._quantidade = $('#quantidade');        
    }

    adiciona(event) {
        event.preventDefault();        

        /* let date = this._data.value.split('-'); //recupera a data em string, separa os valores
        const dia = date[2];
        const mes = date[1] - 1; //Diminui o mês em 1, para mostrar o mês correto
        const ano = date[0];

        let novaData = new Date(ano, mes, dia); // Pega os valores da data e monta num tipo Date */

        let data = new Date(... // o spread (...) coloca cada item separado em um paramêtro do Date
            this._data.value
                .split('-')
                .map((item, indice) => item - indice % 2) // convenientemente, somente o indice do mês retorna resto = 1                
        )

        let negociacao = new Negociacao(
            data,
            this._valor.value,
            this._quantidade.value
        );
        
        console.log(negociacao);
    }
}