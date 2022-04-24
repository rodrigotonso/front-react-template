/**
 * @packageDocumentation
 * @hidden
 * Loads configuration from environment.
 * TODO: You should read all this file to see if it's according to your needs.
 * Mainly, it will need things as running URL or API urls.
 *
 * IMPORTANT: If you want NEXT allow the variable to be visible in the client, it
 * MUST start with "NEXT_PUBLIC_". Otherwise it would be undefined.
 */

import path from 'path';

const dirName = __dirname.split(path.sep).pop();

/**
 * Throws an error with the specified var name.
 * @param varName Name of the environment variable.
 */
const envError = (varName: string): never => {
  throw new Error(`Environment variable ${varName} is not defined.`);
};

export const CONFIG = {
  /**
   * Application name.
   */
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || dirName,

  /**
   * Application version.
   */
  APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',

  /**
   * BASE URL where the app is located, the on next uses in next.config.js
   * Vg: /
   */
  NEXT_BASE_URL: process.env.NEXT_BASE_URL || '',

  /**
   * Absolute url of the application
   * (it's necessary for static content and relative paths that must know where they are).
   * Vg: http://localhost:3000/path/subpath
   */
  ABSOLUTE_URL: process.env.NEXT_PUBLIC_ABSOLUTE_URL || envError('NEXT_PUBLIC_ABSOLUTE_URL'),

  /**
   * Services the app uses.
   */
  SERVICES: {
    /**
     * Google recaptcha.
     * TODO: You would like to use this if you use captcha.
     */
    //    GOOGLE_CAPTCHA: {
    //      SITE_KEY: process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY || envError('NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY'),
    //    },

    /**
     * Keycloak.
     * TODO: You would like to use this if you use captcha.
     */
    // KEYCLOAK: {
    //   AUTH_SERVER_URL:
    //     process.env.NEXT_PUBLIC_KEYCLOAK_AUTH_SERVER_URL || envError('NEXT_PUBLIC_KEYCLOAK_AUTH_SERVER_URL'),
    //   REALM: process.env.NEXT_PUBLIC_KEYCLOAK_REALM || envError('NEXT_PUBLIC_KEYCLOAK_REALM'),
    //   RESOURCE: process.env.NEXT_PUBLIC_KEYCLOAK_RESOURCE || envError('NEXT_PUBLIC_KEYCLOAK_RESOURCE'),
    // },

    /**
     * NASA APOD.
     */
    NASA_APOD: {
      URL: process.env.NEXT_PUBLIC_NASA_APOD_URL || envError('NEXT_PUBLIC_NASA_APOD_URL'),
      API_KEY:
        process.env.NEXT_PUBLIC_NASA_APOD_API_KEY || envError('NEXT_PUBLIC_NASA_APOD_API_KEY'),
    },
  },
};
