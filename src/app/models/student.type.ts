import { Hobby } from "./hobby";
import { Language } from "./language";

export type Student = {
    nome: string;
    cognome: string;
    genere: string;
    eta: number;
    citta: string;
    hobbies:Array<Hobby>;
    hasPets: boolean;
    lingue: Array<Language>;
  }