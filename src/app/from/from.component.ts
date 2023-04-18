import { Component } from '@angular/core';
import { FormkaydetService } from '../services/formkaydet.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; // form işlemleri
import { shema } from './shema';
import { AlertifyService } from '../services/alertify.service';
import { KayitSilmeService } from '../services/kayit-silme.service';
@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
})
export class FromComponent {
  // dosya eklemelerı
  constructor(
    private formBuilder: FormBuilder,
    private formkaydetService: FormkaydetService,
    private alertifyService: AlertifyService,
    private kayitSilmeService: KayitSilmeService
  ) {}

  // validationları parantez ıcınde burda belşrtebılıyoruz
  formAdim = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    tel: new FormControl(''),
    dapartman: new FormControl(''),
  });

  kayitlilar: shema[] = [];
  silmeislemi: shema[] = [];
  //TODO verı kaydı oluyor burda
  onSubmit() {}

  verileriKaydet() {
    console.log(this.formAdim.value);
    this.formkaydetService.verileriKaydet(this.formAdim.value).subscribe();
    this.alertifyService.kayitOldu('Kaydınız Gerçekleştirildi');
  }

  liste_kismi: boolean = false;
  form_kismi: boolean = true;

  // TODO listeleme
  liste() {
    this.liste_kismi = true;
    this.form_kismi = false;
    this.formkaydetService.yansit().subscribe((data) => {
      this.kayitlilar = data;
    });
  }

  // TODO sayfa kapama
  kapat() {
    this.liste_kismi = false;
    this.form_kismi = true;
  }

  //TODO silme işlemi
  ListeSil(silmeislemi: shema): void {
    this.kayitSilmeService.delete(silmeislemi).subscribe();
  }
}
