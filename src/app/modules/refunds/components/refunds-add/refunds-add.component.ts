import {Component, OnInit, Inject} from '@angular/core';
import {RefundsService} from '../../services/refunds.service';
import {Router} from '@angular/router';
import {FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NotificationService} from '../../../../services/notifications/notification.service';

@Component({
  selector: 'app-refunds-add',
  templateUrl: './refunds-add.component.html',
  styleUrls: ['./refunds-add.component.scss']
})
export class RefundsAddComponent implements OnInit {

  addRefundFormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    remaining_amount: new FormControl('', Validators.required),
    installments: new FormControl('', Validators.required),
    remaining_installments: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  get formControls(): { [ctrl: string]: AbstractControl } {
    return this.addRefundFormGroup.controls;
  }

  constructor(private refundService: RefundsService,
              private router: Router,
              private dialogRef: MatDialogRef<RefundsAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.populateForm(this.data);
  }

  initializeGroupFormMarket() {
    this.addRefundFormGroup.setValue({
      id: '',
      name: '',
      amount: '',
      remaining_amount: '',
      installments: '',
      remaining_installments: '',
      description: ''
    });
  }

  addRefund() {
    if (this.addRefundFormGroup.valid) {
      const {
        name,
        amount,
        remaining_amount,
        installments,
        remaining_installments,
        description
      } = this.formControls;
      const param: any = {
        name: name.value,
        amount: amount.value,
        remaining_amount: remaining_amount.value,
        installments: installments.value,
        remaining_installments: remaining_installments.value,
        description: description.value
      };
      this.refundService.createRefund(param)
        .subscribe(data => {
          },
          error => {
            console.log(error);
          });
    }
  }

  populateForm(refund: any) {
    this.addRefundFormGroup.setValue(refund);
  }

  onSubmit() {
    const params = this.addRefundFormGroup.getRawValue();
    if (this.addRefundFormGroup.valid) {
      if (params.id) {
        this.refundService.updateRefund(params.id, params)
          .subscribe(data => {
            },
            error => {
              console.log(error);
            });
      } else {
        this.addRefund();
      }
      this.onClear();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.onClear();
    this.dialogRef.close();
  }

  onClear() {
    this.addRefundFormGroup.reset();
    this.initializeGroupFormMarket();
  }

}
