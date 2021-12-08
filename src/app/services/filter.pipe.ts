import { Pipe, PipeTransform } from '@angular/core';
import { Users } from 'src/app/models/user';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, sName: string): any {
    if (sName == '') {
      return null;
    }
    const usersArray: any[] = [];
    for (let i = 0; i < value.length; i++) {
      let userName: string = value[i].username.toLowerCase();
      if (userName.startsWith(sName)) {
        usersArray.push(value[i]);
      }
    }
    return usersArray;
  }
}
