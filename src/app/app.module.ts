import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './@pages/register/register.component';
import { FirebaseAuthService } from './providers/firebase-auth.service';
import { SigninComponent } from './SignInComponent/signin.component';
import { SignupComponent } from './SignUpComponent/signup.component';
import { HeaderComponent } from './HeaderComponent/header.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FirebaseAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
