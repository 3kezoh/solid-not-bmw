module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:solid/typescript",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "solid"],
  root: true,
};

