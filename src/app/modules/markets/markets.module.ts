import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarketsListComponent} from './components/markets-list/markets-list.component';
import {MarketsComponent} from './components/markets/markets.component';
import {RouterModule} from '@angular/router';
import {routes} from '../markets/routes/markets.route';
import {MarketsService} from './services/markets.service';
import {NotificationService} from '../../services/notifications/notification.service';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {MarketsDetailsComponent} from './components/markets-details/markets-details.component';


@NgModule({
  declarations: [
    MarketsListComponent,
    MarketsComponent,
    MarketsDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
    MarketsService,
    NotificationService,
    MatSnackBar,
    MarketsComponent,
    MarketsListComponent
  ],
  entryComponents: [
    MarketsComponent,
    MarketsDetailsComponent
  ]
})
export class MarketsModule {
}
