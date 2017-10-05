import { FormControl } from '@angular/forms';

export class EmailValidator {
  
  static isValid(control: FormControl){
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
    
    if (re){
      return null;
    }
    
    return {
      "invalidEmail": true
    };
    
  }
}