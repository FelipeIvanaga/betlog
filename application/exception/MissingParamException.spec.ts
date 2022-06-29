import { MissingParamException } from "./MissingParamException";

describe("Missing Param Exception", () => {
    it("should have message 'missing param' when no param is provided", () => {
        const err = new MissingParamException();

        expect(err.message).toBe("missing param");
    });

    it("should have message 'missing param: param' when param is provided", () => {
        const err = new MissingParamException("param");

        expect(err.message).toBe("missing param: param");
    });

    it("should have name 'MissingParamException'", () => {
        const err = new MissingParamException();

        expect(err.name).toBe("MissingParamException");
    });
});
