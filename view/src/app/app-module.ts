import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpErrorInterceptor} from './core/interceptors/http-error.interceptor';
import { UserList } from './modules/user/user-list/user-list';
import { UserForm } from './modules/user/user-form/user-form';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatButton, MatIconButton} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import { Dashboard } from './modules/dashboard/dashboard';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatLine, MatOption} from '@angular/material/core';
import { CandidatList } from './modules/candidat/candidat-list/candidat-list';
import { CandidatForm } from './modules/candidat/candidat-form/candidat-form';
import {MatSelect} from '@angular/material/select';
import { VoteForm } from './modules/vote/vote-form/vote-form';
import { VoteList } from './modules/vote/vote-list/vote-list';

@NgModule({
  declarations: [
    App,
    UserList,
    UserForm,
    Dashboard,
    CandidatList,
    CandidatForm,
    VoteForm,
    VoteList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTable,
    MatIcon,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatIconButton,
    MatHeaderRow,
    MatRow,
    MatButton,
    MatFormField,
    FormsModule,
    MatInput,
    MatFormField,
    MatCardTitle,
    MatCardContent,
    MatCard,
    MatList,
    MatListItem,
    MatIcon,
    MatLine,
    MatLabel,
    ReactiveFormsModule,
    MatListItemLine,
    MatListItemTitle,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef,
    MatRowDef,
    MatSelect,
    MatOption,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }
