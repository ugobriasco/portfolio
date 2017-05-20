import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PressComponent } from './press/press.component';


export const routes: Routes = [
{
	path: '**', 
	redirectTo: '/' 
},
{
	path: 'about',
	component: AboutComponent
},
{
	path: 'resume',
	component: ResumeComponent
},
{
	path: 'portfolio',
	component: PortfolioComponent
},
{
	path: 'contact',
	component: ContactComponent
},
{
	path: 'press',
	component: PressComponent
}



];
export const routing = RouterModule.forRoot(routes);
