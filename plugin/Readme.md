## BotClient plugin

The Vencord plugin that lets the Discord web client log in with a **bot account**. It is part of [BotDeck](https://github.com/pealz1/BotDeck) and is based on [VencordDBCPlugin](https://github.com/aiko-chan-ai/VencordDBCPlugin) by aiko-chan-ai, whose history is kept in this folder.

`npm run vencord` copies this folder into `Vencord/src/userplugins/botClient` and builds Vencord with it. Always edit the files here, not the copy.

### Updating for a new Discord build

1. **Check every patch.** Vencord logs a warning for each patch that no longer matches. Each `find`/`match` must hit exactly once in Discord's current bundle.
2. **Test the features** listed in [DiscordBotClient #183](https://github.com/aiko-chan-ai/DiscordBotClient/issues/183) with a test bot.
3. **Run the checks:** `npm test` (includes `tests/plugin`) and `npx tsc --noEmit` inside `Vencord/`.
