import { Injectable } from '@angular/core';
import { shema } from '../from/shema';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor(private http: HttpClient) {}

  updateWork(updateVerileri: any, guncel_veri_id: any) {
    return this.http.post<shema[]>('/api/Update', {
      updateVerileri,
      guncel_veri_id,
    });
  }
}
