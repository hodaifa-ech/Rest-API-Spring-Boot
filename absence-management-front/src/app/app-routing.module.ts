import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantComponent} from './etudiant/etudiant.component';
import {AbsencesComponent} from './absences/absences.component';

const routes: Routes = [
  { path: 'etudiants', component: EtudiantComponent },
  { path: '', redirectTo: '/etudiants', pathMatch: 'full' },
  {path: 'absence', component: AbsencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
