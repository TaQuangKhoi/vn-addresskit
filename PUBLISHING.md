# Publishing Guide

This guide explains how to publish `vn-addresskit` to npm and JSR.

## Prerequisites

### For npm
- An npm account (sign up at https://www.npmjs.com/signup)
- npm CLI installed (comes with Node.js)

### For JSR
- A JSR account (sign up at https://jsr.io)
- JSR CLI installed

## Publishing to npm

### 1. Prepare for Publishing

First, ensure you're logged in to npm:

```bash
npm login
```

### 2. Build the Project

Build the project to generate the distribution files:

```bash
pnpm run build
```

This will create the `dist/` directory with compiled JavaScript files.

### 3. Test the Package Locally (Optional)

Before publishing, you can test the package locally:

```bash
# Pack the package
npm pack

# This creates a .tgz file that you can install in another project
npm install /path/to/vn-addresskit-0.1.0.tgz
```

### 4. Publish to npm

```bash
npm publish
```

If you're publishing a scoped package (e.g., `@your-username/vn-addresskit`), use:

```bash
npm publish --access public
```

### 5. Verify the Publication

Visit your package page: `https://www.npmjs.com/package/vn-addresskit`

## Publishing to JSR

JSR (JavaScript Registry) is a modern package registry for JavaScript and TypeScript.

### 1. Install JSR CLI

```bash
npm install -g @jsr/cli
```

Or use npx:

```bash
npx jsr publish
```

### 2. Login to JSR

```bash
jsr login
```

### 3. Update jsr.json

The `jsr.json` file should already be configured with:

```json
{
  "name": "@taquangkhoi/vn-addresskit",
  "version": "0.1.0",
  "exports": "./src/index.ts"
}
```

Update the scope (`@taquangkhoi`) to your JSR username if needed.

### 4. Publish to JSR

```bash
jsr publish
```

### 5. Verify the Publication

Visit your package page: `https://jsr.io/@taquangkhoi/vn-addresskit`

## Version Management

### Updating Version

Before publishing a new version, update the version number in both:

1. `package.json`
2. `jsr.json`

Use semantic versioning (semver):
- **Patch** (0.1.0 → 0.1.1): Bug fixes
- **Minor** (0.1.0 → 0.2.0): New features (backward compatible)
- **Major** (0.1.0 → 1.0.0): Breaking changes

You can use npm's version command:

```bash
# Patch release
npm version patch

# Minor release
npm version minor

# Major release
npm version major
```

This will automatically update `package.json` and create a git tag.

## Pre-publish Checklist

Before publishing, ensure:

- [ ] All tests pass (when tests are added)
- [ ] Build completes without errors (`pnpm run build`)
- [ ] `README.md` is up to date
- [ ] Version numbers are updated in both `package.json` and `jsr.json`
- [ ] Changes are documented
- [ ] Code is linted and formatted
- [ ] Examples work correctly

## CI/CD Publishing (Future)

Consider setting up automated publishing with GitHub Actions:

1. Create `.github/workflows/publish.yml`
2. Add npm and JSR tokens as GitHub secrets
3. Trigger publishing on new tags or releases

Example workflow:

```yaml
name: Publish Package

on:
  release:
    types: [created]

jobs:
  publish-npm:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      - run: pnpm install
      - run: pnpm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

  publish-jsr:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npx jsr publish
        env:
          JSR_TOKEN: ${{ secrets.JSR_TOKEN }}
```

## Troubleshooting

### npm publish fails with "package already exists"

- Increment the version number in `package.json`
- Or unpublish the previous version (only within 72 hours): `npm unpublish vn-addresskit@0.1.0`

### Build files not included in package

- Check `.npmignore` to ensure `dist/` is not excluded
- Verify `files` field in `package.json` includes `"dist"`

### JSR publish fails

- Ensure `jsr.json` is properly configured
- Check that you're logged in: `jsr whoami`
- Verify your package name is available

## Support

For issues or questions:
- GitHub Issues: https://github.com/TaQuangKhoi/vn-addresskit/issues
- npm package: https://www.npmjs.com/package/vn-addresskit
- JSR package: https://jsr.io/@taquangkhoi/vn-addresskit
