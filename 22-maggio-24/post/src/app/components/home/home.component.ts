import { iJsonContent } from '../../Models/json-content';
import { iPost } from './../../Models/posts';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  array:iPost[] = []

  ngOnInit(){

    this.getPosts()

 }
    async getPosts():Promise<void> {
      const response = await fetch('../../../assets/db.json')
      const posts = <iJsonContent> await response.json()

      this.array = posts.posts;

  }

}
