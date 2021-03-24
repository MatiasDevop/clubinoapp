import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes =[
  {
    path: '', component: HomeComponent 
  },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'experience', component: ExperienceComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
