import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adress-book-card',
  templateUrl: './adress-book-card.component.html',
  styleUrls: ['./adress-book-card.component.css']
})
export class AdressBookCardComponent implements OnChanges {
  @Input() public card;
  @Input() public shouldSocialShow;
  @Output() public cardInfoObj: EventEmitter<any> = new EventEmitter();

  public singleCardObj: {};
  public socialClasses: {};
  public isSocialActive: boolean;

  constructor() { }

  ngOnChanges() {
    this.isSocialActive = this.shouldSocialShow;
    this.setCurrentClasses();
  }

  public onClickEvent(name, phone) {
    this.singleCardObj = {
      'name': name,
      'phone': phone,
      'active': true
    };

    this.cardInfoObj.emit(this.singleCardObj);
  }

  public setCurrentClasses(): void {
    this.socialClasses = {
      'hide': this.isSocialActive
    };
  }

}
