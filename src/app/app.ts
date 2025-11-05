import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InputBox } from "./input-box/input-box";
import {SideMenuComponent} from './side-menu-component/side-menu-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, SideMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-front');
}
