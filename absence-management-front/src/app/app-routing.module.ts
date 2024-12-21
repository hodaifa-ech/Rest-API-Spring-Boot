import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantListComponent } from './components/etudiant-list/etudiant-list.component';
import { EtudiantDetailComponent } from './components/etudiant-detail/etudiant-detail.component';
import { CreateEtudiantComponent } from './components/create-etudiant/create-etudiant.component';
import { AbsenceListComponent } from './components/absence-list/absence-list.component';
import { AbsenceDetailComponent } from './components/absence-detail/absence-detail.component';
import { AbsenceFormComponent } from './components/absence-form/absence-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'etudiants', pathMatch: 'full' },
  { path: 'etudiants', component: EtudiantListComponent },
  { path: 'etudiants/:id', component: EtudiantDetailComponent },
  { path: 'create-etudiant', component: CreateEtudiantComponent },
  { path: 'absences', component: AbsenceListComponent },
  { path: 'absences/:id', component: AbsenceDetailComponent },
  { path: 'create-absence', component: AbsenceFormComponent },
  { path: '**', redirectTo: 'etudiants' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
