/* eslint no-console: ["error", { allow: ["info"] }] */

const { exec, set } = require('shelljs');
const { series } = require('gulp');

const lint = (callback) => {
  set('-e');

  console.info('*****************************************************************************');
  console.info('* Checking the application with ESLinter...');
  console.info('*****************************************************************************');
  exec('npm run lint');

  callback();
};

const test = (callback) => {
  set('-e');

  console.info('*****************************************************************************');
  console.info('* Running the tests...');
  console.info('*****************************************************************************');
  exec('npm run test');

  callback();
};

const createPreRelease = (preId) => (callback) => {
  set('-e');

  console.info('*****************************************************************************');
  console.info('* Preparing the new release...');
  console.info('*****************************************************************************');
  exec(`npm version prerelease --preid ${preId} --message "[release] %s"`);

  callback();
};

const pushRelease = (callback) => {
  set('-e');

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

const nextDevelopmentIteration = (callback) => {
  set('-e');

  console.info('*****************************************************************************');
  console.info('* Preparing the next development iteration...');
  console.info('*****************************************************************************');
  exec(
    'npm version prerelease '
    + '--no-git-tag-version '
    + '--preid snapshot '
    + '--message "The version of the next development iteration has been set up."',
  );

  console.info('*****************************************************************************');
  console.info('* Pushing changes to the Git repository...');
  console.info('*****************************************************************************');
  exec('git push');

  callback();
};

const publish = (callback) => {
  set('-e');

  console.info('*****************************************************************************');
  console.info('* Publish called...');
  console.info('*****************************************************************************');

  /* console.info('*****************************************************************************');
  console.info('* Checking the commit message...');
  console.info('*****************************************************************************');
  const commitMessage = exec('git log -1 --pretty=%B', { silent: true }).stdout.trim();

  if (commitMessage.match(/^\[release] /)) {
    console.info('*****************************************************************************');
    console.info('* Publishing the application...');
    console.info('*****************************************************************************');
    exec('npm publish');
  } */

  callback();
};

exports.build = series(lint, test);
exports['release-alpha'] = series(createPreRelease('alpha'), pushRelease, nextDevelopmentIteration);
exports['release-beta'] = series(createPreRelease('beta'), pushRelease, nextDevelopmentIteration);
exports['release-rc'] = series(createPreRelease('rc'), pushRelease, nextDevelopmentIteration);
exports.publish = publish;
