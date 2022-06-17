const fs = require('fs');
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000'],
  },
  serverRuntimeConfig: {
    secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api' // development api
        : 'https://zde4h.sse.codesandbox.io/api' // production api
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     // reset users json on codesandbox every 10 minutes because
  //     // the same json data is viewed by all users
  //     setInterval(() => {
  //       const defaultUsers = [];
  //       fs.writeFileSync('data/users.json', JSON.stringify(defaultUsers, null, 4));
  //       console.log('users reset to default in next.config.js');
  //     }, 10 * 60 * 1000);
  //   }
  //
  //   return config;
  // }
};
