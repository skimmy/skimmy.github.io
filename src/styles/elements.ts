// Headers
export const PAGE_TITLE = "text-4xl font-bold mb-4 mt-4";
export const SECTION_TITLE = "text-3xl font-bold mb-3 mt-3";
export const SUBSECTION_TITLE = "text-2xl font-bold mb-2 mt-2";
export const PARAGRAPH_TITLE = "text-xl font-bold mb-2 mt-2";

// Emphasis elements
export const EMPHASIS_COLOR_FG = "text-blue-800 dark:text-blue-200";
export const EMPHASIS_COLOR_BG = "bg-blue-100 dark:bg-blue-900";
export const EMPHASIS_ELEMENTS_COLORS = `${EMPHASIS_COLOR_FG} ${EMPHASIS_COLOR_BG}`
export const EMPHASIS_ELEMENTS_HOVER_FG = "hover:text-blue-700 hover:dark:text-blue-200";
export const EMPHASIS_ELEMENTS_HOVER_BG = "hover:bg-blue-300 dark:hover:bg-blue-700";
export const EMPHASIS_ELEMENTS_HOVER_COLORS = `${EMPHASIS_ELEMENTS_HOVER_FG} ${EMPHASIS_ELEMENTS_HOVER_BG}`;
export const EMPHASIS_ELEMENTS_WITH_HOVER = `${EMPHASIS_ELEMENTS_COLORS} ${EMPHASIS_ELEMENTS_HOVER_COLORS}`;
export const TAG_BADGE = `${EMPHASIS_ELEMENTS_COLORS} px-2 py-1 rounded-full text-xs`;

// Links
export const LINK_COLORS = `${EMPHASIS_COLOR_FG} ${EMPHASIS_ELEMENTS_HOVER_FG}`;
export const LINK_DEFAULT = LINK_COLORS;
export const LINK_BLOG_TITLE = "hover:text-blue-600 dark:hover:text-blue-400"