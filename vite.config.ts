import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { tanstackRouter } from "@tanstack/router-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

import jassm from "@d1vij/jassm/plugin";


// https://vite.dev/config/
export default defineConfig(({mode}) => ({
    base: mode === "production" ? "/website/" : "/",
    server: {
        host: true,
        allowedHosts: true
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
