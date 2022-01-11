class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade')

        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoes__view'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }
    
    adiciona(event) {
        event.preventDefault();           
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem.texto = "Negociação bem sucedida!"
        this._mensagemView.update(this._mensagem);
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

    _limpaFormulario() {

        this._inputData = '';
        this._inputValor = 0.0;
        this._inputQuantidade = 1
        focus(this._inputData);
    }
}