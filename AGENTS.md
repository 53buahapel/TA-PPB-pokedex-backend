# Repository Guidelines

## Project Structure & Module Organization
- Code lives in `src/`; `main.ts` boots the Nest application and `app.module.ts` wires controllers/services (`app.controller.ts`, `app.service.ts`). Add new modules under `src/<feature>` and register them in `app.module.ts` or feature modules.
- Unit tests sit beside sources as `*.spec.ts` (see `src/app.controller.spec.ts`). End-to-end tests are in `test/` with `jest-e2e.json` config.
- Build artifacts output to `dist/` (ignored by Git). Configuration lives in `tsconfig*.json` and `nest-cli.json`.

## Build, Test, and Development Commands
```bash
npm run start           # start in dev mode (no watch)
npm run start:dev       # start with watch reload
npm run start:debug     # start with watch + inspector
npm run build           # compile to dist/
npm run test            # unit tests via Jest
npm run test:e2e        # e2e tests (Supertest)
npm run test:cov        # coverage report to coverage/
npm run lint            # ESLint with auto-fix
npm run format          # Prettier on src/ and test/
```

## Coding Style & Naming Conventions
- Language: TypeScript, 2-space indentation (respect prettier defaults). Favor `const` and explicit return types for public APIs.
- Controllers/Services: use PascalCase class names (`PokedexService`), camelCase methods, and `@Injectable()` services.
- DTOs/Interfaces: place near feature code; suffix DTOs with `Dto`. Keep file names kebab-case (`pokedex.service.ts`).
- Run `npm run lint` and `npm run format` before commits; do not hand-edit `dist/`.

## Testing Guidelines
- Unit specs match source file names with `.spec.ts` suffix. Mock external calls; keep tests fast and deterministic.
- E2E tests live in `test/` and hit the HTTP interface; extend `app.e2e-spec.ts` or add new `*.e2e-spec.ts` files. Keep Supertest chains readable and assert status + shape.
- Aim for coverage at least matching current `npm run test:cov` output; prefer covering controllers and services for new features.

## Commit & Pull Request Guidelines
- Commits: use clear, imperative subjects (`Add pokedex module`, `Fix validation pipe`) and group related changes. Keep scope focused; avoid committing generated files.
- Pull requests: describe intent and approach, list testing performed (`npm run test`, `npm run test:e2e`, lint/format), and mention related issues. Add screenshots only if changing HTTP responses/docs.

## Security & Configuration Tips
- Do not commit secrets; prefer environment variables (`.env` not tracked). When adding config, use Nest ConfigModule patterns and validate inputs.
- Validate incoming data with `class-validator` on DTOs; reject broad `any` types and ensure pipes guard endpoints.
