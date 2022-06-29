import { MissingParamException } from "@application/exception/MissingParamException";

export class User {
    private name: string;

    constructor(name: string) {
        if (!name) throw new MissingParamException("name");
        this.name = name;
    }
}
