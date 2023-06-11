import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { Warehouse1Component } from './warehouse1/warehouse1.component';
import { Warehouse2Component } from './warehouse2/warehouse2.component';
import { Warehouse3Component } from './warehouse3/warehouse3.component';
import { Warehouse4Component } from './warehouse4/warehouse4.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    InventoryComponent,
    Warehouse1Component,
    Warehouse2Component,
    Warehouse3Component,
    Warehouse4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
