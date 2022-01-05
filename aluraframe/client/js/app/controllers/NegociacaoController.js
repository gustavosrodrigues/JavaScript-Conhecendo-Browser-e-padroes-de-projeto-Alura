class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');        
    }

    adiciona(event) {
        event.preventDefault();   

        let helper = new DateHelper();
        let data = helper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value            
        );

        console.log(negociacao);

        let dataCompleta = helper.dataParaTexto(negociacao.data);
        console.log(dataCompleta);        
    }
}