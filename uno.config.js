import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    {
      outfit:
        "url(https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap)",
    },
  ],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      slate300: "hsl(212, 45%, 89%)",
      slate500: "hsl(216, 15%, 48%)",
      slate900: "hsl(218, 44%, 22%)",
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        outfit: "Outfit",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
