import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './Pages/Home-page/home-page.component';
import { ProjectsPageComponent } from './Pages/Projects-page/projects-page.component';
import { WebProjectsComponent } from './Pages/Web-projects/web-projects.component';

import {
    AuthGuardService as AuthGuard
} from './core/Services/auth-guard.service';
import {MobileAppPageComponent} from './Pages/Mobile-app-page/mobile-app-page.component';
import {ServicesPageComponent} from './Pages/Services-page/services-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        data: { title: 'Mobisop-test' },
    },
    {
        path: 'projects',
        component: ProjectsPageComponent,
        data: { title: 'Projects' },
        canActivate: [AuthGuard]
    },
    { path: 'mobile-apps',
        component: MobileAppPageComponent,
        data: { title: 'Mobile apps' }
    },
    { path: 'services',
        component: ServicesPageComponent,
        data: { title: 'Services' }
    },
    { path: 'web-projects',
        component: WebProjectsComponent,
        data: { title: 'Web-projects' }
    }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [
        RouterModule.forRoot(routes)
    ],
})
export class AppRoutingModule { }
