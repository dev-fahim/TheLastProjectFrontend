import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill/bill.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuGET } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu/menu.service';
import { BillDataGET } from '../../../models/bill.model';

@Component({
  selector: 'app-bill-item-edit',
  templateUrl: './bill-item-edit.component.html',
  styleUrls: ['./bill-item-edit.component.scss']
})
export class BillItemEditComponent implements OnInit {

  id: any;
  form = new FormGroup({
    quantity: new FormControl(0),
    menu: new FormControl(0),
  })
  all_menu: MenuGET[] = [];
  item: BillDataGET = {
    id: 0,
    item: {
      name: '',
      price: 0
    },
    quantity: 0,
    discount: 0,
    added: new Date,
    updated: new Date,
    menu: 0,
  };

  constructor(private _billSerive: BillService, private _acRoute: ActivatedRoute, private _router: Router, private _menuService: MenuService) { }

  ngOnInit() {
    this._acRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    })
    this._billSerive.getBillData(this.id)
      .subscribe((response) => {
        this.form.setValue({quantity: response.quantity, menu: response.menu})
        this.item = response;
      })
    this._menuService.get_all_menu()
      .subscribe((response) => {
        this.all_menu = response;
      })
  }

  onSubmit() {
    console.log(this.form.value)
    this._billSerive.putBillData(this.id, {quantity: this.form.get('quantity').value, menu: this.form.get('menu').value, discount: 0})
      .subscribe((response) => {
        this._router.navigate(['app', 'bill'])
      })
  }

}
