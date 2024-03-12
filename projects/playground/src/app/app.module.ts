import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
    PopupCookiesComponent
} from '../../../ngx-nc-cookies-pref/src/lib/cookies-pref/components/popup-cookies/popup-cookies.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NgbModule,
        BrowserModule,
        PopupCookiesComponent,
        TranslateModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
