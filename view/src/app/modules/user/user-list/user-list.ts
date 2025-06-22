import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user.service';
import {User} from '../../../core/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit{
 users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe(data => this.users = data);
  }

  delete(id: number): void {
    if (confirm('Confirmer la suppression ?')) {
      this.userService.delete(id).subscribe(() => {
        this.users = this.users.filter(u => u.id !== id);
      });
    }
  }

  edit(id: number): void {
    this.router.navigate(['users/edit', id]);
  }

  add(): void {
    this.router.navigate(['users/create']);
  }
}
