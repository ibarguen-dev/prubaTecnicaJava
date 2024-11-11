import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'search',
        loadComponent: () =>
          import('./feature/search/search.component').then(
            (m) => m.SearchComponent
          ),
      },
    ],
  },
];
