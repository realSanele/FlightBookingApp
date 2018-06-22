import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopnavComponent } from './component/topnav/topnav.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import {AppRoutes} from '../app.rootes.model';
import { RouterModule} from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { ViewComponent } from './component/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
