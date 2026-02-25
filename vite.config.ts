import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { tanstackRouter } from "@tanstack/router-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

import jassm from "@d1vij/jassm/plugin";
import {visualizer} from "rollup-plugin-visualizer"

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
    base: '/',
    server: {
        host: true,
        allowedHosts: true
    },
    define: {
        "NODE_ENV": "'production'"
    },
    build: {
        rolldownOptions: {
            treeshake: true
        }
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
            jsxImportSource:"react"
        }),
        visualizer({
            open: false,
            filename:"dist/stats.html"
        }),
        tailwindcss(),
        tanstackRouter({
            autoCodeSplitting: true,
        }),
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
    ],
}));
