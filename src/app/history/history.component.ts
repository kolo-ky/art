import { Component, OnInit } from '@angular/core';
import {TransfersService} from '../transfers.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public transfers: Array<any>;
  public matches: Array<number> = [5, 6, 7, 8, 9, 10, 11, 12];

  constructor(private transferService: TransfersService) { }

  ngOnInit() {
    this.transfers = this.transferService.getAll();
  }

  public deletePay(transfer): void {
    this.transferService.deleteTransfer(transfer);
  }

  private replaceNumbers = (str, matches): string => {
    let count = 0;
    return str.replace(/\d/g, d => matches.includes(++count) ? '*' : d);
  }

  public getNumber(card): string {
    return this.replaceNumbers(card, this.matches);
  }

}
