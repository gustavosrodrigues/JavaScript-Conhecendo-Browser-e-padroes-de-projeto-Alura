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

        let date = new Date(this._data.value.split('-')); //recupera a data em string, separa e monta num tipo Date
        console.log(date);
        /* let negociacao = new Negociacao(
            this._data.value, this._valor.value, this._quantidade.value
        );

        console.log(this._data.value);
        console.log(this._valor.value);
        console.log(this._quantidade.value); */
    }
}