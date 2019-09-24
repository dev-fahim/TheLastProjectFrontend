import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MenuGET } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Router } from '@angular/router';

class MenuBill {
  totalPrice: number;
  constructor(public name: string, public price: number, public quantity: number){
    this.totalPrice = quantity * price;
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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _menuService: MenuService, private _router: Router) {
  }

  ngOnInit(): void{
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

  onClickFuckingTableData(menuData: MenuGET): void{
    this.data.push(new MenuBill(menuData.name, menuData.price, 1));
    this.onUpdateGrandtotal();
  }

  onPlus(item: MenuBill): void{
    item.quantity += 1;
    item.totalPrice = item.quantity * item.price;
    this.onUpdateGrandtotal();
  }

  onMinus(item: MenuBill): void{
    if(item.quantity >= 2){
      item.quantity -= 1;
      item.totalPrice = item.quantity * item.price;
      this.onUpdateGrandtotal();
    }
  }

  onRemove(index: number): void{
    this.data.splice(index, 1);
    this.onUpdateGrandtotal();
  }

  onUpdateGrandtotal(): void{
    this.grandTotalPrice = 0;
    for(let i: number = 0; i < this.data.length; i++) this.grandTotalPrice += this.data[i].totalPrice;
  }

  onDisctount(i: number): void{
    if(i == -1){
      
    }
  }
}
