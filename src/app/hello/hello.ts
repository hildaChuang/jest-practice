import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
  standalone: true
})
export class Hello {
  message = 'Hello Angular';

  changeMessage() {
    this.message = 'Clicked!';
  }
}
