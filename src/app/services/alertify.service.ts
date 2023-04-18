import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  kayitOldu(message: string) {
    alertify.success(message);
  }
}
