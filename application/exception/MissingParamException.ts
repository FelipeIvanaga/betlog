export class MissingParamException extends Error {
    constructor(paramName?: string) {
        super();
        this.name = "MissingParamException";
        this.message = "missing param";

        if (paramName) {
            this.message += ": " + paramName;
        }
    }
}
