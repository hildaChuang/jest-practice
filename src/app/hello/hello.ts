import { Component, inject } from '@angular/core';
import { HelloService } from "../services/hello.service";

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
  standalone: true
})
export class Hello {
  helloService = inject(HelloService);
  message = 'Hello Angular';

  constructor() {
    this.message = this.helloService.getName();
  }

  changeMessage() {
    this.message = 'Clicked!';
  }
}
