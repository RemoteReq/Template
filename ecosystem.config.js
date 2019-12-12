module.exports = {
  app: [{
    name: 'Template',
  }],

  deploy: {
    production: {
      user: 'ubuntu',
      key: 'RemoteReqRyan.pem',
      host: 'http://ec2-3-136-51-144.us-east-2.compute.amazonaws.com/',
      ref: 'origin/master',
      repo: 'https://github.com/RemoteReq/Template.git',
      path: '/home/ubuntu/Template',
      'post-deploy': 'npm run dockerize',
    },
  },
};
