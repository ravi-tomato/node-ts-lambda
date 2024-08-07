export default {
    verbose: true,
    transform: {
        '^.+\\.ts?$': 'esbuild-jest'
    },
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    testMatch: ['**/*.test.ts'],
    moduleNameMapper: {
        '/opt/nodejs/(.*)': '<rootDir>/layers/common-layer/src/$1'
    },
    modulePaths: ['<rootDir>']
}

