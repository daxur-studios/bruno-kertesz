import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './pages/welcome/sections/intro/intro.component';
import { EducationComponent } from './pages/welcome/sections/education/education.component';
import { ProgrammingExperienceComponent } from './pages/welcome/sections/programming-experience/programming-experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { SharedMaterialModule } from './sharedModules/shared-material/shared-material.module';
import { SharedComponentsModule } from './sharedModules/shared-components/shared-components.module';
import { MyCatComponent } from './pages/welcome/sections/my-cat/my-cat.component';
import { MyHusbandComponent } from './pages/welcome/sections/my-husband/my-husband.component';
import { ImageEditingComponent } from './pages/welcome/sections/image-editing/image-editing.component';
import { TimelineComponent } from './pages/welcome/sections/timeline/timeline.component';
import { WelcomePageComponent } from './pages/welcome/welcome-page/welcome-page.component';
import { SettingsPageComponent } from './pages/settings/settings-page/settings-page.component';

import { TimelineWrapperComponent } from './pages/welcome/sections/timeline/timeline-wrapper/timeline-wrapper.component';
import { TimelineCardComponent } from './pages/welcome/sections/timeline/timeline-wrapper/timeline-card/timeline-card.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    EducationComponent,
    ProgrammingExperienceComponent,
    MyCatComponent,
    MyHusbandComponent,
    ImageEditingComponent,
    TimelineComponent,
    WelcomePageComponent,
    SettingsPageComponent,

    TimelineWrapperComponent,
    TimelineCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
    SharedMaterialModule,
    SharedComponentsModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
  ],
  providers: [
    { provide: ScreenTrackingService, useValue: {} },
    { provide: UserTrackingService, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
