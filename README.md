# Syncronicity site snapshot

A static snapshot of the publicly available Syncronicity website, prepared for a GitHub repository. The site files are in `dist/`; each page has an `index.html` in its own directory.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000 --directory dist
```

Visit <http://localhost:8000>. No build step or package installation is required.

## Put it on GitHub

Create an empty repository on GitHub, then run these commands in this directory (replace the URL):

```sh
git init -b main
git add .
git commit -m "Add site snapshot"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Do not initialize the GitHub repository with a README if using these commands.

## Deploy

For Netlify, connect the repository and set the publish directory to `dist`, with no build command. `netlify.toml` supplies these settings. You can also drag the `dist` folder into Netlify Drop. Other static hosts should serve `dist` as the site root and resolve directory URLs to `index.html`.

## Migration status

This repository contains the static site snapshot in `dist/`. Obsolete Squarespace component/runtime script and component stylesheet references have been removed, and links to the former live domain are now relative. The main site stylesheet remains external temporarily for visual fidelity and will be localized or replaced during the asset migration.

Content media is being migrated from the original Squarespace CDN to the Cloudflare R2 bucket `syncronicity-site-media`. Once the managed `r2.dev` endpoint is available, image and media URLs in `dist/` will be rewritten to the R2 URLs and verified.

This is a static snapshot, not the original Squarespace source project. Review source rights, analytics, forms, and links before publishing under a new domain.