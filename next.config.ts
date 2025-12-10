import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // Subdomain routing
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'booking.theshine.salon',
            },
          ],
          destination: '/booking/:path*',
        },
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'booking.theshine.salon',
            },
          ],
          destination: '/booking',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'dashboard.theshine.salon',
            },
          ],
          destination: '/dashboard/:path*',
        },
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'dashboard.theshine.salon',
            },
          ],
          destination: '/dashboard',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'review.theshine.salon',
            },
          ],
          destination: '/review/:path*',
        },
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'review.theshine.salon',
            },
          ],
          destination: '/review',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'program.theshine.salon',
            },
          ],
          destination: '/program/:path*',
        },
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'program.theshine.salon',
            },
          ],
          destination: '/program',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'store.theshine.salon',
            },
          ],
          destination: '/store/:path*',
        },
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'store.theshine.salon',
            },
          ],
          destination: '/store',
        },
      ],
    };
  },
};

export default nextConfig;
