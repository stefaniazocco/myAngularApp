import { group } from '@angular/animations';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { StudentForm, StudentFormExperience, StudentFormGeneralInformation, StudentFormGeneralInformationGender, StudentFormGeneralInformationLocation, StudentFormHobby, StudentFormLanguage } from 'src/app/models/student-form.type';
import { StudentFormViewService } from 'src/app/providers/services/student-form-view.service';

@Component({
  selector: 'app-reactive-student-form',
  templateUrl: './reactive-student-form.component.html',
  styleUrls: ['./reactive-student-form.component.scss']
})

export class ReactiveStudentFormComponent implements OnChanges{

  @Input() student!: Student;
  @Input() mode: 'edit' | 'add' = 'edit';
  @Output() addStudent: EventEmitter<Student> = new EventEmitter<Student>();
  @Output() editStudent: EventEmitter<Student> = new EventEmitter<Student>();
  studentViewModel: Student = new Student();
  genderOptions: Array<StudentFormGeneralInformationGender>;

  form!: FormGroup<StudentForm>;

  get hobbies(): FormArray<FormGroup<StudentFormHobby>> {
    return this.form.get('hobbies') as FormArray<FormGroup<StudentFormHobby>>
  }
  get lingue(): FormArray<FormGroup<StudentFormLanguage>> {
    return this.form.get('lingue') as FormArray<FormGroup<StudentFormLanguage>>
  }
  get esperienze(): FormArray<FormGroup<StudentFormExperience>> {
    return this.form.get('esperienze') as FormArray<FormGroup<StudentFormExperience>>
  }

  constructor(private readonly viewService: StudentFormViewService){
    this.genderOptions= this.viewService.genders();
  }
  
  ngOnChanges(changes: SimpleChanges): void{
    if(changes['student'].currentValue){
      this.form = this.viewService.getForm(changes['student'].currentValue);
    }
  }

  addHobby(): void {
    this.hobbies.push(this.hobbyFactory());
  }
  addLanguage(): void {
    this.lingue.push(this.languageFactory());
  }
  addExperience(): void {
    this.esperienze.push(this.experienceFactory());
  }
  addTag(group: FormGroup<StudentFormExperience>): void {
    group.controls.tags.push(this.tagFactory());
  }
  saveChanges(): void {
    console.log(this.form.value)
    const { general_information, hobbies, lingue, esperienze } = this.form.value as Pick<Student, 'hobbies' | 'lingue' | 'esperienze'> & { general_information: Omit<Student, 'hobbies' | 'lingue' | 'esperienze'>; }
    const student: Student = new Student({
      ...general_information,
      hobbies,
      lingue,
      esperienze
    })
    if (this.mode === 'add') {
      this.addStudent.emit(student)
    } else {
      this.editStudent.emit(student)
    }
  }

  // tagsTrackByFn(ind: number) {
  //   return ind;
  // }
  private hobbyFactory(): FormGroup<StudentFormHobby> {
    return new FormGroup({
      name: new FormControl<string>('', { nonNullable: true }),
      icon: new FormControl<string>('', { nonNullable: true })
    })
  }
  private languageFactory(): FormGroup<StudentFormLanguage> {
    return new FormGroup({
      name: new FormControl<string>('', { nonNullable: true }),
      icon: new FormControl<string>('', { nonNullable: true })
    })
  }

  private experienceFactory(): FormGroup<StudentFormExperience> {
    return new FormGroup({
      nome: new FormControl<string>('', { nonNullable: true }),
      descrizione: new FormControl<string>('', { nonNullable: true }),
      inizio: new FormControl<Date>(new Date(), { nonNullable: true }),
      fine: new FormControl<Date>(new Date(), { nonNullable: true }),
      tags: new FormArray<FormControl<string>>([new FormControl<string>('', { nonNullable: true })])
    })
  }
  private tagFactory(): FormControl<string> {
    return new FormControl<string>('', { nonNullable: true })
  }


}
