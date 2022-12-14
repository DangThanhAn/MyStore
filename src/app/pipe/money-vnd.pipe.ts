import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMoneyVnd'
})
export class MoneyVndPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let valueNew : string;
    valueNew = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    return valueNew;
  }

}
