import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemporaryComponent } from "./temporary/temporary.component";
import { ShanmugamComponent } from "./shanmugam/shanmugam.component";
import { ProfileComponent } from './profile/profile.component';


@Component({
  selector: 'app-root',
  imports: [
    // LoginComponent, TemporaryComponent, ShanmugamComponent,ProfileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
//   name:string="shanmugam"
//   data:string|number="sk"
//   other:any=true

//   updated(){
//     this.name="sm"
//     this.data=420
//     this.other="shanmugam"

//     this.other=false
//     this.other=420
//   }

//   // we can declare a variable inside a function only
//   newFun(){
//     var x=10
//   }
 
//     handleClick(){
// alert("Function Called")
//   }
//   handleClicking(){
//     console.log("Button Clicked");
    
//   }


// count=0

// handleInc(){
//   this.count+=1
//   }
//   handleDec(){
//     this.count-=1
//     }
//     handleRes(){
//       this.count=0
//       }

//       handleCount(val:string){
// if(val=='min'){
//   this.count-=1
// }else if(val=='plus'){
//   this.count+=1
// }else{
//   this.count=0
// }
//       }


// textChange(event:any){
//   console.log("Button clicked",event);
//   // console.log("Function called",(event.target as Element).classList);
// }

// get & set input field value
// name=""
// getName(event:Event){
//   this.name=(event.target as HTMLInputElement).value
// }




}
