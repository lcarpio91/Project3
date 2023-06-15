import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { Warehouse1Component } from './warehouse1/warehouse1.component';
import { Warehouse2Component } from './warehouse2/warehouse2.component';
import { Warehouse3Component } from './warehouse3/warehouse3.component';
import { Warehouse4Component } from './warehouse4/warehouse4.component';
import { Warehouse1detailsComponent } from './productDetails/warehouse1details/warehouse1details.component';
import { Warehouse2detailsComponent } from './productDetails/warehouse2details/warehouse2details.component';
import { Warehouse3detailsComponent } from './productDetails/warehouse3details/warehouse3details.component';
import { Warehouse4detailsComponent } from './productDetails/warehouse4details/warehouse4details.component';
import { ProductsComponent } from './products/products.component';


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
  {path:'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
