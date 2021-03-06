"use strict";
import path from "path";

import ExtractTextPlugin from "extract-text-webpack-plugin";
import autoprefixer from "autoprefixer";

import {PATH} from "./environment";

// Import .env
import env from "./environment";

const IS_DEVELOPMENT = env.get("NODE_ENV") === "development";


export const moduleConfig = {
    rules: [
        {
            oneOf: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.tsx?$/,
                    use: [
                      {
                        loader: "babel-loader"
                      },
                      {
                        loader: "ts-loader"
                      }
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    minimize: !IS_DEVELOPMENT
                                }
                            },
                            {
                                loader: "postcss-loader",
                                options: {
                                    plugins: [autoprefixer()]
                                }
                            },
                            {
                                loader: "sass-loader",
                                options: {
                                    includePaths: ['./node_modules']
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    minimize: !IS_DEVELOPMENT
                                }
                            },
                            {
                                loader: "postcss-loader",
                                options: {
                                    plugins: [autoprefixer()]
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.svg$/,
                    loader: "svg-url-loader"
                }
            ]
        },
        {
            test: require.resolve('zepto'),
            loader: 'exports-loader?window.Zepto!script-loader'
        },
        {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
            }
        },
        // {
        //   test: /\.(png|svg)$/,
        //   loader: 'url-loader?limit=100000',
        //   options: {
        //     name: "./[name].[ext]"
        //   }
        // },
        {
            test: /\.(ttf|eot|woff|woff2)$/,
            loader: 'file-loader',
            options: {
                name: '/fonts/[name].[ext]',
            },
        },
    ]
};
