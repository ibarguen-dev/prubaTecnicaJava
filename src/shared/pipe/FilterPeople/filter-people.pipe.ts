import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPeoplePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      return Object.keys(item).some((key) => {
        const value = item[key as keyof any];
        return (
          value !== undefined &&
          value !== null &&
          value.toString().toLowerCase().includes(searchText)
        );
      });
    });
  }
}
