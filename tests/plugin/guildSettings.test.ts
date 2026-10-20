import assert from "node:assert/strict";
import { test } from "node:test";

import { toWireGuildSettings } from "../../plugin/utils/guildSettings";

test("store entries become gateway user_guild_settings entries", () => {
    const wire = toWireGuildSettings("123", { muted: true, channel_overrides: { 9: { channel_id: "9", muted: true } } });
    assert.equal(wire.guild_id, "123");
    assert.equal(wire.muted, true);
    assert.deepEqual(wire.channel_overrides, [{ channel_id: "9", muted: true }]);
    assert.equal(toWireGuildSettings("null", {}).guild_id, null, "DM settings use guild_id null");
    assert.deepEqual(toWireGuildSettings("1", {}).channel_overrides, []);
});
