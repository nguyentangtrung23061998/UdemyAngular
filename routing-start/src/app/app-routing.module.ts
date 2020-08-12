import { NgModule } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';

import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-gaurd.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolve } from "./servers/server/server-resolve.service";

const routes: Routes = [
  
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent },
        ]
    },
    {
        path: 'servers',
        // canActivate:[AuthGuardService] ,
        canActivateChild:[AuthGuardService],
        component: ServersComponent, 
        children: [
            { path: ':id', component: ServerComponent,resolve:{server:ServerResolve} },
            { path: ':id/edit', component: EditServerComponent ,canDeactivate:[CanDeactivateGuard]}
        ]
    },
    {
        path: 'not-found', component: ErrorPageComponent,data:{message:'Page not found'}
        // path: 'not-found', component: PageNotFoundComponent
    },
    {
        path: '**', redirectTo: '/not-found'
    }

];


@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}