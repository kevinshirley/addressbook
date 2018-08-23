import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnChanges {
  @Input() public cardObj;
  @Output() public viewStatus: EventEmitter<any> = new EventEmitter();

  public singleCard;
  public changeView;
  public shouldSocialShow: boolean = true;

  constructor() { }

  ngOnChanges() {
    this.singleCard = [
      {
        "name" : this.cardObj.name,
        "phone": this.cardObj.phone
      }
    ];
  }

  public returnAddressBook() {
    this.changeView = {
      'singleCard': false,
      'addressBook': true
    };

    this.viewStatus.emit(this.changeView);
  }
}
