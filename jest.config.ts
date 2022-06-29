export default {
    modulePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
    moduleFileExtensions: ["ts", "js", "json"],
    testRegex: ".*\\.spec\\.ts$",
    transform: {
        "^.+\\.ts$": ["@swc/jest"],
    },
    testEnvironment: "node",
    moduleNameMapper: {
        "@application/(.*)": "<rootDir>/application/$1",
        "@domain/(.*)": "<rootDir>/domain/$1",
        "@infra/(.*)": "<rootDir>/infra/$1",
    },
};
