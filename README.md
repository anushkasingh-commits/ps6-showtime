# ShowTime : TV Show Finder

## PS Number

PS6

## Project Name 

ShowTime

## Description

ShowTime is a TV show browser. It lists 40 shows from the TVMaze API as a searchable card grid, and each show has a detail page with its poster, genres, language, premiere date, rating, summary, and cast. Search filters the list by name as you type.

## API Used

[TVMaze API](https://www.tvmaze.com/api). It is free and needs no API key.

Endpoints used: 

- `https://api.tvmaze.com/shows?page=0`: the show list
- `https://api.tvmaze.com/shows/:id`: a single show
- `https://api.tvmaze.com/shows/:id/cast`: the cast for a show

## Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing hero with a "Browse shows" button |
| `/shows` | Discover | Grid of 40 shows with search by name |
| `/shows/:id` | Show detail | Poster, details, summary, and cast list |
| `*` | 404 | "Page not found" with a link back to Home |

## Screenshots

![Home page](screenshots/home.png)

![Discover page](screenshots/shows.png)

## Tech Stack

- React
- React Router
- Vite
- CSS
- TVMaze API

## Live Link

[Live demo](https://ps6-showtime-n1emeqrxf-anushkas-projects-40c7077a.vercel.app/)

## How to run locally

```bash
git clone https://github.com/anushkasingh-commits/ps6-showtime.git
cd ps6-showtime
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.