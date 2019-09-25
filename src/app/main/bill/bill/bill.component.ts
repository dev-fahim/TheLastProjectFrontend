import { Component, OnInit } from '@angular/core';
import { BillGET } from 'src/app/models/bill.model';
import { BillService } from 'src/app/services/bill/bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  panelOpenState = false;

  bills: BillGET[] = [];

  constructor(private _billService: BillService, private _router: Router) { }

  ngOnInit() {
    this._billService.getAllBill()
      .subscribe((response) => {
        this.bills = response;
      })
  }

  sum(number_set: number[] = []): number {
    if(number_set.length != 0) {
      for (let i: number = 0; i < number_set.length; i++) number_set[0] += number_set[i];
      return number_set[0];
    }
    return 0;
  }

  totalPrice(item: BillGET): number {
    let prices: number[] = [];
    for (let bill of item.bill_data) {
      prices.push(bill.item.price);
    }
    return this.sum(prices);
  }

  onClickItem(id: number) {
    this._router.navigate(['app', 'bill', id]);
  }

}
