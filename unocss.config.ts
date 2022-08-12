import { presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'
import { defineConfig } from 'unocss/vite'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({ scale: 2.4 }),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        ubuntu: 'Ubuntu:400,500',
        roboto: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
})
