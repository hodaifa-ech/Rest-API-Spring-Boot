import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../../models/etudiant';
import { EtudiantService } from '../../services/etudiant.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./create-etudiant.component.scss']
})
export class CreateEtudiantComponent {
  etudiant: Etudiant = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    classe: '',
    dateNaissance: new Date(),
    absences: []
  };

  constructor(private etudiantService: EtudiantService, private router: Router) {}

  onSubmit(): void {
    this.etudiantService.createEtudiant(this.etudiant).subscribe(() => {
      this.router.navigate(['/etudiants']);
    });
  }
}
