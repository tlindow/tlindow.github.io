export type ImpactTile = {
  number: string;
  label: string;
};

export type PostFrontMatter = {
  call?: string;
  impact?: ImpactTile[];
  steps?: string[];
  belief?: string;
  redirectFrom: string[];
};

export function parseFrontMatter(markdown: string): PostFrontMatter;
export function loadAllPostFrontMatter(dir?: string): Record<string, PostFrontMatter>;
export function loadPostFrontMatter(slug: string, dir?: string): PostFrontMatter;
export function findRedirectTarget(slug: string, dir?: string): string | null;
