import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../core/models/user.model';
import {Candidat} from '../../../core/models/candidat.model';
import {Vote} from '../../../core/models/vote.model';
import {VoteService} from '../../../core/services/vote.service';
import {UserService} from '../../../core/services/user.service';
import {CandidatService} from '../../../core/services/candidat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vote-form',
  standalone: false,
  templateUrl: './vote-form.html',
  styleUrl: './vote-form.scss'
})
export class VoteForm implements OnInit {
  form: FormGroup;
  users: User[] = [];
  candidats: Candidat[] = [];
  votes: Vote[] = [];

  constructor(
    private fb: FormBuilder,
    private voteService: VoteService,
    private userService: UserService,
    private candidatService: CandidatService,
    private router: Router
  ) {
    this.form = this.fb.group({
      user: [null, Validators.required],
      candidat: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.voteService.getAll().subscribe(v => {
      this.votes = v;
      this.loadUsers();
    });

    this.candidatService.getAll().subscribe(c => this.candidats = c);
  }

  loadUsers(): void {
    this.userService.getAll().subscribe(users => {
      const votedUserIds = this.votes.map(v => v.user.id);
      this.users = users.filter(u => !votedUserIds.includes(u.id));
    });
  }

  submit(): void {
    if (this.form.invalid) return;

    const user = {id:this.form.value.user};
    const candidat = {id:this.form.value.candidat};

    const vote = {
      user: user!,
      candidat: candidat!,
    };

    this.voteService.create(vote).subscribe(() => this.router.navigate(['/votes']));
  }

  cancel(): void {
    this.router.navigate(['/votes']);
  }
}
