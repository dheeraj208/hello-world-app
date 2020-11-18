import {AbstractControl, ValidationErrors} from '@angular/forms';

export class AHNValidator {

  static validateAHN(control: AbstractControl): ValidationErrors | null{
    let ahnfieldValue: string = control.value;
    console.log(ahnfieldValue);
    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(ahnfieldValue)) {
      return {validateAHN : true};
    }

    let nCheck = 0, bEven = false;
    ahnfieldValue = ahnfieldValue.replace(/\D/g, "");

    for (var n = ahnfieldValue.length - 1; n >= 0; n--) {
      var cDigit = ahnfieldValue.charAt(n),
          nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;
      bEven = !bEven;
    }

    if((nCheck % 10) == 0){
      return null
    };

    return {validateAHN : true};
  }
}
