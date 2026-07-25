import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Header,About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-routing');
}
