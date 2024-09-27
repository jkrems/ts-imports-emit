# `imports` Impact on Emit

When using indirection via `imports` to import another file, the imported file
is missing from the emit.

```
rm -rf dist && npx tsc
```

- `direct.js` is emitted (even though it's not in `files`).
- `indirect.js` and `indirect.b.js` are _not_ emitted even though they are referenced from `main.ts`.
