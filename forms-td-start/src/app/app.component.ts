import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f',{static:true}) signUpForm : NgForm; 
  defaultQuestion="pet";
  answer="";
  genders=['male','female'];
  submitted=false;

  user={
    username:'',
    email:'',
    secretQuestion:'',
    questionAnswer:'',
    gender:''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'trung dep trai',
    //   gender:'male'
    // });
    this.signUpForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }

  onSubmit(){
    console.log(this.signUpForm.value)
    console.log(this.user)
    this.submitted=true;
    this.user.username= this.signUpForm.value.userData.username;
    this.user.email= this.signUpForm.value.userData.email;
    this.user.secretQuestion= this.signUpForm.value.secretQuestion;
    this.user.questionAnswer= this.signUpForm.value.questionAnswer;
    this.user.gender= this.signUpForm.value.gender;
    console.log(this.user)
  }
}
