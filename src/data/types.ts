export type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number; // duration in seconds
  coverUrl: string; // URL to the song's cover image
};

export type Playlist = {
  id: string;
  title: string;
  creatorName: string;
  dateCreated: string; // ISO 8601 e.g. "2024-11-03"
  /** Total duration in seconds */
  length: number;
  songs: Song[];
  description?: string;
  coverUrl?: string;
  visibility: "public" | "private";
};

export type CreatePlaylistRequest = {
  title: string;
  description?: string;
  visibility: "public" | "private";
  coverImage?: File; // For file uploads
  songs?: Song[]; // Optional initial songs
};

export type SongSection = {
  id: string;
  title: string;
  subtitle?: string;
  songs: Song[];
};

export type Album = {
  id: string;
  title: string;
  year: number;
  coverUrl: string;
};

export type Gig = {
  id: string;
  venue: string;
  city: string;
  date: string;
};

export type ExtendedArtist = {
  id: string;
  name: string;
  genre: string;
  bio: string;
  imageUrl: string;
  topSongs: Song[];
  albums: Album[];
  gigs: Gig[];
};
