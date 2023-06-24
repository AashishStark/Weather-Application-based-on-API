import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseService } from './services/firebase.service';
import { routing } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
   AngularFireModule.initializeApp({
      apiKey: "AIzaSyBTY4k6DyayJYSvPFgleHV4YI-KtFunIPA",
      authDomain: "weather-appli.firebaseapp.com",
      projectId: "weather-appli",
      storageBucket: "weather-appli.appspot.com",
      messagingSenderId: "378183951983",
      appId: "1:378183951983:web:2c8553b9015a3b2424cf9a"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})

export class AppModule { }
