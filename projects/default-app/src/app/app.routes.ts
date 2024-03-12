import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../../default-app/src/app/master/master.module').then(m => m.MasterModule)
  },
  {
    path: 'tic-tac-toe',
    loadChildren: () => import('../../../tic-tac-toe/src/lib/tic-tac-toe.module').then(m => m.TicTacToeModule)
  },
];
