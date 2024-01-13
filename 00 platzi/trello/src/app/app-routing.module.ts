import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './pages/boards/boards.component';

const routes: Routes = [
  { path:'', component: IndexComponent},
  { path:'login', component: LoginComponent},
  { path:'boards', component: BoardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
