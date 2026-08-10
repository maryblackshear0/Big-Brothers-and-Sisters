# Big Brothers and Sisters Program Website

A free, mobile-friendly charity website for your mentorship program.

## Customize Your Website

Open `charity.js`. Everything you need to change is in the `const charity = { ... }` section:

- Program name and tagline
- Headline and description
- What you need support with
- Impact statements
- Donation button/link
- Footer text

## Add Your Flyer Image

Place your charity flyer image at `assets/charity-flyer.jpg`. This will display in the hero section.

## Put it online for free

The easiest option is GitHub Pages:

1. In your repository, open **Settings → Pages**
2. Choose "Deploy from a branch"
3. Select the **main** branch and save
4. GitHub will give you a free website address

To update your site later, edit `charity.js`, commit the change, and the live site will update automatically.

## Connect to Your Custom Domain

To connect `www.BigBro&Sis.com`:

1. In your domain registrar, set up a CNAME record pointing to `maryblackshear0.github.io`
2. In repository Settings → Pages, add your custom domain
3. GitHub will handle the SSL certificate

## Important

This starter site does not process donations itself. The Donate button sends visitors to the link in `donateUrl`. Replace that with your official donation page (Venmo, PayPal, GoFundMe, etc.).

---

Built with ❤️ to support mentorship and youth development.