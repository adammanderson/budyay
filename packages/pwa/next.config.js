/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint @typescript-eslint/explicit-function-return-type: 0 */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@budyay/ui', '@budyay/utils']);

const nextConfig = {
  distDir: '../../dist/functions/next',
};

module.exports = withPlugins([
  [withTM, {
    transpileModules: ['@buyay'],
  }],
], nextConfig);
