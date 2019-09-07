import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {Division} from '../model/division';

@Injectable({
    providedIn: 'root'
})
export class DivisionService {
    private cache$: Observable<Division[]>;

    constructor(private http: HttpClient) {
    }

    get allDivisions(): Observable<Division[]> {
        if (!this.cache$) {
            this.cache$ = this.requestDivision().pipe(
                shareReplay(1)
            );
        }
        return this.cache$;

    }

    private requestDivision(): Observable<Division[]> {
        return this.http.get<Division[]>('assets/mock-data/division.json');
    }
}
