import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowByRolesDirective} from './show-by-roles.directive';
import {HideByRolesDirective} from './hide-by-roles.directive';
import {ColorPaletteDirective} from '../color-palette.directive';
import {HttpClientModule} from '@angular/common/http';
import { ComfirmDialogComponent } from './comfirm-dialog/comfirm-dialog.component';


@NgModule({
    declarations: [
        ShowByRolesDirective,
        HideByRolesDirective,
        ColorPaletteDirective,
        ComfirmDialogComponent
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
