import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainAppComponent } from './main-app/main-app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuEditComponent } from './menu/menu-edit/menu-edit.component';
import { BillComponent } from './bill/bill/bill.component';
import { BillEditComponent } from './bill/bill-edit/bill-edit.component';
import { BillItemEditComponent } from './bill/bill-item-edit/bill-item-edit.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'main', component: DashboardComponent },
    { path: 'bill/add', component: MainAppComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'menu/:id', component: MenuEditComponent },
    { path: 'bill', component: BillComponent },
    { path: 'bill/:id', component: BillEditComponent },
    { path: 'bill/item/:id', component: BillItemEditComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
