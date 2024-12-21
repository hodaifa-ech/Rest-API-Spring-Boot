export interface Absence {
  id: number;
  dateAbsence: string | Date;
  justification: string;
  justified: boolean;
  description: string;
  etudiantId: number; // Reference to Etudiant
}
