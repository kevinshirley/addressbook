import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * as adressjson from '../../addressbook.json';

@Component({
  selector: 'app-adress-book',
  templateUrl: './adress-book.component.html',
  styleUrls: ['./adress-book.component.css']
})
export class AdressBookComponent implements OnInit {
  @Output() public singleCardObj: EventEmitter<any> = new EventEmitter();

  public letters;
  public json;
  public singleCard;
  public singleCardName;
  public singleCardPhone;
  public cardsClasses;
  public singleCardClasses;
  public isSingleCardActive: boolean = false;
  public isCardsActive: boolean = true;
  public shouldSocialShow: boolean = false;

  constructor() { }

  ngOnInit() {
    // this.json = adressjson;
    // console.log(this.json);
    this.json = [
      {
        "name" :"Jonh Doe",
        "email":"john.doe@example.com",
        "phone": "0123456789"
      },
      {
        "name" :"Sue Shei",
        "email":"sue.shei@example.com",
        "phone": "0123456789"
      },
      {
        "name" :"Eric Widget",
        "email":"eric.widget@example.com",
        "phone": "0123456789"
      },
      {
        "name" :"Max Conversion",
        "email":"max.conversion@example.com",
        "phone": "0123456789"
      },
      {
        "name" :"Desmond Eagle",
        "email":"desmond.eagle@example.com",
        "phone": "0123456789"
      },
      {
        "name" :"Pelican Steve",
        "email":"pelican.steve@example.com",
        "phone": "0123456789"
      },
      {
        "name" :"Fergus Douchebag",
        "email":"fergus.douchebag@example.com",
        "phone": "0123456789"
      },
      {
        "name" :"Ingredia Nutrisha",
        "email":"ingredia.nutrisha@example.com",
        "phone": "0123456789"
      },
      {
        "name" :"Giles Posture",
        "email":"giles.posture@example.com",
        "phone": "0123456789"
      }
    ];

    this.letters = [
      {
        name: 'A'
      },
      {
        name: 'B'
      },
      {
        name: 'C'
      },
      {
        name: 'D'
      },
      {
        name: 'E'
      },
      {
        name: 'F'
      },
      {
        name: 'G'
      },
      {
        name: 'H'
      },
      {
        name: 'I'
      },
      {
        name: 'J'
      },
      {
        name: 'K'
      },
      {
        name: 'L'
      },
      {
        name: 'M'
      },
      {
        name: 'N'
      },
      {
        name: 'O'
      },
      {
        name: 'P'
      },
      {
        name: 'Q'
      },
      {
        name: 'R'
      },
      {
        name: 'S'
      },
      {
        name: 'T'
      },
      {
        name: 'U'
      },
      {
        name: 'V'
      },
      {
        name: 'W'
      },
      {
        name: 'X'
      },
      {
        name: 'Y'
      },
      {
        name: 'Z'
      }
    ];
  }

  public onInfoSent(cardInfoObj) {
    this.singleCard = {
      'name' : cardInfoObj.name,
      'phone': cardInfoObj.phone,
      'active': cardInfoObj.active
    };
    this.singleCardObj.emit(this.singleCard);
  }

  public setCurrentClasses(): void {
    this.cardsClasses = {
      'hide': this.isSingleCardActive
    };
    this.singleCardClasses = {
      'hide': this.isCardsActive
    };
  }

}
