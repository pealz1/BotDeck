# Contributing to BotDeck

Thanks for helping. Bug reports, ideas and pull requests are all welcome.

## Reporting bugs and asking for features

- Search [existing issues](https://github.com/pealz1/BotDeck/issues) first.
- Use the [bug report](https://github.com/pealz1/BotDeck/issues/new?template=bug-report.yml) or [feature request](https://github.com/pealz1/BotDeck/issues/new?template=feature-request.yml) form.
- Questions and general discussion go in [Discussions](https://github.com/pealz1/BotDeck/discussions).
- **Never post a bot token**, private messages or user IDs. If a token leaks, reset it in the Developer Portal right away.
- Security problems go through [private reporting](SECURITY.md), not public issues.

## Project layout

| Path | What it is |
| --- | --- |
| `src/AppCore` | Electron main process: windows, IPC, the local HTTPS API server and its routes (`routes/`, where `#id` becomes `:id`). |
| `src/Renderer/Settings` | The Settings window (React). |
| `src/shared/Settings.ts` | Settings schema shared by the main process and the Settings window. |
| `plugin/` | The BotClient Vencord plugin that patches the Discord client for bot accounts. It is copied into `Vencord/src/userplugins/botClient` at build time; always edit `plugin/`. |
| `assets/snapshot` | The Discord web shell and experiment snapshots. |
| `scripts/` | Dependency checkout, Vencord/Discohook builds and snapshot updates. Pinned revisions live in `scripts/build-dependencies.json`. |
| `tests/` | Electron integration tests (`tests/fixtures`) and plugin unit tests (`tests/plugin`). |

## Development setup

You need Node.js 24 and Git.

```sh
git clone https://github.com/pealz1/BotDeck.git
cd BotDeck
npm run requirement   # npm ci + pinned Vencord and Discohook checkouts
npm run build:deps    # build Vencord (with plugin/) and the message editor
npm run build:ts      # build the app
npm start             # run it
```

After changing `plugin/`, run `npm run vencord` again to rebuild the extension.

## Before opening a pull request

```sh
npm run typecheck
npm run lint
npm test              # Electron integration tests (Windows) + plugin unit tests
```

To type-check the plugin against the pinned Vencord, run `npx tsc --noEmit` inside `Vencord/` after `npm run vencord`.

Guidelines:

- Keep pull requests focused: one fix or feature per PR.
- Follow the existing code style; ESLint enforces most of it.
- Add a test when you fix logic that can be tested without a live bot (see `tests/plugin`).
- Webpack patches in `plugin/` must match Discord's current build exactly once. Say in the PR which Discord build you tested against.
- Explain how you tested, including anything you could only check with a live bot.
- Use [Conventional Commits](https://www.conventionalcommits.org) for commit messages, for example `fix(plugin): ...` or `feat: ...`.

By contributing, you agree that your work is licensed under the [GPL-3.0](LICENSE).

## Releasing (maintainers)

1. Update `version` in `package.json` and add the release notes to `CHANGELOG.md`.
2. Commit, then tag and push: `git tag v1.2.3 && git push origin main v1.2.3`.
3. The [Build and release](.github/workflows/build.yml) workflow builds Windows, macOS and Linux, runs the checks, and creates a **draft** release with the installers and update files.
4. Review the draft, paste the changelog entry, and publish it. Installed apps update from published releases only.
