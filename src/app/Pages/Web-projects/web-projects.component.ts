import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../core/Services/api-service.service';
import { Images } from '../../core/Interfaces/images';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss']
})
export class WebProjectsComponent implements OnInit, OnDestroy {
    images: Images[] = [];
    page: number = 1;

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.loadImages(this.page);
    }

    ngOnDestroy() {
        this.loadImages(this.page).unsubscribe();
    }

    loadImages(page) {
       return this.apiService.getAllImages(page).subscribe(
            (image) => {
                this.images = this.images.concat(image);
            }
        );
    }

    onScroll() {
        this.page++;
        this.loadImages(this.page);
    }
}
