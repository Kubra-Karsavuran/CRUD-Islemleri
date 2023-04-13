import { Component } from '@angular/core';
import { FormkaydetService } from '../services/formkaydet.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; // form işlemleri

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
})
export class FromComponent {
  // dosya eklemelerı
  constructor(
    private formBuilder: FormBuilder,
    private formkaydetService: FormkaydetService
  ) {}

  // validationları parantez ıcınde burda belşrtebılıyoruz
  formAdim = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    tel: new FormControl(''),
    dapartman: new FormControl(''),
  });

  onSubmit() {
    this.formkaydetService.verileriKaydet(this.formAdim.value);
  }
}
