module.exports = {
  app: [{
    name: 'Template',
  }],

  deploy: {
    production: {
      user: 'node',
      key: 'RemoteReqRyan.pem',
      host: 'http://ec2-3-136-51-144.us-east-2.compute.amazonaws.com/',
      ref: 'origin/master',
      repo: 'https://github.com/RemoteReq/Template.git',
      path: '/var/www/production',
      'post-deploy': 'npm run dockerize',
    },
  },
};
