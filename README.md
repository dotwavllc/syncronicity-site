# Syncronicity site snapshot

The static site is in `dist/`, with 20 HTML pages and local stylesheets. Content images are served from the Cloudflare R2 bucket `syncronicity-site-media`. The mobile menu and image lightbox use `assets/migration.js`.

## Preview locally

```sh
python3 -m http.server 8000 --directory dist
```

Visit http://localhost:8000. No build step is required.

## Deployment

For Netlify, publish `dist` with no build command; `netlify.toml` supplies these settings. Other static hosts should serve `dist` as the site root and resolve directory URLs to `index.html`.

The site is a static snapshot, not the original Squarespace project. Check forms, external integrations, and the deployed site before switching the live domain.
