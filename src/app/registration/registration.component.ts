import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from "@angular/forms";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  data: any = {};

  onSubmit() {
    alert(JSON.stringify(this.data));
  }

  constructor() { }

  ngOnInit() {
  }

}
