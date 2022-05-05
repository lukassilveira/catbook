import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed/feed.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'feed',
    loadChildren: () => import('src/app/feed/feed.module').then((m) => m.FeedModule),
    component: FeedComponent
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/home/home.module').then((m) => m.HomeModule),
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
