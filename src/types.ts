export type Site = {
  NAME: string;
  LOCATION: string;
  TIMEZONE: string;
  NUM_WRITINGS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  NUM_EXPERIENCES_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];