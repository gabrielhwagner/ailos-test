import { AbstractControl, FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  @Input()
  public form!: FormGroup;

  @Input()
  public inputName!: string;

  get errorMessage() {
    if (this.form.controls[this.inputName].errors?.['required']) {
      return 'Campo obrigatório'
    }

    if (this.form.controls[this.inputName].errors?.['invalidCpf']) {
      return 'CPF inválido';
    }
    return null;
  }
}
