export interface ICard {
  title: string;
  href: string;
  subtitle: string;
  description: string;
  cardImage?: string;
  cardImageAlt?: string;
  licence?: string;
  author?: ICardAuthor;
}

export interface ICardAuthor {
  name: string;
  href: string;
  authorImage?: string;
  authorImageAlt?: string;
}
