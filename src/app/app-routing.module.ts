import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {FooterComponent} from './footer/footer.component';
import {VehicleModeComponent} from './vehicle-mode/vehicle-mode.component';
import {VehicleInfoComponent} from './vehicle-info/vehicle-info.component';
import { MapComponent } from './map/map.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'register',component:RegisterComponent},
{ path: 'navbar' ,component:NavbarComponent },
{path: 'login',component:LoginComponent},
{path:'footer',component:FooterComponent},
{path:'vehicle-mode',component:VehicleModeComponent},
{path:'vehicle-info',component:VehicleInfoComponent},
{path:'map',component:MapComponent},
{path:'payment',component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
