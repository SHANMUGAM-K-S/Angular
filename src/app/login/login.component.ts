import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route:ActivatedRoute){

  }
ngOnInit(){
  let name=this.route.snapshot.paramMap.get('name')
  console.log(name);
  
}
}
