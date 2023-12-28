import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { RealTimeUpdatesComponent } from './real-time-updates/real-time-updates.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    //{path:'**', component:LoginComponent},
    {path:'dash', component:DashboardComponent},
    {path:'project-list', component:ProjectListComponent},
    {path:'realtime-update', component:RealTimeUpdatesComponent},
    {path:'task-list', component:TaskListComponent},
    {path:'signup', component:SignUpComponent},
    {path:'login', component:LoginComponent}
];
