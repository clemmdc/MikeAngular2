import { Component } from '@angular/core';
import { FirebaseAuthService } from './providers/firebase-auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cours-IMIE';
  user = { login: "", password: "" }
  signupForm: FormGroup;
  errorMessage: string;

constructor(private firebaseAuth: FirebaseAuthService,
            private formBuilder: FormBuilder,
            private authService: FirebaseAuthService,
            private router: Router) 
  {
  this.firebaseAuth.SignUp(this.user.login, this.user.password)
}

ngOnInit() {
  this.initForm();
}

initForm() {
  this.signupForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
  });
}

onSubmit() {
  const email = this.signupForm.get('email').value;
  const password = this.signupForm.get('password').value;
  
  this.authService.createNewUser(email, password).then(
    () => {
      this.router.navigate(['/books']);
    },
    (error) => {
      this.errorMessage = error;
    }
  );
}

  submitForm() {
    console.log("zoubida");
    this.firebaseAuth.SignUp(this.user.login, this.user.password);
  }
  signFb(){
    this.firebaseAuth.signInWithPopup()
  }

  logOutfb(){
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
    }
  }

