import { Component } from '@angular/core';
import { FirebaseAuthService } from './providers/firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cours-IMIE';
  user = { login: "", password: "" }

constructor(private firebaseAuth: FirebaseAuthService) {
  this.firebaseAuth.SignUp(this.user.login, this.user.password)
}

  submitForm() {
    console.log("zoubida");
    this.firebaseAuth.SignUp(this.user.login, this.user.password);
  }
  signFb(){
    this.firebaseAuth.signInWithPopup()
  }
}
