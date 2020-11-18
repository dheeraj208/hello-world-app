import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[validateAHN]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: AHNValidatorDirective, multi: true },
  ],
})
export class AHNValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    let ahnControlValue: string = control.value;

    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(ahnControlValue)) {
      return { validateAHN: true };
    }

    let nCheck = 0,
      bEven = false;
    ahnControlValue = ahnControlValue.replace(/\D/g, '');

    for (var n = ahnControlValue.length - 1; n >= 0; n--) {
      var cDigit = ahnControlValue.charAt(n),
        nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;
      bEven = !bEven;
    }

    if (nCheck % 10 == 0) {
      return null;
    }

    return { validateAHN: true };
  }
}
