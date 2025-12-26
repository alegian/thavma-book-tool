vim.lsp.config("tailwindcss", {
	settings = {
		tailwindCSS = {
			experimental = {
				configFile = "./app/globals.css",
			},
			classAttributes = { "className", "cn" },
		},
	},
})
