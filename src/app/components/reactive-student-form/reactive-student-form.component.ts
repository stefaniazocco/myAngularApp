import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { StudentForm, StudentFormExperience, StudentFormGeneralInformation, StudentFormGeneralInformationGender, StudentFormGeneralInformationLocation, StudentFormHobby, StudentFormLanguage } from 'src/app/models/student-form.type';
import { StudentExperience } from 'src/app/models/studentExperience';

@Component({
  selector: 'app-reactive-student-form',
  templateUrl: './reactive-student-form.component.html',
  styleUrls: ['./reactive-student-form.component.scss']
})
export class ReactiveStudentFormComponent {
  @Input() student: Student | undefined;
  @Input() mode: 'edit' | 'add' = 'edit';
  @Output() addStudent: EventEmitter<Student> = new EventEmitter<Student>();
  @Output() editStudent: EventEmitter<Student> = new EventEmitter<Student>();
  studentViewModel: Student = new Student();

  form: FormGroup<StudentForm> = new FormGroup<StudentForm>({
    general_information: new FormGroup<StudentFormGeneralInformation>({
      nome: new FormControl<string>('', { nonNullable: true }),
      cognome: new FormControl<string>('', { nonNullable: true }),
      eta: new FormControl<number>(19, { nonNullable: true }),
      genere: new FormControl<StudentFormGeneralInformationGender>('', { nonNullable: true }),
      location: new FormGroup<StudentFormGeneralInformationLocation>({
        indirzzo: new FormControl<string>('', { nonNullable: true }),
        citta: new FormControl<string>('', { nonNullable: true }),
        provincia: new FormControl<string>('', { nonNullable: true }),
        cap: new FormControl<string>('', { nonNullable: true }),
      }),
      hasPets: new FormControl<boolean>(false, { nonNullable: true }),
    }),
    hobbies: new FormArray<FormGroup<StudentFormHobby>>([
      new FormGroup({
        name: new FormControl<string>('', { nonNullable: true }),
        icon: new FormControl<string>('', { nonNullable: true })
      }),
    ]),
    lingue: new FormArray<FormGroup<StudentFormLanguage>>([
      new FormGroup({ name: new FormControl<string>('', { nonNullable: true }), icon: new FormControl<string>('', { nonNullable: true }) })
    ]),
    esperienze: new FormArray<FormGroup<StudentFormExperience>>([
      new FormGroup({
        nome: new FormControl<string>('', { nonNullable: true }),
        descrizione: new FormControl<string>('', { nonNullable: true }),
        inizio: new FormControl<Date>(new Date(), { nonNullable: true }),
        fine: new FormControl<Date>(new Date(), { nonNullable: true }),
        tags: new FormArray<FormControl<string>>([new FormControl<string>('', { nonNullable: true })])
      })
    ]),
  });

  addHobby():void {
    if(this.studentViewModel.hobbies.some(hobby =>!hobby.name)){
      return;
    }
    this.studentViewModel!.hobbies.push({ name: '', icon: '' })
  }
  addLanguage():void {
    if(this.studentViewModel.lingue.some(lang =>!lang.name)){
      return;
    }
    this.studentViewModel!.lingue.push({ name: '', icon: '' })
  }
  addExperience():void {
    if(this.studentViewModel.esperienze.some(esp =>!esp.nome)){
      return;
    }
    this.studentViewModel!.esperienze.push({ nome: '', descrizione: '', inizio: new Date(''), fine: new Date(''), tags: [] })
  }
  addTag(exp: StudentExperience) {
    if(exp.tags.some(tag=>!tag)){
      return;
    }
    exp.tags.push("")
  }
  saveChanges(): void {
    this.studentViewModel = {
      ... this.studentViewModel,
      hobbies: this.studentViewModel!.hobbies.filter(hobby => !!hobby.name),
      lingue: this.studentViewModel!.lingue.filter(language => !!language.name),
      esperienze: this.studentViewModel!.esperienze.filter(exp => !!exp.nome).map(exp=>({
        ...exp,
        tags:exp.tags.filter(tag=> !!tag)
      }))
    } as Student
    if (this.mode === 'add') {
      this.addStudent.emit(this.studentViewModel)
    } else {
      this.editStudent.emit(this.studentViewModel)
    }
  }
  tagsTrackByFn(ind: number) {
    return ind;
  }
}
