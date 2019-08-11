const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/bntnam/bntnam.github.io.git',
  },
  () => {
    console.log('Deploy Completed!');
  }
);
