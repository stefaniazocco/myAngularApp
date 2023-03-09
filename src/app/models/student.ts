import { Hobby } from "./hobby";
import { Language } from "./language";
import { StudentExperience } from "./studentExperience";
import { StudentLocation } from "./studentLocation";

export interface IStudent {
    nome: string;
    cognome: string;
    genere: "M" | "F" | "";
    eta: number;
    location: StudentLocation;
    hobbies:Array<Hobby>;
    hasPets: boolean;
    lingue: Array<Language>;
    esperienze: Array<StudentExperience>;
}

export class Student implements IStudent{
  nome: string;
  cognome: string;
  genere: "M" | "F" | "";
  eta: number;
  location: StudentLocation;
  hobbies: Array<Hobby>;
  hasPets: boolean;
  lingue: Array<Language>;
  esperienze: Array<StudentExperience>;
  
  constructor( student?: Partial<IStudent>){
    this.nome = student?.nome ?? "";
    this.cognome = student?.cognome ?? "";
    this.genere = student?.genere ?? "";
    this.eta= student?.eta ?? 19;
    this.location= student?.location ?? {citta: "", cap : "", indirizzo : "", provincia :"" };
    this.hobbies= student?.hobbies ?? new Array<Hobby>();
    this.hasPets= student?.hasPets ?? false;
    this.lingue= student?.lingue ?? new Array<Language>();
    this.esperienze= student?.esperienze ?? new Array<StudentExperience>();
  }

}