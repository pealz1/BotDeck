# Changelog

All notable changes to BotDeck are listed here. Versions follow [Semantic Versioning](https://semver.org).

## [1.0.0] - 2026-10-20

First release of BotDeck, a community-maintained continuation of [DiscordBotClient](https://github.com/aiko-chan-ai/DiscordBotClient) 3.9.3 by aiko-chan-ai. BotDeck installs alongside DiscordBotClient and keeps its own settings, so log in again after installing.

### Highlights

- New name, app ID and update channel: BotDeck updates from [pealz1/BotDeck releases](https://github.com/pealz1/BotDeck/releases).
- Includes the DiscordBotClient v3 rework ([#379](https://github.com/aiko-chan-ai/DiscordBotClient/pull/379)): new Settings window, startup window with retry, sandboxed windows and an Electron integration test suite.
- The BotClient Vencord plugin now lives in this repository (`plugin/`), with its full history, so the app and plugin are versioned together.

### Security

- The local API server only listens on `127.0.0.1` and checks bot tokens with Discord before serving account data ([#383](https://github.com/aiko-chan-ai/DiscordBotClient/issues/383), [#366](https://github.com/aiko-chan-ai/DiscordBotClient/pull/366)); successful checks are cached for 60 seconds ([#384](https://github.com/aiko-chan-ai/DiscordBotClient/pull/384)).
- TLS errors are only accepted for the app's own local certificate instead of globally ([#369](https://github.com/aiko-chan-ai/DiscordBotClient/pull/369)).
- The main window cannot be navigated away from Discord; external links open in your browser ([#368](https://github.com/aiko-chan-ai/DiscordBotClient/pull/368)).

### Fixed

- Message edits longer than 2,000 characters were silently thrown away. The editor now enforces the bot limit and keeps your text ([#386](https://github.com/aiko-chan-ai/DiscordBotClient/issues/386)).
- The "Bot Intents" toast appeared on every reconnect, and two overlapping logins could both be sent ([#364](https://github.com/aiko-chan-ai/DiscordBotClient/issues/364)).
- The member list was not sorted: members without a nickname kept join order and the offline group was never sorted ([#363](https://github.com/aiko-chan-ai/DiscordBotClient/issues/363)).
- Remembered DMs came back without names after a restart ([#317](https://github.com/aiko-chan-ai/DiscordBotClient/issues/317)).
- `/switch guild` now checks the bot is in the server, waits for it to load, and works with a single shard ([#343](https://github.com/aiko-chan-ai/DiscordBotClient/issues/343)).
- `Ctrl` + `=` and `Ctrl` + numpad `+` now zoom in ([#380](https://github.com/aiko-chan-ai/DiscordBotClient/issues/380)).
- No more false "offline" errors on some Linux systems ([#357](https://github.com/aiko-chan-ai/DiscordBotClient/issues/357)); DNS-over-HTTPS falls back to system DNS ([#373](https://github.com/aiko-chan-ai/DiscordBotClient/issues/373)).
- macOS asks for microphone permission ([#333](https://github.com/aiko-chan-ai/DiscordBotClient/issues/333)).
- File uploads up to 20 MB ([#385](https://github.com/aiko-chan-ai/DiscordBotClient/issues/385)).
- A token containing "bot" anywhere could be corrupted at login; only a leading "Bot " prefix is removed now.

### Added

- Each bot's last shard is remembered across restarts ([#231](https://github.com/aiko-chan-ai/DiscordBotClient/issues/231)).
- Server notification settings are kept per bot ([#293](https://github.com/aiko-chan-ai/DiscordBotClient/issues/293)).
- Optional classic Embed Builder, selectable in the BotClient plugin settings ([#372](https://github.com/aiko-chan-ai/DiscordBotClient/issues/372)).
- Clear guidance when privileged intents are off, with a button to your bot's Developer Portal page ([#286](https://github.com/aiko-chan-ai/DiscordBotClient/issues/286)).

### Changed

- Installed builds only log failed API requests, which makes startup lighter on slow disks ([#299](https://github.com/aiko-chan-ai/DiscordBotClient/issues/299)).
- Electron 44, updated dependencies and GitHub Actions.

[1.0.0]: https://github.com/pealz1/BotDeck/releases/tag/v1.0.0
