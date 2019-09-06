import {ChangeDetectorRef, Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cim-web';

  constructor(private _changeDetectRef: ChangeDetectorRef) {

  }

}
