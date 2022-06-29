import { InvalidParamException } from "@application/exception/InvalidParamException";
import { User } from "./User";

describe("User entity", () => {
    describe("create", () => {
        it("should throw when name length < 3", () => {
            const err = new InvalidParamException(
                "name must have a length between 3 and 32"
            );
            expect(() => {
                new User("aa");
            }).toThrow(err);
        });
        it("should throw when name length > 32", () => {
            const err = new InvalidParamException(
                "name must have a length between 3 and 32"
            );
            expect(() => {
                new User("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            }).toThrow(err);
        });
    });
});
