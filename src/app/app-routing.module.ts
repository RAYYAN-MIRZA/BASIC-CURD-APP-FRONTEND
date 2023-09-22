import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HomeComponent } from './home/home/home.component';
const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'',    //                    when the app starts 
    redirectTo:'home',    
    pathMatch: 'full'
  },
  {
    path: "prod",
    component: ProductListComponent
  }
  ,
  {
    path: "add",
    component: AddProductComponent
  }
  ,
  {
    path: "update",
    component: UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
