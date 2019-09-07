import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Authority, User} from './model/user';

const CURRENT_USER_KEY = 'currentUser';

@Injectable({
    providedIn: 'root'
})
export class AuthenService {
    private currentUserSubject: BehaviorSubject<User>;
    readonly DIVISION: Map<Authority,string> = new Map<Authority, string>()
    readonly POSITION: Map<Authority,string> = new Map<Authority, string>()

    constructor() {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(CURRENT_USER_KEY)));
        this.DIVISION.set("OMBUDSMAN","ผผ.")
        this.DIVISION.set("SECRETARY","เลขาธิการ")
        this.DIVISION.set("DEPUTY_SECRETARY","รองเลขาธิการ")
        this.DIVISION.set("INTAKE","สตร.")
        this.DIVISION.set("INVESTIGATION_1","สส. 1")
        this.DIVISION.set("INVESTIGATION_2","สส. 2")
        this.DIVISION.set("INVESTIGATION_3","สส. 3")
        this.DIVISION.set("INVESTIGATION_4","สส. 3")
        this.DIVISION.set("INVESTIGATION_4","สส. 3")
        this.DIVISION.set("INVESTIGATION_GOV","สตท.")
        this.DIVISION.set("LEGAL","กฏหมาย")

        this.POSITION.set("DEPARTMENT_HEAD","ผอ.")
        this.POSITION.set("DIVISION_HEAD","หัวหน้า")
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
        user.divisionName = this.DIVISION.get(roles[0])
        if(roles.length > 1){
            user.position = this.POSITION.get(roles[1])
        }
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
