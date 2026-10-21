/* Copyright Elysia © 2025. All rights reserved */

import { APIMessage, MessageType } from "discord-api-types/v10";
import probe from "probe-image-size";
import Constants from "src/AppCore/Constants";

export async function GetSystemMessage () {
    let result;
    const urlSponsors = "https://raw.githubusercontent.com/aiko-chan-ai/aiko-chan-ai/refs/heads/main/sponsors.png";
    try {
        result = await probe(urlSponsors);
    } catch {
        result = {
            width: 1,
            height: 1,
        };
    }
    return [
        // MessageData
        {
            id: "1000000000000000000",
            // https://docs.discord.food/resources/message#message-type
            type: 47 as MessageType, // CHANGELOG => Disable Message Forwards
            channel_id: Constants.ChannelIdDefault,
            author: Constants.UserDefaultPatch,
            attachments: [],
            content: "",
            embeds: [
                {
                    type: "rich",
                    title: `Only download ${Constants.AppName} from its GitHub releases`,
                    description:
                        "### Copies from other sources may be modified to steal your bot token or harm your computer.",
                    color: 16750296,
                    author: {
                        name: "Important Notice",
                        icon_url: "https://i.imgur.com/P4wWwbP.png",
                        proxy_icon_url: "https://i.imgur.com/P4wWwbP.png",
                    },
                    thumbnail: {
                        url: "https://avatars.githubusercontent.com/u/71698422",
                        width: 128,
                        height: 128,
                    },
                },
                {
                    type: "rich",
                    description: `**${Constants.AppName}** is a community-maintained continuation of **DiscordBotClient**, created by **aiko-chan-ai (Elysia)**. Almost everything you see here is their work. <:ElysiaHeart:1190332148868186253>

If you enjoy it, please star the [original project](https://github.com/aiko-chan-ai/DiscordBotClient) and consider [sponsoring its author](https://github.com/sponsors/aiko-chan-ai).

Found a bug or have an idea? Open an issue on the [${Constants.AppName} tracker](https://github.com/${Constants.GithubRepo}/issues).`,
                    color: 16750296,
                    author: {
                        name: `About ${Constants.AppName}`,
                        icon_url: "https://cdn.discordapp.com/emojis/882480441075040257.png",
                        proxy_icon_url: "https://cdn.discordapp.com/emojis/882480441075040257.png",
                    },
                },
                {
                    type: "rich",
                    image: {
                        url: urlSponsors,
                        srcIsAnimated: false,
                        flags: 0,
                        width: result.width,
                        height: result.height,
                    },
                    color: 16750296,
                    timestamp: "2022-11-29T16:56:00.000Z",
                    footer: {
                        text: "Sponsors of DiscordBotClient by aiko-chan-ai",
                        icon_url:
                            "https://cdn.discordapp.com/avatars/1056491867375673424/93fb88f6b8c0a2a33c437d0fff4c6625.png",
                    },
                },
            ],
            mentions: [],
            mention_roles: [],
            pinned: false,
            mention_everyone: false,
            tts: false,
            timestamp: new Date().toISOString(),
            edited_timestamp: null,
            flags: 16,
            components: [
                {
                    type: 1,
                    components: [
                        {
                            type: 2,
                            style: 5,
                            label: Constants.AppName,
                            emoji: {
                                name: "github",
                                id: "889092230063734795",
                            },
                            url: `https://github.com/${Constants.GithubRepo}`,
                        },
                        {
                            type: 2,
                            style: 5,
                            label: "Original project",
                            url: "https://github.com/aiko-chan-ai/DiscordBotClient",
                        },
                        {
                            type: 2,
                            style: 5,
                            label: "Sponsor Elysia",
                            emoji: {
                                name: "Kanna_Heart",
                                id: "882480441075040257",
                            },
                            url: "https://github.com/sponsors/aiko-chan-ai",
                        },
                        {
                            type: 2,
                            style: 5,
                            label: "Report a bug",
                            emoji: {
                                name: "BugHunter_lvl1",
                                id: "873790531887579187",
                            },
                            url: `https://github.com/${Constants.GithubRepo}/issues`,
                        },
                    ],
                },
            ],
        },
    ] as APIMessage[];
}
