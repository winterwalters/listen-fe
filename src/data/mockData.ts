import { type Song, type SongSection } from "./types";
import type { Playlist, CreatePlaylistRequest, ExtendedArtist } from "./types";

export const mockPlaylists: Playlist[] = [
  {
    id: "1",
    title: "Chill Vibes",
    creatorName: "Alice",
    dateCreated: "2024-11-01",
    length: 1200,
    visibility: "public",
    description: "Relax and unwind with these chill tunes.",
    songs: [
      {
        id: "1",
        title: "Venice Bitch",
        artist: "Lana Del Rey",
        duration: 244,
        coverUrl:
          "https://m.media-amazon.com/images/M/MV5BODU5ZWQzYzgtNGM3NC00ZjRlLWE2NjMtNzdlMzdmZjJiNGJjXkEyXkFqcGc@._V1_QL75_UX190_CR0,55,190,190_.jpg",
        album: "Normal Fucking Rockwell",
      },
      {
        id: "2",
        title: "Just Like Heaven",
        artist: "The Cure",
        duration: 214,
        coverUrl:
          "https://upload.wikimedia.org/wikipedia/en/f/f5/The_Cure_-_Kiss_Me%2C_Kiss_Me%2C_Kiss_Me.jpg",
        album: "Kiss Me Kiss Me Kiss Me",
      },
      {
        id: "4",
        title: "Walk though water",
        artist: "Overmono",
        duration: 287,
        coverUrl: "https://f4.bcbits.com/img/a3493924304_16.jpg",
        album: "Overmono",
      },
    ],
  },
  {
    id: "2",
    title: "Workout Mix",
    creatorName: "Bob",
    dateCreated: "2024-10-28",
    length: 1500,
    visibility: "public",
    description: "Get pumped with these high-energy tracks.",
    songs: [
      {
        id: "3",
        title: "Stronger",
        artist: "Kanye West",
        duration: 311,
        coverUrl:
          "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg",
        album: "Graduation",
      },
      {
        id: "5",
        title: "Harvest Moon",
        artist: "Neil Young",
        duration: 240,
        coverUrl:
          "https://upload.wikimedia.org/wikipedia/en/b/b3/Harvest_-_neil_young.jpg",
        album: "Harvest Moon",
      },
    ],
  },
  {
    id: "3",
    title: "Classic Rock",
    creatorName: "Charlie",
    dateCreated: "2024-09-15",
    length: 1800,
    visibility: "private",
    description: "Timeless rock anthems from the 60s and 70s.",
    songs: [
      {
        id: "2",
        title: "Just Like Heaven",
        artist: "The Cure",
        duration: 214,
        coverUrl:
          "https://upload.wikimedia.org/wikipedia/en/f/f5/The_Cure_-_Kiss_Me%2C_Kiss_Me%2C_Kiss_Me.jpg",
        album: "Kiss Me Kiss Me Kiss Me",
      },
      {
        id: "5",
        title: "Harvest Moon",
        artist: "Neil Young",
        duration: 240,
        coverUrl:
          "https://upload.wikimedia.org/wikipedia/en/b/b3/Harvest_-_neil_young.jpg",
        album: "Harvest Moon",
      },
    ],
  },
];

