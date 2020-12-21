[![Workflow 'Build' Status][github-workflow-build-status]][github-workflow-build-url]
[![Release version][github-package-registry-latest-release]][github-package-registry-url]
[![Pre-release version][github-package-registry-latest-pre-release]][github-package-registry-url]
[![Quality Gate Status][quality-gate-status]][quality-gate-url]

# whyking/lab-rat-node-js

Whyking's "Hello World!"-ish playground Node.js application.

## Configuring npm for use with GitHub Packages

Add the `~/.npmrc` file to your home directory.

```
//npm.pkg.github.com/:_authToken=XXXXXXXXXXXXXXXXXXXX
registry=https://npm.pkg.github.com/whyking
```

## License

The source code for the repository is licensed under the [MIT License](LICENSE).

All graphical and textural assets are licensed under the [Creative Commons CC0 1.0 Universal](LICENSE-CC0).


[github-workflow-build-url]:                  https://github.com/whyking/lab-rat-node-js/actions?query=workflow%3ABuild
[github-workflow-build-status]:               https://github.com/whyking/lab-rat-node-js/workflows/Build/badge.svg
[github-package-registry-url]:                https://github.com/whyking/lab-rat-node-js/packages/546322
[github-package-registry-latest-release]:     https://img.shields.io/github/v/release/whyking/lab-rat-node-js?logo=github
[github-package-registry-latest-pre-release]: https://img.shields.io/github/v/release/whyking/lab-rat-node-js?include_prereleases&label=pre-release&logo=github
[quality-gate-url]:                           https://sonarcloud.io/dashboard?id=whyking_lab-rat-node-js
[quality-gate-status]:                        https://sonarcloud.io/api/project_badges/measure?project=whyking_lab-rat-node-js&metric=alert_status
