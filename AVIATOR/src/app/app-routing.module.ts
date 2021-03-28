import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { GetPilotsComponent } from './components/get-pilots/get-pilots.component';
import { HomeComponent } from './components/home/home.component';
import { ScriptComponent } from './components/script/script.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
    {
    path: 'about',
    component: AboutPageComponent,
    },
    {
    path: '',
    component: HomeComponent,
    },
    {
    path: 'get-pilots',
    component: GetPilotsComponent,
    },
    {
    path: 'user-info',
    component: UserInfoComponent,
    },
    {
    path: 'script',
    component: ScriptComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }