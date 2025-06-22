import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../core/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../core/models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserForm implements OnInit {
  form: FormGroup;
  id?: number;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = +paramId;
      this.isEdit = true;
      this.userService.getById(this.id).subscribe(user => {
        this.form.patchValue(user);
      });
    }
  }

  submit(): void {
    if (this.form.invalid) return;

    const data: User = this.form.value;
    if (this.isEdit && this.id) {
      this.userService.update(this.id, data).subscribe(() => this.router.navigate(['/users']));
    } else {
      this.userService.create(data).subscribe(() => this.router.navigate(['/users']));
    }
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
