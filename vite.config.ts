import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import {execSync} from "child_process"

import jassm from "@d1vij/jassm/plugin";
import {visualizer} from "rollup-plugin-visualizer"

const __BUILD_HASH__ = JSON.stringify(execSync("git rev-parse --short HEAD").toString().trim())

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
    base: '/',
    server: {
        host: true,
        allowedHosts: true
    },
    define: {
        __BUILD_HASH__,
        "process.env.NODE_ENV":"'production'"
    },
    css: {
        devSourcemap: true,
    },
    build: {
        //sourcemap: true,
          
        minify: "esbuild",
        license: true,
        // rolldownOptions: {
        //     treeshake: true,
        //     logLevel:"info",
        //     optimization: {
        //         inlineConst:{mode:"all", "pass":1}
        //     }}
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    plugins: [
        jassm({
            development: mode !== "production",
            outputFormat: "program",
            jsxImportSource: "react",
        }),
        visualizer({
            open: false,
            filename: "dist/stats.html",
            gzipSize: true,
        }),
        tailwindcss({
            optimize: {minify: true}
        }),
        tanstackRouter({
            verboseFileRoutes: true,
            autoCodeSplitting: true,
        }),
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
    ],
}));
