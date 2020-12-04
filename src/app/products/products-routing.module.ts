import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'products', children: [
      { path: '', component: ProductListComponent },
      { path: 'id', component: ProductDetailsComponent },
      { path: 'cart', component: ShoppingCartComponent }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsRoutingModule { }
