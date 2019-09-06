
import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenService} from '../../authen.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
    subscription: Subscription;


    constructor(private router: Router, private  authenService: AuthenService) {
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    logout() {
        this.subscription = this.authenService.logout().subscribe(e => {
            this.router.navigate(['/']);
        });
    }

}
