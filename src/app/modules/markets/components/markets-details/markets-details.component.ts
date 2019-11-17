import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Market} from '../../model/market';
import {MarketsService} from '../../services/markets.service';

@Component({
  selector: 'app-markets-details',
  templateUrl: './markets-details.component.html',
  styleUrls: ['./markets-details.component.scss']
})
export class MarketsDetailsComponent implements OnInit {

  market: Market;

  constructor(private marketService: MarketsService,
              private dialogRef: MatDialogRef<MarketsDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.marketService.getMarket(this.data.id)
      .subscribe(data => {
          this.market = data;
        },
        error => console.log(error));
  }

  onClose() {
    this.dialogRef.close();
  }

}
