import { Routes } from '@angular/router';
import { RefundsListComponent } from '../components/refunds-list/refunds-list.component';
import { RefundsAddComponent } from '../components/refunds-add/refunds-add.component';

export const routes: Routes = [
    {
        path: 'refunds-list',
        component: RefundsListComponent,
    },
    {
        path: '',
        redirectTo: 'refunds-list',
        pathMatch: 'full',
    }
];
