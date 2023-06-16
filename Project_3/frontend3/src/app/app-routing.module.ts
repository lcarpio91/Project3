import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { Warehouse1Component } from './warehouse1-4components(outdated)/warehouse1/warehouse1.component';
import { Warehouse2Component } from './warehouse1-4components(outdated)/warehouse2/warehouse2.component';
import { Warehouse3Component } from './warehouse1-4components(outdated)/warehouse3/warehouse3.component';
import { Warehouse4Component } from './warehouse1-4components(outdated)/warehouse4/warehouse4.component';
import { Warehouse1detailsComponent } from './productDetails/warehouse1details/warehouse1details.component';
import { Warehouse2detailsComponent } from './productDetails/warehouse2details/warehouse2details.component';
import { Warehouse3detailsComponent } from './productDetails/warehouse3details/warehouse3details.component';
import { Warehouse4detailsComponent } from './productDetails/warehouse4details/warehouse4details.component';
import { ProductsComponent } from './products/products.component';
import { Products1detailsComponent } from './productDetails/products1details/products1details.component';
import { Products2detailsComponent } from './productDetails/products2details/products2details.component';
import { Products3detailsComponent } from './productDetails/products3details/products3details.component';
import { Products4detailsComponent } from './productDetails/products4details/products4details.component';
import { Products2Component } from './products2/products2.component';
import { Products3Component } from './products3/products3.component';
import { Products4Component } from './products4/products4.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'inventory',component: InventoryComponent},
  {path:'about',component: AboutComponent},
  {path:'warehouse1',component: Warehouse1Component},
  {path:'warehouse2', component: Warehouse2Component},
  {path:'warehouse3', component: Warehouse3Component},
  {path:'warehouse4', component: Warehouse4Component},
  {path:'warehouse1/details/:id', component: Warehouse1detailsComponent},
  {path:'warehouse2/details/:id', component: Warehouse2detailsComponent},
  {path:'warehouse3/details/:id', component: Warehouse3detailsComponent},
  {path:'warehouse4/details/:id', component: Warehouse4detailsComponent},
  {path:'products', component: ProductsComponent },
  {path:'products2', component: Products2Component},
  {path:'products3', component: Products3Component},
  {path:'products4', component: Products4Component},
  {path:'products1/details/:id', component: Products1detailsComponent},
  {path:'products2/details/:id', component: Products2detailsComponent},
  {path:'products3/details/:id', component: Products3detailsComponent},
  {path:'products4/details/:id', component: Products4detailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
