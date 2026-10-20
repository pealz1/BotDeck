/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

// No imports, so tests/plugin can load it under Node.

/**
 * Converts a UserGuildSettingsStore entry back to the gateway's user_guild_settings shape (#293).
 * The store keys entries by guild id ("null" for DMs), may omit guild_id, and keys channel_overrides
 * by channel id; the gateway sends an array, and CategoryCollapseStore iterates it with for..of.
 */
export function toWireGuildSettings(key: string, settings: Record<string, any>) {
    return {
        ...settings,
        guild_id: key === "null" ? null : key,
        channel_overrides: Object.values(settings.channel_overrides ?? {}),
    };
}
