export class ConfigModalModel {

    public colorPrincipalText?: string;
    public textTitleModal?: string;
    public textDescriptionModal?: string;
    public textTitleTechnical?: string;
    public textDescriptionTechnical?: string;
    public textTitleFunctional?: string;
    public textDescriptionFunctional?: string;
    public textTitleMarketing?: string;
    public textDescriptionMarketing?: string;
    public classBtn?: string;
    public textBtnAcceptSelected?: string;
    public textBtnAcceptAll?: string;
    public sizeTextSpaceModal?: string;

    constructor(colorPrincipalText?: string, textTitleModal?: string, textDescriptionModal?: string, textTitleTechnical?: string,
                textDescriptionTechnical?: string, textTitleFunctional?: string, textDescriptionFunctional?: string,
                textTitleMarketing?: string, textDescriptionMarketing?: string, classBtn?: string, textBtnAcceptSelected?: string,
                textBtnAcceptAll?: string, sizeTextSpaceModal?: string) {
        this.colorPrincipalText = colorPrincipalText;
        this.textTitleModal = textTitleModal;
        this.textDescriptionModal = textDescriptionModal;
        this.textTitleTechnical = textTitleTechnical;
        this.textDescriptionTechnical = textDescriptionTechnical;
        this.textTitleFunctional = textTitleFunctional;
        this.textDescriptionFunctional = textDescriptionFunctional;
        this.textTitleMarketing = textTitleMarketing;
        this.textDescriptionMarketing = textDescriptionMarketing;
        this.classBtn = classBtn;
        this.textBtnAcceptSelected = textBtnAcceptSelected;
        this.textBtnAcceptAll = textBtnAcceptAll;
        this.sizeTextSpaceModal = sizeTextSpaceModal;
    }
}
