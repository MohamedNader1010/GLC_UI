import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { AuthentcationService } from 'src/app/service/auth/authentcation.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public ForgetServ:AuthentcationService) { }
  public LoginForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.minLength(2),
      Validators.maxLength(150),
    ]),
  });

  ngOnInit(): void {
  }

}
