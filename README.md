# Accbase Advisory — website

Astro static site. 20 pages, Markdown blog, browser-based admin for publishing articles.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Deploying to Vercel (about 20 minutes, once)

1. **Push to GitHub.**
   ```bash
   git init && git add -A && git commit -m "Initial site"
   git remote add origin https://github.com/YOUR-USERNAME/accbase-advisory.git
   git push -u origin main
   ```

2. **Import to Vercel.** vercel.com → Add New → Project → pick the repo. Vercel detects Astro and fills in the build settings itself. No config file needed. Every push to `main` deploys automatically.

3. **Point the domain.** Vercel → Project → Settings → Domains → add `accbaseadvisory.com` and `www.accbaseadvisory.com`. Vercel shows you the exact A record and CNAME to set at your registrar. HTTPS is automatic.

4. **Turn on the contact form.** The form posts to Web3Forms, which works on any host and is free. Go to web3forms.com, enter `info@accbaseadvisory.com`, and it emails you an access key. Paste it into `src/pages/contact.astro` replacing `YOUR-WEB3FORMS-ACCESS-KEY`. Submissions then arrive as email, and `/thanks/` is the confirmation page.

   If you would rather have the submissions land somewhere structured, Formspree gives you a dashboard on a paid tier. Same one-line swap.

5. **Enable the admin.** Sveltia CMS talks to GitHub directly, so it needs a GitHub OAuth app plus a tiny auth endpoint:

   - GitHub → Settings → Developer settings → OAuth Apps → New OAuth App. Homepage URL `https://www.accbaseadvisory.com`, callback URL `https://YOUR-AUTH-WORKER.workers.dev/callback`. Note the client ID and secret.
   - Deploy `sveltia-cms-auth` to Cloudflare Workers (free). The repo is at github.com/sveltia/sveltia-cms-auth and has a one-click deploy button. Set `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` and `ALLOWED_DOMAINS` as worker secrets.
   - In `public/admin/config.yml`, replace `YOUR-GITHUB-USERNAME` and set `base_url` to your worker URL.

   After that, `accbaseadvisory.com/admin/` gives you a login and a rich-text editor. Publishing commits to GitHub, and Vercel redeploys in about 30 seconds.

   **If step 5 feels like more setup than it's worth:** skip it entirely. Write posts as Markdown files in `src/content/insights/`, commit, push. Since you're comfortable with GitHub that may genuinely be faster than clicking through an admin UI, and you can always add the CMS later.

## Publishing an article

Go to `/admin/`, log in, click "New Insights article". Fill in the title, meta description (this is what Google shows), date, category, and body. Leave **Draft** on while you're working; switch it off to publish.

You can also write posts directly as Markdown files in `src/content/insights/` if you prefer.

## Where to change things

| What | File |
|---|---|
| Colours, typography, spacing | `src/styles/global.css` |
| Service and industry page content | `src/data/site.js` |
| Homepage copy and section order | `src/pages/index.astro` |
| Navigation links | `src/components/Header.astro` |
| Contact details, footer links | `src/components/Footer.astro` |
| Contact form fields | `src/pages/contact.astro` |
| Domain (for canonical URLs and sitemap) | `astro.config.mjs` |

## Still to do before launch

- Replace the two founder placeholders in `src/pages/about.astro` with real names, roles, bios, and add photos to `public/uploads/`
- Swap the SVG logo in `src/components/Header.astro` and `public/favicon.svg` for the real logo file
- Have a professional review `src/pages/privacy.astro` and `src/pages/terms.astro`, then remove the draft notices
- Add proof points wherever you have them: client count, years of combined experience, a testimonial
- Register the domain with Google Search Console and submit `https://www.accbaseadvisory.com/sitemap-index.xml`
