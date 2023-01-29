/* eslint-disable */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const params = {
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@components": path.resolve(__dirname, "src/components/")
        }
    }
};

export default defineConfig(params);
