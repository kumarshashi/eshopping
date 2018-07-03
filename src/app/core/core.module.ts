import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { OnlyNumberDirective } from './directive/only-number.directive';

//----------------Material----------------//
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, 
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
  MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule,MatStepperModule,
} from '@angular/material';
//----------------Services----------------//
import { LoginService } from './services/login.service';
import { CreateAppService } from './services/create-app.service';

// guard
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    //----------------Material----------------//
    MatAutocompleteModule,MatButtonModule,MatButtonToggleModule,
    MatCardModule,MatCheckboxModule,MatChipsModule,MatStepperModule,MatDatepickerModule,
    MatDialogModule,MatExpansionModule,MatGridListModule,MatIconModule,MatInputModule,MatListModule,
    MatMenuModule,MatNativeDateModule,MatPaginatorModule,MatProgressBarModule,
    MatProgressSpinnerModule,MatRadioModule,MatRippleModule,MatSelectModule,MatSidenavModule,
    MatSliderModule,MatSlideToggleModule,MatSnackBarModule,MatSortModule,MatTableModule,
    MatTabsModule,MatToolbarModule,MatTooltipModule,
    //----------------Material----------------//
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    OnlyNumberDirective, LoginComponent
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    NgxSpinnerModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    OnlyNumberDirective,
     //----------------Material----------------//
     MatAutocompleteModule,MatButtonModule,MatButtonToggleModule,
     MatCardModule,MatCheckboxModule,MatChipsModule,MatStepperModule,MatDatepickerModule,
     MatDialogModule,MatExpansionModule,MatGridListModule,MatIconModule,MatInputModule,MatListModule,
     MatMenuModule,MatNativeDateModule,MatPaginatorModule,MatProgressBarModule,
     MatProgressSpinnerModule,MatRadioModule,MatRippleModule,MatSelectModule,MatSidenavModule,
     MatSliderModule,MatSlideToggleModule,MatSnackBarModule,MatSortModule,MatTableModule,
     MatTabsModule,MatToolbarModule,MatTooltipModule,
     //----------------Material----------------//
  ],
  entryComponents:[
    LoginComponent
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthGuard,
        LoginService,
        CreateAppService
      ]
      
    };
  }
 }
