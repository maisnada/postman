"use strict"

import Login from './Login.js';
import Toast from './Toast.js';

class App {

    constructor(document, window) {

        let app = document.querySelector('#app');

        let login = new Login(document, this.usuarioAutenticado);

        let toast = new Toast(document);

        toast.show('Erro ao realizar o login!');

    }

    usuarioAutenticado(m) {

        console.log('-->' + m);
       
        let toast = new Toast(document);

        toast.show('Erro ao realizar o login!');

    }

}

export default function (document, window) {

    return new App(document, window);
}