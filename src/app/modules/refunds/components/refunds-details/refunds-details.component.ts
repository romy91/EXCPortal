import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RefundsService} from '../../services/refunds.service';
import {Refund} from '../../model/refund';

@Component({
  selector: 'app-refunds-details',
  templateUrl: './refunds-details.component.html',
  styleUrls: ['./refunds-details.component.scss']
})
export class RefundsDetailsComponent implements OnInit {

  refund: Refund;

  constructor(private refundService: RefundsService,
              private dialogRef: MatDialogRef<RefundsDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.refundService.getRefund(this.data.id)
      .subscribe(data => {
          this.refund = data;
        },
        error => console.log(error));
  }

  onClose() {
    this.dialogRef.close();
  }

}
