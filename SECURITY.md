# Security policy

## Supported versions

Only the [latest release](https://github.com/pealz1/BotDeck/releases/latest) receives security fixes.

## Reporting a vulnerability

Please **do not** open a public issue for security problems.

Report them privately through GitHub: go to the [Security tab](https://github.com/pealz1/BotDeck/security) and choose **Report a vulnerability**, or use [this link](https://github.com/pealz1/BotDeck/security/advisories/new).

Include:

- what an attacker can do, and what they need (local access, same network, a malicious page, ...);
- steps to reproduce, ideally with a proof of concept;
- the BotDeck version and your operating system.

Never include a real bot token. Use a throwaway test bot if you need one.

You should get a reply within 7 days. Once a fix is released, the advisory is published and you are credited unless you ask not to be.

## Scope

In scope: the BotDeck app (`src/`), the BotClient plugin (`plugin/`), the build scripts and the release pipeline.

Out of scope: Discord's own services and client code, Vencord, and problems that need an already compromised computer.

If the issue also affects the original [DiscordBotClient](https://github.com/aiko-chan-ai/DiscordBotClient), please report it there as well.
