import {Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {Authority} from '../model/user';
import {AuthenService} from '../authen.service';

@Directive({
    selector: '[hideByRoles]'
})
export class HideByRolesDirective implements OnDestroy {

    private readonly subscription: Subscription;
    private userAuthorities: Authority[] = [];
    @Input('andCondition')
    andCondition: boolean = true;

    constructor(private el: ElementRef, private authenService: AuthenService) {
        this.subscription = this.authenService.currentUser.subscribe(e => {
            this.userAuthorities = e.authorities;
        });
    }

    @Input('hideByRoles')
    set hasAnyRole(roles: Authority[]) {
        this.el.nativeElement.style.display = this.checkHasAnyRole(roles) && this.andCondition ? 'none' : '';
    }

    public checkHasAnyRole(rolesAllow: Authority[]): boolean {
        if (this.userAuthorities) {
            return this.userAuthorities.some(e => rolesAllow.some(ex => e === ex));
        } else {
            return false;
        }
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }


}
