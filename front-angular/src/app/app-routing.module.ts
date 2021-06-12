import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertysListComponent } from './components/propertys-list/propertys-list.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';

const routes: Routes = [
  { path: '', redirectTo: 'propertys', pathMatch: 'full' },
  { path: 'propertys', component: PropertysListComponent },
  { path: 'propertys/add', component: AddPropertyComponent },
  { path: 'propertys/:id', component: PropertyDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
