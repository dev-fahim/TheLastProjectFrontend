import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainAppComponent } from './main-app/main-app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home.component';
import { MenuAddComponent } from './menu/menu-add/menu-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuEditComponent } from './menu/menu-edit/menu-edit.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    MainAppComponent,
    ToolbarComponent,
    SidebarComponent,
    MenuComponent,
    HomeComponent,
    MenuAddComponent,
    MenuEditComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ]
})

export class MainModule { }
