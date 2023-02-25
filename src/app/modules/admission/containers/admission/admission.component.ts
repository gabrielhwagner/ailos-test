import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay, of, take, tap, timer } from 'rxjs';

import { cpfValidator } from '../../../../utils/validator';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  public form!: FormGroup;
  public isLoading = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cpf: this.fb.control(null, { validators: [Validators.required, cpfValidator()] })
    })
  }

  submit() {
    this.form.markAllAsTouched();

    if(this.form.invalid || this.form.disabled) {
      return;
    }

    of(null)
      .pipe(
        tap(() => this.isLoading = true),
        delay(2000),
        take(1),
      ).subscribe(() => {
        this.form.disable();
        this.isLoading = false;
      })
  }

  resetScreen() {
    this.form.reset();
    this.form.enable();
  }
}
