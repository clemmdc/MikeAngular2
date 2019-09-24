import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './SignUpComponent/signup.component';
import { SigninComponent } from './SignInComponent/signin.component';
// import { SignoutComponent } from './SignInComponent/signout.component';
import { AuthGuardService } from './AuthGuardService';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  // { path: 'auth/signout', component: SignoutComponent },
  // { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
  // { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
  // { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: '**', redirectTo: 'books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
