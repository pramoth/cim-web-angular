import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.css']
})
export class BreadcumbComponent {

  breadcrumbs: Array<Object>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event) => {
      this.breadcrumbs = [];
      let currentRoute = this.route.root,
        url = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.filter(e => e.outlet === 'primary').forEach(route => {
          url += '/' + route.snapshot.url.map(segment => segment.path).join('/');
          this.breadcrumbs.push({
            label: route.snapshot.data,
            url: url
          });
          currentRoute = route;
        });
      } while (currentRoute);
    });
  }

}
