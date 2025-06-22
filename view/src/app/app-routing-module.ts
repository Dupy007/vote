import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserList} from './modules/user/user-list/user-list';
import {UserForm} from './modules/user/user-form/user-form';
import {Dashboard} from './modules/dashboard/dashboard';
import {CandidatList} from './modules/candidat/candidat-list/candidat-list';
import {CandidatForm} from './modules/candidat/candidat-form/candidat-form';
import {VoteList} from './modules/vote/vote-list/vote-list';
import {VoteForm} from './modules/vote/vote-form/vote-form';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: Dashboard},
  {path: 'users', component: UserList},
  {path: 'users/create', component: UserForm},
  {path: 'users/edit/:id', component: UserForm},
  {path: 'candidats', component: CandidatList},
  {path: 'candidats/create', component: CandidatForm},
  {path: 'candidats/edit/:id', component: CandidatForm},
  {path: 'votes', component: VoteList},
  {path: 'votes/create', component: VoteForm}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
