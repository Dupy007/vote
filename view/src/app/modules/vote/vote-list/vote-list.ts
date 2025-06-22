import {Component, OnInit} from '@angular/core';
import {Vote} from '../../../core/models/vote.model';
import {VoteService} from '../../../core/services/vote.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vote-list',
  standalone: false,
  templateUrl: './vote-list.html',
  styleUrl: './vote-list.scss'
})
export class VoteList implements OnInit {
  votes: Vote[] = [];

  constructor(private voteService: VoteService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.voteService.getAll().subscribe(v => this.votes = v);
  }

  delete(id: number): void {
    if (confirm('Supprimer ce vote ?')) {
      this.voteService.delete(id).subscribe(() => this.load());
    }
  }

  add(): void {
    this.router.navigate(['/votes/create']);
  }
}
