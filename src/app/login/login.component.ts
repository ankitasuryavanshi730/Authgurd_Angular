import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formdata:any;


  constructor(private router:Router){

  }




  ngOnInit(): void {

    this.formdata = new FormGroup({

      username: new FormControl("" , Validators.compose([Validators.required])),
      password: new FormControl("", Validators.required)
    })
  }


  submit(data:any){
    // console.log(data);
    if(data.username == "admin" && data.password == "admin"){
      localStorage.setItem("name" ,"Admin");
      localStorage.setItem("usertype", "Admin")
      this.router.navigate(['/admin'])
    }
    else if(data.username == "user" && data.password == "user"){
      localStorage.setItem("name" , "User");
      localStorage.setItem("usertype" ,"User")
      this.router.navigate(['/user'])
    }
    else{
      alert("invalid creaditonals")
    }


  }

}
