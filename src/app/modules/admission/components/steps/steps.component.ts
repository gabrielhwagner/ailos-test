import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent {

  @Input()
  public activeStep: number = 1;

  public readonly options = [
    'Início',
    'Documentos',
    'Dados cadastrais',
    'Admissão',
  ];

}
