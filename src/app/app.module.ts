import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MasonryModule } from 'angular2-masonry';
import { JsonpModule } from '@angular/http';
import {MarkdownToHtmlPipe} from 'markdown-to-html-pipe';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { TwitterLinksPipe } from './shared/pipes/links.pipe';

import { ApiService } from './shared/api.service';

import { ContactService } from './contact/contact.service';
import { NavService } from './shared/nav.service';
import { TwitterService } from 'ng2-twitter';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { PressComponent } from './press/press.component';
import { ModalComponent } from './shared/modal/modal.component';


//Since RC6, all Directives and Pipes should be moved to module's declarations.


@NgModule({
  declarations: [
    TwitterLinksPipe,
    MarkdownToHtmlPipe,
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    PressComponent,
    ModalComponent
  ],
  imports: [
    MasonryModule,
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule
  ],
  providers: [
  ApiService,
  ContactService,
  NavService,
  TwitterService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
