# `imports` Impact on Emit

When using indirection via `imports` to import another file, the imported file
is missing from the emit.

```
rm -rf dist && tsc
```

* `direct.js` is emitted (even though it's not in `files`).
* `indirect.js` is _not_ emitted even though it's referenced from `main.ts`.
