> Wrapper `jsxDEV` method of `react/jsx-dev-runtime` issue demo.

### How to reproduce?

You need clone project and install deps, and then excute following commands:

```bash
$ yarn dev
```

the project should be running, but translate function in `src/i18n.ts` is invalid... it will be ok if you trigger `hot update` with `/src/App.tsx` just by cmd+s to save file.
