class NegociacaoController {


    adiciona(event) {
        event.preventDefault();
        
        let $ = document.querySelector.bind(document);

        let data = $('#data');
        let valor = $('#valor');
        let quantidade = $('#quantidade');

        console.log(data.value);
        console.log(valor.value);
        console.log(quantidade.value);
    }
}