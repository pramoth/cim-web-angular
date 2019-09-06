import {NgModule} from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageHeaderComponent} from "./page-header/page-header.component";
import {MainContentComponent} from "./main-content/main-content.component";
import {EntrypointComponent} from "./entrypoint.component";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {EntrypointRoutingModule} from "./entrypoint-routing.module";
import {CommonModule} from "@angular/common";
import {RecordComponent} from './record/record.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent,
        DashboardComponent,
        PageHeaderComponent,
        MainContentComponent,
        EntrypointComponent,
        RecordComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        EntrypointRoutingModule,
        SharedModule
    ],
    providers: []
})
export class EntrypointModule {
}
