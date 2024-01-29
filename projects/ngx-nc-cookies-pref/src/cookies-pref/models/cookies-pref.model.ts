export class CookiesPref {
    public technical: boolean;
    public functional: boolean;
    public marketing: boolean;

    constructor(technical: boolean, functional: boolean, marketing: boolean) {
        this.technical = technical;
        this.functional = functional;
        this.marketing = marketing;
    }
}
