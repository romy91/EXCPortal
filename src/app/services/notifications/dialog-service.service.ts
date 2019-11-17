import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      width: '390px',
      disableClose: true,
      position: { top: '10px' },
      data: {
        message: msg
      }
    });
  }
}
