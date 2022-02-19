module.exports =
    process.env.NAVIGATEUR === "firefox"
        ? { app: { name: "firefox", arguments: ["-private"] } }
        : { app: { name: "google-chrome", arguments: ["--incognito"] } };
