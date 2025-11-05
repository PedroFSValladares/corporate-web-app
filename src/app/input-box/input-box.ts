import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-input-box',
  imports: [],
  standalone: true,
  templateUrl: './input-box.html',
  styleUrl: './input-box.css'
})
export class InputBox {
  inputName = input<string>();
  inputId = input<string>();
  label = input<string>("Label");
  type = input<string>("text");
}
