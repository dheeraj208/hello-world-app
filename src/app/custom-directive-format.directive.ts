import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirectiveFormat]'
})
export class CustomDirectiveFormatDirective {

  @Input('format') format: string;
  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(){

  }

  @HostListener('blur') onBlur(){
    const value: string = this.el.nativeElement.value;

    // if(this.format === "lowercase")
    // this.el.nativeElement.value = value.toLowerCase();
    // else
    // this.el.nativeElement.value = value.toUpperCase();

    if (value.length < 10) { throw new Error('Phone number cannot be less than 10 digits'); }
    if (value.length > 10) { throw new Error('Phone number cannot be more than 10 digits'); }

    const first3Digit = value.substring(0, 3);
    const next3Digits = value.substring(3, 6);
    const last4Digits = value.substring(6, 10);

    console.log(`Number is (${first3Digit})${next3Digits}-${last4Digits}`);
    this.el.nativeElement.value = `(${first3Digit})${next3Digits}-${last4Digits}`;
  }

}