export const mockSongs = [
  {
    id: "1",
    title: "Venice Bitch",
    artist: "Lana Del Rey",
    duration: 244,
    coverUrl:
      "https://m.media-amazon.com/images/M/MV5BODU5ZWQzYzgtNGM3NC00ZjRlLWE2NjMtNzdlMzdmZjJiNGJjXkEyXkFqcGc@._V1_QL75_UX190_CR0,55,190,190_.jpg",
    album: "Normal Fucking Rockwell",
  },
  {
    id: "2",
    title: "Just Like Heaven",
    artist: "The Cure",
    duration: 214,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/The_Cure_-_Kiss_Me%2C_Kiss_Me%2C_Kiss_Me.jpg",
    album: "Kiss Me Kiss Me Kiss Me",
  },
  {
    id: "3",
    title: "Stronger",
    artist: "Kanye West",
    duration: 311,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg",
    album: "Graduation",
  },
  {
    id: "4",
    title: "Walk though water",
    artist: "Overmono",
    duration: 287,
    coverUrl: "https://f4.bcbits.com/img/a3493924304_16.jpg",
    album: "Overmono",
  },
  {
    id: "5",
    title: "Harvest Moon",
    artist: "Neil Young",
    duration: 240,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b3/Harvest_-_neil_young.jpg",
    album: "Harvest Moon",
  },
  {
    id: "6",
    title: "Summertime Sadness",
    artist: "Lana Del Rey",
    duration: 265,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9a/Lana_Del_Rey_-_Born_to_Die.png",
    album: "Born to Die",
  },
  {
    id: "7",
    title: "Friday I'm in Love",
    artist: "The Cure",
    duration: 214,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7b/The_Cure_-_Wish.jpg",
    album: "Wish",
  },
  {
    id: "8",
    title: "Famous",
    artist: "Kanye West",
    duration: 196,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2a/Kanye_West_-_The_Life_of_Pablo.png",
    album: "The Life of Pablo",
  },
  {
    id: "9",
    title: "Aero",
    artist: "Overmono",
    duration: 320,
    coverUrl: "https://f4.bcbits.com/img/a3493924304_16.jpg",
    album: "Overmono",
  },
  {
    id: "10",
    title: "Heart of Gold",
    artist: "Neil Young",
    duration: 187,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/26/NeilYoungHarvest.jpg",
    album: "Harvest",
  },
  {
    id: "11",
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: 200,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
    album: "After Hours",
  },
  {
    id: "12",
    title: "Levitating",
    artist: "Dua Lipa",
    duration: 203,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Dua_Lipa_-_Future_Nostalgia.png",
    album: "Future Nostalgia",
  },
  {
    id: "13",
    title: "As It Was",
    artist: "Harry Styles",
    duration: 167,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c8/Harry_Styles_-_As_It_Was.png",
    album: "Harry's House",
  },
  {
    id: "14",
    title: "Anti-Hero",
    artist: "Taylor Swift",
    duration: 229,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Taylor_Swift_-_Anti-Hero.png",
    album: "Midnights",
  },
  {
    id: "15",
    title: "Flowers",
    artist: "Miley Cyrus",
    duration: 198,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Miley_Cyrus_-_Flowers.png",
    album: "Endless Summer Vacation",
  },
  {
    id: "16",
    title: "Bad Habit",
    artist: "Steve Lacy",
    duration: 232,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Steve_Lacy_-_Bad_Habit.png",
    album: "Gemini Rights",
  },
  {
    id: "17",
    title: "Heat Waves",
    artist: "Glass Animals",
    duration: 238,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/62/Glass_Animals_-_Heat_Waves.png",
    album: "Dreamland",
  },
  {
    id: "18",
    title: "Stay",
    artist: "The Kid Laroi & Justin Bieber",
    duration: 141,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/ca/The_Kid_Laroi_and_Justin_Bieber_-_Stay.png",
    album: "F*CK LOVE 3: OVER YOU",
  },
  {
    id: "19",
    title: "Drivers License",
    artist: "Olivia Rodrigo",
    duration: 242,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Olivia_Rodrigo_-_Drivers_License.png",
    album: "Sour",
  },
  {
    id: "20",
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    duration: 178,
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Olivia_Rodrigo_-_Drivers_License.png",
    album: "Sour",
  },
];

export const homeSections: SongSection[] = [
  {
    id: "recently-listened",
    title: "Recently listened",
    subtitle: "Pick up where you left off",
    songs: [
      mockSongs[0],
      mockSongs[4],
      mockSongs[2],
      mockSongs[8],
      mockSongs[11],
      mockSongs[6],
    ],
  },
  {
    id: "discover",
    title: "Discover",
    subtitle: "Fresh sounds we think you'll love",
    songs: [
      mockSongs[10],
      mockSongs[13],
      mockSongs[16],
      mockSongs[18],
      mockSongs[12],
      mockSongs[19],
    ],
  },
  {
    id: "trending",
    title: "Trending now",
    subtitle: "What everyone's listening to",
    songs: [
      mockSongs[9],
      mockSongs[5],
      mockSongs[14],
      mockSongs[1],
      mockSongs[17],
      mockSongs[3],
    ],
  },
  {
    id: "artists-you-follow",
    title: "From artists you follow",
    subtitle: "New drops from your favourites",
    songs: [
      mockSongs[3],
      mockSongs[7],
      mockSongs[15],
      mockSongs[6],
      mockSongs[0],
      mockSongs[9],
    ],
  },
  {
    id: "late-night",
    title: "Late night",
    subtitle: "For the quiet hours",
    songs: [
      mockSongs[11],
      mockSongs[18],
      mockSongs[7],
      mockSongs[4],
      mockSongs[13],
      mockSongs[16],
    ],
  },
];

