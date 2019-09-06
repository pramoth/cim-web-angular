import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenService} from '../authen.service';
import {filter} from 'rxjs/operators';
import {Subscribable, Subscription} from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    username: string;
    password: string;
    subscription: Subscription;

    constructor(private router: Router, private authenService: AuthenService) {
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    login() {
        this.subscription = this.authenService.login(this.username, this.password).pipe(filter(e => !!e)).subscribe(e => {
            this.router.navigate(['/cim']);
        });
    }
}
