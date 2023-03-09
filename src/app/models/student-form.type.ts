import { FormArray, FormControl, FormGroup } from "@angular/forms";

export type StudentForm= {
    general_information: FormGroup<StudentFormGeneralInformation>;
    hobbies: FormArray<FormGroup<StudentFormHobby>>;
    lingue:  FormArray<FormGroup<StudentFormLanguage>>;
    esperienze: FormArray<FormGroup<StudentFormExperience>>;
  };

  export type StudentFormGeneralInformation= {
    nome: FormControl<string>;
    cognome: FormControl<string>;
    eta: FormControl<number>;
    genere: FormControl<StudentFormGeneralInformationGender>;
    location: FormGroup<StudentFormGeneralInformationLocation>;
    hasPets: FormControl<boolean>;
  }

  export type StudentFormGeneralInformationGender= 'M'|'F'|'';

  export type StudentFormGeneralInformationLocation = {
    indirzzo: FormControl<string>;
    citta: FormControl<string>;
    provincia:FormControl<string>;
    cap: FormControl<string>;
  }

  export type StudentFormHobby ={
    name: FormControl<string>;
    icon:FormControl<string>;
  }

  export type StudentFormLanguage ={
    name: FormControl<string>;
    icon:FormControl<string>;
  }

  export type StudentFormExperience = {
    nome: FormControl<string>;
    descrizione: FormControl<string>;
    inizio: FormControl<Date>;
    fine: FormControl<Date>;
    tags: FormArray<FormControl<string>>;
  }