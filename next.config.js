const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const srcPath = './src';
const baseUrl = process.env.NEXT_BASE_URL;
const absoluteUrl = process.env.NEXT_PUBLIC_ABSOLUTE_URL;
const parsedAbsoluteUrl = new URL(absoluteUrl);

const domain = `${parsedAbsoluteUrl.protocol}//${parsedAbsoluteUrl.host}`;
const HSTS = parsedAbsoluteUrl.protocol === 'https' ? 'max-age=31536000; includeSubDomains' : undefined;
// const CSP_POLICY = process.env.CSP_POLICY ? process.env.CSP_POLICY : "default-src 'self'";

/**
 * Converts an object into an array of type [{"key", "value"}]. Also erases "undefined" headers.
 */
const convertObjectToHeadersArray = (object) => {
  const headers = Object.keys(object).map((key) => ({ key, value: object[ key ] }));
  return headers.filter((e) => typeof e.value !== 'undefined');
};

const CONFIGURATION = {
  poweredByHeader: false,
  trailingSlash: true,
  basePath: baseUrl,
  env: {
    baseUrl: baseUrl,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [ path.join(__dirname, 'src') ],
  },
  webpack: (config) => {
    config.resolve.alias[ '~' ] = srcPath;
    return config;
  },
};

if (process.env.ADD_HEADERS === '1') {
  CONFIGURATION.headers = async () => {
    return [
      {
        source: '/:path*',
        headers: convertObjectToHeadersArray({
          // 'Content-Security-Policy': CSP_POLICY,
          'Expect-CT': `max-age=604800, enforce, report-uri='${domain}/report'`,
          'Feature-Policy': "autoplay 'none'; camera 'none'",
          'Referrer-Policy': 'no-referrer',
          'Strict-Transport-Security': HSTS,
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'deny',
          'X-Permitted-Cross-Domain-Policies': 'master-only',
          'X-XSS-Protection': '1; mode=block',
        }),
      },
    ];
  };
}

module.exports = withBundleAnalyzer(CONFIGURATION);
