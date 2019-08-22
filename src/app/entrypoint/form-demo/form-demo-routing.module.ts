import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeneralComponent} from './general/general.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'general'
  },
  {
    path: 'general',
    pathMatch: 'full',
    component: GeneralComponent,
    data: {name: 'General', header: 'General'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class FormDemoRoutingModule {
}
