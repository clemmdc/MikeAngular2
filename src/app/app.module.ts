import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './@pages/register/register.component';
import { FirebaseAuthService } from './providers/firebase-auth.service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [FirebaseAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
