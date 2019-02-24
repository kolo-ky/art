import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TransfersService} from '../transfers.service';
import {FormControl, FormGroup} from '@angular/forms';
import numberOnly from '../helpers/validator';

@Component({
  selector: 'app-card-to-card',
  templateUrl: './card-to-card.component.html',
  styleUrls: ['./card-to-card.component.css']
})
export class CardToCardComponent implements OnInit {

  public month: Array<number>;
  public year: Array<number>;
  public pay;

  public transferForm: FormGroup;

  constructor(private route: ActivatedRoute, private transferService: TransfersService, private router: Router) {
    this.route.params.subscribe(param => {
      this.pay = this.transferService.findTransfer(parseInt(param.payId, 10));
    });
    this.transferForm = new FormGroup(CardToCardComponent.buildFormControls(this.pay));
  }

  private static buildFormControls(pay) {
    return {
      payerCard: new FormControl(pay ? pay.payerCard : ''),
      payer: new FormControl(pay ? pay.payer : ''),
      month: new FormControl(pay ? pay.cardActive.split('.')[0] : '01'),
      year: new FormControl(pay ? pay.cardActive.split('.')[1] : '2019'),
      recipientCard: new FormControl(pay ? pay.recipientCard : ''),
      amount: new FormControl(pay ? pay.amount : 0)
    };
  }

  ngOnInit() {
    this.month = this.transferService.getMonth();
    this.year = this.transferService.getYear();
  }

  public prepareMonth(item: number): any {
    if (item < 10) {
      return `0${item}`;
    }

    return item;
  }

  public save(): void {
    const payload = {
      id: this.transferService.getNewId(),
      payerCard: this.transferForm.value.payerCard,
      recipientCard: this.transferForm.value.payerCard,
      payer: this.transferForm.value.payer,
      cardActive: `${this.transferForm.value.month}.${this.transferForm.value.year}`,
      amount: this.transferForm.value.amount,
      date: new Date().toLocaleDateString()
    };
    this.transferService.addTransfer(payload);

    this.router.navigate(['history']);
  }

  public numberOnly(event): boolean {
    return numberOnly(event);
  }

}
