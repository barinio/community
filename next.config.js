const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = process.env.NODE_ENV === 'development'
  ? createNextIntlPlugin()
  : createNextIntlPlugin({
      messagesDir: "./messages",
    });

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);