export const mockArtistData: ExtendedArtist[] = [
  {
    id: "oklou",
    name: "Oklou",
    genre: "Electronic / Experimental Pop",
    bio: "French electronic artist blending ambient textures with pop sensibilities.",
    imageUrl:
      "https://first-avenue.com/wp-content/uploads/2021/07/oklou-1080x1630-1.jpg",
    topSongs: [],
    albums: [
      {
        id: "a1",
        title: "Galore",
        year: 2020,
        coverUrl: "https://via.placeholder.com/150",
      },
    ],
    gigs: [
      {
        id: "g1",
        venue: "Village Underground",
        city: "London",
        date: "2026-05-12",
      },
    ],
  },
  {
    id: "charlixcx",
    name: "Charli XCX",
    genre: "Hyperpop / Pop",
    bio: "Pop innovator shaping modern hyperpop and experimental mainstream pop.",
    imageUrl:
      "https://img.businessoffashion.com/resizer/v2/https%3A%2F%2Fprod-bof-media.s3.eu-west-1.amazonaws.com%2F05%2Fb01374afd14312a51ee995115872db%2FCharli-XCX-Credit---Harley-Weir-.jpg?auth=8377f3eeb421e33a94275cb6380aae5a14eb172575dc2f856aad123dedc108d8&width=1200&height=1200&smart=true",
    topSongs: [
      {
        id: "s1",
        title: "Vroom Vroom",
        artist: "Charli XCX",
        album: "Vroom Vroom EP",
        duration: 193,
        coverUrl: "https://via.placeholder.com/150",
      },
      {
        id: "s2",
        title: "1999",
        artist: "Charli XCX",
        album: "Charli",
        duration: 189,
        coverUrl: "https://via.placeholder.com/150",
      },
      {
        id: "s3",
        title: "Beg for You",
        artist: "Charli XCX",
        album: "Crash",
        duration: 172,
        coverUrl: "https://via.placeholder.com/150",
      },
    ],
    albums: [
      {
        id: "c1",
        title: "Crash",
        year: 2022,
        coverUrl: "https://via.placeholder.com/150",
      },
      {
        id: "c2",
        title: "Charli",
        year: 2019,
        coverUrl: "https://via.placeholder.com/150",
      },
      {
        id: "c3",
        title: "How I'm Feeling Now",
        year: 2020,
        coverUrl: "https://via.placeholder.com/150",
      },
    ],
    gigs: [{ id: "g1", venue: "O2 Arena", city: "London", date: "2026-06-18" }],
  },
  {
    id: "yunglean",
    name: "Yung Lean",
    genre: "Cloud Rap / Alternative Hip-Hop",
    bio: "Swedish rapper and artist known for emotional cloud rap and surreal aesthetic worlds.",
    imageUrl:
      "https://static.wikia.nocookie.net/hip-hop-music/images/c/c6/Leandoer.jpg/revision/latest?cb=20200212185943",
    topSongs: [
      {
        id: "y1",
        title: "Ginseng Strip 2002",
        artist: "Yung Lean",
        album: "Unknown Death 2002",
        duration: 174,
        coverUrl: "https://via.placeholder.com/150",
      },
      {
        id: "y2",
        title: "Kyoto",
        artist: "Yung Lean",
        album: "Stranger",
        duration: 210,
        coverUrl: "https://via.placeholder.com/150",
      },
      {
        id: "y3",
        title: "Red Bottom Sky",
        artist: "Yung Lean",
        album: "Stranger",
        duration: 198,
        coverUrl: "https://via.placeholder.com/150",
      },
    ],
    albums: [
      {
        id: "y1",
        title: "Stranger",
        year: 2017,
        coverUrl: "https://via.placeholder.com/150",
      },
      {
        id: "y2",
        title: "Starz",
        year: 2020,
        coverUrl: "https://via.placeholder.com/150",
      },
      {
        id: "y3",
        title: "Warlord",
        year: 2016,
        coverUrl: "https://via.placeholder.com/150",
      },
    ],
    gigs: [
      { id: "g1", venue: "Annexet", city: "Stockholm", date: "2026-07-03" },
    ],
  },
  {
    id: "carolinepolachek",
    name: "Caroline Polachek",
    genre: "Art Pop / Experimental Pop",
    bio: "Avant-pop artist known for soaring vocals, intricate production, and emotionally rich experimental pop.",
    imageUrl:
      "https://i.scdn.co/image/ab6761610000e5eb5da901a1dd949436f2377f72",
    topSongs: [
      {
        id: "cp1",
        title: "So Hot You're Hurting My Feelings",
        artist: "Caroline Polachek",
        album: "Pang",
        duration: 187,
        coverUrl: "https://via.placeholder.com/150",
      },
      {
        id: "cp2",
        title: "Bunny Is a Rider",
        artist: "Caroline Polachek",
        album: "Single",
        duration: 196,
        coverUrl: "https://via.placeholder.com/150",
      },
      {
        id: "cp3",
        title: "Door",
        artist: "Caroline Polachek",
        album: "Pang",
        duration: 242,
        coverUrl: "https://via.placeholder.com/150",
      },
    ],
    albums: [
      {
        id: "cp1",
        title: "Pang",
        year: 2019,
        coverUrl: "https://via.placeholder.com/150",
      },
      {
        id: "cp2",
        title: "Desire, I Want To Turn Into You",
        year: 2023,
        coverUrl: "https://via.placeholder.com/150",
      },
    ],
    gigs: [
      {
        id: "g1",
        venue: "Royal Albert Hall",
        city: "London",
        date: "2026-09-14",
      },
    ],
  },
  {
    id: "segabodega",
    name: "Sega Bodega",
    genre: "Electronic / Experimental Pop",
    bio: "Producer and artist blending glitchy club music with emotional experimental pop.",
    imageUrl:
      "https://static.wikia.nocookie.net/carolinepolachek/images/4/44/Segabodega.jpeg/revision/latest?cb=20230203182038",
    topSongs: [],
    albums: [
      {
        id: "sb1",
        title: "Romeo",
        year: 2020,
        coverUrl: "https://via.placeholder.com/150",
      },
    ],
    gigs: [
      {
        id: "g1",
        venue: "Heaven",
        city: "London",
        date: "2026-06-01",
      },
    ],
  },
  {
    id: "agcook",
    name: "A. G. Cook",
    genre: "Hyperpop / Experimental",
    bio: "PC Music founder and hyperpop pioneer known for maximalist electronic production.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eWViu1wL5FRpvYPO-pimEsrd1k_NYX0TmQ&s",
    topSongs: [],
    albums: [
      {
        id: "ag1",
        title: "7G",
        year: 2020,
        coverUrl: "https://via.placeholder.com/150",
      },
    ],
    gigs: [
      {
        id: "g1",
        venue: "Fabric",
        city: "London",
        date: "2026-07-10",
      },
    ],
  },
  {
    id: "overmono",
    name: "Overmono",
    genre: "UK Garage / Techno",
    bio: "UK electronic duo blending rave, breakbeat, and emotional club music.",
    imageUrl:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F07%2F17%2Fovermono-good-lies-pure-devotion-tour-tom-ed-russell-interview-1.jpg?q=75&w=800&cbr=1&fit=max",
    topSongs: [],
    albums: [
      {
        id: "o1",
        title: "Good Lies",
        year: 2023,
        coverUrl: "https://via.placeholder.com/150",
      },
    ],
    gigs: [
      {
        id: "g1",
        venue: "Printworks",
        city: "London",
        date: "2026-05-22",
      },
    ],
  },
  {
    id: "ecco2k",
    name: "Ecco2k",
    genre: "Experimental / Cloud Rap",
    bio: "Drain Gang member known for ethereal vocals and abstract digital aesthetics.",
    imageUrl:
      "https://cdn.musicboard.app/musicboard/media/a16e053c-9383-4219-b828-06451af0ff20.jpeg",
    topSongs: [],
    albums: [
      {
        id: "e1",
        title: "E",
        year: 2019,
        coverUrl: "https://via.placeholder.com/150",
      },
    ],
    gigs: [
      {
        id: "g1",
        venue: "Koko",
        city: "London",
        date: "2026-08-15",
      },
    ],
  },
  {
    id: "fkatwigs",
    name: "FKA twigs",
    genre: "Art Pop / R&B / Experimental",
    bio: "Boundary-pushing artist blending avant-garde pop, dance, and performance art.",
    imageUrl:
      "https://i.guim.co.uk/img/media/36ff75dae77dea427302706a27167fe1cc55bcc1/0_294_6294_3773/master/6294.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b5da28b424efc2dbea6bf959e127b9fa",
    topSongs: [],
    albums: [
      {
        id: "f1",
        title: "MAGDALENE",
        year: 2019,
        coverUrl: "https://via.placeholder.com/150",
      },
    ],
    gigs: [
      {
        id: "g1",
        venue: "Alexandra Palace",
        city: "London",
        date: "2026-09-02",
      },
    ],
  },
];
