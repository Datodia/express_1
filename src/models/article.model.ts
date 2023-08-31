// export type Article = {
//   id: number;
//   name: string;
// };

export class Article {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}