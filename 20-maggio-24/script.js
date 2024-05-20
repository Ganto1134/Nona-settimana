"use strict";
class User {
    constructor(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
        this.minutiChiamata = 0;
    }
    ricarica(importo) {
        this.credito += importo;
    }
    chiamata(minuti) {
        const costoChiamata = 0.2 * minuti;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate += 1;
            this.minutiChiamata += minuti;
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }
    chiama404() {
        return this.credito;
    }
    getNumeroChiamata() {
        return this.minutiChiamata;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        this.minutiChiamata = 0;
    }
}
const utente = new User("Antonio", "Gantolea");
