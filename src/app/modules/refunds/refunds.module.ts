import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RefundsListComponent} from './components/refunds-list/refunds-list.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes/refunds.route';
import {RefundsAddComponent} from './components/refunds-add/refunds-add.component';
import {RefundsDetailsComponent} from './components/refunds-details/refunds-details.component';
import {RefundsService} from './services/refunds.service';
import {MaterialModule} from '../material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';


@NgModule({
  declarations: [
    RefundsListComponent,
    RefundsAddComponent,
    RefundsDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    RefundsService,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
    MatSnackBar
  ],
  entryComponents: [
    RefundsAddComponent,
    RefundsDetailsComponent
  ]
})
export class RefundsModule {
}
