export class InvalidParamException extends Error {
    constructor(message?: string) {
        super();
        this.name = "InvalidParamException";
        if (!message) this.message = "invalid param";
        else this.message = message;
    }
}
