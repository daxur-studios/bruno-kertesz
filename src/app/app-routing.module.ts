import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from './pages/settings/settings-page/settings-page.component';
import { WelcomePageComponent } from './pages/welcome/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },

  { path: 'settings', component: SettingsPageComponent },
  {
    path: 'online-cv',
    loadChildren: () =>
      import('./pages/online-cv/online-cv.module').then(
        (m) => m.OnlineCvModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
