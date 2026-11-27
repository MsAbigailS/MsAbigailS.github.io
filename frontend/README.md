# Portfolio development

Run these commands from the repository root. Install mise first. The container workflow also requires Docker with Compose and a running Docker engine.

```sh
mise install
mise setup
```

Run setup in an interactive terminal. It installs the locked dependencies, runs `bun audit` and `bun outdated`, then opens `bun update --interactive` so you can choose upgrades. Audit findings stay visible while you review updates. Setup installs the Chromium build required by the resulting Playwright version.

| Command                                         | Purpose                                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------------ |
| `mise start`                                    | Build and start the local frontend container at <http://localhost:8080>. |
| `docker compose stop`                           | Stop the local container.                                                |
| `mise lint`                                     | Run Biome, TypeScript, and Knip.                                         |
| `mise test`                                     | Run the Storybook tests in headless Chromium.                            |
| `mise exec -- bun run --cwd frontend storybook` | Start Storybook at <http://localhost:6006>.                              |
| `mise build`                                    | Build the static portfolio into `frontend/dist-vite/`.                   |
| `mise audit-deps`                               | Check locked dependencies for published security advisories.             |

## Import paths

Use `@/` for modules under `src/` and `@styles/` for shared stylesheets under `styles/`. Define new aliases in `tsconfig.json` under `compilerOptions.paths`. Bun, Vite, Storybook, and Vitest read those mappings.

```tsx
import { Button } from "@/components/ui/button.tsx";
import "@styles/globals.css";
```

## Tailwind CSS

Use Tailwind v4 utility classes in components and stories under `src/`. The portfolio and Storybook share the theme in `styles/globals.css`, including the shadcn color tokens and dark variant. Keep portfolio-specific layout and background styles in `src/index.css`.

| Design token  | Utilities                                                                   | Usage                                                                                   |
| ------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Page spacing  | `px-gutter`, `py-section`                                                   | Responsive page gutters and vertical section padding                                    |
| Content width | `max-w-content`, `max-w-reading`                                            | An 82.5rem page column or a 65ch reading column                                         |
| Font family   | `font-sans`, `font-inter`, `font-serif`, `font-mono`                        | Geist (default), Inter, Newsreader, and JetBrains Mono for code, respectively.          |
| Type sizes    | `text-body`, `text-heading`, `text-display`                                 | Body copy, section headings, and page titles, each with its own line height             |
| Theme colors  | `bg-background`, `text-foreground`, `bg-primary`, `text-primary-foreground` | Pair each surface with its foreground. Apply `.dark` to an ancestor to switch palettes. |

Edit spacing, content widths, and type sizes in `tailwind.config.ts`. The shared stylesheet loads this config with `@config` and exposes the values to plain CSS, for example `var(--spacing-gutter)`. Edit the light and dark palettes in `styles/globals.css`.

## Codex CLI

Launch the project-managed CLI with `mise exec -- codex` and follow the first-run sign-in prompt. To use the bare `codex` command in your current zsh session, activate mise first.

```sh
eval "$(mise activate zsh)"
codex
```
