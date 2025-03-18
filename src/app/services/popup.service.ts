import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private successMessageSubject = new Subject<string>();
  successMessage$ = this.successMessageSubject.asObservable();

  constructor() {}

  // Trigger the success message
  showSuccess(message: string) {
    this.successMessageSubject.next(message);

    // Hide success message after 3 seconds
    setTimeout(() => {
      this.successMessageSubject.next('');
    }, 3000);
  }
}
