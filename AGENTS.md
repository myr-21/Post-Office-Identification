<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Vercel Deployment & Nitro Build Rules
When modifying build configurations or preparing for deployment, always adhere to the following:
1. **Never commit build output:** The `.vercel` directory must NEVER be checked into Git. Always ensure `.vercel` is in `.gitignore`, `.prettierignore`, and `eslint.config.js` (ignores array). Committing build output breaks Vercel's caching and pipeline.
2. **TanStack Start & external dependencies:** When deploying a TanStack Start (Nitro) app on Vercel, some transitive packages (like `tslib`) might be incorrectly externalized by Nitro but dropped by Vercel because they aren't explicitly declared in `dependencies`. Always ensure `tslib` is explicitly in `ssr.noExternal: ["tslib"]` in `vite.config.ts` (under `vite: { ssr: { noExternal: [...] } }`), AND installed in `package.json` dependencies if necessary.
