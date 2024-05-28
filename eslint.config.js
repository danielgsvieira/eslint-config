import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommendedTypeChecked,
  {
    rules: {
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      semi: ["error", "always"],
      quotes: ["error", "single", { avoidEscape: true }],
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "no-constant-binary-expression": "error",
      "no-duplicate-imports": "error",
      "no-template-curly-in-string": "error",
      "no-unreachable-loop": "error",
      "arrow-body-style": "off",
      complexity: ["error", 15],
      "consistent-return": "error",
      "default-case": "error",
      eqeqeq: "error",
      "func-style": ["error", "expression"],
      "no-alert": "error",
      "no-confusing-arrow": "error",
      "no-else-return": "error",
      "no-implicit-coercion": "error",
      "no-mixed-operators": "error",
      "no-nested-ternary": "error",
      "no-return-assign": "error",
      "@typescript-eslint/no-shadow": "error",
      "no-unneeded-ternary": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "single", "multiple"],
          allowSeparatedGroups: false,
        },
      ],
    },
  },
];
