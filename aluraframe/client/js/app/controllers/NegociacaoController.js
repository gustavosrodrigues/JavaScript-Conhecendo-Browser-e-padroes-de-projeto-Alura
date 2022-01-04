class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._valor = $('#valor');
        this._quantidade = $('#quantidade');        
    }

    adiciona(event) {
        event.preventDefault();

        console.log(this._data.value);

        let date = this._data.value.split('-'); //recupera a data em string, separa os valores
        const dia = date[2];
        const mes = date[1] - 1; //Diminui o mês em 1, para mostrar o mês correto
        const ano = date[0];

        let novaData = new Date(ano, mes, dia); // Pega os valores da data e monta num tipo Date
        
        console.log(date);
        console.log(novaData);
        /* let negociacao = new Negociacao(
            this._data.value, this._valor.value, this._quantidade.value
        );

        console.log(this._data.value);
        console.log(this._valor.value);
        console.log(this._quantidade.value); */
    }
}