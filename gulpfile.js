/* eslint no-console: ["error", { allow: ["info"] }] */

const { exec, set } = require('shelljs');

const build = (callback) => {
  set('-e');

  console.info('*****************************************************************************');
  console.info('* Checking the application with ESLinter...');
  console.info('*****************************************************************************');
  exec('npm run lint');

  console.info('*****************************************************************************');
  console.info('* Running the tests...');
  console.info('*****************************************************************************');
  exec('npm run test');

  if (process.env.CI) {
    console.info('*****************************************************************************');
    console.info('* Checking the commit message...');
    console.info('*****************************************************************************');
    const commitMessage = exec('git log -1 --pretty=%B', { silent: true }).stdout.trim();

    if (commitMessage.match(/^\[release] /)) {
      console.info('*****************************************************************************');
      console.info('* Publishing the application...');
      console.info('*****************************************************************************');
      exec('npm publish');
    }
  }

  callback();
};

const releaseAlpha = (callback) => {
  set('-e');

  console.info('*****************************************************************************');
  console.info('* Preparing the new release...');
  console.info('*****************************************************************************');
  exec('npm version prerelease --preid alpha --message "[release] %s"');

  console.info('*****************************************************************************');
  console.info('* Checking the commit message...');
  console.info('*****************************************************************************');
  const commitMessage = exec('git log -1 --pretty=%B', { silent: true }).stdout.trim();
  const tag = commitMessage.replace(/^\[release] /, '');

  console.info('*****************************************************************************');
  console.info('* Pushing changes to the Git repository...');
  console.info('*****************************************************************************');
  exec('git push');
  exec(`git push origin ${tag}`);

  callback();
};

exports.build = build;
exports['release-alpha'] = releaseAlpha;
