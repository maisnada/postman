"use strict"

import Component from './Component.js';

export default class Toast extends Component {

    constructor(...args) {

        const [document] = args;

        super(document);

        this._render();

    }

    _template() {

        return `
            <div id="toast">
               <div id="img"><i class="fas fa-times"></i> sdfdsfds sf sdsfdsfdsf</div>
               
            </div>
        `;
    }

    _render() {

        this._styled(this);

        this._app.innerHTML += this._template();
    }

    show(msg) {       

        let toast = this._app.querySelector("#toast");

        let msgBox = this._app.querySelector("#toast #msg");

        //msgBox.innerText = msg;

        // console.log(toast);

        //var x = document.getElementById("toast");

        toast.className = "show";

        setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 5000);
    }

}