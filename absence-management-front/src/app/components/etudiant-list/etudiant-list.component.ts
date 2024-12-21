import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../services/etudiant.service';
import { Etudiant } from '../../models/etudiant';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';
@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  imports: [
    RouterLink,
    NgForOf
  ],
  styleUrls: ['./etudiant-list.component.scss']
})
export class EtudiantListComponent implements OnInit {
  etudiants: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.etudiantService.getAllEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }

  deleteEtudiant(id: number): void {
    if (confirm('Are you sure you want to delete this Etudiant?')) {
      this.etudiantService.deleteEtudiant(id).subscribe(() => {
        this.etudiants = this.etudiants.filter(etudiant => etudiant.id !== id);
      });
    }
  }
}
