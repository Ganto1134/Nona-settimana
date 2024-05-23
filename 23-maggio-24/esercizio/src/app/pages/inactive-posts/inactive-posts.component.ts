import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';
import { IJsonContent } from '../../Models/i-json-content';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {

  postsArr:iPost[] = [];
  inactiveposts:iPost[] = [];

  ngOnInit(){

    this.getPosts().then(()=>{

      this.inactiveposts = this.inactivePosts()

    })
  }

  async getPosts(){
      const response = await fetch('../../../assets/db.json')
      const posts = <IJsonContent> await response.json()

      this.postsArr = posts.posts;
  }

  inactivePosts(): iPost[] {
    return this.postsArr.filter(post => post.active === false)
   }
}
