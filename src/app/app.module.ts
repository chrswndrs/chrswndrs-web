import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TimelineComponent,
    NewsletterComponent,
    BlogComponent,
    ContactComponent,
    HeroComponent,
    LoginComponent,
    TeamComponent,
    BlogPostComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
