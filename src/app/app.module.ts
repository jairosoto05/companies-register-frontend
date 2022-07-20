import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { ManageCompanyComponent } from './components/manage-company/manage-company.component';
import { AppRoutingModule } from './app.routing';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    ManageCompanyComponent,
    UpdateCompanyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
