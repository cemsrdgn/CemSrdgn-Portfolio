const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = {
  reactStrictMode: true,
  basePath: '',
  assetPrefix: process.env.NODE_ENV === PHASE_PRODUCTION_BUILD ? '/cemsrdgn.github.io/' : '',
};
