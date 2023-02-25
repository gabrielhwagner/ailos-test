import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { isCPF } from "brazilian-values";

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(!isCPF(control.value)) {
      return {invalidCpf: {value: control.value}}
    }
    return null;
  };
}
