export interface IMenuItem {
  name: string;
  href: string;
}

export interface ISocialMediaItem {
  name: string;
  alt: string;
  href: string;
  type: "instagram" | "twitter" | "github" | "gitlab" | "dribble";
}
