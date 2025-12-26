import { defineConfig, globalIgnores } from "eslint/config";
import { dirname } from "path";
import { fileURLToPath } from "url";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwind from "eslint-plugin-tailwindcss";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...tailwind.configs["flat/recommended"],
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    settings: {
      tailwindcss: {
        callees: ["twMerge"],
        classRegex: "^(?:.*(C|c)lass.*|cn)$",
        config: dirname(fileURLToPath(import.meta.url)) + "/app/globals.css",
      },
    },
  },
]);

export default eslintConfig;
