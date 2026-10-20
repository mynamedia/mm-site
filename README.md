# Myna Media website

Static site for Myna Media (myna.media), a design and print studio in Fort Worth, Texas. It's plain HTML, CSS and JavaScript, with no build step.

## What's in here

```
index.html            the whole page
css/style.css         all styles (light + dark mode)
js/main.js            copy-email button, portfolio filters, enlarged image view
images/brand/         wordmark (dark + light versions), bird, favicons
images/hero/          Creative Soul storefront photo + traced sketch layer
images/logos/         logo gallery
images/portfolio/     portfolio gallery (signs, print, web)
.nojekyll             tells GitHub Pages to serve files as-is
```

## Put it on GitHub Pages

1. Create a new repository on GitHub (for example `myna-media-site`). It can be public, or private if your plan allows Pages on private repos.
2. Upload everything in this folder to the root of the repo. On github.com: **Add file → Upload files**, then drag in the contents of this folder (not the folder itself) and commit. Make sure `.nojekyll` comes along. It's a hidden file, so on a Mac press Cmd+Shift+. in Finder to see it. The site works without it too.
3. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, pick `main` and `/ (root)`, and click Save.
4. After a minute or two, the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Use your own domain (myna.media)

1. In **Settings → Pages → Custom domain**, enter `myna.media` and save. GitHub adds a `CNAME` file to the repo.
2. At your domain registrar, point the domain at GitHub Pages:
   - For `myna.media`: add four `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`.
   - For `www.myna.media`: add a `CNAME` record pointing to `<your-username>.github.io`.
3. Once the DNS check passes, tick **Enforce HTTPS**.

DNS changes can take anywhere from a few minutes to a day to take effect. Check GitHub's current Pages docs for the latest IP addresses.

## Editing

- Text lives in `index.html`. Each section is marked with an `id` (`portfolio`, `logos`, `services`, `work`, `process`, `contact`).
- To add a portfolio piece, put the image in `images/portfolio/` and copy one of the `<li data-cat="...">` blocks in the portfolio section. `data-cat` is `signs`, `print` or `web`.
- Brand colors are at the top of `css/style.css` (`--beak` saffron, `--sky` cyan, `--ink`).
