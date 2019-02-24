export class TransfersService {
  private storeKey = 'transfers';
  private transfers: Array<any>;

  constructor() {
    this.transfers = this.getStoreData();
    this.setLastId();
  }

  private month: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  private year: Array<number> = [2019, 2020, 2021, 2022, 2023, 2024, 2025];

  private lastId = 0;
  private idStep = 1;

  private getStoreData() {
    const store = JSON.parse(localStorage.getItem(this.storeKey));
    return store ? store : [];
  }

  private saveToStore() {
    localStorage.setItem(this.storeKey, JSON.stringify(this.transfers));
  }

  private setLastId(): void {
    this.transfers.forEach(item => {
      if (item.id > this.lastId) {
        this.lastId = item.id;
      }
    });
  }

  public getNewId(): number {
    return this.lastId += this.idStep;
  }

  public getAll(): Array<any> {
    return this.transfers;
  }

  public addTransfer(payload): void {
    this.transfers.push(payload);
    this.saveToStore();
  }

  public deleteTransfer(transfer): void {
    const index = this.transfers.indexOf(transfer);
    this.transfers.splice(index, 1);
    this.saveToStore();
  }

  public getMonth(): Array<any> {
    return this.month;
  }

  public getYear(): Array<any> {
    return this.year;
  }

  public findTransfer(transferId) {
    return this.transfers.find(item => item.id === transferId);
  }
}
