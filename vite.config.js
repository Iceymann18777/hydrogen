import hydrogen from '@shopify/hydrogen/plugin';
import shopifyConfig from './shopify.config.js';

export default {
  plugins: [hydrogen(shopifyConfig)],
  optimizeDeps: { include: ['@headlessui/react'] },
};
