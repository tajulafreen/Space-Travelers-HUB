module.exports = {
    testPathIgnorePatterns: [
        "/node_modules/"
    ],
    roots: ["<rootDir>/src"],
    testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
    setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each", "@testing-library/jest-dom/extend-expect"],
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest"
    }
};