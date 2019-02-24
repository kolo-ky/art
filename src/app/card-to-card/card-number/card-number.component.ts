import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import numberOnly from '../../helpers/validator';

@Component({
  selector: 'app-card-number',
  templateUrl: './card-number.component.html',
  styleUrls: ['./card-number.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CardNumberComponent),
    multi: true,
  }]
})
export class CardNumberComponent implements ControlValueAccessor {

  public payerCard: Array<string>;

  constructor() { }

  propagateChange = (value: string): void => {};

  propagateTouch = () => {};

  writeValue(card: string): void {
    if (card.length) {
      this.payerCard = card.split(' ');
    } else {
      this.payerCard = ['', '', '', ''];
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  changeNumber(event, i) {
    this.payerCard[i] = event.target.value;
    this.propagateChange(this.payerCard.join(' '));
    this.propagateTouch();
  }

  numberOnly(event): boolean {
    return numberOnly(event);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}
