import {Component, OnInit} from '@angular/core';
import {WinnerProjection} from '../../core/models/winner-projection.model';
import {UserService} from '../../core/services/user.service';
import {VoteService} from '../../core/services/vote.service';
import {CandidatService} from '../../core/services/candidat.service';
import {ResultService} from '../../core/services/result.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  totalUsers = 0;
  totalVotes = 0;
  totalCandidats = 0;
  winners: WinnerProjection[] = [];

  constructor(
    private userService: UserService,
    private voteService: VoteService,
    private candidatService: CandidatService,
    private resultService: ResultService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => this.totalUsers = users.length);
    this.voteService.getAll().subscribe(votes => this.totalVotes = votes.length);
    this.candidatService.getAll().subscribe(candidats => this.totalCandidats = candidats.length);
    this.resultService.getAllResults().subscribe(res => this.winners = res.slice(0, 3));
  }
  goToUser(){
    this.router.navigate(["users"])
  }
  goToCandidat(){
    this.router.navigate(["candidats"])
  }
  goToVote(){
    this.router.navigate(["votes"])
  }
}
