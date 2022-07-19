module.exports = {
  root: true,

  parser: "@babel/eslint-parser",

  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    requireConfigFile: false, // Don't require a .eslintrc.js file
    sourceType: "module", // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },

  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src"],
          ["@components", "./src/components"],
          ["@constants", "./src/constants"],
          ["@hooks", "./src/hooks"],
          ["@models", "./src/models"],
          ["@services", "./src/services"],
          ["@styles", "./src/styles"],
          ["@utilities", "./src/utilities"],
          ["@pages", "./src/pages"],
          ["@public", "./public"],
          ["@libs", "./src/libs"],
        ],
        extensions: [".js", ".jsx"],
      },
    },
  },

  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb",
    "plugin:prettier/recommended", // Make this the last element so prettier config overrides other formatting rules
  ],

  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off",
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "no-constructor-return": "off",
  },
};
