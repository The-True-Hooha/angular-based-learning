export interface Movie {
  background_image: string;
  id: string;
  name: string;
  released: string;
  critics_url: string;
  website: string;
  description: string;
  critics: number;
  genres: Array<Genre>;
  parent_platform: Array<ParentPlatform>;
  studio_publishers: Array<StudioPublishers>;
  ratings: Array<Ratings>;
  movie_screenshots: Array<MovieScreenshots>;
  trailers: Array<Trailer>;
}

export interface APIResponse <t> {
  results: Array<t>;
}

  interface Genre<> {
    name: string;
  }

  interface ParentPlatform {
    platform: {
      name: string;
    };
  }

  interface StudioPublishers {
    name: string;
  }

  interface Ratings {
    id: number;
    count: number;
    title: string;
  }

  interface MovieScreenshots {
    image: string;
  }

  interface Trailer {
    data: {
      max: string
    };
  }
