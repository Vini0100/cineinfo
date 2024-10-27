import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInfoService } from './api/service/movie-info.service';
import { IMovie } from './api/model/movie';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
    private route: Router
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
}
