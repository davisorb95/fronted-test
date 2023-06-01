import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './user.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: IUser[], lastPosition: number, pageSize: number, text: string): IUser[] {
    if (text.length === 0 )
      return users
        .sort((a, b) => a.first_name < b.first_name ? -1 : a.first_name > b.first_name ? 1 : 0)
        .slice(lastPosition, lastPosition + pageSize);

    const filteredUsers = users
      .filter(user => user.first_name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
      .sort((a, b) => a.first_name < b.first_name ? -1 : a.first_name > b.first_name ? 1 : 0)
      .slice(lastPosition, lastPosition + pageSize);

    return filteredUsers;
  }

}
