// we can customize our code whatever we want


import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector:'profile',
    imports:[RouterLink],
    templateUrl:'./profile.component.html',
    // template:`<h1>Profile Component</h1>`,
    // styles:`h1{color:green}`
    styleUrl:'./profile.component.css'

})


export class ProfileComponent {
     
}