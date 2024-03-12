import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {InputSwitchModule} from 'primeng/inputswitch';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CookiesPref} from '../../models/cookies-pref.model';
import {ConfigModalModel} from '../../models/config-modal.model';
import {SettingCookiesModalComponent} from '../setting-cookies-modal/setting-cookies-modal.component';
import {ConfigPopup} from '../../models/config-popup.model';

@Component({
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        InputSwitchModule,
        NgClass
    ],
    standalone: true,
    selector: 'popup-cookies',
    template: `
        <div id="popup-container" class="bottom-row" *ngIf="!cookiesAlreadyAccepted">
            <div id="popup-container-row" class="row w-100">
                <div id="popup-container-col-1-long" class="col-xl-10 col-lg-12 col-12 p-5 visibility-cookie-long">
                    <h4 id="title-long" class="font-weight-bold" [style.color]="configPopupCookies?.colorPrincipalText"
                        [innerHTML]="configPopupCookies?.textTitleBanner | translate"></h4>
                    <p id="text-long" [innerHTML]="configPopupCookies?.textDescriptionBanner | translate"></p>
                </div>
                <div id="popup-container-col-1-cut" class="col-xl-10 col-lg-12 col-12 p-5 visibility-cookie-long-responsive">
                    <h4 id="title-cut" class="font-weight-bold" [style.color]="configPopupCookies?.colorPrincipalText"
                        [innerHTML]="configPopupCookies?.textTitleBanner | translate"></h4>
                    <p id="text-long-show" class="fsize-minimal" *ngIf="showFullText"
                       [innerHTML]="configPopupCookies?.textDescriptionBanner | translate"></p>
                    <div id="text-cut-row" class="row m-0 p-0" *ngIf="!showFullText">
                        <p id="text-cut" class="fsize-minimal"  [innerHTML]="configPopupCookies?.textDescriptionBannerCut | translate">
                        </p>
                        <p id="text-cut-read-more" class="fsize-minimal color-link" (click)="toggleText()"
                           [innerHTML]="configPopupCookies?.textReadMore | translate"></p>
                    </div>
                </div>
                <div id="popup-container-col-2" class="col-xl-2 col-lg-12 col-12 text-center justify-content-center" [ngClass]="configPopupCookies?.classBtnContainer">
                    <div id="popup-container-btn-row" class="row m-0 p-0 mt-3">
                        <div id="popup-container-btn-col-1" class="col-xl-12 col-lg-4 m-0 p-0 text-center justify-content-center"
                             *ngIf="configPopupCookies?.textBtnSetting">
                            <a id="popup-container-btn-1" class="clickable" (click)="openSettingCookieModal()"
                               [ngClass]="configPopupCookies?.classBtn">
                                <span [innerHTML]="configPopupCookies?.textBtnSetting | translate"></span>
                            </a>
                        </div>
                        <div id="popup-container-btn-col-2" class="col-xl-12 col-lg-4 m-0 p-0 text-center justify-content-center"
                             *ngIf="configPopupCookies?.textBtnAcceptEssential">
                            <a id="popup-container-btn-2" class="clickable mt-1-bnt-cookie" (click)="acceptEssentialCookies()"
                               [ngClass]="configPopupCookies?.classBtn">
                                <span [innerHTML]="configPopupCookies?.textBtnAcceptEssential | translate"></span>
                            </a>
                        </div>
                        <div id="popup-container-btn-col-3" class="col-xl-12 col-lg-4 m-0 p-0 text-center justify-content-center"
                             *ngIf="configPopupCookies?.textBtnAcceptAll">
                            <a id="popup-container-btn-3" class="clickable mt-1-bnt-cookie" (click)="acceptAllCookies()"
                               [ngClass]="configPopupCookies?.classBtn">
                                <span [innerHTML]="configPopupCookies?.textBtnAcceptAll | translate"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .color-link {
            color: #3699FF;
        }

        .bottom-row {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #f0f0f0;
            z-index: 10;
            padding: 10px;
        }

        .fsize-minimal {
            font-size: 1rem !important;
        }

        @media only screen and (min-width: 200px) and (max-width: 575px) {
            .mt-1-bnt-cookie {
                margin-top: 1rem;
            }

            .visibility-cookie-long {
                display: none;
            }

            .visibility-cookie-long-responsive {
                display: initial;
            }
        }

        @media only screen and (min-width: 576px) and (max-width: 767px) {
            .mt-1-bnt-cookie {
                margin-top: 1rem;
            }

            .visibility-cookie-long {
                display: none;
            }

            .visibility-cookie-long-responsive {
                display: initial;
            }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
            .mt-1-bnt-cookie {
                margin-top: 1rem;
            }

            .visibility-cookie-long {
                display: none;
            }

            .visibility-cookie-long-responsive {
                display: initial;
            }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .mt-1-bnt-cookie {
                margin-top: 0;
            }

            .visibility-cookie-long {
                display: initial;
            }

            .visibility-cookie-long-responsive {
                display: none;
            }
        }

        @media only screen and (min-width: 1200px) and (max-width: 1400px) {
            .mt-1-bnt-cookie {
                margin-top: 1rem;
            }

            .visibility-cookie-long {
                display: initial;
            }

            .visibility-cookie-long-responsive {
                display: none;
            }
        }

        @media only screen and (min-width: 1401px) and (max-width: 1880px) {
            .mt-1-bnt-cookie {
                margin-top: 1rem;
            }

            .visibility-cookie-long {
                display: initial;
            }

            .visibility-cookie-long-responsive {
                display: none;
            }
        }

        @media only screen and (min-width: 1881px) {
            .mt-1-bnt-cookie {
                margin-top: 1rem;
            }

            .visibility-cookie-long {
                display: initial;
            }

            .visibility-cookie-long-responsive {
                display: none;
            }
        }
`]
})
export class PopupCookiesComponent implements OnInit, OnChanges {

