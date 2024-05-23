import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';
import { IJsonContent } from '../../Models/i-json-content';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  postsArr:iPost[] = [];
  activeposts:iPost[] = [];

  ngOnInit(){

    this.getPosts()
  }

  async getPosts(){
      const response = await fetch('../../../assets/db.json')
      const posts = <IJsonContent> await response.json()

      this.postsArr = posts.posts;
  }

}
