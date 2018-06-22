import { HomeComponent } from './app/component/home/home.component';
import { ContactComponent } from './app/component/contact/contact.component';
import { LoginComponent } from './app/component/login/login.component';
import { ViewComponent } from './app/component/view/view.component';
import { AboutComponent } from './app/component/about/about.component';
export const AppRoutes = [ { path : '', component: HomeComponent},
                            { path : 'Contact', component: ContactComponent},
                            {path : 'Login', component: LoginComponent
                            /*children :[]*/},
                            {path : 'View', component: ViewComponent},
                            {path : 'About', component: AboutComponent}
                        ];

                         /*children:[ 
                                { path : 'Event', component: EventPageComponent },
                                { path : 'View', component:  ViewComponent }
                             ]*/