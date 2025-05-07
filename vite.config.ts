import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { resolve } from "path"

export default defineConfig({
	plugins: [react(), dts({ insertTypesEntry: true })],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "UILibrary",
			fileName: (format) => `ui-library.${format}.js`,
			formats: ["es", "umd"],
		},
		rollupOptions: {
			// Ensure external dependencies are not bundled
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
})
