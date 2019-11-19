import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MarketsService} from '../../services/markets.service';
import {NotificationService} from '../../../../services/notifications/notification.service';
import {DialogServiceService} from 'src/app/services/notifications/dialog-service.service';
import {MarketsComponent} from '../markets/markets.component';
import {MarketsDetailsComponent} from '../markets-details/markets-details.component';
import {Market} from '../../model/market';

@Component({
  selector: 'app-markets-list',
  templateUrl: './markets-list.component.html',
  styleUrls: ['./markets-list.component.scss']
})
export class MarketsListComponent implements OnInit {

  markets: Market[];
  totalMarket: number;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['description', 'place', 'amount', 'date', 'type', 'actions'];
  searchKey: string;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private marketService: MarketsService,
              private dialog: MatDialog,
              private marketComponent: MarketsComponent,
              private notificationService: NotificationService,
              private dialogService: DialogServiceService) {
  }

  ngOnInit() {
    this.loadData();
    /*this.getListMarketForTotalSum();
    this.totalSum();*/
  }

  /*getListMarketForTotalSum() {
    this.marketService.getMarketList()
      .subscribe(data => {
          this.markets = data;
        },
        error => console.log(error));
  }

  totalSum() {
    this.totalMarket = this.markets.reduce((
      acc,
      obj,
    ) => acc + (obj.amount), 0);
    console.log('Total: ', this.totalMarket);
  }*/

  loadData() {
    this.marketService.getMarketList()
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
    const dialogRef = this.dialog.open(MarketsComponent, {
      disableClose: true,
      autoFocus: true,
      width: '60%',
    });
    dialogRef.afterClosed().subscribe(response => {
      this.loadData();
    });
  }

  onEdit(row: any) {
    const dialogRef = this.dialog.open(MarketsComponent, {
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
    const dialogRef = this.dialog.open(MarketsDetailsComponent, {
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
        this.marketService.deleteMarket(id)
          .subscribe(data => {
            this.loadData();
          });
        this.notificationService.warn('! Deleted successfully');
      }
    });
  }

}
