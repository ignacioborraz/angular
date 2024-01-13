import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewComponentComponent } from './pages/new-component/new-component.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { OutputsComponent } from './pages/outputs/outputs.component';
import { DescomposingComponent } from './pages/descomposing/descomposing.component';
import { IndexComponent } from './pages/index/index.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { IgnaComponent } from './pages/igna/igna.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'new-component', component: NewComponentComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'outputs', component: OutputsComponent },
  { path: 'descomposing', component: DescomposingComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'user', component: UserDetailComponent, children: [
    { path: 'igna', component: IgnaComponent }
  ] },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
