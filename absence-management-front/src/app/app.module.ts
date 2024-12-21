import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import routing module
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; // Import this

import {HttpClientModule} from '@angular/common/http';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AbsencesComponent } from './absences/absences.component';
import {FormsModule} from '@angular/forms';  // Regular component

@NgModule({
  declarations: [
    AppComponent// Only declare the root component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Import AppRoutingModule here
    FormsModule,
    CommonModule, // Add this to imports

    HttpClientModule,
    EtudiantComponent,
    AbsencesComponent,
    // Import AbsenceDetailComponent as well
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
