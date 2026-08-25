import type { NextConfig } from "next";

const isGithubActions = !!process.env.GITHUB_ACTIONS;
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split("/")[1] : "";
const isRootPages = !repo || repo.endsWith(".github.io");
const basePath = isGithubActions && !isRootPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
