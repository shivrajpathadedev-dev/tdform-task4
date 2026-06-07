import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdform-task4';
@ViewChild('loanform') loanform!:NgForm
  onsubmit(){
    if(this.loanform.valid){
      this.loanform.form.markAllAsTouched()
    }
    this.loanform.reset()
  }
  onPanInput(event: any) {
  event.target.value = event.target.value.toUpperCase();
}
numberOnly(event: KeyboardEvent): boolean {
  const charCode = event.which || event.keyCode;

  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
    return false;
  }
  return true;
}
aadhaarNo: string = '';

formatAadhaar(event: any) {
  let value = event.target.value.replace(/\D/g, '');

  value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

  this.aadhaarNo = value.substring(0, 14);
}
}
