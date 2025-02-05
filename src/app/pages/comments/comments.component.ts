import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  comments = [
    { text: 'Amei essa viagem!', createdAt: new Date('2025-05-16') },
    { text: 'Foi uma experiência incrível.', createdAt: new Date('2025-06-12') }
  ];

  newComment: string = '';

  constructor() {}

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push({ text: this.newComment, createdAt: new Date() });
      this.newComment = '';
    }
  }

  deleteComment(index: number) {
    this.comments.splice(index, 1);
  }
}
