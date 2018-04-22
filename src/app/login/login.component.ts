import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('username', this.name.value);
  }

}
