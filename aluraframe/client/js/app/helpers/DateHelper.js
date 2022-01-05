class DateHelper {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada.');
    }

    static dataParaTexto(texto) {
        return `${texto.getDate()}/${texto.getMonth() + 1}/${texto.getFullYear()}`
    }

    static textoParaData(data) {
        return new Date(...data.split('-').map((item, indice) => item - indice % 2));
    }

}