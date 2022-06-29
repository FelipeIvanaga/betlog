import { InvalidParamException } from "./InvalidParamException";

describe("Invalid Param Exception", () => {
    it("should have name 'InvalidParamException'", () => {
        const err = new InvalidParamException();

        expect(err.name).toBe("InvalidParamException");
    });

    it("should have message 'invalid param' when message not provided", () => {
        const err = new InvalidParamException();

        expect(err.message).toBe("invalid param");
    });
});
