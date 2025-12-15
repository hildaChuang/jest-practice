import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  @Output() changed = new EventEmitter<number>();
  private count = 0;

  increment() {
    this.count++;
    this.changed.emit(this.count);
  }
}
