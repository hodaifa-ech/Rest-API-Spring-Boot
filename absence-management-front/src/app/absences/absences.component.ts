import { Component, OnInit } from '@angular/core';
import { Absence, AbsenceService } from '../service/absence.service';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./absences.component.scss']
})
export class AbsencesComponent implements OnInit {
  absences: Absence[] = [];
  selectedAbsence: Absence | null = null;

  constructor(private absenceService: AbsenceService) {}

  ngOnInit(): void {
    this.loadAbsences();
  }

  loadAbsences(): void {
    this.absenceService.getAllAbsences().subscribe((data) => {
      this.absences = data;
    });
  }

  selectAbsence(absence: Absence): void {
    this.selectedAbsence = { ...absence }; // Clone for editing
  }

  saveAbsence(): void {
    if (this.selectedAbsence) {
      if (this.selectedAbsence.id) {
        this.absenceService
          .updateAbsence(this.selectedAbsence.id, this.selectedAbsence)
          .subscribe(() => this.loadAbsences());
      } else {
        this.absenceService
          .createAbsence(this.selectedAbsence)
          .subscribe(() => this.loadAbsences());
      }
      this.selectedAbsence = null;
    }
  }

  deleteAbsence(id: number): void {
    this.absenceService.deleteAbsence(id).subscribe(() => this.loadAbsences());
  }

  addNewAbsence(): void {
    this.selectedAbsence = {
      id: 0,
      dateAbsence: '',
      justification: '',
      justified: false,
      description: '',
    };
  }
}
