import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemporaryComponent } from "./temporary/temporary.component";
import { ShanmugamComponent } from "./shanmugam/shanmugam.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponent, TemporaryComponent, ShanmugamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
