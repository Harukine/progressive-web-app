import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
  },
  {
    path: 'notes',
    loadChildren: () => import('./modules/notes/notes.module').then(m => m.NotesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
