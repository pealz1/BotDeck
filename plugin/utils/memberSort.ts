/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

// Pure helpers (no webpack imports) so tests/plugin can load them under Node.

const collator = new Intl.Collator(undefined, { sensitivity: "base", numeric: true });

type NamedUser = { globalName?: string | null; username?: string; } | undefined | null;

/** Name shown in the member list: server nick, then display name, then username. */
export function memberDisplayName(nick: string | null | undefined, user: NamedUser, userId: string): string {
    return nick || user?.globalName || user?.username || userId;
}

/**
 * Returns a new array sorted case-insensitively by display name; ties keep a stable userId order.
 * Keys are computed once per member (#363: rows were sorted by nick only, offline rows not at all).
 */
export function sortByDisplayName<T extends { userId: string; }>(members: readonly T[], getName: (m: T) => string): T[] {
    return members
        .map(m => ({ m, key: getName(m) }))
        .sort((a, b) => collator.compare(a.key, b.key) || (a.m.userId < b.m.userId ? -1 : a.m.userId > b.m.userId ? 1 : 0))
        .map(x => x.m);
}
