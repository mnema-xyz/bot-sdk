# Changelog

All notable changes to `@mnema-xyz/bot-sdk`. Versions follow
[semver](https://semver.org).

## 3.1.2 (2026-11-13)

Tested with Mnema Talk 3.1.1 and newer.

- The package page links to the renamed repository
  ([mnema-xyz/bot-sdk-js](https://github.com/mnema-xyz/bot-sdk-js)) and the
  developer docs on mnema.xyz.
- The first version published from CI with npm provenance (trusted
  publishing); 3.1.1 was published by hand.

## 3.1.1 (2026-11-13)

Tested with Mnema Talk 3.1.1 and newer.


The first version published to npm, as `@mnema-xyz/bot-sdk`. The code is the
SDK of Mnema Talk 3.1.1 (`sdk/typescript`, attached to its releases as
`mnema-talk-sdk-3.1.1.tgz`), now in its own repository with its history. The
API is unchanged; the package name and the imports change to
`@mnema-xyz/bot-sdk`. The User-Agent and the gateway's IDENTIFY properties
still say `mnema-talk-sdk`.
