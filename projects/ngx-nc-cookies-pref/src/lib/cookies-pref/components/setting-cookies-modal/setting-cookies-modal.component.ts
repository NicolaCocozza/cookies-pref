import {Component, OnInit} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CommonModule, NgClass} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CookiesPref} from '../../models/cookies-pref.model';
import {ConfigModalModel} from '../../models/config-modal.model';

@Component({
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        InputSwitchModule,
        NgClass
    ],
    selector: 'setting-cookies-modal',
    standalone: true,
    template: `
        <div id="cookies-pref-modal" style="z-index: 1050; !important;">
            <div id="cookies-pref-modal-header" class="modal-header">
                <h4 id="cookies-pref-modal-header-title" class="font-weight-bold" *ngIf="configModal?.textTitleModal"
                    [style.color]="configModal?.colorPrincipalText"
                    [innerHTML]="configModal?.textTitleModal | translate"></h4>
                <button id="cookies-pref-modal-header-btn" type="button" class="btn btn-xs btn-icon" aria-label="Close" (click)="closeModal()">
                    <span class="f-size-2e5rem">×</span>
                </button>
            </div>
            <div id="cookies-pref-modal-body" class="modal-body padding-modal-body">
                <div id="cookies-pref-modal-body-row-1" class="row w-100 ml-0">
                    <div id="cookies-pref-modal-body-col-1" class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <p id="cookies-pref-modal-body-text-1" *ngIf="configModal?.textDescriptionModal"
                           [style.margin-bottom]="configModal?.sizeTextSpaceModal"
                           [innerHTML]="configModal?.textDescriptionModal | translate"></p>
                    </div>
                </div>
                <div id="cookies-pref-modal-body-row-2" class="row w-100 ml-0">
                    <div id="cookies-pref-modal-body-col-2" class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                        <h6 id="cookies-pref-modal-body-title-2" class="font-weight-bold mb-1" *ngIf="configModal?.textTitleTechnical"
                            [style.color]="configModal?.colorPrincipalText"
                            [innerHTML]="configModal?.textTitleTechnical | translate"></h6>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 pr-3 justify-content-end d-flex">
                        <p-inputSwitch id="input-switch-cookie-1" [(ngModel)]="checkedTechnicalCookie"
                                       [disabled]="true"></p-inputSwitch>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pr-3">
                        <p id="cookies-pref-modal-body-text-2"
                           *ngIf="configModal?.textDescriptionTechnical"
                           [style.margin-bottom]="configModal?.sizeTextSpaceModal"
                           [innerHTML]="configModal?.textDescriptionTechnical | translate"></p>
                    </div>
                </div>
                <div id="cookies-pref-modal-body-row-3" class="row w-100 ml-0">
                    <div id="cookies-pref-modal-body-col-3" class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                        <h6  id="cookies-pref-modal-body-title-3" class="font-weight-bold mb-1" *ngIf="configModal?.textTitleFunctional"
                             [style.color]="configModal?.colorPrincipalText"
                             [innerHTML]="configModal?.textTitleFunctional | translate"></h6>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 pr-3 justify-content-end d-flex">
                        <p-inputSwitch id="input-switch-cookie-2"
                                       [(ngModel)]="checkedFunctionalCookie"></p-inputSwitch>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pr-3">
                        <p id="cookies-pref-modal-body-text-3"
                           *ngIf="configModal?.textDescriptionFunctional"
                           [style.margin-bottom]="configModal?.sizeTextSpaceModal"
                           [innerHTML]="configModal?.textDescriptionFunctional | translate"></p>
                    </div>
                </div>
                <div id="cookies-pref-modal-body-row-4" class="row w-100 ml-0">
                    <div id="cookies-pref-modal-body-col-4" class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                        <h6 id="cookies-pref-modal-body-title-4" class="font-weight-bold mb-1" *ngIf="configModal?.textTitleMarketing"
                            [style.color]="configModal?.colorPrincipalText"
                            [innerHTML]="configModal?.textTitleMarketing | translate"></h6>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 pr-3 justify-content-end d-flex">
                        <p-inputSwitch id="input-switch-cookie-3"
                                       [(ngModel)]="checkedMarketingCookie"></p-inputSwitch>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pr-3">
                        <p id="cookies-pref-modal-body-text-4"
                           *ngIf="configModal?.textDescriptionMarketing"
                           [innerHTML]="configModal?.textDescriptionMarketing | translate"></p>
                    </div>
                </div>
            </div>
            <div id="cookies-pref-modal-footer" class="modal-footer">
                <div id="cookies-pref-modal-footer-row" class="row w-100">
                    <a id="cookies-pref-modal-footer-btn-1" class="clickable mt-1 mr-3" [ngClass]="configModal?.classBtn"
                       (click)="setCookiesSelected()">
                        <span [innerHTML]="configModal?.textBtnAcceptSelected | translate"></span>
                    </a>
                    <a id="cookies-pref-modal-footer-btn-2" *ngIf="configModal?.textBtnAcceptAll" class="clickable mt-1"
                       [ngClass]="configModal?.classBtn" (click)="setAllCookiesSelected()">
                        <span [innerHTML]="configModal?.textBtnAcceptAll | translate"></span>
                    </a>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .f-size-2e5rem {
            font-size: 2.5rem;
        }
    `]
})
export class SettingCookiesModalComponent implements OnInit {

    public cookiesSelected: CookiesPref;
    public checkedTechnicalCookie = true;
    public checkedFunctionalCookie = false;
    public checkedMarketingCookie = false;
    public configModal: ConfigModalModel;

    constructor(
        private modalService: NgbActiveModal,
    ) {
    }

    ngOnInit() {
    }

    closeModal() {
        this.modalService.dismiss();
    }

    public setCookiesSelected(): void {
        this.cookiesSelected = new CookiesPref(this.checkedTechnicalCookie, this.checkedFunctionalCookie, this.checkedMarketingCookie);
        this.modalService.close(this.cookiesSelected);
    }

    public setAllCookiesSelected(): void {
        this.cookiesSelected = new CookiesPref(true, true, true);
        this.modalService.close(this.cookiesSelected);
    }
}