    @Input() configPopupCookies: ConfigPopup;
    @Output() isVisibleCookiesBanner = new EventEmitter<boolean>();
    public showFullText = false;
    public cookiesAlreadyAccepted: boolean;
    public configModal: ConfigModalModel;
    private COOKIE_PREF: string;

    constructor(
        public cdr: ChangeDetectorRef,
        public activeModal: NgbModal,
        public translate: TranslateService,
    ) {
    }

    ngOnInit() {
        this.manageCookie();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.configPopupCookies = changes?.configPopupCookies?.currentValue ?? this.configPopupCookies;
        this.COOKIE_PREF = this.configPopupCookies?.cookieKey;
    }

    public openSettingCookieModal(): void {
        const modalRef = this.activeModal.open(SettingCookiesModalComponent, {
            centered: true,
            backdrop: 'static',
            size: this.configPopupCookies?.sizeModal ?? 'lg',
            keyboard: false
        });
        modalRef.componentInstance.configModal = this.settingConfigModal();
        modalRef.result.then((cookiesSelected: CookiesPref) => {
            this.setCookie(this.COOKIE_PREF, JSON.stringify(cookiesSelected));
            this.manageCookie();
        }, _ => {
        });
    }

    public toggleText(): void {
        this.showFullText = !this.showFullText;
    }

    public acceptEssentialCookies(): void {
        const cookieAccept = new CookiesPref(true, false, false);
        this.setCookie(this.COOKIE_PREF, JSON.stringify(cookieAccept));
        this.manageCookie();
    }

    public acceptAllCookies(): void {
        const cookieAccept = new CookiesPref(true, true, true);
        this.setCookie(this.COOKIE_PREF, JSON.stringify(cookieAccept));
        this.manageCookie();
    }

    // PRIVATE METHODS

    private manageCookie(): void {
        this.cookiesAlreadyAccepted = this.getCookie(this.COOKIE_PREF) != null;
        this.isVisibleCookiesBanner.emit(this.cookiesAlreadyAccepted);
        this.cdr.detectChanges();
    }

    private getCookie(name): string {
        // Split cookie string and get all individual name=value pairs in an array
        const cookieArr: string[] = document.cookie.split(';');
        // Loop through the array elements
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < cookieArr.length; i++) {
            const cookiePair = cookieArr[i].split('=');
            /* Removing whitespace at the beginning of the cookie name
            and compare it with the given string */
            if (name == cookiePair[0].trim()) {
                // Decode the cookie value and return
                return decodeURIComponent(cookiePair[1]);
            }
        }
        // Return null if not found
        return null;
    }

    private setCookie(name, value): void {
        // Encode value in order to escape semicolons, commas, and whitespace
        let cookie = name + '=' + encodeURIComponent(value);
        // Sets the max-age attribute so that the cookie expires after the specified number of days
        cookie += '; max-age=' + (10 * 365 * 24 * 60 * 60);
        document.cookie = cookie;
    }

    private settingConfigModal(): ConfigModalModel {
        const configModal = new ConfigModalModel();
        configModal.colorPrincipalText = this.configPopupCookies?.colorPrincipalText;
        configModal.textTitleModal = this.configPopupCookies?.textTitleModal;
        configModal.textDescriptionModal = this.configPopupCookies?.textDescriptionModal;
        configModal.textTitleTechnical = this.configPopupCookies?.textTitleTechnical;
        configModal.textDescriptionTechnical = this.configPopupCookies?.textDescriptionTechnical;
        configModal.textTitleFunctional = this.configPopupCookies?.textTitleFunctional;
        configModal.textDescriptionFunctional = this.configPopupCookies?.textDescriptionFunctional;
        configModal.textTitleMarketing = this.configPopupCookies?.textTitleMarketing;
        configModal.textDescriptionMarketing = this.configPopupCookies?.textDescriptionMarketing;
        configModal.classBtn = this.configPopupCookies?.classBtn;
        configModal.textBtnAcceptSelected = this.configPopupCookies?.textBtnAcceptSelected;
        configModal.textBtnAcceptAll = this.configPopupCookies?.textBtnAcceptAll;
        configModal.sizeTextSpaceModal = this.configPopupCookies?.sizeTextSpaceModal;
        return configModal;
    }

}
