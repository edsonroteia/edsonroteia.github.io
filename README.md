Credit goes to Jon Barron's public academic website: https://jonbarron.info/. Feel free to clone this code for your own personal use.

## Analytics

This site uses Cloudflare Web Analytics, which is free and shows page views, visitors, and country-level traffic in the Cloudflare dashboard.
The token is public client-side configuration, not a secret. This tracks visits to pages that load `analytics.js`; direct PDF or image file hits are not counted by this JavaScript tracker.

To update the analytics token:

1. In the Cloudflare dashboard, go to Web Analytics and add `edsonroteia.github.io` as a site.
2. Copy the token from the JavaScript snippet Cloudflare gives you.
3. In `index.html`, update the `cloudflare-web-analytics-token` meta tag with that token.
4. Deploy the site. Analytics data can take a few minutes to appear.

References:

- https://developers.cloudflare.com/web-analytics/about/
- https://developers.cloudflare.com/web-analytics/get-started/
- https://developers.cloudflare.com/web-analytics/data-metrics/dimensions/
