class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade')
        this._listaNegociacoes = new ListaNegociacoes();
    }
    
    adiciona(event) {
        event.preventDefault();           
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());       
        console.log(this._listaNegociacoes.negociacoes);

        /* let dataCompleta = DateHelper.dataParaTexto(negociacao.data);
        console.log(dataCompleta); */        
    }

    _criaNegociacao() {

        let data = DateHelper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value            
        );
        
        return negociacao;
    }
}