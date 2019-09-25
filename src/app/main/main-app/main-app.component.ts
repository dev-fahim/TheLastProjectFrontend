import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MenuGET } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Router } from '@angular/router';
import { BillItemPOST, BillPOST } from '../../models/bill.model';
import { BillService } from 'src/app/services/bill/bill.service';

class MenuBill {
  totalPrice: number = 0;
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
    public discount: number = 0,
    public id: number
  ) {
    this.totalPrice = quantity * price - discount / 100 * this.totalPrice;
  }
}

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'added'];
  dataSource: MatTableDataSource<MenuGET>;

  totalPrice: [] = [];

  grandTotalPrice: number = 0;

  discount: number = 0;

  data: MenuBill[] = [];

  billItems: BillItemPOST[] = [];
  bill: BillPOST;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _menuService: MenuService, private _router: Router, private _billService: BillService) {
  }

  ngOnInit(): void {
    this._menuService.get_all_menu()
      .subscribe((response) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClickFuckingTableData(menuData: MenuGET): void {
    this.data.push(new MenuBill(menuData.name, menuData.price, 1, 0, menuData.id));
    this.onUpdateGrandtotal();
  }

  onPlus(item: MenuBill): void {
    item.quantity += 1;
    item.totalPrice = item.quantity * item.price;
    this.onUpdateGrandtotal();
  }

  onMinus(item: MenuBill): void {
    if (item.quantity >= 2) {
      item.quantity -= 1;
      item.totalPrice = item.quantity * item.price;
      this.onUpdateGrandtotal();
    }
  }

  onRemove(index: number): void {
    this.data.splice(index, 1);
    this.onUpdateGrandtotal();
  }

  onUpdateGrandtotal(): void {
    this.grandTotalPrice = 0;
    for (let i: number = 0; i < this.data.length; i++) this.grandTotalPrice += this.data[i].totalPrice;
  }

  onDiscount(item: MenuBill) {
    item.totalPrice = item.quantity * item.price;
    item.totalPrice -= item.discount / 100 * item.totalPrice;
    this.onUpdateGrandtotal();
  }

  onSubmitBill() {
    if (this.data.length != 0) {
      for (let item of this.data) {
        this.billItems.push({discount: item.discount, menu: item.id, quantity: item.quantity});
      }
      this.bill = {
        bill_data: this.billItems,
        discount: this.discount
      };
      this._billService.postBill(this.bill)
        .subscribe(response => {
          this.data = [];
          this.discount = 0;
          this.grandTotalPrice = 0;
          this.totalPrice = [];
          this.billItems = [];
          this.bill = null;
        });
    }
    console.log(this.billItems);
  }
}
