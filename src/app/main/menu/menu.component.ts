import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { MenuGET, MenuPost } from 'src/app/models/menu.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu_items: MenuGET[] = [];
  item: MenuGET;

  constructor(private _menuService: MenuService, private _router: Router) {

  }

  ngOnInit() {
    this.get_menu_items();
  }

  get_menu_items() {
    return this._menuService.get_all_menu() 
    .subscribe(result => {
      this.menu_items = result;
      console.log(this.menu_items);
    })
  }

  onClickUpdate(){
    return this.get_menu_items();
  }

  onAddMenuItem(menu_item_data: MenuGET){
    return this.menu_items.push({name: menu_item_data.name, price: menu_item_data.price, added: new Date()});
  }

  onClickItem(item: MenuGET) {
    this._router.navigate(['app', 'menu', item.id]);
  } 

}


function myFunction() {
  // Declare variables
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
