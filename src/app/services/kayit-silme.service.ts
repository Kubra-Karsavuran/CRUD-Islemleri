import { Injectable } from '@angular/core';
import { shema } from '../from/shema';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KayitSilmeService {
  constructor(private http: HttpClient) {}

  delete(silmeislemi: shema): Observable<shema[]> {
    return this.http.get<shema[]>('/api/kayitSil/' + silmeislemi);
  }
}
