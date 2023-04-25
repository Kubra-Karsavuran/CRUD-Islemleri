import { Component } from '@angular/core';
import { FormkaydetService } from '../services/formkaydet.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; // form işlemleri
import { shema } from './shema';
import { AlertifyService } from '../services/alertify.service';
import { KayitSilmeService } from '../services/kayit-silme.service';
import { UpdateService } from '../services/update.service';
@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
})
export class FromComponent {
  // dosya eklemelerı
  constructor(
    private formkaydetService: FormkaydetService,
    private alertifyService: AlertifyService,
    private kayitSilmeService: KayitSilmeService,
    private fb: FormBuilder,
    private updateService: UpdateService
  ) {}

  //TODO kaydetme Formu
  formAdim = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    tel: new FormControl(''),
    dapartman: new FormControl(''),
  });

  // TODO guncelleme ıslemı formu burda
  UpdateForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    tel: new FormControl(''),
    dapartman: new FormControl(''),
  });

  kayitlilar: shema[] = [];
  silmeislemi: shema[] = [];

  onSubmit() {}

  //TODO verı kaydı oluyor burda
  verileriKaydet() {
    console.log(this.formAdim.value);
    this.formkaydetService.verileriKaydet(this.formAdim.value).subscribe();
    this.alertifyService.kayitOldu('Kaydınız Gerçekleştirildi');
  }

  liste_kismi: boolean = false;
  form_kismi: boolean = true;
  guncel: boolean = false;

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
    this.guncel = false;
    this.formAdim = this.fb.group({
      name: [''],
      surname: [''],
      tel: [''],
      dapartman: [''],
    });
  }

  //TODO silme işlemi
  ListeSil(silmeislemi: shema): void {
    this.kayitSilmeService.delete(silmeislemi._id).subscribe();
    this.liste_kismi = false;
    this.form_kismi = true;
    this.formAdim = this.fb.group({
      name: [''],
      surname: [''],
      tel: [''],
      dapartman: [''],
    });
  }

  guncel_veri_id: number = 0;

  // TODO guncelleme verı gosterme
  // guncellenecek verıburda yansıtılması ıcın verılerın hepsı burda guncelleme ıcın burdakı ıs kullanılacak
  GuncellemeVeri(guncelleme: shema): void {
    this.guncel = true;
    this.liste_kismi = false;
    this.form_kismi = false;
    console.log('guncellenecek verı si bakalı ne gelecek: ' + guncelleme._id);
    this.guncel_veri_id = guncelleme._id;
    // guncellenecek verının verılerı formda burda yazılacak
    // reaktive formlarda id yazdıramıyorum ondan dolayı ıd verısı ıcın boyle bır
    // yontem kullanıldı
    this.UpdateForm = this.fb.group({
      name: [guncelleme.name],
      surname: [guncelleme.surname],
      tel: [guncelleme.tel],
      dapartman: [guncelleme.dapartman],
    });
  }

  // TODO guncelleme işlemi
  AsilGuncelleme() {
    console.log(this.UpdateForm.value); // guncellenecek verı
    console.log(this.guncel_veri_id); // guncellenecek verı ıd
    this.updateService
      .updateWork(this.UpdateForm.value, this.guncel_veri_id)
      .subscribe((data) => {
        console.log('guncelleme yapıldı');
      });
  }
}
