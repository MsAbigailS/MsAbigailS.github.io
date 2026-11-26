# bun-react-tailwind-shadcn-template

From the repository root, run `mise start` to build the frontend with Vite
and serve it at <http://localhost:8080> through Docker Compose.

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

For Vite development, run `bun run dev:vite` from this directory and open
the URL it prints. If you use the API tester, also run `bun dev` in a second
terminal so Vite can forward `/api` requests to Bun on port 3000.

To build and preview the Vite bundle:

```bash
bun run build:vite
bun run preview:vite
```

Vite writes the production bundle to `dist-vite/`.

To run for production:

```bash
bun start
```

To type check:

```bash
bun check
```

Run `bun fmt` to format the code.

This project was created using `bun init` in bun v1.4.5. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
