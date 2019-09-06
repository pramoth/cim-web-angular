import {Component, OnInit} from '@angular/core';
import {AuthenService} from '../../authen.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(public authenService: AuthenService) {
    }

    ngOnInit() {
    }

}
