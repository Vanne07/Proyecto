import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'usuario',
    loadChildren:()=> import('./usuario/usuario.module').then(m=> m.UsuarioModule)
  },
  {
    path:'resenaproducto',
    loadChildren:()=> import('./resenaproducto/resenaproducto.module').then(m=> m.ResenaproductoModule)
  },
  {
    path:'producto',
    loadChildren:()=> import('./producto/producto.module').then(m=> m.ProductoModule)
  },
  {
    path:'detallecompra',
    loadChildren:()=> import('./detallecompra/detallecompra.module').then(m=> m.DetallecompraModule)
  },
  {
    path:'compra',
    loadChildren:()=> import('./compra/compra.module').then(m=> m.CompraModule)
  },
  {
    path:'caracteristicaproducto',
    loadChildren:()=> import('./caracteristicaproducto/caracteristicaproducto.module').then(m=> m.CaracteristicaproductoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
