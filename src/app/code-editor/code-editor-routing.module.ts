import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from '../components/editor/editor.component';
import { LoadPageComponent } from '../components/load-page/load-page.component';
import { UserHomeComponent } from '../components/user-home/user-home.component';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLanding = redirectUnauthorizedTo(['']);

const routes: Routes = [
  { path: '', component: EditorComponent },
  { path: 'programs', component: LoadPageComponent, ...canActivate(redirectUnauthorizedToLanding) },
  { path: 'user-home', component: UserHomeComponent, ...canActivate(redirectUnauthorizedToLanding) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeEditorRoutingModule { }
