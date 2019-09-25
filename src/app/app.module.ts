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
import { BooksService } from './providers/books-service.service';
import { AuthGuardService } from './providers/auth-guard-service.service';
import { SigninComponent } from './@pages/SignInComponent/signin.component';
import { SignupComponent } from './@pages/SignUpComponent/signup.component';
import { HeaderComponent } from './@pages/HeaderComponent/header.component';
import { BookFormComponent } from './@pages/BookFormComponent/book-form.component';
import { BookListComponent } from './@pages/BookListComponent/book-list.component';
import { SingleBookComponent } from './@pages/SingleBookComponent/single-book.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    BookFormComponent,
    BookListComponent,
    SingleBookComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FirebaseAuthService, BooksService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
