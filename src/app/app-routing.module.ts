import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UnheroeComponent } from './components/unheroe/unheroe.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { UsersComponent } from './components/users/users.component';
import { VideoComponent } from './components/video/video.component';
import { DownloadComponent } from './components/download/download.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'users', component: UsersComponent},
  {path: 'video', component: VideoComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'heroe/:id', component: UnheroeComponent},
  {path: 'buscador/:nombreh', component: SearchComponent},
  {path: '**', pathMatch: 'full' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
