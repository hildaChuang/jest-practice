import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
  standalone: true
})
export class Child {
  @Input() value!: string;

}
