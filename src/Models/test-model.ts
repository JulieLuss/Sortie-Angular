export class TestModel {
    nom: string;
    codePostal: string;
    
    constructor(nom: string="", codePostal: string=""){
        this.nom = nom;
        this.codePostal = codePostal
    }

    toString(): string{
        return this.nom + ' ' + this.codePostal;
    }
}
