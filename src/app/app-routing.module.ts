import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'refunds',
        loadChildren: () => import('./modules/refunds/refunds.module').then(m => m.RefundsModule)
      },
      {
        path: 'markets',
        loadChildren: () => import('./modules/markets/markets.module').then(m => m.MarketsModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'app'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
