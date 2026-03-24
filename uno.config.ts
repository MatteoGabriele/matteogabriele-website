import {
  defineConfig,
  presetWind4,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "forced-color-adjust": "preserve-parent-color",
      },
      warn: true,
      scale: 1.2,
    }),
  ],
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
