import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserContainerComponent} from './user-container.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [UserContainerComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule {
}
