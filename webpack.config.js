const navigateur = require("./navigateur.config");

module.exports = {
    mode: "development",
    devtool: false,
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
