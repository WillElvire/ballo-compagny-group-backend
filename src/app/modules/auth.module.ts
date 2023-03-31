import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../view/admin/auth/login/login.component';
import { AuthRoutingModule } from '../view/admin/auth/routes/auth.routing';
import { ServiceModule } from './services.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from './components.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    ServiceModule,
    ReactiveFormsModule,
    TuiButtonModule,
    FormsModule,
    CommonModule,
    NzButtonModule,
    ComponentModule
  ],
  exports: [],
  entryComponents: [],
})
export class AuthModule {
  constructor() {}
}
