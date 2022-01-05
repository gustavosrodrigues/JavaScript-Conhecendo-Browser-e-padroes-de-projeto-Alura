class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');        
    }

    adiciona(event) {
        event.preventDefault();   

        let data = new Date(... // o spread (...) coloca cada item separado em um paramêtro do Date
            this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2) // convenientemente, somente o indice do mês retorna resto = 1                
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value            
        );

        let dataCompleta = `${negociacao.data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
        console.log(dataCompleta);        
    }
}