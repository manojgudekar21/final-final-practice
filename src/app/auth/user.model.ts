export class User {
    constructor(public email: string, public localId: string, private tokenId: string, private expiration: Date) { }

    get token() {
        if (!this.expiration || new Date() > this.expiration) {
            return null
        }
        return this.tokenId;
    }
}