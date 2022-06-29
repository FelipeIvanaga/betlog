export class MissingParamException extends Error {
    constructor(paramName?: string) {
        super();
        this.message = "missing param";

        if (paramName) {
            this.message += ": " + paramName;
        }
    }
}
