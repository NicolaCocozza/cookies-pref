import {Component, OnInit} from '@angular/core';
import {ConfigPopup} from '../../src/app/cookies-pref/models/config-popup.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'cookies-pref';
    public configPopupCookies: ConfigPopup;

    constructor() {
    }

    ngOnInit() {
        this.configPopupCookiesValue();
    }

    // PRIVATE METHOD

    private configPopupCookiesValue(): void {
        this.configPopupCookies = new ConfigPopup();
        this.configPopupCookies.colorPrincipalText = '#080a3c';
        this.configPopupCookies.textTitleBanner = 'Personalizziamo la tua esperienza';
        this.configPopupCookies.textDescriptionBanner = 'Il nostro sito utilizza cookie per le proprie funzionalità e per fornire servizi che migliorano l’esperienza di navigazione. I cookie utilizzati sono:' +
        ' <b>Cookie tecnici:</b> usati per garantire il funzionamento ottimale del sito, <b>Cookies funzionali</b> per comprendere e migliorare l’esperienza di navigazione' +
        ' dell’utente <b>Cookies di marketing</b> per inviarti pubblicità, che potranno essere personalizzate, adatte alle tue preferenze.\n' +
        ' Se vuoi saperne di più o negare il consenso a tutti o ad alcuni cookie clicca "Gestisci impostazioni". Cliccando su “Accetta tutti” acconsenti ' +
        ' all’uso di tutti i cookie. Cliccando su “Accetta essenziali” acconsenti ai cookie tecnici, necessari per la navigazione. Per maggiori informazioni,' +
            ' si invita a leggere la' +
            ' <a class="clickable" style="color: #003da5 !important;">nostra informativa</a>' +
            ' sulla privacy e la nostra' +
            ' <a class="clickable" style="color: #003da5 !important;">cookie policy</a>.';
        this.configPopupCookies.textDescriptionBannerCut = 'Il nostro sito utilizza cookie per le proprie funzionalità e per fornire servizi che migliorano l’esperienza di navigazione. I cookie utilizzati sono:';
        this.configPopupCookies.classBtn = 'card card-small';
        this.configPopupCookies.textBtnSetting = 'Gestisci impostazioni'
        this.configPopupCookies.textBtnAcceptEssential = 'Accetta essenzialli';
        this.configPopupCookies.textBtnAcceptAll = 'Accetta tutti';
        this.configPopupCookies.cookieKey = 'cookie-pref';
        this.configPopupCookies.textTitleModal = 'Gestisci impostazioni'
        this.configPopupCookies.textDescriptionModal = 'Per rendere ottimale la navigazione sul sito web, utilizziamo dei cookies per garantire un accesso sicuro, per effettuare delle statistiche' +
            ' per migliorare la fruizione e per poter inviare contenuti personalizzati in base alle tue preferenze. \n' +
            'Cliccando "Accetta selezionati" dichiari di prestare il consenso all’utilizzo dei cookie in base alle preferenze indicate. ' +
            'Cliccando "Accetta tutti" dichiari di prestare il consenso all\'utilizzo di tutti i cookie.\n' +
            'Tetaly utilizza i seguenti <b>Cookie</b>: \n';
        this.configPopupCookies.textTitleTechnical = 'Cookie tecnici';
        this.configPopupCookies.textDescriptionTechnical = 'Necessari per garantire il corretto funzionamento del sito e non possono essere disattivati nei nostri sistemi.';
        this.configPopupCookies.textTitleFunctional = 'Cookie funzionali';
        this.configPopupCookies.textDescriptionFunctional = 'Consentono di analizzare l’uso del sito per migliorare le prestazioni. Inoltre, sono usati per analisi statistiche sulle modalità di navigazione' +
        ' degli utenti, con la finalità di adattare i contenuti secondo le tue necessità rendendo ottimale l’esperienza sul sito.';
        this.configPopupCookies.textTitleMarketing = 'Cookie marketing';
        this.configPopupCookies.textDescriptionMarketing = 'Usati per migliorare l’esperienza di navigazione e per inviare agli utenti inserzioni rilevanti basate sulle preferenze, sulle abitudini ' +
            'd’acquisto e sulla propria navigazione all’interno del sito.';
        this.configPopupCookies.textBtnAcceptSelected = 'Accetta selezionati';
        this.configPopupCookies.textReadMore = 'Continua a leggere';
        this.configPopupCookies.sizeModal = 'lg';
        this.configPopupCookies.sizeTextSpaceModal = '3rem';
    }
}
