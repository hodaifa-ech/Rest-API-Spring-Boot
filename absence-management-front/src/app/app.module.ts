import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import routing module
import { AppComponent } from './app.component';
import { EtudiantListComponent } from './components/etudiant-list/etudiant-list.component';
import { EtudiantDetailComponent } from './components/etudiant-detail/etudiant-detail.component';
import { CreateEtudiantComponent } from './components/create-etudiant/create-etudiant.component';
import { AbsenceListComponent } from './components/absence-list/absence-list.component';
import { AbsenceFormComponent } from './components/absence-form/absence-form.component';
import { AbsenceDetailComponent } from './components/absence-detail/absence-detail.component';
import {HttpClientModule} from '@angular/common/http';  // Regular component

@NgModule({
  declarations: [
    AppComponent  // Only declare the root component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Import AppRoutingModule here
    EtudiantListComponent,  // Import standalone components
    EtudiantDetailComponent,
    CreateEtudiantComponent,
    AbsenceListComponent,
    AbsenceFormComponent,
    AbsenceDetailComponent,
    HttpClientModule  // Import AbsenceDetailComponent as well
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
