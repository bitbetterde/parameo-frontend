export interface ICard {
  title: string;
  href?: string;
  subtitle: string;
  description: string;
  cardImages?: { image_url: string; alt?: string }[];
  licence?: string;
  author?: ICardAuthor;
  externalHref?: string;
  buttonCaption?: string;
  onButtonClick?: () => void;
  buttonIcon?: string;
  buttonDisabled?: boolean;
}

export interface ICardAuthor {
  name: string;
  href: string;
  authorImage?: string;
  authorImageAlt?: string;
}
