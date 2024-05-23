import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';
import { IJsonContent } from '../../Models/i-json-content';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-detail',
  templateUrl: './single-detail.component.html',
  styleUrl: './single-detail.component.scss'
})
export class SingleDetailComponent {

  postsArr: iPost[] = [];
  currentPost!: iPost;

  constructor(
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    await this.getPosts();
    this.route.params.subscribe(params => {
      const postId = +params['id']; // Convertiamo params.id in numero
      const postTrovato = this.postsArr.find(post => post.id === postId);

      if (postTrovato) {
        this.currentPost = postTrovato;
      } else {
        // Gestisci il caso in cui il post non venga trovato
        console.error('Post non trovato');
      }
    });
  }

  async getPosts() {
    try {
      const response = await fetch('../../../assets/db.json');
      const posts = <IJsonContent>await response.json();
      this.postsArr = posts.posts;
    } catch (error) {
      console.error('Errore nel caricamento dei post:', error);
    }
  }
}
