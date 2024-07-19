#!/bin/sh

# Generate env.js file from environment variables
echo "window._env_ = {" > /usr/share/nginx/html/env.js
echo "  VITE_APP_BASE_URL: \"$VITE_APP_BASE_URL\"," >> /usr/share/nginx/html/env.js
echo "  VITE_GOOGLE_AI_API_KEY: \"$VITE_GOOGLE_AI_API_KEY\"," >> /usr/share/nginx/html/env.js
echo "  VITE_STRAPI_API_KEY: \"$VITE_STRAPI_API_KEY\"," >> /usr/share/nginx/html/env.js
echo "  VITE_CLERK_SECRET_KEY: \"$VITE_CLERK_SECRET_KEY\"," >> /usr/share/nginx/html/env.js
echo "  VITE_CLERK_PUBLISHABLE_KEY: \"$VITE_CLERK_PUBLISHABLE_KEY\"" >> /usr/share/nginx/html/env.js
echo "}" >> /usr/share/nginx/html/env.js
