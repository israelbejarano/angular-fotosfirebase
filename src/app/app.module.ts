import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Components
import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

// Routes
import { APP_ROUTES } from './app.routes';

// Services
import { CargaImagenesService } from './services/carga-imagenes.service';


/**
 *
 *
 * @export
 * @class AppModule
 * @author ibejarano
 */
@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    APP_ROUTES
  ],
  providers: [CargaImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
