export class Utilisateur{
  id: number;
  nom: string;
  prenom: string;
  numtel: number;
  adresse: string;
  mail: string;
  password: string;
  deletedAt: Date;

  constructor( id, nom, prenom, mail, password, adresse, numtel) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.numtel = numtel;
    this.adresse = adresse;
    this.mail = mail;
    this.password = password;
  }
}
