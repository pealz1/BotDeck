import assert from "node:assert/strict";
import { test } from "node:test";

import { memberDisplayName, sortByDisplayName } from "../../plugin/utils/memberSort";

const users: Record<string, { globalName?: string | null; username: string; }> = {
    "1": { username: "zed" },
    "2": { globalName: "Bob", username: "aaa" },
    "3": { username: "alice" },
    "4": { username: "carol" },
    "5": { username: "alice" },
};
const members = [
    { userId: "1", nick: "Anna" },
    { userId: "2", nick: "" },
    { userId: "4", nick: null },
    { userId: "5", nick: null },
    { userId: "3", nick: null },
];
const name = (m: { userId: string; nick: string | null; }) => memberDisplayName(m.nick, users[m.userId], m.userId);

test("display name prefers nick, then global name, then username, then id", () => {
    assert.equal(memberDisplayName("Nick", { globalName: "G", username: "u" }, "9"), "Nick");
    assert.equal(memberDisplayName("", { globalName: "G", username: "u" }, "9"), "G");
    assert.equal(memberDisplayName(null, { globalName: null, username: "u" }, "9"), "u");
    assert.equal(memberDisplayName(null, undefined, "9"), "9");
});

test("members sort case-insensitively by display name with a stable id tie-break", () => {
    const before = members.map(m => m.userId);
    const sorted = sortByDisplayName(members, name).map(m => m.userId);
    // alice(3), alice(5), Anna(1), Bob(2 via globalName), carol(4)
    assert.deepEqual(sorted, ["3", "5", "1", "2", "4"]);
    assert.deepEqual(members.map(m => m.userId), before, "input is not mutated");
});
