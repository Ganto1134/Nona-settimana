interface Smartphone {
  credito: number;
  numeroChiamate: number;
}

class User implements Smartphone {
  credito: number;
  numeroChiamate: number;
  nome: string;
  cognome: string;
  minutiChiamata: number;

  constructor(_nome: string, _cognome: string) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.credito = 0;
    this.numeroChiamate = 0;
    this.minutiChiamata = 0;
  }

  ricarica(importo: number): void {
    this.credito += importo;
  }
  chiamata(minuti: number): void {
    const costoChiamata = 0.2 * minuti;
    if (this.credito >= costoChiamata) {
      this.credito -= costoChiamata;
      this.numeroChiamate += 1;
      this.minutiChiamata += minuti;
    } else {
      console.log("Credito insufficiente per effettuare la chiamata.");
    }
  }

  chiama404(): number {
    return this.credito;
  }

  getNumeroChiamata(): number {
    return this.minutiChiamata;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    this.minutiChiamata = 0;
  }
}

const utente = new User("Antonio", "Gantolea");
