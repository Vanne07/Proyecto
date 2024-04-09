import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarproductoComponent } from './listarproducto/listarproducto.component';
import { Router, RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path:'',
    component: ListarproductoComponent
  }
]

@NgModule({
  declarations: [
    ListarproductoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ProductoModule { }
