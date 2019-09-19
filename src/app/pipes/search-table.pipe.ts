import { Pipe, PipeTransform } from '@angular/core';
import { MenuGET } from 'src/app/models/menu.model';

@Pipe({
  name: 'searchTable'
})
export class SearchTablePipe implements PipeTransform {

  transform(menu: MenuGET[], searchText: string) {
    return 0;
  }

}
