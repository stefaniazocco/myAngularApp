import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HobbyComponent } from './components/hobby/hobby.component';
import { LanguageComponent } from './components/language/language.component';
import { MyFirstComponentEverComponent } from './components/my-first-component-ever/my-first-component-ever.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentComponent } from './components/student/student.component';
import { Student } from './models/student';
import { STUDENTS } from './data/students';
import { ExperienceComponent } from './components/experience/experience.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentEverComponent,
    StudentComponent,
    HobbyComponent,
    LanguageComponent,
    StudentFormComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
