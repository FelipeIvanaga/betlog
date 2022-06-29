import { InvalidParamException } from "@application/exception/InvalidParamException";

export class User {
    private name: string;

    constructor(name: string) {
        if (name.length < 3 || name.length > 32) {
            throw new InvalidParamException(
                "name must have a length between 3 and 32"
            );
        }

        if (!RegExp("[a-zA-Z]").test(name)) {
            throw new Error("teste");
        }
        this.name = name;
    }
}
