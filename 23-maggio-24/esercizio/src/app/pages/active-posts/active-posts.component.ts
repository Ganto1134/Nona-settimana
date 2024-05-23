import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';
import { IJsonContent } from '../../Models/i-json-content';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {

  postsArr:iPost[] = [];
  activeposts:iPost[] = [];

  ngOnInit(){

    this.getPosts().then(()=>{

      this.activeposts = this.activePosts()

    })
  }

  async getPosts(){
      const response = await fetch('../../../assets/db.json')
      const posts = <IJsonContent> await response.json()

      this.postsArr = posts.posts;
  }

  activePosts(): iPost[] {
    return this.postsArr.filter(post => post.active === true)
   }
}
