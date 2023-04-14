import { Injectable } from '@angular/core';
import { shema } from '../from/shema';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormkaydetService {
  constructor(private http: HttpClient) {}

  verileriKaydet(formkayitlari: any) {
    return this.http.post<shema[]>('/api/kayitYap', formkayitlari);
  }

  yansit(): Observable<shema[]> {
    return this.http.get<shema[]>('/api/veriler');
  }
}
