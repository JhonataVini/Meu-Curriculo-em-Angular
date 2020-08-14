import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SobreComponent } from './sobre/sobre.component';


const routes: Routes = [
  {path: '', component: CurriculoComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
