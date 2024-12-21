import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Absence } from '../../models/absence';
import { AbsenceService } from '../../services/absence.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-absence-form',
  templateUrl: './absence-form.component.html',
  styleUrls: ['./absence-form.component.scss'],
  imports: [
    FormsModule
  ]
})
export class AbsenceFormComponent implements OnInit {
  absence: Absence = {description: '', justified: false, id: 0, dateAbsence: '', justification: '', etudiantId: 0 };
  isEditing = false;

  constructor(
    private absenceService: AbsenceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.absenceService.getAbsenceById(+id).subscribe((data) => {
        this.absence = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.absenceService.updateAbsence(this.absence.id, this.absence).subscribe(() => {
        this.router.navigate(['/absences']);
      });
    } else {
      this.absenceService.createAbsence(this.absence).subscribe(() => {
        this.router.navigate(['/absences']);
      });
    }
  }
}
