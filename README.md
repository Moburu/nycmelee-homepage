# nycmelee-homepage

This is a small Next.js site for NYCMelee.

## Quick start

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available scripts

- `npm run dev` — start Next.js dev server
- `npm run build` — build for production
- `npm run start` — run the production build
- `npm run lint` — run Prettier check and ESLint
- `npm run prettier:format` — auto-format with Prettier
- `npm run prettier:check` — check formatting with Prettier

## Project notes

- Tailwind CSS is used for styling.
- Pre-commit formatting is enabled via Husky and `pretty-quick` (staged files are auto-formatted).
- The site uses the App Router (`app/`) and `next/font` for Google fonts.

## Dev tips

- If you add new top-level folders with JSX/TSX, update `tailwind.config.cjs` `content` to include them.
- To quickly apply formatting and lint fixes locally:

```bash
npm run prettier:format
npm run lint
```

## Contributing

Open a PR against `master`. CI runs Prettier checks — keep commits small and focused.
