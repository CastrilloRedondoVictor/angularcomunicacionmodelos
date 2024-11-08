import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'coches', component: PadrecochesComponent},
  {path: 'deportes', component: PadredeportesComponent},
  {path: '**', redirectTo: 'productos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
