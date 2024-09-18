import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static urlValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const urlPattern = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
      return urlPattern.test(control.value) ? null : { invalidUrl: true };
    };
  }
}
