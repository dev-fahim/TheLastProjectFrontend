import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BillService } from 'src/app/services/bill/bill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BillGET } from 'src/app/models/bill.model';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss']
})
export class BillEditComponent implements OnInit {

  form = new FormGroup({
    discount: new FormControl(0)
  })

  id: any;

  bill_data: BillGET = {
    id: 0,
    discount: 0,
    added: new Date,
    updated: new Date,
    bill_data: []
  };

  constructor(private _billService: BillService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._activatedRouter.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this._billService.getBill(this.id)
      .subscribe((response) => {
        this.bill_data = response;
        this.form.setValue({discount: response.discount})
      })
  }

  onSubmit(){
    this._billService.putBill(this.id, {discount: this.form.get('discount').value})
      .subscribe((response) => {
        this._router.navigate(['app', 'bill']);
      })
  }

  onClickItem(id: number) {
    this._router.navigate(['app', 'bill', 'item', id]);
  }

}
