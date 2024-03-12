import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeRoutingModule } from './tic-tac-toe.routing.module';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

@NgModule({
  imports: [
    CommonModule,
    TicTacToeRoutingModule,
  ],
  declarations: [
    TicTacToeComponent
  ],
  exports: [
    TicTacToeComponent
  ],
  providers: [

  ]
})
export class TicTacToeModule {}

