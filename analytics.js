(function () {
  var tokenMeta = document.querySelector('meta[name="cloudflare-web-analytics-token"]');

  if (!tokenMeta) {
    return;
  }

  var token = (tokenMeta.getAttribute('content') || '').trim();

  if (!token || token === 'REPLACE_WITH_CLOUDFLARE_WEB_ANALYTICS_TOKEN') {
    return;
  }

  var script = document.createElement('script');
  script.defer = true;
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.setAttribute('data-cf-beacon', JSON.stringify({ token: token }));
  document.head.appendChild(script);
}());
