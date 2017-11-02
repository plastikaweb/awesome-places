import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html'
})
export class AddPlacePage {

  submit(form: NgForm) {
    console.log(form.value);
  }
}
