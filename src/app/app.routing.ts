import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
{
	path: '', 
	redirectTo: '/', 
	pathMatch: 'full'
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
}



];
export const routing = RouterModule.forRoot(routes);
