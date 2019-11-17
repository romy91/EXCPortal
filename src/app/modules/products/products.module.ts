import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes/products.route';
import { ProductsAddComponent } from './components/products-add/products-add.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
