import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  // organisatieForm = this.form.group();

  dropdownItem = [
    'item',
    'iets anders',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed',
    'rijksbreed'
  ];


  constructor(private form: FormBuilder) { }

  organisatieForm = this.form.group({
    organisatie: [null]
  });

  ngOnInit(): void {

  }

  submit() {
    console.log(this.organisatieForm.value)
  }
}
