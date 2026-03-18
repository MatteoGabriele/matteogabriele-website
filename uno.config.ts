import {
  defineConfig,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [presetWind4()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    font: {
      mono: "'Roboto', monospace",
    },
    colors: {
      mg: {
        bg: "var(--bg)",
        text: "var(--text)",
      },
    },
  },
});
