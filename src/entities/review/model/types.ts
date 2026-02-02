export type Author = {
  img: string;
  name: string;
  role: string;
};

export interface IReview {
  author: Author;
  comment: string;
  rating: number;
  background: string;
}
