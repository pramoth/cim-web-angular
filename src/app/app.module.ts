import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbDateParserFormatter, NgbDatepickerI18n, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {SharedModule} from './shared/shared.module';
import {CustomDatepickerI18n, I18n} from "./shared/custom-datepicker";
import {NgbDateParser} from "./shared/custom-ngb-date-parser";
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComfirmDialogComponent} from './shared/comfirm-dialog/comfirm-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    exports: [
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        SharedModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            closeButton:true
        })
    ],
    providers: [
        I18n,
        {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n},
        {
            provide: NgbDateParserFormatter,
            useClass: NgbDateParser
        },
    ],
    bootstrap: [AppComponent],
    entryComponents:[
        ComfirmDialogComponent
    ]
})
export class AppModule {
}
