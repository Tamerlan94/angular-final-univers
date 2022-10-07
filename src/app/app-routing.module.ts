import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUniversitiesComponent } from './all-universities/all-universities.component';
import { UniversItemComponent } from './univers-item/univers-item.component';
import { UniversComponent } from './univers/univers.component';

const routes: Routes = [
  { path: "allUnivers", component: AllUniversitiesComponent },
  { path: "allUnivers/:name", component: UniversItemComponent },
  { path: "search", component: UniversComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
