import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Student } from "src/app/models/student";


@Injectable({providedIn:'root'})
export class StudentHttpService{
    constructor(private readonly http: HttpClient){}

    getStudents(){
        //get ritorna un observable quindi si può fare la sottoscrizione
        //il pipe permette di eserguire codice sugli eventi o valori emessi da un observable 
        //prima di raggiungere gli observers sottoscritti
        return this.http.get<Array<Student>>('../../assets/students.json', {responseType:'json'})
        .pipe(
            map((students: Array<Student>)=> students.map(stud => new Student(stud)))
        )
        // .subscribe({
        //     next:(value) => console.table(value),
        //     error:(error: Error)=> console.error(error)
        // })
    }
}