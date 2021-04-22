import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { JournalComponent } from './journal/journal.component';
import { TimerComponent } from './timer/timer.component';
import { CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';
//import { TaskService } from './task-service.service';


const appRoutes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SidebarComponent,
    NavbarComponent,
    ToDoListComponent,
    JournalComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    //AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    CountdownModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      { path: 'to-do-list', component: ToDoListComponent, canActivate: [AuthorizeGuard] },
      { path: 'journal', component: JournalComponent},
      { path: 'timer', component: TimerComponent}
    ])
  ],
  providers: [
    //TaskService,
    CountdownGlobalConfig,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
