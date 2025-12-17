import { Component, signal } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-input-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './input-form.html',
  styleUrl: './input-form.scss',
  standalone: true
})
export class InputForm {
  name = signal('');
  submitValue = signal('');

  onSubmit() {
    this.submitValue.set(this.name())
  }
}
