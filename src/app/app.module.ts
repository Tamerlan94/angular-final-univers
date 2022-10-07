import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversComponent } from './univers/univers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';
import { UniversItemComponent } from './univers-item/univers-item.component';
import { AllUniversitiesComponent } from './all-universities/all-universities.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversComponent,
    UniversItemComponent,
    AllUniversitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
