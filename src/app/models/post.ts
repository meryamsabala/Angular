export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdDate: Date;

  constructor(titre , contenue , date ) {
    this.title = titre;
    this.content = contenue;
    this.loveIts = 0;
    this.createdDate = date;
  }
}
