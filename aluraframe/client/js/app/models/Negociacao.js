class Negociacao {

    constructor(data, quantidade, valor) {
        this._date = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    getVolume() {
        return this._quantidade * this._valor;
    }

    getData() {
        return this._date;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }
}