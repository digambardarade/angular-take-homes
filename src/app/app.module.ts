import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { PersonsComponent } from './shared/components/persons/persons.component';
import { UsersComponent } from './shared/components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PersonsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
