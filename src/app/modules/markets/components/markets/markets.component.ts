import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {MarketsService} from '../../services/markets.service';
import {NotificationService} from '../../../../services/notifications/notification.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MarketsListComponent} from '../markets-list/markets-list.component';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit {

  types = [
    {id: 'MEAT', name: 'Meat'},
    {id: 'CLEANSING', name: 'Cleansing'},
    {id: 'GRAINS', name: 'Grains'},
    {id: 'BREAKFAST', name: 'Breakfast'},
    {id: 'VEGETABLE', name: 'Vegetable'},
    {id: 'HOUSEHOLD', name: 'Household'},
    {id: 'PASTA', name: 'Pasta'},
    {id: 'SPICE', name: 'Spice'},
    {id: 'OTHER', name: 'Other'},
  ];

  get formControls(): { [ctrl: string]: AbstractControl } {
    return this.groupFormMarket.controls;
  }

  groupFormMarket = new FormGroup({
    id: new FormControl(null),
    type: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  });

  constructor(private marketService: MarketsService,
              private notificationService: NotificationService,
              private dialogRef: MatDialogRef<MarketsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.populateForm(this.data);
  }

  initializeGroupFormMarket() {
    this.groupFormMarket.setValue({
      id: '',
      type: '',
      description: '',
      place: '',
      amount: '',
      date: ''
    });
  }

  onClose() {
    this.onClear();
    this.dialogRef.close();
  }

  onClear() {
    this.groupFormMarket.reset();
    this.initializeGroupFormMarket();
  }

  addMarket() {
    if (this.groupFormMarket.valid) {
      const {
        type,
        description,
        place,
        amount,
        date
      } = this.formControls;
      const param: any = {
        type: type.value,
        description: description.value,
        place: place.value,
        amount: amount.value,
        date: date.value
      };
      this.marketService.createMarket(param)
        .subscribe(data => {
          },
          error => {
            console.log(error);
          });
    }
  }

  populateForm(market: any) {
    this.groupFormMarket.setValue(market);
  }

  onSubmit() {
    const params = this.groupFormMarket.getRawValue();
    if (this.groupFormMarket.valid) {
      if (!params.id) {
        this.addMarket();
      } else {
        this.marketService.updateMarket(params.id, params)
          .subscribe(data => {
            },
            error => {
              console.log(error);
            });
      }
      this.onClear();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

}
