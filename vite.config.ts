// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force Nitro to build a standalone Node.js server instead of a Cloudflare Worker.
  // Output goes to .output/server/index.mjs — run with `node .output/server/index.mjs`.
  // Note: inside Lovable's managed build the Cloudflare preset is forced; this override
  // takes effect on your own CI / self-hosted builds.
  nitro: {
    preset: "node-server",
  },
});
