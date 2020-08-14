import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SobreComponent } from './sobre/sobre.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CurriculoComponent,
    ExperienciaComponent,
    SobreComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
