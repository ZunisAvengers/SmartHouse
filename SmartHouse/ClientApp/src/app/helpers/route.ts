import { RouterModule } from '@angular/router'
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';

export const router = RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: ''}
])