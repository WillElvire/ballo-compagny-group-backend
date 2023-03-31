import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiButtonModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './view/guess/landing/landing.component';
import { ComponentModule } from './modules/components.module';
import { ShoppingModule } from './modules/shopping.module';
import { AuthModule } from './modules/auth.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardModule } from './modules/dashboard.module';
import { TuiHostedDropdownModule, TuiDataListModule } from '@taiga-ui/core';
import { TuiProgressModule } from '@taiga-ui/kit';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpinModule } from 'ng-zorro-antd/spin';

registerLocaleData(fr);

@NgModule({
  declarations: [AppComponent, LandingComponent, AdminLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    HttpClientModule,
    ComponentModule,
    ShoppingModule,
    AuthModule,
    TuiAlertModule,
    DashboardModule,
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiProgressModule,
    FormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    AkitaNgRouterStoreModule,
    NzButtonModule,
    NzSpinModule
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }, { provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent],
})
export class AppModule {}
