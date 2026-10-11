# AGENTS.md

## Project

- Node.js package.
- Built with: Vite, React, Playwright.
- Language: TypeScript.

## Package manager

- Use `npm` for this workspace. The lockfile is `package-lock.json`.
- Run package scripts with `npm run <script>`.

## Commands

```bash
npm run lint         # run linter
```

## Architecture

- Project: portfolio-justin-aran.
- Uses Vite for dev server and bundling.

## Source entry points

- `src/App.tsx` (124 lines).
- `index.html` (60 lines) — ES module script, loads scripts.

## Runtime assets and packaging

- `dist/` is ignored, so build before launching, testing, or packaging.
- TypeScript uses module `ESNext`, target `ES2022`, strict mode.

## Related instruction files

- Also check `CLAUDE.md`, `DESIGN.md` when the task touches matching tooling or design behavior.

## Key Conventions

- Components use JSX/TSX; prefer functional components.

## Comment style

- Never place comments on the first two lines of a source file; start with imports or declarations.
- Prefer concise section headings such as `// ── Constants ──` or a three-line banner for major sections so files remain easy to scan.
- Use JSDoc blocks only when an API, intent, edge case, or constraint needs explanation; do not restate the code.

## Caveats

- No test runner configured — no `test` script or test config found.

## Unused or duplicate files

- `eslint.config.js` — not referenced in `index.html`.

## Boundaries

- Prefer existing local patterns and helper APIs before adding new abstractions.
- Keep generated, packaged, and runtime asset boundaries intact; do not move files across host/webview ownership without updating build and packaging config.
