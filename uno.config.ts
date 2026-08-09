import {
  defineConfig,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'forced-color-adjust': 'preserve-parent-color',
      },
      warn: true,
      scale: 1.2,
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    font: {
      mono: "'Fraunces', serif",
      sans: "'Sora', sans-serif",
    },
    colors: {
      mg: {
        bg: 'var(--bg)',
        card: 'var(--card)',
        border: 'var(--border)',
        'border-light': 'var(--border-light)',
        text: 'var(--text)',
        muted: 'var(--text-muted)',
        primary: 'var(--primary)',
        'on-primary': 'var(--on-primary)',
        accent: 'var(--accent)',
      },
    },
  },
})
