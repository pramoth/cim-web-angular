import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

    breadcrumbs: { data: any, url: string }[] = [];
    header:string

    constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            this.breadcrumbs = [];
            let currentRoute = this.route.root;
            let __url = '';
            do {
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.filter(e => e.outlet === 'primary').forEach(route => {
                    __url += '/' + route.snapshot.url.map(segment => segment.path).join('/');
                    this.header = route.snapshot.data.header
                    this.breadcrumbs.push({
                        data: route.snapshot.data,
                        url: __url
                    });
                    currentRoute = route;
                });
            } while (currentRoute);
        });
    }

}
