import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        brand: {
          cyan: '#38bdf8',
          emerald: '#10b981',
          indigo: '#6366f1',
          violet: '#8b5cf6',
        }
      },
      boxShadow: {
        'neu-flat': '6px 6px 12px #070a10, -6px -6px 12px #0f1624',
        'neu-pressed': 'inset 4px 4px 8px #070a10, inset -4px -4px 8px #0f1624',
        'neu-glow': '0 0 20px rgba(56, 189, 248, 0.25)',
        'neu-light-flat': '5px 5px 10px #d1d5db, -5px -5px 10px #ffffff',
        'neu-light-pressed': 'inset 3px 3px 6px #d1d5db, inset -3px -3px 6px #ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
