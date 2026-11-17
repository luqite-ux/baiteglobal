import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  {
    files: ['components/inquiry-captcha-field.tsx', 'components/reveal.tsx', 'components/ui/carousel.tsx', 'components/ui/use-mobile.tsx', 'hooks/use-mobile.ts'],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  {
    files: ['components/reveal.tsx'],
    rules: {
      'react-hooks/refs': 'off',
    },
  },
  {
    files: ['components/ui/sidebar.tsx'],
    rules: {
      'react-hooks/purity': 'off',
    },
  },
  {
    files: ['lib/products-db.ts'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  globalIgnores(['.next/**', 'next-env.d.ts']),
])
