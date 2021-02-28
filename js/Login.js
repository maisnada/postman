"use strict"

import Component from './Component.js';
import Home from './Home.js';

export default class Login extends Component {

    constructor(...args) {

        const [document, cb] = args;

        super(document);

        this._cb = cb;

        this._render();        
    }

    _template() {

        return `
        <section class="login">

            <img src="img/logoEquipe.svg" />

            <form>
            <label>E-mail</label>
                <input type="email" name="email" id="email" />
                <label>Senha</label>
                <input type="password" name="password" id="password" />
                <button>Login!</button>
            </form>

            <img src="img/loading.gif" id="loading" class="inativo"/>

        </section>`;
    }

    _render() {

        this._styled(this);

        this._app.innerHTML = this._template();

        this._addListener();
    }

    _addListener() {

        let btn = this._app.querySelector(".login button");

        let loading = this._app.querySelector(".login #loading");

        btn.addEventListener('click', (event) => {

            event.preventDefault();

            loading.classList.toggle("inativo");

            fetch('http://localhost:3000/mensagem', {
                method: 'post',
                body: JSON.stringify({
                    titulo: this._app.querySelector('.login #email').value,
                    conteudo: this._app.querySelector('.login #password').value
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(res => res.json())
                .then(json => {

                    this._cb(JSON.stringify(json));
                    
                });
        })
    }
}