import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuPost } from '../../../models/menu.model';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {

  @Output() menu_item_added = new EventEmitter<MenuPost>();

  menu_item_form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    price: new FormControl('', [Validators.required])
  })

  constructor(private _menuService: MenuService) { }

  ngOnInit() {
  }

  onSubmit(){
    let menu_item: MenuPost;
    menu_item = {
      name: this.menu_item_form.get('name').value,
      price: 0
    }
    if(this.menu_item_form.get('price').value != null) menu_item.price = this.menu_item_form.get('price').value;
    if(this.menu_item_form.valid)
      this._menuService.add_menu_item(menu_item)
        .subscribe(result => {
          this.menu_item_added.emit(menu_item);
          this.menu_item_form.reset();
        })
  }

}
