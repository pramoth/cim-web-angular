import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowByRolesDirective} from './show-by-roles.directive';
import {HideByRolesDirective} from './hide-by-roles.directive';
import {ColorPaletteDirective} from '../color-palette.directive';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [
        ShowByRolesDirective,
        HideByRolesDirective,
        ColorPaletteDirective
    ],
    exports: [
        ShowByRolesDirective,
        HideByRolesDirective,
        ColorPaletteDirective
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class SharedModule {
}
