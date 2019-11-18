import { Routes } from '@angular/router';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { ProductsAddComponent } from '../components/products-add/products-add.component';

export const routes: Routes = [
    {
        path: 'products-list',
        component: ProductsListComponent,
    },
    {
        path: 'products-add',
        component: ProductsAddComponent
    },
    {
        path: '',
        redirectTo: 'products-list',
        pathMatch: 'full',
    }
];