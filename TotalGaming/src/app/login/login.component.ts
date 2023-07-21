import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup


  fieldNotEmpty=false;
  validCredentials=false;
  constructor(private authenticationService: AuthenticationService,private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  onSubmit()
  {

    this.http.get<any>("http://localhost:3000/SignInUsers")
    .subscribe(res=>{
      const user= res.find((a:any)=>{
        return a.email=== this.loginForm.value.email && a.password=== this.loginForm.value.password
      });
      if(user){
        // alert("Login Successfully");
        this.loginForm.reset();
        this.authenticationService.isAuthenticated=true;
        this.router.navigate(['home']);
      }else
      {
        alert("User Not Found");
      }
    })
  }
}
