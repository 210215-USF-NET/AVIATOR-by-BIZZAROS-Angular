import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { GetPilotsComponent } from './components/get-pilots/get-pilots.component';
import { HomeComponent } from './components/home/home.component';
import { ScriptComponent } from './components/script/script.component';
import { UserInfoComponent } from './components/user-info/user-info.component';


const routes: Routes = [

  { path:'get-pilots',
  component: GetPilotsComponent
  },
  { path: '',
  component: HomeComponent
  },
  { path: 'script',
  component: ScriptComponent
  },
  { path: 'user-info',
  component: UserInfoComponent}
  ,
  { path: 'about',
  component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
