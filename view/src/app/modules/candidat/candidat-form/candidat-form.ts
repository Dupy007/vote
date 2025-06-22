import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../core/models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CandidatService} from '../../../core/services/candidat.service';
import {UserService} from '../../../core/services/user.service';
import {Candidat} from '../../../core/models/candidat.model';

@Component({
  selector: 'app-candidat-form',
  standalone: false,
  templateUrl: './candidat-form.html',
  styleUrl: './candidat-form.scss'
})
export class CandidatForm implements OnInit {
  form: FormGroup;
  users: User[] = [];
  candidats: Candidat[] = [];
  id?: number;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private candidatService: CandidatService,
    private userService: UserService
  ) {
    this.form = this.fb.group({
      user: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.candidatService.getAll().subscribe(candidats => this.candidats = candidats);
    this.userService.getAll().subscribe(users => this.users = users);

    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = +paramId;
      this.isEdit = true;
      this.candidatService.getById(this.id).subscribe(c => {
        this.form.patchValue({ user: c.user.id });
      });
    }
  }

  submit(): void {
    if (this.form.invalid) return;

    const user = {id:this.form.value.user};
    const candidat = {user: user!};

    if (this.isEdit) {
      this.candidatService.update(this.id!, candidat).subscribe(() => this.router.navigate(['/candidats']));
    } else {
      this.candidatService.create(candidat).subscribe(() => this.router.navigate(['/candidats']));
    }
  }

  cancel(): void {
    this.router.navigate(['/candidats']);
  }
}
