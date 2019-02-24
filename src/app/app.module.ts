import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TransfersService} from './transfers.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsControlComponent } from './tabs-control/tabs-control.component';
import { CardToCardComponent } from './card-to-card/card-to-card.component';
import { HistoryComponent } from './history/history.component';
import { CardNumberComponent } from './card-to-card/card-number/card-number.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const routes = [
  {
    path: '',
    redirectTo: 'pay',
    pathMatch: 'full'
  },
  {
    path: 'pay',
    component: CardToCardComponent
  },
  {
    path: 'pay/:payId',
    component: CardToCardComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsControlComponent,
    CardToCardComponent,
    HistoryComponent,
    CardNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TransfersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
