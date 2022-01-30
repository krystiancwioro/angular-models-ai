import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { AddModelComponent } from './components/add-model/add-model.component';
import {FormsModule} from '@angular/forms';
import { ModelsComponent } from './components/models/models.component';
import { DetailsComponent } from './components/models/details/details.component';
import { FraudsComponent } from './components/frauds/frauds.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    NavbarComponent,
    AddModelComponent,
    ModelsComponent,
    DetailsComponent,
    FraudsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
