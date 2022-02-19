const navigateur = require("./navigateur.config");

module.exports = {
    mode: "development",
    devServer: {
        static: "./dist",
        open: navigateur,
    },
};
