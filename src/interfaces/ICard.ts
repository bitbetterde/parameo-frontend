export interface ICard {
  title: string;
  href?: string;
  subtitle: string;
  description: string;
  cardImage?: string;
  cardImageAlt?: string;
  licence?: string;
  author?: ICardAuthor;
  externalHref?: string;
  buttonCaption?: string;
  onButtonClick?: () => void;
  buttonIcon?: string;
}

export interface ICardAuthor {
  name: string;
  href: string;
  authorImage?: string;
  authorImageAlt?: string;
}
