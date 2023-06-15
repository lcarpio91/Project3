import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { ProductsComponent } from './products/products.component';
import { Products2Component } from './products2/products2.component';
import { Products3Component } from './products3/products3.component';
import { Products4Component } from './products4/products4.component';
import { Products1detailsComponent } from './productDetails/products1details/products1details.component';
import { Products2detailsComponent } from './productDetails/products2details/products2details.component';
import { Products3detailsComponent } from './productDetails/products3details/products3details.component';
import { Products4detailsComponent } from './productDetails/products4details/products4details.component';

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
    Warehouse4detailsComponent,
    ProductsComponent,
    Products2Component,
    Products3Component,
    Products4Component,
    Products1detailsComponent,
    Products2detailsComponent,
    Products3detailsComponent,
    Products4detailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
