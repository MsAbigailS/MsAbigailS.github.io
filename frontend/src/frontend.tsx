/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import React from "react";
import { createRoot, type Root } from "react-dom/client";
import { App } from "@/App.tsx";

const elem = document.getElementById("root");
if (!elem) {
	throw new Error("Missing React mount element #root");
}
const app = (
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
type HotData = { root?: Root };
const hotData = import.meta.hot?.data as HotData | undefined;
const root = hotData?.root ?? createRoot(elem);
if (hotData) {
	hotData.root = root;
}
root.render(app);
