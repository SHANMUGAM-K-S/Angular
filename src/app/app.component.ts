import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemporaryComponent } from "./temporary/temporary.component";
import { ShanmugamComponent } from "./shanmugam/shanmugam.component";
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, TemporaryComponent, ShanmugamComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
 
    handleClick(){
alert("Function Called")
  }
  handleClicking(){
    console.log("Button Clicked");
    
  }
}
