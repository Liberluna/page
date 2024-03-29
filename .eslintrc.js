module.exports = {
  root: true,
  env: {
    browser: true,
    "jest/globals": true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'standard',
  ],
  plugins: [
    "jest"
  ],
  // add your custom rules here
  rules: {
    quotes: ["off","single","double"],
    "comma-dangle": ["off","never"],
    "comma-spacing": ["off"],
    "eol-last": ["off"],
    "space-before-function-paren": ["error", {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    }],
    "no-multi-spaces": ["error", { ignoreEOLComments: true }],
    "vue/html-indent": ["error", 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    "vue/multiline-html-element-content-newline": ["off"],
    "vue/html-self-closing": ["error", {
      html: {
        void: "always",
        normal: "always",
        component: "always"
      },
      svg: "always",
      math: "always",
    }],
    "vue/html-closing-bracket-spacing": ["error", {
      startTag: "never",
      endTag: "never",
      selfClosingTag: "never",
    }],
    "vue/html-quotes": ["error", "double", { avoidEscape: true }],
    "vue/attributes-order": ["off"],
    "vue/component-tags-order": ["error", {
      order: ["template", "script", "style"]
    }],
    "vue/order-in-components": ["error"],
  }
}
