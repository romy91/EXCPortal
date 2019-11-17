import {Component, OnInit, ViewChild} from '@angular/core';
import {RefundsService} from '../../services/refunds.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {NotificationService} from '../../../../services/notifications/notification.service';
import {DialogServiceService} from '../../../../services/notifications/dialog-service.service';
import {RefundsDetailsComponent} from '../refunds-details/refunds-details.component';
import {RefundsAddComponent} from '../refunds-add/refunds-add.component';

@Component({
  selector: 'app-refunds-list',
  templateUrl: './refunds-list.component.html',
  styleUrls: ['./refunds-list.component.scss']
})
export class RefundsListComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'amount', 'remaining_amount', 'installments', 'remaining_installments', 'description',
    'actions'];
  searchKey: string;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private refundService: RefundsService,
              private dialog: MatDialog,
              private notificationService: NotificationService,
              private dialogService: DialogServiceService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.refundService.getRefundsList()
      .subscribe(list => {
        const array = list;
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            // tslint:disable-next-line:triple-equals
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };
      });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    const dialogRef = this.dialog.open(RefundsAddComponent, {
      disableClose: true,
      autoFocus: true,
      width: '60%',
    });
    dialogRef.afterClosed().subscribe(response => {
      this.loadData();
    });
  }

  onEdit(row: any) {
    const dialogRef = this.dialog.open(RefundsAddComponent, {
      disableClose: true,
      autoFocus: true,
      width: '60%',
      data: {...row}
    });
    dialogRef.afterClosed().subscribe(response => {
      this.loadData();
    });
  }

  onDetails(row: any) {
    const dialogRef = this.dialog.open(RefundsDetailsComponent, {
      disableClose: true,
      autoFocus: true,
      width: '60%',
      data: {...row}
    });
  }

  onDelete(id: any) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(response => {
      if (response) {
        this.refundService.deleteRefund(id)
          .subscribe(data => {
            this.loadData();
          });
        this.notificationService.warn('! Deleted successfully');
      }
    });
  }

}
