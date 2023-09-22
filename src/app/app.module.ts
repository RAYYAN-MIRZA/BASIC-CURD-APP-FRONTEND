

// Import FormsModule in your app module
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

import { ProductListComponent } from './products/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductListComponent,
    HomeComponent
  ],
  imports: [    
    FormsModule,
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
