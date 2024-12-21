import { Component, OnInit } from '@angular/core';
import { Absence } from '../../models/absence';
import { AbsenceService } from '../../services/absence.service';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.scss'],
  imports: [
    RouterLink,
    NgForOf
  ]
})
export class AbsenceListComponent implements OnInit {
  absences: Absence[] = [];

  constructor(private absenceService: AbsenceService) {}

  ngOnInit(): void {
    this.loadAbsences();
  }

  loadAbsences(): void {
    this.absenceService.getAllAbsences().subscribe((data) => {
      this.absences = data;
    });
  }

  deleteAbsence(id: number): void {
    if (confirm('Are you sure you want to delete this absence?')) {
      this.absenceService.deleteAbsence(id).subscribe(() => {
        this.absences = this.absences.filter((a) => a.id !== id);
      });
    }
  }
}

