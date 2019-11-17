import { Routes } from '@angular/router';
import { MarketsListComponent } from '../components/markets-list/markets-list.component';
import { MarketsComponent } from '../components/markets/markets.component';

export const routes: Routes = [
   {
      path: 'markets-list',
      component: MarketsListComponent
   },
   {
      path: '',
      redirectTo: 'markets-list',
      pathMatch: 'full'
   }
];
