/* eslint-env jest */

require("dotenv").config({ path: "test.env" });

const crypto = require("crypto");
const cache = require("./cache");

const sleep = m => new Promise(r => setTimeout(r, m));

describe("cache.oauth", () => {
  it("stores a retrivable auth token", async () => {
    const token = crypto.randomBytes(4).toString("hex");
    const key = cache.oauth.put("oauth_test", 5, token);
    const retrv = await cache.oauth.get("oauth_test", key);
    expect(retrv).toBe(token);
  });

  it("times out old tokens", async () => {
    const token = crypto.randomBytes(4).toString("hex");
    const key = cache.oauth.put("oauth_test", 1, token);
    await sleep(1100); // wait 1.1s for the 1s key to timeout
    const retrv = await cache.oauth.get("oauth_test", key);
    expect(retrv).toBe(null);
  });
});

describe("cache.userdata", () => {
  it("will store data about a user", async () => {
    const userdata = { login: "andrewsosa", name: "Andrew Sosa" };
    cache.userdata.put(userdata.login, 5, userdata);
    const retrv = await cache.userdata.get(userdata.login);
    expect(retrv).toEqual(userdata);
  });

  it("times out old userdata", async () => {
    const userdata = { login: "andrewsosa", name: "Andrew Sosa" };
    cache.userdata.put(userdata.login, 1, userdata);
    await sleep(1100);
    const retrv = await cache.userdata.get(userdata.login);
    expect(retrv).toEqual(null);
  });
});

beforeAll(() => {
  cache.open();
});

afterAll(() => {
  cache.close();
});
