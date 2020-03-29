import {NgModule} from '@angular/core';

import {UserContainerComponent} from './user-container.component';
import {SharedModule} from '../shared/shared.module';
import {UserRoutingModule} from './user-routing.module';


@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
  ],
  declarations: [UserContainerComponent],
})
export class UserModule {
}
