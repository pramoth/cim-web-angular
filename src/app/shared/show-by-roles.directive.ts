import {Directive, ElementRef, Input, OnDestroy, Renderer2} from '@angular/core';
import {Authority, User} from '../model/user';
import {Subscription} from 'rxjs';
import {AuthenService} from '../authen.service';



@Directive({
    selector: '[showByRoles]'
})
export class ShowByRolesDirective implements OnDestroy {
    private readonly subscription: Subscription;
    private userAuthorities: Authority[] = [];
    @Input('andCondition')
    andCondition: boolean = true;

    constructor(private el: ElementRef,private render:Renderer2, private authenService: AuthenService) {
        this.subscription = this.authenService.currentUser.subscribe(e => {
            this.userAuthorities = e.authorities;
        });
    }

    @Input('showByRoles')
    set hasAnyRole(roles: Authority[]) {
        if (!this.checkHasAnyRole(roles) && this.andCondition) {
            this.render.setStyle(this.el.nativeElement,'display','none')
        }
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
