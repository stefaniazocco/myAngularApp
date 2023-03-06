import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentEverComponent } from './components/my-first-component-ever/my-first-component-ever.component';
import { StudentComponent } from './components/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentEverComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
