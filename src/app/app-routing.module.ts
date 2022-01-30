import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AddModelComponent} from './components/add-model/add-model.component';
import {CommonModule} from '@angular/common';
import {ModelsComponent} from './components/models/models.component';
import {DetailsComponent} from './components/models/details/details.component';
import {FraudsComponent} from './components/frauds/frauds.component';

const routes: Routes = [
  {path: '', redirectTo: '', component: LoginComponent, pathMatch: 'full'},
  {
    path: 'add-model',
    component: AddModelComponent
  },
  {
    path: 'models',
    component: ModelsComponent
  },
  {
    path: 'details/:name',
    component: DetailsComponent
  },
  {
    path: 'frauds',
    component: FraudsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

