import { MissingParamException } from "@application/exception/MissingParamException";
import { User } from "./User";

describe("User entity", () => {
    describe("create", () => {
        it("should throw when name is invalid", () => {
            expect(() => {
                new User("");
            }).toThrow(MissingParamException);
        });
    });
});
