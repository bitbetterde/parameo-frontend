export interface ICard {
  title: string;
  href?: string;
  category: ICardCategory;
  description: string;
  cardImage?: string;
  cardImageAlt?: string;
  licence?: string;
  author: ICardAuthor;
}

export interface ICardCategory {
  name: string;
  href?: string;
}

export interface ICardAuthor {
  name: string;
  href?: string;
  authorImage?: string;
  authorImageAlt?: string;
}
