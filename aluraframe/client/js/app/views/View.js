class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {

        throw new Error('É necessário implementar este método!');
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}