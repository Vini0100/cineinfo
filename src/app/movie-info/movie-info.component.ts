import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInfoService } from './api/service/movie-info.service';
import { IMovie } from './api/model/movie';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit, OnDestroy {
  movie: IMovie | null = null;
  private routeSub: Subscription | undefined;

  constructor(
    private param: ActivatedRoute,
    private movieInfoService: MovieInfoService,
    private route: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.routeSub = this.param.params.subscribe(() => this.getMovie());
  }

  getMovie(): void {
    const valueParam = this.param.snapshot.paramMap.get('title');
    if (valueParam) {
      this.movieInfoService.getMovie(valueParam).subscribe((value) => {
        if (value?.Title) {
          this.movie = value;
        } else {
          this.route.navigate(['/not-found']);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  stars(rating: string): SafeHtml {
    const ratingValue = parseFloat(rating);
    const fullStars = Math.floor(ratingValue / 2);
    const halfStar = ratingValue % 2 >= 1;
    const starIcons = [];

    for (let i = 0; i < fullStars; i++) {
      starIcons.push(
        '<img src="/icons/star.svg" alt="Full Star" class="star-icon" />'
      );
    }

    if (halfStar) {
      starIcons.push(
        '<img src="/icons/star-half.svg" alt="Half Star" class="star-icon" />'
      );
    }

    const remainingStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      starIcons.push(
        '<img src="/icons/star-empty.svg" alt="Empty Star" class="star-icon opacity-50" />'
      );
    }

    return this.sanitizer.bypassSecurityTrustHtml(starIcons.join(''));
  }
}
