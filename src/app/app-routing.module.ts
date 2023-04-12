import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromComponent } from './from/from.component';
import { KayitlarComponent } from './kayitlar/kayitlar.component';

const routes: Routes = [
  { path: 'from', component: FromComponent },
  { path: '', redirectTo: 'from', pathMatch: 'full' },
  { path: 'kayitlar', component: KayitlarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
