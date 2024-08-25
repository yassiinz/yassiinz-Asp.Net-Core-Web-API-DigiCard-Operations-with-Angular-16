import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat'
})
export class CreditCardFormatPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value == null) return '';
    
    const valueStr = value.toString();
    return valueStr.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 &nbsp;&nbsp;&nbsp;').trim();
  }
}
