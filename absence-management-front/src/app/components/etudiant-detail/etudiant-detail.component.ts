import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../../models/etudiant';
import { EtudiantService } from '../../services/etudiant.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-etudiant-detail',
  templateUrl: './etudiant-detail.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./etudiant-detail.component.scss']
})
export class EtudiantDetailComponent implements OnInit {
  etudiant: Etudiant = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    classe: '',
    dateNaissance: new Date(),
    absences: []
  };

  constructor(
    private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.etudiantService.getEtudiantById(id).subscribe(data => {
      this.etudiant = data;
    });
  }

  onSubmit(): void {
    this.etudiantService.updateEtudiant(this.etudiant.id, this.etudiant).subscribe(() => {
      this.router.navigate(['/etudiants']);
    });
  }
}
