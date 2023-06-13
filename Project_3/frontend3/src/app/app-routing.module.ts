import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { Warehouse1Component } from './warehouse1/warehouse1.component';
import { Warehouse2Component } from './warehouse2/warehouse2.component';
import { Warehouse3Component } from './warehouse3/warehouse3.component';
import { Warehouse4Component } from './warehouse4/warehouse4.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'inventory',component: InventoryComponent},
  {path:'about',component: AboutComponent},
  {path:'warehouse1',component: Warehouse1Component},
  {path:'warehouse2', component: Warehouse2Component},
  {path:'warehouse3', component: Warehouse3Component},
  {path:'warehouse4', component: Warehouse4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
