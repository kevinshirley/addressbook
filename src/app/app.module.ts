import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { AdressBookComponent } from './components/adress-book/adress-book.component';
import { AdressBookCardComponent } from './components/adress-book-card/adress-book-card.component';
import { SingleCardComponent } from './components/single-card/single-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MainTitleComponent,
    AdressBookComponent,
    AdressBookCardComponent,
    SingleCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
