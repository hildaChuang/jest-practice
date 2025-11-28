module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testEnvironment: 'jsdom',

    transform: {
        '^.+\\.(ts|mjs|js)$': [
            'jest-preset-angular',
            {
                tsconfig: 'tsconfig.spec.json',
                stringifyContentPathRegex: '\\.(html|svg)$'
            }
        ],
    },

    moduleFileExtensions: ['ts', 'js', 'html', 'json'],

    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    moduleDirectories: ['node_modules', '<rootDir>'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
};
