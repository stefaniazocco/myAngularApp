//view service => facade service => facade pattern
//si toglie la logica dal controller della view per avercelo pulito

import { Injectable } from "@angular/core"
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms"
import { Student } from "src/app/models/student"
import { StudentForm, StudentFormGeneralInformation, StudentFormGeneralInformationGender, StudentFormGeneralInformationLocation, StudentFormHobby, StudentFormLanguage, StudentFormExperience } from "src/app/models/student-form.type";

@Injectable({providedIn:'root'})
export class StudentFormViewService {
    genders(): Array<StudentFormGeneralInformationGender>{
        return ['M', 'F']
    }
    getForm(student: Student): FormGroup<StudentForm> {
        return new FormGroup<StudentForm>({
            general_information: new FormGroup<StudentFormGeneralInformation>({
                nome: new FormControl<string>(student.nome, { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }), // required
                cognome: new FormControl<string>(student.cognome, { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }), // required
                eta: new FormControl<number>(student.eta, { nonNullable: true, validators: [Validators.required, Validators.min(19), Validators.max(99)] }), // required
                genere: new FormControl<StudentFormGeneralInformationGender>(student.genere, { nonNullable: true, validators: [Validators.required] }), // required
                location: new FormGroup<StudentFormGeneralInformationLocation>({
                    // required
                    indirizzo: new FormControl<string>(student.location.indirizzo, { nonNullable: true }),
                    citta: new FormControl<string>(student.location.citta, { nonNullable: true }),
                    provincia: new FormControl<string>(student.location.provincia, { nonNullable: true }),
                    cap: new FormControl<string>(student.location.cap, { nonNullable: true }),
                }),
                hasPets: new FormControl<boolean>(student.hasPets, { nonNullable: true }),
            }),
            hobbies: new FormArray<FormGroup<StudentFormHobby>>([]),
            lingue: new FormArray<FormGroup<StudentFormLanguage>>([]),
            esperienze: new FormArray<FormGroup<StudentFormExperience>>([]),
        });
    }

    

}

