import { Component, Input } from '@angular/core';
import { User } from './../../core/Interfaces/user';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {
  @Input() image: string;
  @Input() user: User;

  constructor() { }

  get instagramLink() {
    const regUrl = /\bhttps?:\/\/\S+/gi;
    if (regUrl.test(this.user.instagram_username)) {
      return this.user.instagram_username;
    }
    return `https://www.instagram.com/${this.user.instagram_username}`;
  }

  get twitterLink() {
    return `https://twitter.com/${this.user.twitter_username}`;
  }

}
