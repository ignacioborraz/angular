import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { TitleComponent } from './components/title/title.component';
import { FormComponent } from './components/form/form.component';
import { DataComponent } from './components/data/data.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { NewComponentComponent } from './pages/new-component/new-component.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { OutputsComponent } from './pages/outputs/outputs.component';
import { DescomposingComponent } from './pages/descomposing/descomposing.component';
import { IndexComponent } from './pages/index/index.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { IgnaComponent } from './pages/igna/igna.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    TitleComponent,
    FormComponent,
    DataComponent,
    UserComponent,
    UsersComponent,
    CardUserComponent,
    HeaderComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    HighlightDirective,
    NewComponentComponent,
    InputsComponent,
    OutputsComponent,
    DescomposingComponent,
    IndexComponent,
    ProductDetailComponent,
    UserDetailComponent,
    IgnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
