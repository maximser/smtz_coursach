import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { PropertysListComponent } from './components/propertys-list/propertys-list.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    PropertysListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4AAp_9XDfLXi9_eVjliU7lWbhRmUKtE4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
