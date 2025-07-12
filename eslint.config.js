// eslint.config.js
import eslintPluginReact from "eslint-plugin-react"
import eslintPluginReactNative from "eslint-plugin-react-native"
import parserBabel from "@babel/eslint-parser"

export default [
  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      parser: parserBabel,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        __DEV__: true,
        fetch: true,
        navigator: true,
        requestAnimationFrame: true,
        cancelAnimationFrame: true,
        setTimeout: true,
        clearTimeout: true,
        setInterval: true,
        clearInterval: true,
        console: true,
        window: true,
        document: true,
      },
    },

    plugins: {
      react: eslintPluginReact,
      "react-native": eslintPluginReactNative,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      // Manually replicate key eslint:recommended rules (subset)
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off",
      "no-debugger": "warn",

      // React plugin rules
      ...eslintPluginReact.configs.recommended.rules,

      // Your custom rules
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
]
