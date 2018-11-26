// Modules
import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { GestureConfig } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
// Layout Services
import { CoreService } from '@core/shared';
// Module Components
import { AppComponent } from './app.component';

export class AppVersion { public static version = '1.0.0'; }

// Test Config
export class AppStatus { public static status = 'Test'; }
const firebaseConfig = {
    apiKey: 'AIzaSyCJwUzfBWqSsJxqY7p2wJC0sEcc_ABtXeM',
    authDomain: 'testdailyroutes.firebaseapp.com',
    databaseURL: 'https://testdailyroutes.firebaseio.com',
    projectId: 'testdailyroutes',
    storageBucket: 'testdailyroutes.appspot.com',
    messagingSenderId: '964193776890'
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'app', pathMatch: 'full' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'app', loadChildren: './core/core.module#CoreModule' },
            { path: '**', redirectTo: 'app', pathMatch: 'full' }
        ], { useHash: true }),
        SharedModule.forRoot()
    ],
    bootstrap: [AppComponent],
    providers: [
        CoreService,
        { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
    ]
})

export class AppModule { }
