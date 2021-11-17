import { Pipe, PipeTransform } from '@angular/core';
import { User } from './users.servis';

@Pipe({
  name: 'mapUser',
})
export class MapUsersPipe implements PipeTransform {
  transform(users: User[]): string {
    return users.map((x) => x.name).join(' ,');
  }
}
