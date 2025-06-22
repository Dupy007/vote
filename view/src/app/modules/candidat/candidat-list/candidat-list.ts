import {Component, OnInit} from '@angular/core';
import {Candidat} from '../../../core/models/candidat.model';
import {CandidatService} from '../../../core/services/candidat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-candidat-list',
  standalone: false,
  templateUrl: './candidat-list.html',
  styleUrl: './candidat-list.scss'
})
export class CandidatList implements OnInit {
  candidats: Candidat[] = [];

  constructor(private candidatService: CandidatService, private router: Router) {
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.candidatService.getAll().subscribe(data => this.candidats = data);
  }

  delete(id: number): void {
    if (confirm('Supprimer ce candidat ?')) {
      this.candidatService.delete(id).subscribe(() => this.load());
    }
  }

  add(): void {
    this.router.navigate(['/candidats/create']);
  }

  edit(id: number): void {
    this.router.navigate(['/candidats/edit', id]);
  }
}
