const navigateur = require("./navigateur.config");

const mode =
    process.env.NODE_ENV === "production" ? "production" : "development";
module.exports = {
    mode,
    devtool: "source-map",
    devServer: {
        static: "./dist",
        open: navigateur,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};
