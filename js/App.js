"use strict"

import Login from './Login.js';

class App {

    constructor(document, window) {

        let app = document.querySelector('#app');        
        
        let login = new Login(document,(m)=>{console.log('->' + m)}); 

    }
    
}

export default function (document, window) {

    return new App(document, window);
}