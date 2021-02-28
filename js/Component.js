"use strict"

export default class Component {

    constructor(document) {

        this._app = document.querySelector('#app');

    }

    _template() {

        throw new Error('Método _template deve ser implementado!');
    }

    _render(){

        throw new Error('Método _render deve ser implementado!');
    }

    _styled(component) {

        let arquivo = component.constructor.name;

        const link = document.createElement('link');

        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', `/css/${arquivo}.css`);

        document.head.appendChild(link);
    }
}