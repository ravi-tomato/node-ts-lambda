import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",
            tsconfigRootDir: "./",
        },
    },

    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },

        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },

            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },

    rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/interface-name-prefix": "off",
    },
}];