import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  kayitOldu(message: string) {
    alertify.success(message);
  }

  updateTrue(message: string) {
    alertify.success(message);
  }
}
