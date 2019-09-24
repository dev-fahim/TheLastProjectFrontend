import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

// Chart.js Module
import { ChartsModule } from 'ng2-charts';

// matrial.angular.io
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContentComponent } from './content/content.component';
import { InfoCardsComponent } from './content/info-cards/info-cards.component';
import { InfoInsightsComponent } from './content/info-insights/info-insights.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { InventoryService } from './services/inventory/inventory.service';
import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { BillComponent } from './bill/bill.component';
import { httpInterceptorProviders } from './services/httpInterceptor';
import { SearchTablePipe } from './pipes/search-table.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    InfoCardsComponent,
    InfoInsightsComponent,
    LoginComponent,
    BillComponent,
    SearchTablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    ChartsModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers: [InventoryService, AuthService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
