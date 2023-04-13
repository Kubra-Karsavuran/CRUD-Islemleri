import { Injectable } from '@angular/core';
import { shema } from '../from/shema';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormkaydetService {
  constructor(private http: HttpClient) {}

  verileriKaydet(formkayitlari: any) {
    return this.http.get<shema[]>('/api/kayitYap' + formkayitlari);
  }
}
