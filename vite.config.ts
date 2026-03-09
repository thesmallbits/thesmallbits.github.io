import { execSync } from "node:child_process";
import path from "node:path";
import jassm from "@d1vij/jassm/plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

function makeEnvCompatible(str: string): string {
    return JSON.stringify(str.trim());
}

let __BUILD_HASH__ = execSync("git rev-parse --short HEAD").toString();

// https://vite.dev/config/
export default defineConfig(({ mode, command }) => {
    // make sure dev mode always gets a new build hash
    // so as to recompute any cached localstorage values
    if (command === "serve") {
        __BUILD_HASH__ = "dev";
    }
    return {
        base: "/",
        server: {
            host: true,
            allowedHosts: true,
        },
        define: {
            __BUILD_HASH__: makeEnvCompatible(__BUILD_HASH__),
            "process.env.NODE_ENV": makeEnvCompatible("production"),
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
                optimize: { minify: true },
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
    };
});
