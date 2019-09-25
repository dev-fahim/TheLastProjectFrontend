import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainAppComponent } from './main-app/main-app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home.component';
import { MenuAddComponent } from './menu/menu-add/menu-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuEditComponent } from './menu/menu-edit/menu-edit.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BillComponent } from './bill/bill/bill.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatLineModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { BillEditComponent } from './bill/bill-edit/bill-edit.component';
import { BillItemEditComponent } from './bill/bill-item-edit/bill-item-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    MainAppComponent,
    ToolbarComponent,
    SidebarComponent,
    MenuComponent,
    HomeComponent,
    MenuAddComponent,
    MenuEditComponent,
    BillComponent,
    BillEditComponent,
    BillItemEditComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatLineModule,
    MatDividerModule,
    MatSelectModule
  ]
})

export class MainModule { }
