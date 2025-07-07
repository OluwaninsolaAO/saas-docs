import type { NextConfig } from 'next';
import nextra from 'nextra';

const nextConfig: NextConfig = {
  /* config options here */
};

const withNextra = nextra({ search: false, contentDirBasePath: '/docs' });

export default withNextra(nextConfig);
