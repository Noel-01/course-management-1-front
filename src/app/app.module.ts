import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursoComponent } from './components/curso/curso.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { routing, appRoutingProviders } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    ProfesorComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    routing,
    HttpClientModule,
    appRoutingProviders,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
