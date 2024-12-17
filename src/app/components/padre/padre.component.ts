import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Padre } from '../../models/padre';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  constructor(private fb: FormBuilder){}

  padreForm: FormGroup = this.fb.group({
    "nombre": [],
    "apellido": [],
    "edad": []
  })

  public valor!: FormGroup;

  savePadre(): void{
    console.log(this.padreForm.value)
    this.valor = this.padreForm.value
    /*this.padreForm.valueChanges.subscribe(newValue => {
      console.log(newValue)
    });*/
  }
}
