import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class StudentHttpService{
    constructor(private readonly http: HttpClient){}

    getStudents(){
        return this.http.get('../../assets/students.json', {responseType:'json'})
        .subscribe({
            next:(value) => console.table(value),
            error:(error: Error)=> console.error(error)
        })
    }
}