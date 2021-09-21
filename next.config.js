const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public',
        publicExcludes: ['!static/**/*'],
    },
});
