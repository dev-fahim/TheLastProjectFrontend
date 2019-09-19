import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MenuPost } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss']
})
export class MenuEditComponent implements OnInit {

  incoming_data: MenuPost = {
    name: '',
    price: 0
  };

  id: any;

  data: MenuPost;

  menu_item_form = new FormGroup({
    name: new FormControl(this.incoming_data.name, [Validators.required, Validators.minLength(4)]),
    price: new FormControl(this.incoming_data.price, [Validators.required])
  })

  constructor(private _menuService: MenuService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.paramMap
      .subscribe((params) => {
        this.id = params.get('id');
      });
    this._menuService.get_menu(this.id)
      .subscribe((result) => {
        this.incoming_data = {
          name: result.name,
          price: result.price
        }
        this.menu_item_form.setValue({name: this.incoming_data.name, price: this.incoming_data.price});
      })
  }

  onSubmit(){
    if(confirm("Are you sure you want to update this. " + this.incoming_data.name + 'with price: ' + this.incoming_data.price + ' Tk.'))
      this._menuService.put_menu_item(this.menu_item_form.value, this.id)
        .subscribe((result) => {
          this._router.navigate(['/app/menu']);
          return result;
        })
  }

  onDelete(){
    if(confirm("Are you sure you want to delete this. " + this.incoming_data.name + 'with price: ' + this.incoming_data.price + ' Tk.')) {
      this._menuService.del_menu_item(this.id)
      .subscribe((result) => {
        this._router.navigate(['/app/menu']);
        return result;
      })
    }
  }
}
