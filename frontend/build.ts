import { rm } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { build, Glob } from "bun";
import tailwind from "bun-plugin-tailwind";

const outdir = path.join(process.cwd(), "dist");
await rm(outdir, { recursive: true, force: true });

const entrypoints = [...new Glob("src/**/*.html").scanSync()];

const result = await build({
	entrypoints,
	outdir,
	publicPath: "/",
	plugins: [tailwind],
	minify: true,
	target: "browser",
	sourcemap: "linked",
	define: {
		"process.env.NODE_ENV": JSON.stringify("production"),
	},
});

for (const output of result.outputs) {
	process.stdout.write(
		` ${path.relative(process.cwd(), output.path)}  ${(output.size / 1024).toFixed(1)} KB\n`,
	);
}
