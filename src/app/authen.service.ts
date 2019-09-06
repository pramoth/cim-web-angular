import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Authority, User} from './model/user';

const CURRENT_USER_KEY = 'currentUser';

@Injectable({
    providedIn: 'root'
})
export class AuthenService {
    private currentUserSubject: BehaviorSubject<User>;

    constructor() {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(CURRENT_USER_KEY)));
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get currentUser(): BehaviorSubject<User> {
        return this.currentUserSubject;
    }

    login(username: string, password: string): BehaviorSubject<User> {
        let user = new User();
        user.name = 'สมชาย ใจดี';
        user.username = username;
        let roles = ('' + username).toUpperCase().split(',') as Authority[];
        user.authorities = [...roles];
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return this.currentUserSubject;
    }

    logout(): BehaviorSubject<User> {
        localStorage.removeItem(CURRENT_USER_KEY);
        this.currentUserSubject.next(null);
        return this.currentUserSubject;
    }

    public hasAnyRole(rolesAllow: Authority[]): boolean {
        if (this.currentUserSubject.value && this.currentUserSubject.value.authorities) {
            return this.currentUserSubject.value.authorities.some(e => rolesAllow.some(ex => e === ex));
        } else {
            return false;
        }
    }
}
