module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['prettier --write', 'eslint --fix'],
  'packages/theme-chalk/src/**/*.{scss,css}': [
    'stylelint --fix --custom-syntax postcss-scss',
    'prettier --write'
  ],
  '*.md': ['prettier --write']
};
