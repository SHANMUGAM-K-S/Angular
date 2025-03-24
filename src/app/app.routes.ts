import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { ShanmugamComponent } from './shanmugam/shanmugam.component';
import { TemporaryComponent } from './temporary/temporary.component';

export const routes: Routes = [
    {path:'profile',component:ProfileComponent},
    {path:'login',component:LoginComponent},
    {path:'shanmugam',component:ShanmugamComponent},
    {path:'temporary',component:TemporaryComponent},
];
