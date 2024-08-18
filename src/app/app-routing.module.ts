import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { BookingsListComponent } from './components/bookings-list/bookings-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SipDashboardComponent } from './components/sip-dashboard/sip-dashboard.component';
import { SipdashboardlistComponent } from './components/sipdashboardlist/sipdashboardlist.component';
import { HotellistComponent } from './components/hotellist/hotellist.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "booking", component: BookingComponent },
  { path: "bookings-list", component: BookingsListComponent },
  {path: "sip_dashboard",component:SipDashboardComponent},
  {path:"sipdashboardlist",component:SipdashboardlistComponent},
  {path:"hotellist",component:HotellistComponent},
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
