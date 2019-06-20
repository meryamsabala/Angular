import { Component } from '@angular/core';
import { Post } from './models/Post';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gestion de blog';
  listPosts = new Array<Post>();

constructor() {
  this.listPosts.push(new Post('Mon premier Post', 'Le contenue de mon premier post , Bonjour Bonjour, bienvenu dans mon exercice', new Date(2018, 7 , 25 )));
  this.listPosts.push(new Post('Mon deuxieme Post', 'Le contenue de mon deuxieme post , Oui je développe des application SPA' , new Date(2019, 5 , 30 )));
  this.listPosts.push(new Post('Mon troisieme Post', 'Le contenue de mon troisieme post , ça va on va maitriser Angular ', new Date(2019, 2 , 18 )));
  this.listPosts.push(new Post('Mon quatrieme Post', 'Le contenue de mon quatrieme post , Finalement il pleut plus :D ', new Date(2019, 5 , 22 )));
  this.listPosts.push(new Post('Mon cinquieme Post', 'Le contenue de mon cinquieme post , Je vous souhait un très bon courage', new Date(2019, 6 , 14 )));
}

}
