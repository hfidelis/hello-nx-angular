import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ordersRoutes } from './lib.routes';
import { OrderListComponent } from './order-list/order-list.component';
import { UiComponent } from 'modules/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ordersRoutes),
    UiComponent
  ],
  declarations: [OrderListComponent],
})
export class OrdersModule {}
