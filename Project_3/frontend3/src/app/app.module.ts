import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { Warehouse1Component } from './warehouse1/warehouse1.component';
import { Warehouse2Component } from './warehouse2/warehouse2.component';
import { Warehouse3Component } from './warehouse3/warehouse3.component';
import { Warehouse4Component } from './warehouse4/warehouse4.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { Warehouse1detailsComponent } from './productDetails/warehouse1details/warehouse1details.component';
import { Warehouse2detailsComponent } from './productDetails/warehouse2details/warehouse2details.component';
import { Warehouse3detailsComponent } from './productDetails/warehouse3details/warehouse3details.component';
import { Warehouse4detailsComponent } from './productDetails/warehouse4details/warehouse4details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    InventoryComponent,
    Warehouse1Component,
    Warehouse2Component,
    Warehouse3Component,
    Warehouse4Component,
    NavComponent,
    FooterComponent,
    Warehouse1detailsComponent,
    Warehouse2detailsComponent,
    Warehouse3detailsComponent,
    Warehouse4detailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
