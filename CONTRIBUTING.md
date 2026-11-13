# Contributing

Thanks for helping. Bug reports, fixes and docs are welcome; for a new feature,
please open an issue first, since the SDK follows what the Mnema Talk server offers.

## Setup

```sh
git clone https://github.com/mnema-xyz/bot-sdk-js.git
cd bot-sdk-js
npm ci
npm --prefix tools/lint ci   # the linter has its own dependencies
npm run check                # lint, typecheck, build, tests, pack
```

Node 24 or newer. The tests run the TypeScript sources directly; they need no
network and no server. The contract tests against a real server are described
in the README (Contract tests); CI runs them on every pull request.

## Rules

- **No runtime dependencies.** The SDK uses what Node ships.
- **Limits** (ESLint enforces them): files 400 lines, test files 800,
  functions 80 lines, cognitive complexity 15. Split code rather than raising a limit.
- **Behaviour tests.** Test what a bot sees (requests, frames, events), not internals.
- **Commits** follow [Conventional Commits](https://www.conventionalcommits.org)
  (`fix:`, `feat:`, `docs:`, `ci:`, ...). Pull requests are squash-merged once CI is green.
- English only, in code, comments and docs.

## Releases

A release is a pull request that bumps `version` in `package.json` and
`VERSION` in `src/version.ts` (a test keeps them equal) and adds the
`CHANGELOG.md` entry. When it is merged, the publish workflow notices the new
version, runs the checks, publishes it to npm with provenance (trusted
publishing, no token), and creates the tag `vX.Y.Z` and its GitHub release.

## License

By contributing you agree that your contribution is licensed under the
[AGPL-3.0](LICENSE).
