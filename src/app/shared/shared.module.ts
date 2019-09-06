import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowByRolesDirective} from './show-by-roles.directive';
import {HideByRolesDirective} from './hide-by-roles.directive';


@NgModule({
    declarations: [
        ShowByRolesDirective,
        HideByRolesDirective
    ],
    exports: [
      ShowByRolesDirective,
      HideByRolesDirective
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
