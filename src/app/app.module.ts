import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { CategoryServiceService   } from './services/category-service.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderBottomComponent } from './header/header-bottom/header-bottom.component';
import { HeaderMiddleComponent } from './header/header-middle/header-middle.component';
import { FooterComponent } from './footer/footer.component';
import { TopFooterComponent } from './footer/top-footer/top-footer.component';
import { WidgetFooterComponent } from './footer/widget-footer/widget-footer.component';
import { BotomFooterComponent } from './footer/botom-footer/botom-footer.component';
import { LayoutComponent } from './layout/layout.component';
import { LeftPanelComponent } from './layout/left-panel/left-panel.component';
import { MainPanelComponent } from './layout/main-panel/main-panel.component';
import { BrandserviceService } from './services/brandservice.service';

export const firebaseConfig = {
  apiKey: "AIzaSyA3uizpk6ONeRIKCfJAl7dXGGyTpmysJq4",
  authDomain: "eshopping-f7691.firebaseapp.com",
  databaseURL: "https://eshopping-f7691.firebaseio.com",
  projectId: "eshopping-f7691",
  storageBucket: "eshopping-f7691.appspot.com",
  messagingSenderId: "869486701297"
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    HeaderMiddleComponent,
    FooterComponent,
    TopFooterComponent,
    WidgetFooterComponent,
    BotomFooterComponent,
    LayoutComponent,
    LeftPanelComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
   
  ],
  providers: [CategoryServiceService,BrandserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
