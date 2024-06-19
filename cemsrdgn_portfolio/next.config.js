// next.config.js
module.exports = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/cemsrdgn.github.io/' : '',
};
