import {Absence} from './absence';

export interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  classe: string;
  dateNaissance: Date;
  absences: Absence[];
}
