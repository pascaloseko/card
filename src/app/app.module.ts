import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { CardMaskPipe } from './card-mask.pipe';
import { NumbersOnlyInputDirective } from './numbers-only-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardMaskPipe,
    NumbersOnlyInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
