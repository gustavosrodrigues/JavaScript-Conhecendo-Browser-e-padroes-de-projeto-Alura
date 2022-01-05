class DateHelper {

    dataParaTexto(texto) {
        return `${texto.getDate()}/${texto.getMonth() + 1}/${texto.getFullYear()}`
    }

    textoParaData(data) {
        return new Date(...data.split('-').map((item, indice) => item - indice % 2));
    }

}