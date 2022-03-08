import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule} from '@angular/material/card';  
import {MatIconModule} from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { NgxBootstrapIconsModule,allIcons } from 'ngx-bootstrap-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './appPipes/filter.pipe';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubNavbarComponent } from './navbar/sub-navbar/sub-navbar.component';
import { RadioButtonComponent } from './navbar/sub-navbar/radio-button/radio-button.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { SectionOneComponent } from './main-body/section-one/section-one.component';
import { SectionTwoComponent } from './main-body/section-two/section-two.component';
import { LeftSectionComponent } from './main-body/section-two/left-section/left-section.component';
import { RightSectionComponent } from './main-body/section-two/right-section/right-section.component';
import { FilterPartOneComponent } from './main-body/section-two/left-section/filter-part-one/filter-part-one.component';
import { FilterPartTwoComponent } from './main-body/section-two/left-section/filter-part-two/filter-part-two.component';
// import { IgxRadioModule } from "igniteui-angular";
import { IgxRadioModule } from "igniteui-angular";
import { StarFilterPipe } from './appPipes/star-filter.pipe';
import { PriceFilterPipe } from './appPipes/price-filter.pipe';
 
 

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HeaderComponent,
    NavbarComponent,
    SubNavbarComponent,
    RadioButtonComponent,
    MainBodyComponent,
    SectionOneComponent,
    SectionTwoComponent,
    LeftSectionComponent,
    RightSectionComponent,
    FilterPartOneComponent,
    FilterPartTwoComponent,
    StarFilterPipe,
    PriceFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    NgxBootstrapIconsModule.pick(allIcons),
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    IgxRadioModule
    // IgxRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
