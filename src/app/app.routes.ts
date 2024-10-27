import { Routes } from '@angular/router';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: 'movie/:title', component: MovieInfoComponent },
  { path: 'not-found', component: NotFoundComponent },
];
