import { Directive } from '@angular/core';
import { DefaultValueAccessor, NgModel } from '@angular/forms';

@Directive({
  selector: '[appNumbersOnlyInput]'
})
export class NumbersOnlyInputDirective {

  constructor(private valueAccessor: DefaultValueAccessor, private model: NgModel) {
    valueAccessor.registerOnChange = (fn: (val: any) => void) => {
      valueAccessor.onChange = (val) => {
        let regexp = new RegExp('\\d+(?:[\.]\\d{0,})?$');
        let isNumber : boolean = regexp.test(val);
        let isEmpty : boolean = val == '';
        if(!isNumber && !isEmpty) {
          model.control.setValue(model.value);
          return;
        }
        return fn(val);
      }
    }
   }

}
