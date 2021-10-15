import {Utilisateur} from './Utilisateur';

export class Url{
  id: number;
  full: string;
  short: string;
  clicks: number;
  user: Utilisateur;

  constructor( id, full, short, clicks, user) {
    this.id = id;
    this.full = full;
    this.short = short;
    this.clicks = clicks;
    this.user = user;
  }
}
