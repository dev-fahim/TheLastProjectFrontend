import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainAppComponent } from './main-app/main-app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuEditComponent } from './menu/menu-edit/menu-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'main', component: MainAppComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'menu/:id', component: MenuEditComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
