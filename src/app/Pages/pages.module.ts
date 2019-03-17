import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomePageComponent } from './Home-page/home-page.component';
import { ProjectsPageComponent } from './../Pages/Projects-page/projects-page.component';
import { WebProjectsComponent } from './../Pages/Web-projects/web-projects.component';
import { ComponentsModule } from '../Components/components.module';
import { ServicesPageComponent } from './Services-page/services-page.component';
import { MobileAppPageComponent } from './Mobile-app-page/mobile-app-page.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        InfiniteScrollModule,
        ComponentsModule
    ],
    declarations: [
        HomePageComponent,
        ProjectsPageComponent,
        WebProjectsComponent,
        ServicesPageComponent,
        MobileAppPageComponent,
    ],
    exports: [
        CommonModule,
    ]
})

export class PagesModule {}
