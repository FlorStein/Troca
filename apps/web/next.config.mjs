/** @type {import('next').NextConfig} */
const githubPages = process.env.GITHUB_ACTIONS === 'true';
export default {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: githubPages ? '/Troca' : '',
  assetPrefix: githubPages ? '/Troca/' : '',
};
