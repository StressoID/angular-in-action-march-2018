import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {

    this.myForm = this.fb.group({
      name: [null, Validators.required],
      surname: null,
      snils: null
    }, {
      validator: this.checkSnils('name', 'surname', 'snils')
    });
  }

  checkSnils(name, surname, snils) {
    return (group: FormGroup) => {
      if (!group.controls[name].value || !group.controls[surname].value || !group.controls[snils].value) {
        return {checkSnils: true};
      }

      return;
    };
  }

  submit() {
    console.log(this.myForm);
  }
}
