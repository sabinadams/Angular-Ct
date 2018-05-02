import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard'
import { DefaultPage } from './shared/components/default-page'
import { SireDirectoryPage } from './pages/siredirectory/siredirectory'
import { AdvancedSearchPage } from './pages/advancedsearch/advancedsearch'

const routes: Routes = [
  { path: '', component: DashboardPage },
  { path: 'siredirectory', component: SireDirectoryPage },
  { path: 'search', component: AdvancedSearchPage },
  { path: '**', component: DefaultPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
