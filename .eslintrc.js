module.exports = {
  "env": {
    "node": true,
    "mocha": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-unused-vars": ["warn"],
    "indent": ["error", 2, {"SwitchCase": 1}],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", "only-multiline"]
  }
};
