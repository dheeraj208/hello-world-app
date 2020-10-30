import { AbstractControl, Validators } from '@angular/forms';
export class PasswordValidator{

    static isPasswordMatched(control: AbstractControl): Validators | null{

        if (control.value != control.root.value.newPassword){
            // console.log(control.root.value.newPassword);
            return {isPasswordMatched: true};
        }
        return null;
    }

    static isOldPasswordValid(Control: AbstractControl): Promise<Validators | null> {
        return new Promise((resolve, reject) => {
            if (Control.value != 1234) {
                return resolve({ isOldPasswordValid: true });
            }
            else {
                resolve(null);
            }
        });
    }
}
