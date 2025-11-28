import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  getName(): string {
    return 'Hilda';
  }
}
