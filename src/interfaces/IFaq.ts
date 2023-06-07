export interface IFaqFile {
  title: string;
  id: string;
  body?: JSX.Element;
  tags: Array<string>;
  teaser: string;
  showOnHomePage: boolean;
  order?: number;
}
