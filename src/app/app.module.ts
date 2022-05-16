import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { DownloadComponent } from './components/download/download.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { SearchComponent } from './components/search/search.component';
import { UnheroeComponent } from './components/unheroe/unheroe.component';
import { UsersComponent } from './components/users/users.component';
import { VideoComponent } from './components/video/video.component';
import { VideoSecurePipe } from './video-secure.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DownloadComponent,
    FooterComponent,
    HeroesComponent,
    HomeComponent,
    NavbarComponent,
    NewsletterComponent,
    SearchComponent,
    UnheroeComponent,
    UsersComponent,
    VideoComponent,
    VideoSecurePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
