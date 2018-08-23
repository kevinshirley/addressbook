import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cardObj;
  public cardsClasses;
  public singleCardClasses;
  public isSingleCardActive: boolean;
  public isAddressBookActive: boolean = true;

  constructor() { }

  ngOnInit() {
    
  }

  public onCardObj(obj) {
    if (obj) {
      const cardObjData = obj;
      this.cardObj = cardObjData;

      this.isSingleCardActive = obj.active;
      this.isAddressBookActive = false;
      
      this.setCurrentClasses();
    }
  }

  public onViewUpdate(viewObj) {
    this.isAddressBookActive = viewObj.addressBook;
    this.isSingleCardActive = viewObj.singleCard;
    this.setCurrentClasses();
  }

  public setCurrentClasses(): void {
    this.cardsClasses = {
      'hide': this.isSingleCardActive
    };
    this.singleCardClasses = {
      'hide': this.isAddressBookActive
    };
  }

}
