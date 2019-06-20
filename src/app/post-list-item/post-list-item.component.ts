import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdDate: Date;
  ngOnInit() {
  }
  like() {
    this.loveIts += 1;
    console.log(this.loveIts);
  }
  dislike() {
    this.loveIts -= 1;
    console.log(this.loveIts);
  }


}
