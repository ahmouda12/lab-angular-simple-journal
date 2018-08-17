import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntryListService {

  constructor( private http: Http ) { }

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/journal-entries`)
      .pipe(map((res) => res.json()))
  }

  get(id) {
    return this.http.get(`${environment.BASE_URL}/api/journal-entries/${id}`)
      .pipe(map((res) => res.json()))
  }
}
