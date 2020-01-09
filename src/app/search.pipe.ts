import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], filterText: String): any {
    if (!value) return value;
    if (!filterText) return value;
    return value.filter(resp => resp.title.toLowerCase().includes(filterText.toLowerCase()));
  }

}
