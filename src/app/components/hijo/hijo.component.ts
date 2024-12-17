import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Padre } from '../../models/padre';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit {
  @Input() valorPadre?: any;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    //
  }

  hijoForm: FormGroup = this.fb.group({
    "nombre": [],
    "apellido": [],
    "edad": [],
    "padre": []
  })

  saveHijo(): void{
    console.log(this.valorPadre)
    this.hijoForm.controls['padre'].setValue(this.valorPadre.nombre)
    console.log(this.hijoForm.value)
  }

  prueba(): void{
    console.log("prueba")
  }

}
