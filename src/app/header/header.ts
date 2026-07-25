import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from '../login/login';
@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterOutlet,Login],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
