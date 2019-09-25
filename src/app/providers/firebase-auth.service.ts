import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private authFire: AngularFireAuth ) { }

  /**
   * 
   * @param email: String - Email user
   * @param password: String - Password user
   */
  SignUp(email: string, password: string) {
    this.authFire.auth.createUserWithEmailAndPassword(email, password)
    .then( reponse => {
      console.log(reponse)
    })
    .catch( error => {
      console.log("Error" + error);
    })
  }

  SignOut() {
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }

  signInWithPopup(){    
   return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.FacebookAuthProvider();
    this.authFire.auth
    .signInWithPopup(provider)
    .then(res => {
      resolve(res);
    }, err => {
      console.log(err);
      reject(err);
    })
  })
}

createNewUser(email: string, password: string) {
  return new Promise(
    (resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    }
  );
}

signInUser(email: string, password: string) {
  return new Promise(
    (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    }
  );
}
  
signOutUser() {
  firebase.auth().signOut();
} 

}
