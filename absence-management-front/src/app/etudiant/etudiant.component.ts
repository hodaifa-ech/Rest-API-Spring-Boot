import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

interface Etudiant {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  classe: string;
  dateNaissance: string;
}

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  etudiants: Etudiant[] = [];
  selectedEtudiant: Etudiant | null = null;
  newEtudiant: Etudiant = { nom: '', prenom: '', email: '', classe: '', dateNaissance: '' };
  currentEtudiant: Etudiant;
  apiUrl: string = 'http://localhost:8081/api/etudiants'; // Update with your API URL

  constructor(private http: HttpClient) {
    this.currentEtudiant = this.newEtudiant;
  }

  ngOnInit(): void {
    this.getEtudiants();

  }
  getEtudiants(): void {
    this.http.get<Etudiant[]>(this.apiUrl).subscribe(
      (data) => {
        this.etudiants = data;
        console.log('Fetched students:', this.etudiants); // Ensure correct data structure
      },
      (error) => {
        console.error('Error fetching students:', error); // Handle any errors
      }
    );
  }

  selectEtudiant(etudiant: Etudiant): void {
    this.selectedEtudiant = etudiant;
    this.currentEtudiant = { ...etudiant };
  }

  resetForm(): void {
    this.selectedEtudiant = null;
    this.currentEtudiant = { ...this.newEtudiant };
  }

  saveEtudiant(): void {
    if (this.selectedEtudiant) {
      // Update existing Etudiant
      this.http.put(`${this.apiUrl}/${this.selectedEtudiant.id}`, this.currentEtudiant).subscribe(() => {
        this.getEtudiants();
        this.resetForm();
      });
    } else {
      // Create new Etudiant
      this.http.post(this.apiUrl, this.currentEtudiant).subscribe(() => {
        this.getEtudiants();
        this.resetForm();
      });
    }
  }

  deleteEtudiant(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.getEtudiants();
    });
  }
}
