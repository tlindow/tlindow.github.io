export const LABELS: readonly string[];

export type PostFrontMatter = {
  redirectFrom: string[];
};

export type LabeledParagraph = {
  label: string;
  text: string;
  line: number;
};

export function parseFrontMatter(markdown: string): PostFrontMatter;
export function parseLabeledMarkdown(markdown: string): {
  paragraphs: LabeledParagraph[];
  errors: string[];
};
export function renderLabeledParagraphs(
  paragraphs: LabeledParagraph[]
): LabeledParagraph[];
export function loadAllPostFrontMatter(dir?: string): Record<string, PostFrontMatter>;
export function loadPostFrontMatter(slug: string, dir?: string): PostFrontMatter;
export function loadRenderedParagraphs(slug: string, dir?: string): LabeledParagraph[];
export function findRedirectTarget(slug: string, dir?: string): string | null;
