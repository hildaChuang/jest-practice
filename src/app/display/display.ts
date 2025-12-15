import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.html',
  styleUrl: './display.scss',
  standalone: true
})
export class Display {
  @Input() title!: string;

}
