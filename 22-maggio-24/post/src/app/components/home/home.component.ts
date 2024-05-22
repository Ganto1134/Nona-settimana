import { iPosts } from './../../Models/posts';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  via = '/post/src/assets/db.json';

  array:iPosts[] = []

  ngOnInit(){
 }
    async getPosts():Promise<void> {
    let response = await fetch(this.via)
    let posts = <iPosts[]> await response.json()

    this.array = posts;

  }
}
