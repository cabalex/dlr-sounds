export interface Album {
  name: string;
  poster: string;
  location: [number, number],
  tags: string[],
  tracks: Array<AlbumTrackData|string>
}
export interface AlbumTrackData {
  title: string;
	artist: string;
	mp3: string;
  comments: string;
  tags: string[];
  chapters?: {[time: string]: string};
}
export interface TrackData extends AlbumTrackData {
	album: Album;
  poster: string;
}

export function toTrackData(album: Album, albumTrackData: AlbumTrackData): TrackData {
  return {
    ...albumTrackData,
    album,
    poster: album.poster
  }
}

export function parseChapters(chapters: {[time: string]: string}): Array<{startTime: number, name: string}> {
  return Object.entries(chapters).map(([time, name]) => ({
    startTime: time.split(":").reduce((acc, time) => acc * 60 + +time, 0),
    name,
    originalTime: time
  }))
}

const BASE_URL = "https://pub-9c3443886f92462bbbffc7cfe4e2b3a8.r2.dev"

export const albums: Album[] = [
  {
    "name": "Main Gate",
    "poster": "AlbumArt/Main Gate.jpeg",
    "location": [33.80961312163235, -117.91898723992855],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Area Background Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Gate-01 Area Background Music.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Area Loop (1971)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Gate-02 Area Loop (1971).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop 1 (1992)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Gate-03 Area Loop 1 (1992).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop 2 (1992)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Gate-04 Area Loop 2 (1992).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Entry Whistle",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Gate-05 Entry Whistle.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Entry Chime",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Gate-06 Entry Chime.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Fanfare",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Gate-08 Fanfare.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Main Street U.S.A.: Morning Rope Drop Ceremony",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Gate-10 Main Street U.S.A._ Morning Rope Drop Ceremony.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Main Street U.S.A.: Walt Disney's Dedication of Disneyland",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Gate-11 Main Street U.S.A._ Walt Disney_s Dedication of Disneyland.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Disneyland Railroad",
    "poster": "AlbumArt/Disneyland Railroad.jpeg",
    "location": [33.809963583976064, -117.91898170806051],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "All Aboard!",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Railroad-01 All Aboard!.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Depot Announcements Through the Decades",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Railroad-02 Depot Announcements Through the Decades.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Depot Announcements",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Railroad-03 Depot Announcements.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Grand Circle Tour (1972)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Railroad-04 Grand Circle Tour (1972).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Grand Circle Tour (2013)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Railroad-05 Grand Circle Tour (2013).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Narration (2013)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Railroad-07 Narration (2013).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Grand Canyon and Primeval World: Grand Canyon Score",
        "artist": "Ferde Grofe",
        "mp3": BASE_URL + "/Disneyland Railroad-08 Grand Canyon and Primeval World_ Grand Canyon Score.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Grand Canyon and Primeval World: Original Soundtrack",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/Disneyland Railroad-09 Grand Canyon and Primeval World_ Original Soundtrack.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Grand Canyon and Primeval World: Primeval Score",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Disneyland Railroad-10 Grand Canyon and Primeval World_ Primeval Score.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Town Square",
    "poster": "AlbumArt/Town Square.jpeg",
    "location": [33.810351947405, -117.91898743198021],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Town Square: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-01 Town Square_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Dapper Dans: Meet Me Down On Main Street",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-02 The Dapper Dans_ Meet Me Down On Main Street.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Dapper Dans: Disney Favorites Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-03 The Dapper Dans_ Disney Favorites Medley.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Dapper Dans: Street Performance",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-04 The Dapper Dans_ Street Performance.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Candlelight Processional",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-25 Candlelight Processional.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Dickens Yuletide Band",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-26 Dickens Yuletide Band.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Charles Dickens Carolers",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-27 Charles Dickens Carolers.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Dapper Dans: Christmas Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-28 Dapper Dans_ Christmas Medley.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "The Brass",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-29 The Brass.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Christmas in Disneyland: Jack Wagner",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-30 Christmas in Disneyland_ Jack Wagner.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Main Street Performing Groups: Mellomen Quartet: Street Performance",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-05 Main Street Performing Groups_ Mellomen Quartet_ Street Performance.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Main Street Performing Groups: Saxophone Quartet: Street Performance",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-06 Main Street Performing Groups_ Saxophone Quartet_ Street Performance.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Main Street Performing Groups: The Firehouse Five, Plus Two: Street Performance",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-07 Main Street Performing Groups_ The Firehouse Five, Plus Two_ Street Performance.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Disneyland Band: Walt Disney Welcome Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-08 The Disneyland Band_ Walt Disney Welcome Medley.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Disneyland Band: March Down Main Street",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-09 The Disneyland Band_ March Down Main Street.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Disneyland Band: Mickey Mouse Club Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-10 The Disneyland Band_ Mickey Mouse Club Medley.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Disneyland Band: Disney Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-11 The Disneyland Band_ Disney Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Disneyland Band: Disney Fantasy Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-12 The Disneyland Band_ Disney Fantasy Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Disneyland Band: It's a Small World",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Town Square-13 The Disneyland Band_ It_s a Small World.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Main Street: Tree Lighting Ceremony",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-23 Main Street_ Tree Lighting Ceremony.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
    ]
  },
  {
    "name": "The Disney Gallery",
    "poster": "AlbumArt/The Disney Gallery.jpeg",
    "location": [33.81019062304461, -117.91832994593287],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Babes in Toyland Exhibit (1961)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-21 Babes in Toyland Exhibit.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Spoon Full of Sugar",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-01 Spoon Full of Sugar.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Alice in Wonderland",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-02 Alice in Wonderland.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "I'm Late",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-03 I_m Late.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lavender Blue Dilly Dilly",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-04 Lavender Blue Dilly Dilly.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "I Know You",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-05 I Know You.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Once Upon a Dream",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-06 Once Upon a Dream.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Love is a Song",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-07 Love is a Song.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Little April Showers",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-08 Little April Showers.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Work Song",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-09 The Work Song.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "So This is Love",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-10 So This is Love.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Second Star to the Right",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-11 The Second Star to the Right.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "You Can Fly",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-12 You Can Fly.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Part of Your World",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-13 Part of Your World.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Belle",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-14 Belle.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "I'm Wishing",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-15 I_m Wishing.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Heigh Ho",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-16 Heigh Ho.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Whistle While you Work",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-17 Whistle While you Work.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Hi Diddle Dee Dee",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-18 Hi Diddle Dee Dee.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Little Wooden Head",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-19 Little Wooden Head.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "I've Got No Strings",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-20 I_ve Got No Strings.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Give a Little Whistle",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-21 Give a Little Whistle.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Everybody Has a Laughin' Place",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-22 Everybody Has a Laughin_ Place.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Zip-a-Dee-Doo-Dah",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-23 Zip-a-Dee-Doo-Dah.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Music Loop (1987-2007)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-24 Music Loop (1987-2007).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Music Loop (2009)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-25 Music Loop (2009).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Day One Disneyland",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-26 Day One Disneyland.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Happiest Fleet on Earth",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-27 The Happiest Fleet on Earth.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Colors of Mary Blair",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-28 The Colors of Mary Blair.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "All Aboard The Trains of Disney",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-29 All Aboard The Trains of Disney.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Crowning Achievements",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-30 Crowning Achievements.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Realms of Fantasy",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-31 Realms of Fantasy.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Disneyland Symphony",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/The Disney Gallery-32 The Disneyland Symphony.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Great Moments with Mr. Lincoln",
    "poster": "AlbumArt/Great Moments with Mr. Lincoln.jpeg",
    "location": [33.810399139278644, -117.91831218734453],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Overture",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-01 Overture.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Pre-Show: Soundtrack",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-02 Pre-Show_ Soundtrack.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Main Show: Soundtrack",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-03 Main Show_ Soundtrack.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Overture & Pre-Show: Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-04 Overture & Pre-Show_ Score.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Main Show: Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-05 Main Show_ Score.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Golden Dream",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-06 Golden Dream.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "America the Beautiful",
        "artist": "Joel McNeely",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-07 America the Beautiful.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Gettysburg Address: Score",
        "artist": "Joel McNeely",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-08 The Gettysburg Address_ Score.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Music",
        "artist": "Joel McNeely",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-09 Exit Music.webm",
        "comments": "",
        "tags": []
      },
      "The Disneyland Story",
      {
        "title": "The Disneyland Story: Lobby Area Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-10 The Disneyland Story_ Lobby Area Music.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The First 50 Magical Years: If You Believe in Magic",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-11 The First 50 Magical Years_ If You Believe in Magic.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The First 50 Magical Years: Suite",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-12 The First 50 Magical Years_ Suite.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The First 50 Magical Years: Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-13 The First 50 Magical Years_ Score.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The First 50 Magical Years: Show",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-14 The First 50 Magical Years_ Show.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Walt Disney Story",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Great Moments with Mr. Lincoln-15 The Walt Disney Story.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Main Street Emporium",
    "poster": "AlbumArt/Main Street Emporium.jpeg",
    "location": [33.81067144761397, -117.91925581090905],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Main Street Emporium: Music Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street Emporium-01 Main Street Emporium_ Music Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Main Street Emporium: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street Emporium-02 Main Street Emporium_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Disney Clothiers Ltd.: Music Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street Emporium-03 Disney Clothiers Ltd._ Music Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Enchanted Windows: Peter Pan",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street Emporium-04 Enchanted Windows_ Peter Pan.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Enchanted Windows: Cinderella",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street Emporium-05 Enchanted Windows_ Cinderella.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Enchanted Windows: The Princess and the Frog",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street Emporium-06 Enchanted Windows_ The Princess and the Frog.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Enchanted Windows: Toy Story",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street Emporium-07 Enchanted Windows_ Toy Story.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Enchanted Windows: Frozen",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street Emporium-08 Enchanted Windows_ Frozen.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Enchanted Windows: Aladdin",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street Emporium-09 Enchanted Windows_ Aladdin.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Main Street Shops: The Storybook Store: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street Emporium-10 Main Street Shops_ The Storybook Store_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Main Street Shops: The Main Street Cinema: Music Loop",
        "artist": "Spike Jones",
        "mp3": BASE_URL + "/Main Street Emporium-11 Main Street Shops_ The Main Street Cinema_ Music Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Main Street U.S.A.",
    "poster": "AlbumArt/Main Street U.S.A. (2013).jpeg",
    "location": [33.81199284408517, -117.9189859313244],
    "tags": ["DL"],
    "tracks": [
      "Main Street U.S.A, 1971",
      {
        "title": "Morning Area Loop (1971)",
        "artist": "Jack Wagner",
        "mp3": BASE_URL + "/Main Street Emporium-13 Main Street U.S.A. (1971-1975)_ Area Loop.webm",
        "comments": "",
        "tags": [],
        "chapters": {
          "0:00": "Frisco Rag - San Francisco Harry & the Barbary Coast Bandits",
          "2:14": "Tammany Picnic - The Gaslight Orchestra",
          "4:25": "Unknown",
          "7:52": "The Old Grey Mare - Albert White & the Gaslight Orchestra",
          "10:19": "Golden Arrow - Albert White & the Gaslight Orchestra",
          "12:10": "Sidewalks of New York - Gay Nineties Waltzes (Somerset, P-3400)",
          "14:25": "Pretty Baby - Albert White & the Gaslight Orchestra",
          "16:23": "Mississippi Cabaret - Albert White & the Gaslight Orchestra",
          "18:36": "Strolling Through the Park--Mary - Gay Nineties Waltzes (Somerset, P-3400)",
          "22:13": "'Lasses Trombone - Albert White & the Gaslight Orchestra",
          "24:44": "Good Old Timers - Albert White & the Gaslight Orchestra",
          "28:31": "School Days - Gay Nineties Waltzes (Somerset, P-3400)",
          "31:36": "Old Timers Waltz Medley - Albert White & the Gaslight Orchestra",
          "35:53": "Horse Cars - Gay Nineties Waltzes (Somerset, P-3400)",
          "38:47": "Sweet Rosie O'Grady - Gay Nineties Waltzes (Somerset, P-3400)",
          "41:03": "Silver Heels - Albert White & the Gaslight Orchestra",
          "42:59": "Wisha Wurra - The Pete King Orchestra",
          "44:41": "Theme from 'Minnie's Boys' - Merv Griffin",
          "46:44": "Man With a Load of Mischief - Ralph Carmichael and his Orchestra",
          "48:29": "I Wouldn't Bet One Penny - The Pete King Orchestra",
          "50:24": "Medley: Bird in a Gilded Cage / Two Girls / Good Old Summertime - San Francisco Harry & the Barbary Coast Bandits",
          "52:05": "Little Annie Rooney - Gay Nineties Waltzes (Somerset, P-3400)",
          "54:27": "On a Sunday Afternoon - San Francisco Harry & the Barbary Coast Bandits",
          "55:40": "Bicycle Built for Two - Gay Nineties Waltzes (Somerset, P-3400)",
        }
      },
      {
        "title": "Evening Area Loop (1971)",
        "artist": "Jack Wagner",
        "mp3": BASE_URL + "/Main Street Emporium-12 Main Street U.S.A. (1971-1975)_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      "Main Street U.S.A, 1976",
      {
        "title": "(1976) Black and White",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-01 Area Music_ Black and White.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Everybody's Doing It",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-02 Area Music_ Everybody_s Doing It.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Flying Arrows",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-03 Area Music_ Flying Arrows.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Golden Arrow",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-04 Area Music_ Golden Arrow.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Good Old Timers",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-05 Area Music_ Good Old Timers.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) The International Rag",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-06 Area Music_ The International Rag.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) King Chanticleer",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-07 Area Music_ King Chanticleer.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Maple Leaf Rag",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-08 Area Music_ Maple Leaf Rag.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Saddle Back",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-09 Area Music_ Saddle Back.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Wild Cherries",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-10 Area Music_ Wild Cherries.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) The Old Grey Mare",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-11 Area Music_ The Old Grey Mare.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Old Timers Waltz",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-12 Area Music_ Old Timers Waltz.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Pretty Baby",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-13 Area Music_ Pretty Baby.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Put Your Arms Around Me",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-14 Area Music_ Put Your Arms Around Me.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Razzazza Mazzazza",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-15 Area Music_ Razzazza Mazzazza.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Robert E Lee",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-16 Area Music_ Robert E Lee.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Mississippi Cabaret",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-17 Area Music_ Mississippi Cabaret.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Saxema",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-18 Area Music_ Saxema.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Silver Heels",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-19 Area Music_ Silver Heels.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1976) Tickle the Ivories",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-20 Area Music_ Tickle the Ivories.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Morning Area Loop (1976)",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-21 Area Loop_ Morning Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Evening Area Loop (1976)",
        "artist": "Albert White and his Gaslight Orchestra",
        "mp3": BASE_URL + "/Main Street U.S.A. (1976-1992)-22 Area Loop_ Evening Loop.webm",
        "comments": "",
        "tags": []
      },
      "Main Street U.S.A, 1992",
      {
        "title": "(1992) Old Timers Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-01 Area Music_ Old Timers Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1992) Beautiful Beulah",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-02 Area Music_ Beautiful Beulah.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1992) Fortuosity",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-03 Area Music_ Fortuosity.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1992) Goodbye My Coney Island Baby",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-04 Area Music_ Goodbye My Coney Island Baby.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1992) I Could Love a Million Girls",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-05 Area Music_ I Could Love a Million Girls.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1992) Lets Have a Drink on It",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-06 Area Music_ Lets Have a Drink on It.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1992) Mary is a Grand Ol Name",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-07 Area Music_ Mary is a Grand Ol Name.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1992) Yankee Doodle Boy",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-08 Area Music_ Yankee Doodle Boy.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1992) Smiles",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-09 Area Music_ Smiles.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1992) Summer Magic Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-10 Area Music_ Summer Magic Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1992) Music Man Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-11 Area Music_ Music Man Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1992) Hello Dolly Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-12 Area Music_ Hello Dolly Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "(1992) Oklahoma Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-13 Area Music_ Oklahoma Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (1992)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (1992-2012)-14 Area Loop.webm",
        "comments": "",
        "tags": []
      },
      "Main Street U.S.A, 2013",
      {
        "title": "(2013) Married Life",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (2013)-01 Area Music_ Married Life.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (2013)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (2013)-02 Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Morning Area Loop (2013)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (2013)-03 Area Loop 1.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Evening Area Loop (2013)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street U.S.A. (2013)-04 Area Loop 2.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-02 Main Street_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Area Loop (Holiday, Remastered)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-03 Main Street_ Area Loop (Remastered).webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Main Street: Music Box (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-04 Main Street_ Music Box.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      }
    ]
  },
  {
    "name": "Main Street",
    "poster": "AlbumArt/Main Street.jpeg",
    "location": [33.81224763565902, -117.91897946556308],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Main Street U.S.A. Atmosphere: Penny Arcade Sounds & The Welte Orchestrion",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Main Street-01 Main Street U.S.A. Atmosphere_ Penny Arcade Sounds & The Welte Orchestrion.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Coke Corner: Alexander's Ragtime Band",
        "artist": "Chris Calabrese",
        "mp3": BASE_URL + "/Main Street-02 Coke Corner_ Alexander_s Ragtime Band.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Coke Corner: Ragtime Favorites",
        "artist": "Chris Calabrese",
        "mp3": BASE_URL + "/Main Street-03 Coke Corner_ Ragtime Favorites.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Coke Corner: Main Street Medley",
        "artist": "Chris Calabrese",
        "mp3": BASE_URL + "/Main Street-04 Coke Corner_ Main Street Medley.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Coke Corner: Alice In Wonderland Medley",
        "artist": "Chris Calabrese",
        "mp3": BASE_URL + "/Main Street-05 Coke Corner_ Alice In Wonderland Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Coke Corner: Country Bear Jamboree Medley",
        "artist": "Chris Calabrese",
        "mp3": BASE_URL + "/Main Street-06 Coke Corner_ Country Bear Jamboree Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Coke Corner: Yo Ho & Grim Grinning Ghost Medley",
        "artist": "Chris Calabrese",
        "mp3": BASE_URL + "/Main Street-07 Coke Corner_ Yo Ho & Grim Grinning Ghost Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Coke Corner: Toontown Medley",
        "artist": "Chris Calabrese",
        "mp3": BASE_URL + "/Main Street-08 Coke Corner_ Toontown Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Coke Corner: One Little Spark",
        "artist": "Chris Calabrese",
        "mp3": BASE_URL + "/Main Street-09 Coke Corner_ One Little Spark.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Coke Corner: World Showcase Medley",
        "artist": "Chris Calabrese",
        "mp3": BASE_URL + "/Main Street-10 Coke Corner_ World Showcase Medley.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Jolly Holiday Bakery",
    "poster": "AlbumArt/Jolly Holiday Bakery.jpeg",
    "location": [33.81160768964084, -117.91948443432649],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Jolly Holiday Bakery: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jolly Holiday Bakery-01 Jolly Holiday Bakery_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Plaza Inn: Character Breakfast Music Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jolly Holiday Bakery-02 The Plaza Inn_ Character Breakfast Music Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Plaza Inn: Lunchtime Music Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jolly Holiday Bakery-03 The Plaza Inn_ Lunchtime Music Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Plaza Inn: Evening Music Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jolly Holiday Bakery-04 The Plaza Inn_ Evening Music Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Plaza Inn: Quartet",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jolly Holiday Bakery-05 The Plaza Inn_ Quartet.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Carnation Plaza: Let's Dance at Disneyland",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jolly Holiday Bakery-06 Carnation Plaza_ Let_s Dance at Disneyland.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Central Plaza",
    "poster": "AlbumArt/Central Plaza.jpeg",
    "location": [33.81211345045878, -117.9189816158644],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Hub Introduction",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Central Plaza-01 Hub Introduction.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "A Gala Day at Disneyland",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Central Plaza-02 A Gala Day at Disneyland.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Central Plaza-03 Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Adventureland: Introduction & Theme Song",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Central Plaza-04 Adventureland_ Introduction & Theme Song.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Adventureland: Hawaiian Bandstand",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Central Plaza-05 Adventureland_ Hawaiian Bandstand.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Frontierland: Introduction & Theme Song",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Central Plaza-06 Frontierland_ Introduction & Theme Song.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Fronteirland: Stockade Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Central Plaza-07 Fronteirland_ Stockade Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Tomorrowland: Introduction & Theme Song",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Central Plaza-08 Tomorrowland_ Introduction & Theme Song.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Fantasyland: Introduction & Theme Song",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Central Plaza-09 Fantasyland_ Introduction & Theme Song.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Fantasyland: Sleeping Beauty Castle Drawbridge",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Central Plaza-10 Fantasyland_ Sleeping Beauty Castle Drawbridge.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Fantasy Faire",
    "poster": "AlbumArt/Fantasy Faire.jpeg",
    "location": [33.812595823181105, -117.91944016525818],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Clopin's Music Box: Clopin's Music Box",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasy Faire-01 Clopin_s Music Box_ Clopin_s Music Box.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Princess Academy: Royal Coronation Ceremony",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasy Faire-02 Princess Academy_ Royal Coronation Ceremony.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Princess Academy: Royal Coronation and Faire",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasy Faire-03 Princess Academy_ Royal Coronation and Faire.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Princess Academy: Princesse's Entrance",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasy Faire-04 Princess Academy_ Princesse_s Entrance.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Princess Academy: Royal Dance Training",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasy Faire-05 Princess Academy_ Royal Dance Training.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Princess Academy: Royal Etiquette Training",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasy Faire-06 Princess Academy_ Royal Etiquette Training.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Princess Academy: Royal Pledge and Celebration",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasy Faire-07 Princess Academy_ Royal Pledge and Celebration.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Rapunzel's Tower",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasy Faire-08 Rapunzel_s Tower.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Rapunzel's Tower: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasy Faire-09 Rapunzel_s Tower_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Royal Hall: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasy Faire-10 Royal Hall_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Princess Meet and Greet: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasy Faire-11 Princess Meet and Greet_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Village Area: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasy Faire-12 Village Area_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Pixie Hollow",
    "poster": "AlbumArt/Pixie Hollow.jpeg",
    "location": [33.81249652031449, -117.91821203558959],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Pixie Hollow: Area Loop: Suite",
        "artist": "Joel McNeely",
        "mp3": BASE_URL + "/Pixie Hollow-01 Pixie Hollow_ Area Loop_ Suite.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Pixie Hollow: Area Loop: Soundtrack",
        "artist": "Joel McNeely",
        "mp3": BASE_URL + "/Pixie Hollow-02 Pixie Hollow_ Area Loop_ Soundtrack.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Pixie Hollow: Area Loop: Soundtrack (Extended)",
        "artist": "Joel McNeely",
        "mp3": BASE_URL + "/Pixie Hollow-03 Pixie Hollow_ Area Loop_ Soundtrack (Extended).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Triton's Garden & Ariel's Grotto: Entrance Music",
        "artist": "Alan Menken",
        "mp3": BASE_URL + "/Pixie Hollow-04 Triton_s Garden & Ariel_s Grotto_ Entrance Music.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Triton's Garden & Ariel's Grotto: Area Loop",
        "artist": "Alan Menken",
        "mp3": BASE_URL + "/Pixie Hollow-05 Triton_s Garden & Ariel_s Grotto_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Triton's Garden & Ariel's Grotto: Area Loop (Extended)",
        "artist": "Alan Menken",
        "mp3": BASE_URL + "/Pixie Hollow-06 Triton_s Garden & Ariel_s Grotto_ Area Loop (Extended).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Snow White's Grotto: Wishing Well",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Pixie Hollow-07 Snow White_s Grotto_ Wishing Well.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Sleeping Beauty Castle",
    "poster": "AlbumArt/Sleeping Beauty Castle.jpeg",
    "location": [33.81277527798908, -117.91898398572836],
    "tags": ["DL"],
    "tracks": [
      "Sleeping Beauty Castle Walkthrough",
      {
        "title": "Sleeping Beauty Castle: Area Music (1983): When You Wish Upon A Star",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-01 Sleeping Beauty Castle_ Area Music (1983)_ When You Wish Upon A Star.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sleeping Beauty Castle: Area Music (1992): Castle Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-02 Sleeping Beauty Castle_ Area Music (1992)_ Castle Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sleeping Beauty Castle: Winter Castle Lighting Ceremony",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-24 Sleeping Beauty Castle_ Winter Castle Lighting Ceremony.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Sleeping Beauty Castle: Walk Through",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-03 Sleeping Beauty Castle_ Walk Through.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sleeping Beauty Castle: Walk Through (Extended)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-04 Sleeping Beauty Castle_ Walk Through (Extended).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      "Area Music",
      {
        "title": "Area Loop (1983): Castle Courtyard",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-05 Area Loop (1983)_ Castle Courtyard.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Area Music (1983): When You Wish Upon a Star",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-06 Area Music (1983)_ When You Wish Upon a Star.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2013): When You Wish Upon a Star",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-07 Area Music (2013)_ When You Wish Upon a Star.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2013): Be Our Guest",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-08 Area Music (2013)_ Be Our Guest.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2013): Touch the Sky",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-09 Area Music (2013)_ Touch the Sky.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2013): Someday My Prince Will Come",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-10 Area Music (2013)_ Someday My Prince Will Come.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2013): Heigh Ho",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-11 Area Music (2013)_ Heigh Ho.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Christmas Chalet: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-22 Mickey_s Christmas Chalet_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Disney Villian's Lair: Music Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-12 Disney Villian_s Lair_ Music Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      "Casey Jr. Circus Train",
      {
        "title": "Casey Jr. Circus Train: Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-13 Casey Jr. Circus Train_ Ride.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      "Mad Tea Party",
      {
        "title": "Mad Tea Party: Area Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Sleeping Beauty Castle-14 Mad Tea Party_ Area Music.webm",
        "comments": "",
        "tags": []
      },
      "Storybook Land Canal Boats",
      {
        "title": "Storybook Land: Grotto: Area Background Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Storybook Land-01 Storybook Land_ Grotto_ Area Background Music.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Dark Rides",
    "poster": "AlbumArt/Dark Rides.jpeg",
    "location": [33.81309762523345, -117.91873755761517],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Darkride Suite",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-01 Darkride Suite.webm",
        "comments": "",
        "tags": []
      },
      "Snow White's Scary Adventures",
      {
        "title": "Snow White's Scary Adventures: The Witch's Dungeon (1983)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-02 Snow White_s Scary Adventures_ The Witch_s Dungeon (1983).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Snow White's Scary Adventures: The Witch's Dungeon (1992)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-03 Snow White_s Scary Adventures_ The Witch_s Dungeon (1992).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Snow White's Scary Adventures: Queue Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-04 Snow White_s Scary Adventures_ Queue Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Snow White's Scary Adventures: Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-05 Snow White_s Scary Adventures_ Ride.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Snow White's Scary Adventures: Ride Extended",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-06 Snow White_s Scary Adventures_ Ride Extended.webm",
        "comments": "",
        "tags": []
      },
      "Pinocchio's Daring Journey",
      {
        "title": "Pinocchio's Daring Journey: Queue Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-07 Pinocchio_s Daring Journey_ Queue Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Pinocchio's Daring Journey: Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-08 Pinocchio_s Daring Journey_ Ride.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Pinocchio's Daring Journey: Ride Extended",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-09 Pinocchio_s Daring Journey_ Ride Extended.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Pinocchio's Daring Journey: Ride Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-10 Pinocchio_s Daring Journey_ Ride Score.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Pinocchio's Daring Journey: Exit Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-11 Pinocchio_s Daring Journey_ Exit Loop.webm",
        "comments": "",
        "tags": []
      },
      "Peter Pan's Flight",
      {
        "title": "Peter Pan's Flight: Queue Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-12 Peter Pan_s Flight_ Queue Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Peter Pan's Flight: Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-13 Peter Pan_s Flight_ Ride.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Peter Pan's Flight: Ride Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-14 Peter Pan_s Flight_ Ride Score.webm",
        "comments": "",
        "tags": []
      },
      "Mr. Toad's Wild Ride",
      {
        "title": "Mr. Toad's Wild Ride: Queue Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-15 Mr. Toad_s Wild Ride_ Queue Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Mr. Toad's Wild Ride: Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-16 Mr. Toad_s Wild Ride_ Ride.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Mr. Toad's Wild Ride: Ride Extended",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-17 Mr. Toad_s Wild Ride_ Ride Extended.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mr. Toad's Wild Ride: Ride Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dark Rides-18 Mr. Toad_s Wild Ride_ Ride Score.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Alice in Wonderland",
    "poster": "AlbumArt/Alice in Wonderland.jpeg",
    "location": [33.81329383958443, -117.91836944151387],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Area Music: Alice in Wonderland",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-01 Area Music_ Alice in Wonderland.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Queue Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-02 Queue Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Boarding Announcements",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-03 Boarding Announcements.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-04 Ride.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ride Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-05 Ride Score.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Gloomy Wood (Entrance Tunnel)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-06 Gloomy Wood (Entrance Tunnel).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Twas Brillig/The Tulgey Wood",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-07 Twas Brillig_The Tulgey Wood.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Caucus Race",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-08 Caucus Race.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "In the Golden Afternoon 1",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-09 In the Golden Afternoon 1.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "In the Golden Afternoon 2",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-10 In the Golden Afternoon 2.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "AEIOU",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-11 AEIOU.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Tulgey Wood",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-12 The Tulgey Wood.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Painting the Roses Red 1",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-13 Painting the Roses Red 1.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Painting the Roses Red 2",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-14 Painting the Roses Red 2.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "March of the Cards 1",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-15 March of the Cards 1.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "March of the Cards 2",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-16 March of the Cards 2.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "March of the Cards 3",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-17 March of the Cards 3.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "March of the Cards 4",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-18 March of the Cards 4.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Off with Her Head 1",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-19 Off with Her Head 1.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Off with Her Head 2",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Alice in Wonderland-20 Off with Her Head 2.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Dumbo Flying Elephants",
    "poster": "AlbumArt/Dumbo Flying Elephants.jpeg",
    "location": [33.81368691108213, -117.9189510831057],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Dumbo Flying Elephants: Area Music: Casey Jr.",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dumbo Flying Elephants-01 Dumbo Flying Elephants_ Area Music_ Casey Jr.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Dumbo Flying Elephants: Area Music: Circus Parade",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dumbo Flying Elephants-02 Dumbo Flying Elephants_ Area Music_ Circus Parade.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Dumbo Flying Elephants: Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dumbo Flying Elephants-03 Dumbo Flying Elephants_ Ride.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Fantasyland Band Organ: Once Upon a Dream",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dumbo Flying Elephants-04 Fantasyland Band Organ_ Once Upon a Dream.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Fantasyland Band Organ: Sleeping Beauty Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dumbo Flying Elephants-05 Fantasyland Band Organ_ Sleeping Beauty Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Fantasyland Band Organ: Mickey and Friends",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dumbo Flying Elephants-06 Fantasyland Band Organ_ Mickey and Friends.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Fantasyland Band Organ: Bibbidi-Bobbidi-Boo",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dumbo Flying Elephants-07 Fantasyland Band Organ_ Bibbidi-Bobbidi-Boo.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Fantasyland Band Organ: Loop (1983)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dumbo Flying Elephants-08 Fantasyland Band Organ_ Loop (1983).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Fantasyland Band Organ: Loop (2012)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Dumbo Flying Elephants-09 Fantasyland Band Organ_ Loop (2012).webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "It's a Small World",
    "poster": "AlbumArt/It_s a Small World.jpeg",
    "location": [33.81465336260636, -117.91785425635084],
    "tags": ["DL"],
    "tracks": [
      "Toy Clock Parade",
      {
        "title": "Toy Clock Parade",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-01 Clock Parade.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Toy Clock Parade (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-16 It_s a Small World_ Toy Clock Parade.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      "Nighttime Projection Shows",
      {
        "title": "Projection Show: Holidays",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-20 It_s a Small World_ Projection Show.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Projection Show: The Magic, the Memories, and You (2011)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-12 Small World Night Show_ The Magic, the Memories, and You.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      "Area Music",
      {
        "title": "Area Music (1964 World's Fair)",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-02 Area Music (1964).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Entrance Music (1964 World's Fair)",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-03 Entrance Music (1964).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (1993-2003)",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-05 Queue Loop (1983).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (1964, 2003)",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-04 Queue Loop (1964).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-17 It_s a Small World_ Area Music.webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      "Ride",
      {
        "title": "Theme",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-06 Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ride (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-19 It_s a Small World_ Ride.webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Variation I",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-07 Variation I.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Variation II",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-08 Variation II.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Medley",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-09 Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Medley (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-18 It_s a Small World_ Medley.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Float Through",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-10 Float Through.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Float Through (Extended)",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-11 Float Through (Extended).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Score 1",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-12 Score 1.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Score 2",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-13 Score 2.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      "Others",
      {
        "title": "Safety Spiel",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-14 Safety Spiel.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Music",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/It's a Small World-15 Exit Music.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Matterhorn Bobsleds",
    "poster": "AlbumArt/Matterhorn Bobsleds.jpeg",
    "location": [33.813036192464715, -117.91788129946362],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Pinocchio's Village Haus: Area Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Matterhorn Bobsleds-01 Pinocchio_s Village Haus_ Area Music.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Pinocchio's Village Haus: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Matterhorn Bobsleds-02 Pinocchio_s Village Haus_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Alpine Gardens: Sounds of the Matterhorn",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Matterhorn Bobsleds-03 Alpine Gardens_ Sounds of the Matterhorn.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Alpine Gardens: Swiss Polka Band",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Matterhorn Bobsleds-04 Alpine Gardens_ Swiss Polka Band.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Queue Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Matterhorn Bobsleds-06 Queue Loop Reconstruction.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sounds",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Matterhorn Bobsleds-07 Sounds.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Remain Seated Narration",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Matterhorn Bobsleds-08 Remain Seated Narration.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Climbers Announcements",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Matterhorn Bobsleds-10 Climbers Announcements.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Adventureland",
    "poster": "AlbumArt/Adventureland.jpeg",
    "location": [33.81163789546132, -117.91980509443515],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Adventureland Gateway - Native Drum Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Adventureland-01 Adventureland Gateway - Native Drum Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Adventureland Suite",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/Adventureland-02 Adventureland Suite.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Hawaiian Bandstand: Performance",
        "artist": "The Kahauanu Trio",
        "mp3": BASE_URL + "/Adventureland-03 Hawaiian Bandstand_ Performance.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Veranda: Interior Loop (1971)",
        "artist": "Jack Wagner",
        "mp3": BASE_URL + "/Adventureland-04 Veranda_ Interior Loop (1971).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Aladdin's Oasis: The Marketplace",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Adventureland-05 Aladdin_s Oasis_ The Marketplace.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Aladdins Oasis: Area Loop (1993)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Adventureland-06 Aladdins Oasis_ Area Loop (1993).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Bazaar: Area Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Adventureland-07 Bazaar_ Area Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Bazaar: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Adventureland-08 Bazaar_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Steel Drum Band",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Adventureland-09 Steel Drum Band.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Enchanted Tiki Room",
    "poster": "AlbumArt/Enchanted Tiki Room.jpeg",
    "location": [33.81170779334197, -117.919615883569],
    "tags": ["DL"],
    "tracks": [
      "Enchanted Tiki Garden",
      {
        "title": "Tiki Room Preshow",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-01 Enchanted Tiki Garden_ Tiki Room Preshow.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tiki Room Preshow with background",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-02 Enchanted Tiki Garden_ Tiki Room Preshow with background.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tiki Room Preshow - United Airlines",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-03 Enchanted Tiki Garden_ Tiki Room Preshow - United Airlines.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Moonlight Time in Old Hawaii (1963)",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/Enchanted Tiki Room-04 Enchanted Tiki Garden_ Moonlight Time in Old Hawaii (1963).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (1963-1970)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-05 Enchanted Tiki Garden_ Area Loop (1963-1970).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Area Loop (1971-1985)",
        "artist": "Jack Wagner",
        "mp3": BASE_URL + "/Enchanted Tiki Room-06 Enchanted Tiki Garden_ Area Loop (1971-1985).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Area Loop (1986)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-07 Enchanted Tiki Garden_ Area Loop (1986).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Enchanted Tiki Juice Bar: Dole Pineapple Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-08 Enchanted Tiki Juice Bar_ Dole Pineapple Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      "Walt Disney's Enchanted Tiki Room",
      {
        "title": "The Tiki Tiki Tiki Room",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Enchanted Tiki Room-10 Enchanted Tiki Room_ The Tiki Tiki Tiki Room.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Let's All Sing Like the Birdies Sing",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Enchanted Tiki Room-11 Enchanted Tiki Room_ Let_s All Sing Like the Birdies Sing.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "War Chant",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Enchanted Tiki Room-12 Enchanted Tiki Room_ War Chant.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Finale",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Enchanted Tiki Room-13 Enchanted Tiki Room_ Finale.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Full Show",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-14 Enchanted Tiki Room_ Full Show.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Tiki Tiki Tiki Room Score",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Enchanted Tiki Room-15 Enchanted Tiki Room_ The Tiki Tiki Tiki Room Score.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Elfenchor from Die Rheinnixen Barcarolle Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-16 Enchanted Tiki Room_ Elfenchor from Die Rheinnixen Barcarolle Score.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Lets All Sing Like the Birdies Sing Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-17 Enchanted Tiki Room_ Lets All Sing Like the Birdies Sing Score.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Hawaiian War Chant Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-18 Enchanted Tiki Room_ Hawaiian War Chant Score.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Farewell to You Heigh Ho Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-19 Enchanted Tiki Room_ Farewell to You Heigh Ho Score.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Demo Recording",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-20 Enchanted Tiki Room_ Demo Recording.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      "Tahitian Terrace",
      {
        "title": "Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-21 Tahitian Terrace_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Liki Tikis",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-22 Tahitian Terrace_ The Liki Tikis.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Polynesian War Dance",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-23 Tahitian Terrace_ Polynesian War Dance.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Legend of the Island Jewel",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Enchanted Tiki Room-24 Tahitian Terrace_ The Legend of the Island Jewel.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Jungle Cruise",
    "poster": "AlbumArt/Jungle Cruise.jpeg",
    "location": [33.81070415330524, -117.92010032107494],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Warrior Drums",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jungle Cruise-01 Warrior Drums.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Background Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jungle Cruise-02 Area Background Music.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Jingle Cruise: Queue Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-06 The Jingle Cruise_ Queue Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Tropical Imports: Shortwave Radio",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jungle Cruise-03 Tropical Imports_ Shortwave Radio.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): Here Comes My Ball and Chain",
        "artist": "Coon-Sanders",
        "mp3": BASE_URL + "/Jungle Cruise-04 Radio Queue Music (1991 - 1995)_ Here Comes My Ball and Chain.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): With Plenty of Money and You",
        "artist": "Harry Warren",
        "mp3": BASE_URL + "/Jungle Cruise-05 Radio Queue Music (1991 - 1995)_ With Plenty of Money and You.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): Jeepers Creepers",
        "artist": "Louis Armstrong",
        "mp3": BASE_URL + "/Jungle Cruise-06 Radio Queue Music (1991 - 1995)_ Jeepers Creepers.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): Yes, Yes (My Baby Said Yes)",
        "artist": "Ambrose and His Orchestra",
        "mp3": BASE_URL + "/Jungle Cruise-07 Radio Queue Music (1991 - 1995)_ Yes, Yes (My Baby Said Yes).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): Song of India",
        "artist": "Rimsky/Korsakoy/arr.Grofe",
        "mp3": BASE_URL + "/Jungle Cruise-08 Radio Queue Music (1991 - 1995)_ Song of India.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): It's the Girl",
        "artist": "Baer",
        "mp3": BASE_URL + "/Jungle Cruise-09 Radio Queue Music (1991 - 1995)_ It_s the Girl.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): Rhythm King",
        "artist": "Coon-Sanders",
        "mp3": BASE_URL + "/Jungle Cruise-10 Radio Queue Music (1991 - 1995)_ Rhythm King.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): Love Is Good For Anything That Ails You",
        "artist": "Ida Sue McCune",
        "mp3": BASE_URL + "/Jungle Cruise-11 Radio Queue Music (1991 - 1995)_ Love Is Good For Anything That Ails You.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): Harlem River Quiver",
        "artist": "Duke Ellington",
        "mp3": BASE_URL + "/Jungle Cruise-12 Radio Queue Music (1991 - 1995)_ Harlem River Quiver.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): What a Girl! What a Night!",
        "artist": "Coon-Sanders",
        "mp3": BASE_URL + "/Jungle Cruise-13 Radio Queue Music (1991 - 1995)_ What a Girl! What a Night!.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): Anything Goes",
        "artist": "Paul Whiteman",
        "mp3": BASE_URL + "/Jungle Cruise-14 Radio Queue Music (1991 - 1995)_ Anything Goes.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): The Mooche",
        "artist": "Duke Ellington",
        "mp3": BASE_URL + "/Jungle Cruise-15 Radio Queue Music (1991 - 1995)_ The Mooche.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1991 - 1995): The King's Horses",
        "artist": " Jack Hylton",
        "mp3": BASE_URL + "/Jungle Cruise-16 Radio Queue Music (1991 - 1995)_ The King_s Horses.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Loop (1991 - 1995)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jungle Cruise-17 Radio Queue Loop (1991 - 1995).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): As Time Goes By",
        "artist": "Adelaide Hall",
        "mp3": BASE_URL + "/Jungle Cruise-18 Radio Queue Music (1995)_ As Time Goes By.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): Moonglow",
        "artist": "Will Hudson, Eddie DeLange & Irving Mills",
        "mp3": BASE_URL + "/Jungle Cruise-19 Radio Queue Music (1995)_ Moonglow.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): Sentimental Journey",
        "artist": "The Merry Macs",
        "mp3": BASE_URL + "/Jungle Cruise-20 Radio Queue Music (1995)_ Sentimental Journey.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): Deep Purple",
        "artist": "Peter DeRose & Mitchell Parish",
        "mp3": BASE_URL + "/Jungle Cruise-22 Radio Queue Music (1995)_ Deep Purple.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): Moon Over Burma",
        "artist": "Dorothy Lamour",
        "mp3": BASE_URL + "/Jungle Cruise-23 Radio Queue Music (1995)_ Moon Over Burma.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): Flamingo",
        "artist": "Duke Ellington & Herb Jeffries",
        "mp3": BASE_URL + "/Jungle Cruise-24 Radio Queue Music (1995)_ Flamingo.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): On a Slow Boat to China",
        "artist": "F. Loesser",
        "mp3": BASE_URL + "/Jungle Cruise-25 Radio Queue Music (1995)_ On a Slow Boat to China.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): Sing, Sing, Sing",
        "artist": "Louis Prima",
        "mp3": BASE_URL + "/Jungle Cruise-26 Radio Queue Music (1995)_ Sing, Sing, Sing.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): I'll Be Seeing You",
        "artist": "Sammy Fain",
        "mp3": BASE_URL + "/Jungle Cruise-27 Radio Queue Music (1995)_ I_ll Be Seeing You.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): When Buddha Smiles",
        "artist": "Nacio Herb Brown & Arthur Freed",
        "mp3": BASE_URL + "/Jungle Cruise-28 Radio Queue Music (1995)_ When Buddha Smiles.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): Goodnight Wherever You Are",
        "artist": "Harry Leader",
        "mp3": BASE_URL + "/Jungle Cruise-29 Radio Queue Music (1995)_ Goodnight Wherever You Are.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): Moonlight On the Ganges",
        "artist": "Jimmy Dorsey",
        "mp3": BASE_URL + "/Jungle Cruise-30 Radio Queue Music (1995)_ Moonlight On the Ganges.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): Someone's Rocking My Dreamboat",
        "artist": "Leon Rene, Otis Rene & Emerson Scott",
        "mp3": BASE_URL + "/Jungle Cruise-31 Radio Queue Music (1995)_ Someone_s Rocking My Dreamboat.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): Moonlight Serenade",
        "artist": "Mitchell Parish & Glenn Miller",
        "mp3": BASE_URL + "/Jungle Cruise-32 Radio Queue Music (1995)_ Moonlight Serenade.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Loop (1995)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jungle Cruise-33 Radio Queue Loop (1995).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Dock Elements",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jungle Cruise-34 Dock Elements.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Jungle Sounds",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Jungle Cruise-35 Jungle Sounds.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Float Through (1968)",
        "artist": "Thurl Ravenscroft",
        "mp3": BASE_URL + "/Jungle Cruise-36 Float Through (1968).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Queue Music (1995): Intermezzo",
        "artist": "Robert Henning & Heinz Provost",
        "mp3": BASE_URL + "/Jungle Cruise-21 Radio Queue Music (1995)_ Intermezzo.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Indiana Jones Adventure",
    "poster": "AlbumArt/Indiana Jones Adventure.jpeg",
    "location": [33.811023660747246, -117.92057219049875],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Jungle Sounds",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-01 Jungle Sounds.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Temple Grounds Ambience",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-02 Temple Grounds Ambience.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Radio Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-03 Radio Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop (Reconstruction)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-04 Radio Loop (Reconstruction).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: (I Got Spurs That) Jingle, Jangle, Jingle",
        "artist": "Kay Kyser and His Orchestra",
        "mp3": BASE_URL + "/Indiana Jones Adventure-05 Radio Loop_ (I Got Spurs That) Jingle, Jangle, Jingle.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: Let's Dance",
        "artist": "F. Baldridge, G. Stone & J. Bonime",
        "mp3": BASE_URL + "/Indiana Jones Adventure-06 Radio Loop_ Let_s Dance.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: Deep Purple",
        "artist": "Artie Shaw",
        "mp3": BASE_URL + "/Indiana Jones Adventure-07 Radio Loop_ Deep Purple.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: Jukebox Saturday Night",
        "artist": "Glenn Miller and His Orchestra",
        "mp3": BASE_URL + "/Indiana Jones Adventure-08 Radio Loop_ Jukebox Saturday Night.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: In the Mood",
        "artist": "Glenn Miller and His Orchestra",
        "mp3": BASE_URL + "/Indiana Jones Adventure-09 Radio Loop_ In the Mood.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: There Goes That Song Again",
        "artist": "Kay Kyser and His Orchestra",
        "mp3": BASE_URL + "/Indiana Jones Adventure-10 Radio Loop_ There Goes That Song Again.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: In a Little Spanish Town",
        "artist": "Tommy Dorsey",
        "mp3": BASE_URL + "/Indiana Jones Adventure-11 Radio Loop_ In a Little Spanish Town.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: Indian Summer",
        "artist": "Kay Kyser and His Orchestra & Ginny Simms",
        "mp3": BASE_URL + "/Indiana Jones Adventure-12 Radio Loop_ Indian Summer.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: Harlem Rhythm Dance",
        "artist": "Claude Hopkins",
        "mp3": BASE_URL + "/Indiana Jones Adventure-13 Radio Loop_ Harlem Rhythm Dance.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: Little Brown Jug",
        "artist": "Glenn Miller and His Orchestra",
        "mp3": BASE_URL + "/Indiana Jones Adventure-14 Radio Loop_ Little Brown Jug.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: In the Shade of the Old Apple Tree",
        "artist": "Claude Hopkins",
        "mp3": BASE_URL + "/Indiana Jones Adventure-15 Radio Loop_ In the Shade of the Old Apple Tree.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: Song of India",
        "artist": "Tommy Dorsey",
        "mp3": BASE_URL + "/Indiana Jones Adventure-16 Radio Loop_ Song of India.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop: Moonlight Serenade",
        "artist": "Glenn Miller and His Orchestra",
        "mp3": BASE_URL + "/Indiana Jones Adventure-17 Radio Loop_ Moonlight Serenade.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Temple Ambience",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-18 Temple Ambience.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Temple Area Drums",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-19 Temple Area Drums.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Bat Cave",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-20 Bat Cave.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Full Queue Walk Through",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-21 Full Queue Walk Through.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "News Reel",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-22 News Reel.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sallah's Spiels",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-23 Sallah_s Spiels.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-24 Ride.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ride (2023)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-24 Ride (2023).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Score",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Indiana Jones Adventure-25 Score.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-26 Exit.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Indiana Jones: Stunt Spectacular",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Indiana Jones Adventure-27 Indiana Jones_ Stunt Spectacular.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Bengal Barbecue",
    "poster": "AlbumArt/Bengal Barbecue.jpeg",
    "location": [33.811549921121106, -117.9203081720281],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Area Loop",
        "artist": "BalafÃ³n Marimba Ensemble",
        "mp3": BASE_URL + "/Bengal Barbecue-01 Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Area Music: I Already Have A Husband",
        "artist": "BalafÃ³n Marimba Ensemble",
        "mp3": BASE_URL + "/Bengal Barbecue-02 Area Music_ I Already Have A Husband.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Nhamo",
        "artist": "BalafÃ³n Marimba Ensemble",
        "mp3": BASE_URL + "/Bengal Barbecue-03 Area Music_ Nhamo.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Caderas",
        "artist": "BalafÃ³n Marimba Ensemble",
        "mp3": BASE_URL + "/Bengal Barbecue-04 Area Music_ Caderas.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Taireva (I Already Told You)",
        "artist": "BalafÃ³n Marimba Ensemble",
        "mp3": BASE_URL + "/Bengal Barbecue-05 Area Music_ Taireva (I Already Told You).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Temerina",
        "artist": "BalafÃ³n Marimba Ensemble",
        "mp3": BASE_URL + "/Bengal Barbecue-06 Area Music_ Temerina.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Amatoto",
        "artist": "BalafÃ³n Marimba Ensemble",
        "mp3": BASE_URL + "/Bengal Barbecue-07 Area Music_ Amatoto.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Nhimutimu",
        "artist": "BalafÃ³n Marimba Ensemble",
        "mp3": BASE_URL + "/Bengal Barbecue-08 Area Music_ Nhimutimu.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Mashamba Nzou",
        "artist": "BalafÃ³n Marimba Ensemble",
        "mp3": BASE_URL + "/Bengal Barbecue-09 Area Music_ Mashamba Nzou.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Adventureland Tree House",
    "poster": "AlbumArt/Adventureland Tree House.jpeg",
    "location": [33.81128958080381, -117.92055225570626],
    "tags": ["DL"],
    "tracks": [
      "Swiss Family Robinsion Tree House (1962-1999)",
      {
        "title": "Swiss Family Robinson Tree House: Swisskapolka",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Adventureland Tree House-01 Swiss Family Robinson Tree House_ Swisskapolka.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Swiss Family Treehouse: Christmas Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-07 Swiss Family Treehouse_ Christmas Medley.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      "Tarzan's Treehouse (1999-2021)",
      {
        "title": "Tarzan's Treehouse: Queue Loop",
        "artist": "Phil Collins",
        "mp3": BASE_URL + "/Adventureland Tree House-02 Tarzan_s Treehouse_ Queue Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tarzan's Treehouse: Sketchroom Loop",
        "artist": "Phil Collins",
        "mp3": BASE_URL + "/Adventureland Tree House-03 Tarzan_s Treehouse_ Sketchroom Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tarzan's Treehouse: Medley",
        "artist": "Phil Collins",
        "mp3": BASE_URL + "/Adventureland Tree House-04 Tarzan_s Treehouse_ Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tarzan's Treehouse: Medley Extended",
        "artist": "Phil Collins",
        "mp3": BASE_URL + "/Adventureland Tree House-05 Tarzan_s Treehouse_ Medley Extended.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Hathi's Outpost: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Adventureland Tree House-06 Hathi_s Outpost_ Area Loop.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Pirates of the Caribbean",
    "poster": "AlbumArt/Pirates of the Caribbean.jpeg",
    "location": [33.811073771060435, -117.92090629202276],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "The Bootstrappers Pirate Band: Yo Ho",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Pirates of the Caribbean-01 The Bootstrappers Pirate Band_ Yo Ho.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Bootstrappers Pirate Band: Street Performance",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Pirates of the Caribbean-02 The Bootstrappers Pirate Band_ Street Performance.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Overture",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-03 Overture.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Queue Loop",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-04 Queue Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Bayou Banjo",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-05 Bayou Banjo.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Blue Bayou",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-06 The Blue Bayou.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Talking Jolly Roger",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-07 Talking Jolly Roger.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Dead Man's Cove",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-08 Dead Man_s Cove.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Dead Man's Cove (Score)",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-09 Dead Man_s Cove (Score).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Yo Ho: Instrumental",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-10 Yo Ho_ Instrumental.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Yo Ho: Concertina",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-11 Yo Ho_ Concertina.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Scare Me Music",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-12 Scare Me Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Pirate Arcade",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-13 The Pirate Arcade.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Float Through (Version 1)",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-14 Float Through (Version 1).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Float Through (Version 2)",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-15 Float Through (Version 2).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Float Through (2006)",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-16 Float Through (2006).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Float Through (Extended) (2006)",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-17 Float Through (Extended) (2006).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Medley",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-18 Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Safety Spiel",
        "artist": "George Bruns & Xavier Antencio",
        "mp3": BASE_URL + "/Pirates of the Caribbean-19 Safety Spiel.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Pirates: Port Royal Curios and Curiosities: Music Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Pirates of the Caribbean-20 Pirates_ Port Royal Curios and Curiosities_ Music Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Pirates: Pirate Cove: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Pirates of the Caribbean-21 Pirates_ Pirate Cove_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Pirates: Lafittes Tavern: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Pirates of the Caribbean-22 Pirates_ Lafittes Tavern_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Club 33",
    "poster": "AlbumArt/Club 33.jpeg",
    "location": [33.81092903542528, -117.92119526975375],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "So This is Love",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-01 So This is Love.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Bella Notte",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-02 Bella Notte.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Little April Showers",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-03 Little April Showers.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lavender Blue Dilly Dilly",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-04 Lavender Blue Dilly Dilly.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Second Star to the Right",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-05 The Second Star to the Right.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "You Can Fly You Can Fly You Can Fly",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-06 You Can Fly You Can Fly You Can Fly.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Yo Ho A Pirates Life for Me",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-07 Yo Ho A Pirates Life for Me.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "It's a Small World",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-08 It_s a Small World.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Alice in Wonderland",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-09 Alice in Wonderland.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "In a World of My Own",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-10 In a World of My Own.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "All in the Golden Afternoon",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-11 All in the Golden Afternoon.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Part of Your World",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-12 Part of Your World.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Feed the Birds",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-13 Feed the Birds.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Beauty and the Beast",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-14 Beauty and the Beast.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Grim Grinning Ghosts",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-15 Grim Grinning Ghosts.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Music Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-16 Music Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Dining Room: Music Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Club 33-17 Dining Room_ Music Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "New Orleans Square",
    "poster": "AlbumArt/New Orleans Square.jpeg",
    "location": [33.81145135089831, -117.9213962350598],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "The Royal Street Bachelors",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-01 The Royal Street Bachelors.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Jambalaya Jazz Band",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-02 The Jambalaya Jazz Band.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Reynolds Brothers (The Rhythm Rascals)",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-03 The Reynolds Brothers (The Rhythm Rascals).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Dixieland Jazz Minors",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-04 The Dixieland Jazz Minors.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Dukes of Dixieland (Rivers of America Medley)",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-05 The Dukes of Dixieland (Rivers of America Medley).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Banjo Kings: Swanee River",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-06 The Banjo Kings_ Swanee River.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Live Performances (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-09 New Orleans Square_ Live Performances.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "The Blue Bayou: Loop (2016)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/New Orleans Square-Blue Bayou Area Loop.webm",
        "comments": "https://www.youtube.com/watch?v=j-J_e_mWF5o",
        "tags": [],
        "chapters": {
          "0:00": "When the Saints Go Marchin’ In - Rebirth Brass Band - Do Whatcha Wanna",
          "6:17": "Meet de Boys on the Battlefront - The Wild Tchupitoulas - The Very Best of the Neville Brothers",
          "9:35": "Encore: Hey Pocky-A-Way (Live) - The Meters - Uptown Rulers! Live on the Queen Mary (Live)",
          "12:33": "Qualified - Dr. John - The Very Best Of Dr. John",
          "17:10": "Gemini Rising - The Dirty Dozen Brass Band - Voodoo",
          "21:17": "Junko Partner - Dr. John - The Very Best Of Dr. John",
          "25:39": "Honey Dripper - Dr. John - The Very Best Of Dr. John",
          "29:13": "Glory Glory Hallelujah (Lay My Burden Down) - Regal Jazz Band & Smitty Dee's Brass Band - Modern Brass Bands, First & Second Line in New Orleans 1990-2005",
          "32:19": "Iko Iko - Dr. John - The Very Best Of Dr. John",
          "36:19": "Joe Avery’s Blues - Algiers Brass Band - Modern Brass Bands, First & Second Line in New Orleans 1990-2005",
          "39:21": "Brother John - The Wild Tchupitoulas - The Very Best of the Neville Brothers",
          "42:47": "You Can't Fly If You're Too High - Rebirth Brass Band - Do Whatcha Wanna",
          "46:45": "Tipitina - Dr. John - The Very Best Of Dr. John",
          "48:53": "Bye & Bye - Rebirth Brass Band - Do Whatcha Wanna",
          "53:12": "Down By the Riverside / Amen - The Neville Brothers - The Very Best of the Neville Brothers"
        }
      },
      {
        "title": "The Blue Bayou: Loop (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-10 The Blue Bayou_ Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "The Cadaver Dans: Rivers of America",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Halloweentime-01 The Cadaver Dans_ Rivers of America.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HALLOWEEN"]
      },
      {
        "title": "The French Market Bandstand",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-07 The French Market Bandstand.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The French Market (Side Street Strutters)",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-08 The French Market (Side Street Strutters).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Swanee River",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-09 Swanee River.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Loading Dock: Deep in the Heart of Dixieland",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-10 Loading Dock_ Deep in the Heart of Dixieland.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Waterfront Area Loop 1",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-11 Waterfront Area Loop 1.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Waterfront Area Loop 2",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-12 Waterfront Area Loop 2.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Rivers of America Area Loop",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/New Orleans Square-13 Rivers of America Area Loop.webm",
        "comments": "SuperHotLarry",
        "tags": []
      },
      {
        "title": "Rivers of America: Area Loop (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-08 Rivers of America_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Tiana's Showboat Jubilee: Show",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/New Orleans Square-15 Tiana_s Showboat Jubilee_ Show.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tiana's Palace: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/New Orleans Square-Tianas Palace.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Haunted Mansion",
    "poster": "AlbumArt/Haunted Mansion.jpeg",
    "location": [33.81162679638745, -117.92245487170065],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Ghostly Music Box",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-01 Ghostly Music Box.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Grim Grinning Ghosts Music Box",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-02 Grim Grinning Ghosts Music Box.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Foyer Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-03 Foyer Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Portrait Hall Background Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-04 Portrait Hall Background Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Doom Buggy Boarding Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-05 Doom Buggy Boarding Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Seance Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-06 Seance Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Seance Instruments Cue",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-07 Seance Instruments Cue.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ballroom Organ",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-08 Ballroom Organ.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Otherworldly Concerto",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-09 Otherworldly Concerto.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Updated Disneyland Attic",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-10 Updated Disneyland Attic.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Graveyard Band 1",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-11 Graveyard Band 1.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Graveyard Band 2",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-12 Graveyard Band 2.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Graveyard Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-13 Graveyard Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Swinging Wake",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-14 Swinging Wake.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "999 Happy Haunts",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-15 999 Happy Haunts.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Crypt Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-16 Exit Crypt Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Medley",
        "artist": "Xavier Atencio/Buddy Baker",
        "mp3": BASE_URL + "/Haunted Mansion-17 Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ride (1969)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-18 Ride (1969).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ride (2006)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-19 Ride (2006).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Phantom Manor Suite",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion-20 Phantom Manor Suite.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Haunted Mansion Holiday",
    "poster": "AlbumArt/Haunted Mansion Holiday.jpeg",
    "location": [33.811486852361945, -117.92280039541792],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Music Box: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion Holiday-01 Music Box_ Area Loop.webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Scarols: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion Holiday-02 Scarols_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Foyer (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion Holiday-03 Foyer (2001).webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Endless Hall (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion Holiday-04 Endless Hall (2001).webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Attic (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion Holiday-06 Attic (2001).webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Ballroom (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion Holiday-05 Ballroom (2001).webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Crypt Band (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion Holiday-07 Crypt Band (2001).webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Crypt Party (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion Holiday-08 Crypt Party (2001).webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Ride (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion Holiday-09 Ride (2001).webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Ride (2002)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion Holiday-10 Ride (2002).webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "French Market: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Haunted Mansion Holiday-11 French Market_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      }
    ]
  },
  {
    "name": "Splash Mountain",
    "poster": "AlbumArt/Splash Mountain.jpeg",
    "location": [33.8121382567396, -117.92248355064625],
    "tags": ["DL"],
    "tracks": [
      "Critter Country",
      {
        "title": "Critter Country: Area Loop",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-01 Critter Country Area Music_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Critter Country: Area Loop (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-14 Critter Country_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Critter Country: All I Want",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-02 Critter Country Area Music_ All I Want.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Critter Country: Sooner or Later",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-03 Critter Country Area Music_ Sooner or Later.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Critter Country: Song of the South",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-04 Critter Country Area Music_ Song of the South.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Critter Country: Carriage Ride",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-05 Critter Country Area Music_ Carriage Ride.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Critter Country: Uncle Remus Said",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-06 Critter Country Area Music_ Uncle Remus Said.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Critter Country: Who Wants to Live Like That",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-07 Critter Country Area Music_ Who Wants to Live Like That.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Critter Country: Let the Rain Pour Down",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-08 Critter Country Area Music_ Let the Rain Pour Down.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Critter Country: How Do You Do",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-09 Critter Country Area Music_ How Do You Do.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Critter Country: Everybody Has a Laughin' Place Variation I",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-10 Critter Country Area Music_ Everybody Has a Laughin_ Place Variation I.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Critter Country: Everybody Has a Laughin' Place Variation II",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-11 Critter Country Area Music_ Everybody Has a Laughin_ Place Variation II.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Critter Country: Zip-A-Dee-Doo-Dah",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-12 Critter Country Area Music_ Zip-A-Dee-Doo-Dah.webm",
        "comments": "",
        "tags": []
      },
      "Splash Mountain",
      {
        "title": "How Do You Do",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-13 How Do You Do.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Everybody Has a Laughin' Place",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-14 Everybody Has a Laughin_ Place.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Everybody Has a Laughin' Place (Vocals)",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-15 Everybody Has a Laughin_ Place (Vocals).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Zip-a-Dee-Doo-Dah",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-16 Zip-a-Dee-Doo-Dah.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Zip-a-Dee-Doo-Dah (Exit Version)",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-17 Zip-a-Dee-Doo-Dah (Exit Version).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Medley (2006)",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-18 Medley (2006).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Medley (2013)",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-19 Medley (2013).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Float Through",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-20 Float Through.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Breakdown Spiel",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-21 Breakdown Spiel.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Breakdown Spiel (Narration Only)",
        "artist": "Allie Wrubel",
        "mp3": BASE_URL + "/Splash Mountain-22 Breakdown Spiel (Narration Only).webm",
        "comments": "",
        "tags": []
      },
      "Briar Patch Tribute",
      {
        "title": "How Do You Do? (1946)",
        "artist": "Johnny Mercer",
        "mp3": BASE_URL + "/Brair Patch Tribute-01 How Do You Do_ (1946).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Everybody's Got a Laughin' Place (1946)",
        "artist": "Johnny Mercer",
        "mp3": BASE_URL + "/Brair Patch Tribute-02 Everybody_s Got a Laughin_ Place (1946).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Zip-A-Dee-Doo-Dah (1946)",
        "artist": "Johnny Mercer",
        "mp3": BASE_URL + "/Brair Patch Tribute-03 Zip-A-Dee-Doo-Dah (1946).webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "The Many Adventures of Winnie the Pooh",
    "poster": "AlbumArt/The Many Adventures of Winnie the Pooh.jpeg",
    "location": [33.81270423579145, -117.92319281840815],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Area Music: The Rain Rain Rain",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/The Many Adventures of Winnie the Pooh-01 Area Music_ The Rain Rain Rain.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Medley",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/The Many Adventures of Winnie the Pooh-02 Area Music_ Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/The Many Adventures of Winnie the Pooh-03 Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Ride Through 1",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/The Many Adventures of Winnie the Pooh-04 Ride Through 1.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ride Through 2",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/The Many Adventures of Winnie the Pooh-05 Ride Through 2.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Medley",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/The Many Adventures of Winnie the Pooh-06 Medley.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Country Bear Jamboree",
    "poster": "AlbumArt/Country Bear Jamboree.jpeg",
    "location": [33.81263542735842, -117.92267408606162],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Hoedown (1972)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Country Bear Jamboree-01 Hoedown (1972).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Vacation Hoedown (1986)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Country Bear Jamboree-02 Vacation Hoedown (1986).webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Frontierland",
    "poster": "AlbumArt/Frontierland.jpeg",
    "location": [33.81223539999941, -117.9202909598949],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Stockade Entrance: Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Frontierland-01 Stockade Entrance_ Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Stockade: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Frontierland-02 Stockade_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Area Music: Big Country/The Magnificent Seven/Rodeo",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Frontierland-03 Area Music_ Big Country_The Magnificent Seven_Rodeo.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Silverado",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Frontierland-04 Area Music_ Silverado.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Big Country",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Frontierland-05 Area Music_ Big Country.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Pecos Bill",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Frontierland-06 Area Music_ Pecos Bill.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Blazing Saddles",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Frontierland-07 Area Music_ Blazing Saddles.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (1972)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Frontierland-08 Area Loop (1972).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (1992)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Frontierland-09 Area Loop (1992).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Area Loop (2013)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Frontierland-10 Area Loop (2013).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-11 Frontierland_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Rancho Del Zocalo: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Frontierland-11 Rancho Del Zocalo_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Rancho Del Zocalo: Mariachi Band: The Mexican Hat Dance",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Frontierland-12 Rancho Del Zocalo_ Mariachi Band_ The Mexican Hat Dance.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Big Thunder Mountain Railroad",
    "poster": "AlbumArt/Big Thunder Mountain Railroad.jpeg",
    "location": [33.81321087531953, -117.92038409158245],
    "tags": ["DL"],
    "tracks": [
      "Area Music",
      {
        "title": "Area Music: Big Thunder",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-01 Area Music_ Big Thunder.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Roamin the Lawless West",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-02 Area Music_ Roamin the Lawless West.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: A Cowboy Needs a Horse",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-03 Area Music_ A Cowboy Needs a Horse.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Pecos Bill",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-04 Area Music_ Pecos Bill.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Buffalo Gals",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-05 Area Music_ Buffalo Gals.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Dry Gulch Cowboy",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-06 Area Music_ Dry Gulch Cowboy.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Apple Dumpling Gang",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-07 Area Music_ Apple Dumpling Gang.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Whoopee Ti Yi Yo",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-08 Area Music_ Whoopee Ti Yi Yo.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Big Rock Candy Mountain",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-09 Area Music_ Big Rock Candy Mountain.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Saloon Willy",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-10 Area Music_ Saloon Willy.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music: Old Betsy",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-11 Area Music_ Old Betsy.webm",
        "comments": "",
        "tags": []
      },
      "Big Thunder Mountain",
      {
        "title": "Queue Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-12 Queue Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Safety Spiel (1979-2013)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-13 Safety Spiel (1979-2013).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ride (1979-2013)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-14 Ride (1979-2013).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Saftey Spiel (2014)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-15 Saftey Spiel (2014).webm",
        "comments": "",
        "tags": []
      },
      "Big Thunder Ranch",
      {
        "title": "Big Thunder Ranch Barbecue: Little Patch of Heaven",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-16 Big Thunder Ranch Barbecue_ Little Patch of Heaven.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Big Thunder Ranch Barbecue: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-17 Big Thunder Ranch Barbecue_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Big Thunder Ranch Barbecue: Music Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-18 Big Thunder Ranch Barbecue_ Music Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Big Thunder Ranch: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-12 Big Thunder Ranch_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      "The Golden Horseshoe",
      {
        "title": "The Golden Horseshoe Stage: Billy Hill and the Hillbillies",
        "artist": "Billy Hill and the Hillbillies",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-19 The Golden Horseshoe Stage_ Billy Hill and the Hillbillies.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Golden Horseshoe Stage: Woody's Roundup",
        "artist": "Billy Hill and the Hillbillies",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-20 The Golden Horseshoe Stage_ Woody_s Roundup.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Jingle Jangle Jamboree: Billy Hill and the Hillbillies",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-13 Jingle Jangle Jamboree_ Billy Hill and the Hillbillies.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      "Mine Train Through Nature's Wonderland (1960-1977)",
      {
        "title": "Mine Train Through Nature's Wonderland: Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-21 Mine Train Through Nature_s Wonderland_ Ride.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mine Train Through Nature's Wonderland: Rainbow Caverns",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/Big Thunder Mountain Railroad-22 Mine Train Through Nature_s Wonderland_ Rainbow Caverns.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Mark Twain River Boat",
    "poster": "AlbumArt/Mark Twain River Boat.jpeg",
    "location": [33.8122778389417, -117.92076417405109],
    "tags": ["DL"],
    "tracks": [
      "Mark Twain River Boat",
      {
        "title": "Mark Twain River Boat: Queen of the River Theme",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-01 Mark Twain River Boat_ Queen of the River Theme.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Mark Twain River Boat: Float Through",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-02 Mark Twain River Boat_ Float Through.webm",
        "comments": "",
        "tags": []
      },
      "Sailing Ship Columbia",
      {
        "title": "Sailing Ship Columbia: Float Through",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-03 Sailing Ship Columbia_ Float Through.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sailing Ship Columbia: Haul Boys Haul",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-04 Sailing Ship Columbia_ Haul Boys Haul.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sailing Ship Columbia: Oh Johnny Come to Hilo",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-05 Sailing Ship Columbia_ Oh Johnny Come to Hilo.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sailing Ship Columbia: Song of the Fishes",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-06 Sailing Ship Columbia_ Song of the Fishes.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sailing Ship Columbia: A Whale of a Tale",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-07 Sailing Ship Columbia_ A Whale of a Tale.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sailing Ship Columbia: An American Frigate",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-08 Sailing Ship Columbia_ An American Frigate.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sailing Ship Columbia: Blow the Man Down",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-09 Sailing Ship Columbia_ Blow the Man Down.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sailing Ship Columbia: A Long Time Ago",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-10 Sailing Ship Columbia_ A Long Time Ago.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Sailing Ship Columbia: Drunken Sailor",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-11 Sailing Ship Columbia_ Drunken Sailor.webm",
        "comments": "",
        "tags": []
      },
      "Tom Sawyer's Island",
      {
        "title": "Fort Wilderness: Nature Sounds Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-12 Fort Wilderness_ Nature Sounds Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Fort Wilderness: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Mark Twain River Boat-13 Fort Wilderness_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      }
    ]
  },
  {
    "name": "Mickey's Toontown",
    "poster": "AlbumArt/Toontown Area Music.jpeg",
    "location": [33.81526702043923, -117.91862722791457],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Steamboat Willie",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-01 Steamboat Willie.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Minnie's Yoo-Hoo 1",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-02 Minnie_s Yoo-Hoo 1.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Minnies Yoo-Hoo 2",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-03 Minnies Yoo-Hoo 2.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Goofy's Theme",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-04 Goofy_s Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Donald Duck Themes",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-05 Donald Duck Themes.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Little Toot",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-06 Little Toot.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Tortoise and the Hare",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-07 The Tortoise and the Hare.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Skeleton Dance (March of the Dwarfs)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-08 The Skeleton Dance (March of the Dwarfs).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Springtime (Dance of the Hours)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-09 Springtime (Dance of the Hours).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Who Killed Cock Robin",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-10 Who Killed Cock Robin.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Three Little Pigs (Who's Afraid of the Big Bad Wolf)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-11 The Three Little Pigs (Who_s Afraid of the Big Bad Wolf).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Pied Piper",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-12 The Pied Piper.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Funny Little Bunnies",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-13 Funny Little Bunnies.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Grasshopper and the Ants (The World Owes Me a Living)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-14 The Grasshopper and the Ants (The World Owes Me a Living).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Casey at the Bat / A Hot Time in the Old Town Tonight",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-15 Casey at the Bat _ A Hot Time in the Old Town Tonight.webm",
        "comments": "",
        "tags": []
      },
      "Mickey's Neighborhood",
      {
        "title": "Mickey's Neighborhood: Mickey's Movie Barn Area Music: Camping Out",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-17 Mickey_s Neighborhood_ Mickey_s Movie Barn Area Music_ Camping Out.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Neighborhood: Minnie's House Area Music: Puppy Love",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-18 Mickey_s Neighborhood_ Minnie_s House Area Music_ Puppy Love.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Neighborhood: Area Music: Through the Mirror",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-19 Mickey_s Neighborhood_ Area Music_ Through the Mirror.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Neighborhood: Mickey's House W.A.C.K.Y Radio Jingle",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-20 Mickey_s Neighborhood_ Mickey_s House W.A.C.K.Y Radio Jingle.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Neighborhood: Mickey's Answering Machine",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-21 Mickey_s Neighborhood_ Mickey_s Answering Machine.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Neighborhood: Toontown Post Office",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-22 Mickey_s Neighborhood_ Toontown Post Office.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      "Roger Rabbit's Car Toon Spin",
      {
        "title": "Roger Rabbit's Car Toon Spin: Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-23 Roger Rabbit_s Car Toon Spin_ Ride.webm",
        "comments": "",
        "tags": []
      },
      "Area Loops",
      {
        "title": "Area Loop (1993)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-16 Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-15 Mickey_s Toontown_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Area Loop (2023)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-Area Loop (Reimagined, 2023).webm",
        "comments": "",
        "chapters": {
          "0:00": "My Happy Place (Instrumental)",
          "3:08": "Hot Dog!",
          "3:54": "The Spectrum Song",
          //"4:52": "Steamboat Willie Theme",
          "4:52": "Strolling Along",
          "6:50": "Walking & Whistling",
          "9:33": "Playtime Shuffle",
          "10:38": "Mickey Mouse Club March",
          "11:31": "Lazy Bounce",
          "13:19": "I2I",
          "14:56": "Mickey Mouse Clubhouse Theme",
          "19:38": "Happy Days",
          "18:40": "Our Homespun Melody",
          //"23:02": "After Sun",
          "21:40": "\"Nothing Can Stop Us Now\"",
          //"27:17": "On The Open Road",
          "23:19": "Mousin' Around"
        },
        "tags": []
      },
      "Mickey and Minnie's Runaway Railway",
      {
        "title": "Mickey and Minnie's Runaway Railway: Queue",
        "artist": "Christopher Willis",
        "mp3": BASE_URL + "/Toontown Area Music-Mickey and Minnie_s Runaway Railway_ Queue.webm",
        "comments": "",
        "chapters": {
          "0:00": "Mickey Mouse Club March",
          "2:25": "Minnie's Yoo Hoo",
          "4:22": "The Brave Little Squire",
          "7:00": "Mickey Mouse Clubhouse",
          "9:36": "Hats Enough",
          "12:01": "Steamboat Silly",
          "14:26": "Happy Birthday Mickey Mouse",
          "16:43": "Sorcerer's Apprentice",
          "19:07": "As Long As I'm With You",
          "21:38": "Steamboat Bill",
          "24:34": "Flower Blooming In My Heart",
          "27:26": "My, What a Happy Day",
          "29:15": "Hot Dog!",
          "31:12": "Mickey Mouse Shorts Theme"
        },
        "tags": []
      },
      {
        "title": "Mickey and Minnie's Runaway Railway: Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-Mickey and Minnie_s Runaway Railway_ Ride.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey and Minnie's Runaway Railway: Exit",
        "artist": "Christopher Willis",
        "mp3": BASE_URL + "/Toontown Area Music-Mickey and Minnie_s Runaway Railway_ Exit.webm",
        "comments": "",
        "chapters": {
          "0:00": "Nothing Can Stop Us Now (Railroad Rag)",
          "2:32": "Nothing Can Stop Us Now (Minnie Muchacha)",
          "5:33": "Nothing Can Stop Us Now (Dippy Dawg Days)",
          "8:27": "Nothing Can Stop Us Now (Wheels of Progress)"
        },
        "tags": []
      },
      {
        "title": "Nothing Can Stop Us Now",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Toontown Area Music-Nothing Can Stop Us Now.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Fantasyland Theatre",
    "poster": "AlbumArt/Fantasyland Theatre.jpeg",
    "location": [33.81462859738958, -117.919057852397],
    "tags": ["DL"],
    "tracks": [
      "Videopolis Theatre (1985-1989)",
      {
        "title": "Videopolis Theatre: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasyland Theatre-01 Videopolis Theatre_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      "Fantasyland Theatre",
      {
        "title": "The Fantasyland Theatre: Beauty and the Beast",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasyland Theatre-02 The Fantasyland Theatre_ Beauty and the Beast.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Fantasyland Theatre: Snow White, an Enchanting Musical",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasyland Theatre-03 The Fantasyland Theatre_ Snow White, an Enchanting Musical.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Fantasyland Theatre: Animazement",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasyland Theatre-04 The Fantasyland Theatre_ Animazement.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Fantasyland Theatre: Minnie's Christmas Party",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-33 Shows_ Minnie_s Christmas Party.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "The Fantasyland Theatre: The Spirit of Pocahontas",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasyland Theatre-05 The Fantasyland Theatre_ The Spirit of Pocahontas.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Festival of Fools: The Hunchback of Notre Dame Festival of Fools",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasyland Theatre-06 The Festival of Fools_ The Hunchback of Notre Dame Festival of Fools.webm",
        "comments": "",
        "tags": []
      },
      "Mickey and the Magical Map",
      {
        "title": "Mickey and the Magical Map: Area Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasyland Theatre-07 Mickey and the Magical Map_ Area Music.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Mickey and the Magical Map: Soundtrack",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasyland Theatre-08 Mickey and the Magical Map_ Soundtrack.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Mickey and the Magical Map: Ultimate Soundtrack Mix",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasyland Theatre-09 Mickey and the Magical Map_ Ultimate Soundtrack Mix.webm",
        "comments": "",
        "tags": []
      },
      "Mickey's Magical Party Time",
      {
        "title": "Mickey's Magical Party Time: Instrumental",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-10 Mickey_s Magical Party Time_ Instrumental.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Magical Party Time: Theme",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-11 Mickey_s Magical Party Time_ Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Magical Party Time: Following The Leader",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-12 Mickey_s Magical Party Time_ Following The Leader.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Magical Party Time: The Bare Necessities",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-13 Mickey_s Magical Party Time_ The Bare Necessities.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Magical Party Time: Tigger Medley",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-14 Mickey_s Magical Party Time_ Tigger Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Magical Party Time: Hakuna Matata",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-15 Mickey_s Magical Party Time_ Hakuna Matata.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Magical Party Time: Peter Pan Medley",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-16 Mickey_s Magical Party Time_ Peter Pan Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Magical Party Time: Mickey (Final)",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-17 Mickey_s Magical Party Time_ Mickey (Final).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Magical Party Time: Main Street USA Version",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-18 Mickey_s Magical Party Time_ Main Street USA Version.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Magical Party Time: Remix",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-19 Mickey_s Magical Party Time_ Remix.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Magical Party Time: He's A Pirate (Remix)",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-20 Mickey_s Magical Party Time_ He_s A Pirate (Remix).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Magical Party Time: The Hill Billy Trio",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-21 Mickey_s Magical Party Time_ The Hill Billy Trio.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey's Magical Party Time: The African Tam Tam",
        "artist": "Scott Erickson",
        "mp3": BASE_URL + "/Fantasyland Theatre-22 Mickey_s Magical Party Time_ The African Tam Tam.webm",
        "comments": "",
        "tags": []
      },
    ]
  },
  {
    "name": "Star Wars: Galaxy's Edge",
    "poster": "AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
    "location": [33.81446159500971, -117.92135311773093],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Galaxy's Edge: Symphonic Suite",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-01 Galaxy_s Edge_ Symphonic Suite.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Main Title and the Attack on the Jakku Village",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-02 Galaxy_s Edge_ Main Title and the Attack on the Jakku Village.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: The Imperial March",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-03 Galaxy_s Edge_ The Imperial March.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Rey's Theme",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-04 Galaxy_s Edge_ Rey_s Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: The March of the Resistance",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-05 Galaxy_s Edge_ The March of the Resistance.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Flying with Chewie",
        "artist": "John Powell",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-06 Galaxy_s Edge_ Flying with Chewie.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Corellia Chase",
        "artist": "John Powell",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-07 Galaxy_s Edge_ Corellia Chase.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Kylo Ren Arrives at the Battle",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-08 Galaxy_s Edge_ Kylo Ren Arrives at the Battle.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Scherzo for X-Wings",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-09 Galaxy_s Edge_ Scherzo for X-Wings.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Guardians of the Whills Suite",
        "artist": "Michael Giacchino",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-10 Galaxy_s Edge_ Guardians of the Whills Suite.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: The Last Jedi",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-11 Galaxy_s Edge_ The Last Jedi.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Jyn Erso & Hope Suite",
        "artist": "Michael Giacchino",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-12 Galaxy_s Edge_ Jyn Erso & Hope Suite.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: The Imperial Suite",
        "artist": "Michael Giacchino",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-13 Galaxy_s Edge_ The Imperial Suite.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Across the Stars",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-14 Galaxy_s Edge_ Across the Stars.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Love Pledge and the Arena",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-15 Galaxy_s Edge_ Love Pledge and the Arena.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Revenge of the Sith",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-16 Galaxy_s Edge_ Revenge of the Sith.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Anakin vs. Obi-Wan",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-17 Galaxy_s Edge_ Anakin vs. Obi-Wan.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Yoda's Theme",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-18 Galaxy_s Edge_ Yoda_s Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: The Return of the Jedi",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-19 Galaxy_s Edge_ The Return of the Jedi.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Anakin's Theme",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-20 Galaxy_s Edge_ Anakin_s Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Jedi Steps and Finale",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-21 Galaxy_s Edge_ Jedi Steps and Finale.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Main Title",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-22 Galaxy_s Edge_ Main Title.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Galaxy's Edge: Ewok Celebration and Finale",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge-23 Galaxy_s Edge_ Ewok Celebration and Finale.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Star Wars: Galaxy's Edge Oga's Cantina",
    "poster": "AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
    "location": [33.81487241041908, -117.9207758222215],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "R3X's Playlist #1: Mad About Mad About Me (feat. Figrin D'an and the Modal Nodes)",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-01 R3X_s Playlist No.1_ Mad About Mad About Me (feat. Figrin D_an and the Modal Nodes).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Turbulence",
        "artist": "Tamir Muskat & Ori Kaplan",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-02 R3X_s Playlist No.1_ Turbulence.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Bright Suns",
        "artist": "Tamir Muskat & Ori Kaplan",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-03 R3X_s Playlist No.1_ Bright Suns.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Nama Heh",
        "artist": "Francis Ralls",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-04 R3X_s Playlist No.1_ Nama Heh.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Oola Shuka",
        "artist": "Judith Hill",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-05 R3X_s Playlist No.1_ Oola Shuka.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Beep Boop Bop",
        "artist": "Melissa Atwell",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-06 R3X_s Playlist No.1_ Beep Boop Bop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Aloogahoo",
        "artist": "Ryan O'Connell & Valerie Vigoda",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-07 R3X_s Playlist No.1_ Aloogahoo.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Bai Tee Tee (feat. Gubz)",
        "artist": "Adam Gubman",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-08 R3X_s Playlist No.1_ Bai Tee Tee (feat. Gubz).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Modal Notes",
        "artist": "Michael KrÃ¤mer",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-09 R3X_s Playlist No.1_ Modal Notes.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Una Duey Dee",
        "artist": "Michael KrÃ¤mer",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-10 R3X_s Playlist No.1_ Una Duey Dee.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Goola Bukee (feat. YS-5755)",
        "artist": "Zain Effendi & Tyler Martens",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-11 R3X_s Playlist No.1_ Goola Bukee (feat. YS-5755).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Droid World",
        "artist": "Zain Effendi & Dylan Lane",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-12 R3X_s Playlist No.1_ Droid World.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Utinni",
        "artist": "Yossi Cohen & Avishay Goren",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-13 R3X_s Playlist No.1_ Utinni.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Batuu Boogie (feat. MW-59)",
        "artist": "Jason Mater",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-14 R3X_s Playlist No.1_ Batuu Boogie (feat. MW-59).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Moulee-Rah (feat. RB Snootles)",
        "artist": "Dan Fontana & Roger Butterley",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-15 R3X_s Playlist No.1_ Moulee-Rah (feat. RB Snootles).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Doshka",
        "artist": "Tamir Muskat & Ori Kaplan",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-16 R3X_s Playlist No.1_ Doshka.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Huttuk Cheeka",
        "artist": "Dan Fontana & Roger Butterley",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-17 R3X_s Playlist No.1_ Huttuk Cheeka.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "R3X's Playlist #1: Yocola Ateema",
        "artist": "Dan Fontana & Roger Butterley",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-18 R3X_s Playlist No.1_ Yocola Ateema.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Cantina Band",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-19 Cantina Band.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Jabba Flow",
        "artist": "Shag Kava",
        "mp3": BASE_URL + "/Star Wars_ Galaxy's Edge Oga's Cantina-20 Jabba Flow.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Tomorrowland",
    "poster": "AlbumArt/Tomorrowland.jpeg",
    "location": [33.812113392339846, -117.91719564280992],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Tomorrowland: Area Loop (1989-2003)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Tomorrowland-01 Tomorrowland_ Area Loop (1989-2003).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tomorrowland: Area Loop (2003)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Tomorrowland-02 Tomorrowland_ Area Loop (2003).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tomorrowland: Season of the Force Area Loop (2015-2017)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Tomorrowland-03 Tomorrowland_ Season of the Force Area Loop (2015-2017).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Tomorrowland Area Music: Miracles from Molecules/Strange Things (2006)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Tomorrowland-04 Tomorrowland Area Music_ Miracles from Molecules_Strange Things (2006).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tomorrowland Area Music: PeopleMover Loading Platform (1960's Medley)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Tomorrowland-05 Tomorrowland Area Music_ PeopleMover Loading Platform (1960_s Medley).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      "Tomorrowland 2055",
      {
        "title": "Tomorrowland 2055: Theme",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Tomorrowland-06 Tomorrowland 2055_ Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tomorrowland 2055: Theme and Fanfare",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Tomorrowland-07 Tomorrowland 2055_ Theme and Fanfare.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tomorrowland 2055: Theme: From the Earth to the Moon",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Tomorrowland-08 Tomorrowland 2055_ Theme_ From the Earth to the Moon.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tomorrowland 2055: Theme: From the Earth to the Moon (Extended)",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Tomorrowland-09 Tomorrowland 2055_ Theme_ From the Earth to the Moon (Extended).webm",
        "comments": "",
        "tags": []
      },
      "Buzz Lightyear's Astro Blasters",
      {
        "title": "Buzz Lightyear's Astro Blasters: Ride",
        "artist": "Randy Newman",
        "mp3": BASE_URL + "/Tomorrowland-10 Buzz Light Year_s Astro Blasters_ Ride.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Tomorrowland Observatron",
    "poster": "AlbumArt/Tomorrowland Observatron.jpeg",
    "location": [33.81202202460581, -117.91657131402911],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Soundtrack: From the Earth to the Moon",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Tomorrowland Observatron-01 Soundtrack_ From the Earth to the Moon.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Soundtrack: Iron Will",
        "artist": "Joel McNeely",
        "mp3": BASE_URL + "/Tomorrowland Observatron-02 Soundtrack_ Iron Will.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Soundtrack: The Rocketeer",
        "artist": "James Horner",
        "mp3": BASE_URL + "/Tomorrowland Observatron-03 Soundtrack_ The Rocketeer.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Soundtrack: Timekeeper",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Tomorrowland Observatron-04 Soundtrack_ Timekeeper.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Score: From the Earth to the Moon",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Tomorrowland Observatron-05 Score_ From the Earth to the Moon.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Score: Iron Will",
        "artist": "Joel McNeely",
        "mp3": BASE_URL + "/Tomorrowland Observatron-06 Score_ Iron Will.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Score: The Rocketeer",
        "artist": "James Horner",
        "mp3": BASE_URL + "/Tomorrowland Observatron-07 Score_ The Rocketeer.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Score: Timekeeper",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Tomorrowland Observatron-08 Score_ Timekeeper.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Score: Time Keeper (Extended)",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Tomorrowland Observatron-09 Score_ Time Keeper (Extended).webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Disneyland Monorail",
    "poster": "AlbumArt/Disneyland Monorail.jpeg",
    "location": [33.81286989081049, -117.9165742363101],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Disneyland Alweg Monorail System",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/Disneyland Monorail-01 Disneyland Alweg Monorail System.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Mark III Disneyland Monorail",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/Disneyland Monorail-02 Mark III Disneyland Monorail.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Mark V Disneyland Monorail",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/Disneyland Monorail-03 Mark V Disneyland Monorail.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Mark VII Tomorrowland to Downtown Disney",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/Disneyland Monorail-04 Mark VII Tomorrowland to Downtown Disney.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Mark VII Round Trip",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/Disneyland Monorail-05 Mark VII Round Trip.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "The Monorail Song & SFX",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/Disneyland Monorail-06 The Monorail Song & SFX.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Monorail Song",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/Disneyland Monorail-07 The Monorail Song.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Monorail Song / Nation on Wheels",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/Disneyland Monorail-08 The Monorail Song _ Nation on Wheels.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Music to Ride Monorails By",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/Disneyland Monorail-09 Music to Ride Monorails By.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Nation on Wheels: Peoplemover Theme",
        "artist": "Buddy Baker",
        "mp3": BASE_URL + "/Disneyland Monorail-10 Nation on Wheels_ Peoplemover Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "World of Tomorrow Theme",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/Disneyland Monorail-11 World of Tomorrow Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "World Clock: The South American Way",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/Disneyland Monorail-12 World Clock_ The South American Way.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "World Clock: Flubber Waltz",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/Disneyland Monorail-13 World Clock_ Flubber Waltz.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "World Clock: Serengeti Serenade",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/Disneyland Monorail-14 World Clock_ Serengeti Serenade.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "World Clock: Moonlight Time in Old Hawaii",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/Disneyland Monorail-15 World Clock_ Moonlight Time in Old Hawaii.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "World Clock: Flyin' Ford",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/Disneyland Monorail-16 World Clock_ Flyin_ Ford.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "World Clock: La Gaviota",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/Disneyland Monorail-17 World Clock_ La Gaviota.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "World Clock: Join The Swing",
        "artist": "George Bruns",
        "mp3": BASE_URL + "/Disneyland Monorail-18 World Clock_ Join The Swing.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "World Clock: Disneyland '61",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Disneyland Monorail-19 World Clock_ Disneyland _61.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Star Tours",
    "poster": "AlbumArt/Star Tours.jpeg",
    "location": [33.8118574443236, -117.91799752064779],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Soundtrack (1987: 2011)",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Tours-01 Soundtrack (1987_ 2011).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Score (1987: 2011)",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Tours-02 Score (1987_ 2011).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Music (1987: 2011)",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Tours-03 Exit Music (1987_ 2011).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Adventures Continue: Queue Music (2011)",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Tours-04 The Adventures Continue_ Queue Music (2011).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Adventures Continue: Music Cues (2011)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Star Tours-05 The Adventures Continue_ Music Cues (2011).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Adventures Continue: Exit Music (2011)",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Star Tours-06 The Adventures Continue_ Exit Music (2011).webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Space Mountain",
    "poster": "AlbumArt/Space Mountain.jpeg",
    "location": [33.810988051852796, -117.9175267899552],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Concourse: Monorail Song",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-01 Concourse_ Monorail Song.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Concourse: There's a Great Big Beautiful Tomorrow",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-02 Concourse_ There_s a Great Big Beautiful Tomorrow.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Concourse: Miracles from Molecules",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-03 Concourse_ Miracles from Molecules.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Concourse: Energy You Make the World Go Round",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-04 Concourse_ Energy You Make the World Go Round.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Concourse: Golden Dream",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-05 Concourse_ Golden Dream.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Concourse: It's Fun to be Free",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-06 Concourse_ It_s Fun to be Free.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Concourse: Listen to the Land",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-07 Concourse_ Listen to the Land.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Concourse: Universe of Energy",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-08 Concourse_ Universe of Energy.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Concourse: One Little Spark",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-09 Concourse_ One Little Spark.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Concourse: Nemo's Theme",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-10 Concourse_ Nemo_s Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Concourse: Love Theme",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-11 Concourse_ Love Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music & SFX",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-12 Area Music & SFX.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ambience Audio",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-13 Ambience Audio.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Full Com Chat Audio",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-14 Full Com Chat Audio.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Star Tunnel",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-15 Star Tunnel.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ride (1977-2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-16 Ride (1977-2001).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Loop (1977-2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Space Mountain-17 Exit Loop (1977-2001).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ride (2001)",
        "artist": "Michael Giacchino",
        "mp3": BASE_URL + "/Space Mountain-18 Ride (2001).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Score (2001)",
        "artist": "Michael Giacchino",
        "mp3": BASE_URL + "/Space Mountain-19 Score (2001).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ghost Galaxy: Score (2009)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Halloweentime-05 Space Mountain Ghost Galaxy_ Score.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HALLOWEEN"]
      },
      {
        "title": "Exit Loop (2001)",
        "artist": "Michael Giacchino",
        "mp3": BASE_URL + "/Space Mountain-20 Exit Loop (2001).webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Innoventions",
    "poster": "AlbumArt/Innoventions.jpeg",
    "location": [33.811840360727885, -117.91642567611375],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "Horizons: New Horizons",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Innoventions-01 Horizons_ New Horizons.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Horizons: Space",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Innoventions-02 Horizons_ Space.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Character Shop: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Innoventions-03 The Character Shop_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Magic Journeys: Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Innoventions-04 Magic Journeys_ Score.webm",
        "comments": "",
        "tags": []
      },
      "Captain E.O. (1986-1997, 2010-2014)",
      {
        "title": "Captain E.O.: Entrance Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Innoventions-05 Captain E.O._ Entrance Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Captain E.O.: Area Background Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Innoventions-06 Captain E.O._ Area Background Music.webm",
        "comments": "",
        "tags": []
      },
      "Honey, I Shrunk the Audience (1998-2010)",
      {
        "title": "Honey, I Shrunk the Audience: Suite",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Innoventions-07 Honey, I Shrunk the Audience_ Suite.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Honey, I Shrunk the Audience: Fanfare",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Innoventions-08 Honey, I Shrunk the Audience_ Fanfare.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Honey, I Shrunk the Audience: Finale",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Innoventions-09 Honey, I Shrunk the Audience_ Finale.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Honey, I Shrunk the Audience: Exit Music",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Innoventions-10 Honey, I Shrunk the Audience_ Exit Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Autopia: Safety Spiel",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Innoventions-11 Autopia_ Safety Spiel.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Stitch: Galactic Anthem",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Innoventions-12 Stitch_ Galactic Anthem.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Spaceship Earth: Soundtrack",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Innoventions-13 Spaceship Earth_ Soundtrack.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Energy Adventure: Medley",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Innoventions-14 Energy Adventure_ Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "CTX: Theme",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Innoventions-15 CTX_ Theme.webm",
        "comments": "",
        "tags": []
      },
      "Finding Nemo Submarine Voyage",
      {
        "title": "20,000 Leagues Under the Sea: Medley",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Innoventions-16 20,000 Leagues Under the Sea_ Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Submarine Voyage: Ride Through",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Innoventions-17 Submarine Voyage_ Ride Through.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Finding Nemo Submarine Voyage: Medley",
        "artist": "Thomas Newman",
        "mp3": BASE_URL + "/Innoventions-18 Finding Nemo Submarine Voyage_ Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Finding Nemo Submarine Voyage: Area Music",
        "artist": "Thomas Newman",
        "mp3": BASE_URL + "/Innoventions-19 Finding Nemo Submarine Voyage_ Area Music.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Finding Nemo Submarine Voyage: Score",
        "artist": "Thomas Newman",
        "mp3": BASE_URL + "/Innoventions-20 Finding Nemo Submarine Voyage_ Score.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Carousel of Progress",
    "poster": "AlbumArt/Carousel of Progress.jpeg",
    "location": [33.81212677533172, -117.91671402824822],
    "tags": ["DL"],
    "tracks": [
      {
        "title": "There's a Great Big Beautiful Tomorrow: Chorus",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-01 There_s a Great Big Beautiful Tomorrow_ Chorus.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Instrumental",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-02 There_s a Great Big Beautiful Tomorrow_ Instrumental.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Kaleidophonic Opening",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-03 There_s a Great Big Beautiful Tomorrow_ Kaleidophonic Opening.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: 1890's Variation",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-04 There_s a Great Big Beautiful Tomorrow_ 1890_s Variation.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Dixieland Variation",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-05 There_s a Great Big Beautiful Tomorrow_ Dixieland Variation.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: 1920's Variation",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-06 There_s a Great Big Beautiful Tomorrow_ 1920_s Variation.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: 1930's Variation",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-07 There_s a Great Big Beautiful Tomorrow_ 1930_s Variation.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Swing Variation",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-08 There_s a Great Big Beautiful Tomorrow_ Swing Variation.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: 1960's Variation",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-09 There_s a Great Big Beautiful Tomorrow_ 1960_s Variation.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Horizons Variation",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-10 There_s a Great Big Beautiful Tomorrow_ Horizons Variation.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Mirror Maze",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-11 There_s a Great Big Beautiful Tomorrow_ Mirror Maze.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Medallion City: Music To Buy Toasters By",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-12 There_s a Great Big Beautiful Tomorrow_ Medallion City_ Music To Buy Toasters By.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Medallion City: Christmas",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-13 There_s a Great Big Beautiful Tomorrow_ Medallion City_ Christmas.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Progress City: Score I",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-14 There_s a Great Big Beautiful Tomorrow_ Progress City_ Score I.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Progress City: Score II",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-15 There_s a Great Big Beautiful Tomorrow_ Progress City_ Score II.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Progressland Spectacular",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-16 There_s a Great Big Beautiful Tomorrow_ Progressland Spectacular.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Speed Ramp March",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-17 There_s a Great Big Beautiful Tomorrow_ Speed Ramp March.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Great Big Beautiful Tomorrow: Talking Machine Music",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-18 There_s a Great Big Beautiful Tomorrow_ Talking Machine Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "There's a Bright New World of Innoventions",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-19 There_s a Bright New World of Innoventions.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Show Medley",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-20 Show Medley.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Full Show",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-21 Full Show.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Full Show (Alternate Universe Version)",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-22 Full Show (Alternate Universe Version).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Skydome Spectacular: Full Show",
        "artist": "Sherman & Sherman",
        "mp3": BASE_URL + "/Carousel of Progress-23 Skydome Spectacular_ Full Show.webm",
        "comments": "",
        "tags": []
      },
      "Adventure Through Inner Space (1967-1985)",
      {
        "title": "Adventure Through Inner Space: Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Carousel of Progress-24 Adventure Through Inner Space_ Ride.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Adventure Through Inner Space: Miracles from Molecules",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Carousel of Progress-25 Adventure Through Inner Space_ Miracles from Molecules.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Adventure Through Inner Space: Miracles from Molecules (Lounge Version, unreleased)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Carousel of Progress-26 Adventure Through Inner Space_ Miracles from Molecules (Lounge Version, unreleased).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Adventure Through Inner Space: Miracles from Molecules Variation",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Carousel of Progress-27 Adventure Through Inner Space_ Miracles from Molecules Variation.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Buena Vista Street & Carthay Circle",
    "poster": "AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
    "location": [33.80763868945373, -117.91921411298422],
    "tags": ["DCA"],
    "tracks": [
      {
        "title": "Area Loop (2012)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-01 Buena Vista Street_ Area Music Loop (2012).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-05 Buena Vista Street_ Area Loop.webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Mickey's Not So Scary Halloween Party: Area Loop (2015-2018)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Halloweentime-03 Mickey_s Not So Scary Halloween Party_ Area Loop (2015-2018).webm",
        "comments": "",
        "tags": ["HALLOWEEN"]
      },
      "Carthay Circle",
      {
        "title": "Some Day My Prince Will Come",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-02 Some Day My Prince Will Come.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "A Dream Is A Wish Your Heart Makes",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-03 A Dream Is A Wish Your Heart Makes.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Alice In Wonderland",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-04 Alice In Wonderland.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "He's A Tramp",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-05 He_s A Tramp.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ev'rybody Wants To Be A Cat",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-06 Ev_rybody Wants To Be A Cat.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Winnie The Pooh",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-07 Winnie The Pooh.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Be Our Guest",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-08 Be Our Guest.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "A Whole New World",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-09 A Whole New World.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Can You Feel The Love Tonight",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-10 Can You Feel The Love Tonight.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "You've Got A Friend In Me",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-11 You_ve Got A Friend In Me.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "If I Didn't Have You",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-12 If I Didn_t Have You.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Married Life",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-13 Married Life.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Some Day My Prince Will Come (Piano Solo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-14 Some Day My Prince Will Come (Piano Solo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Alice In Wonderland (Piano Solo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-15 Alice In Wonderland (Piano Solo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ev'rybody Wants To Be A Cat (Piano Solo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-16 Ev_rybody Wants To Be A Cat (Piano Solo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Winnie The Pooh (Piano Solo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-17 Winnie The Pooh (Piano Solo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Married Life (Piano Solo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-18 Married Life (Piano Solo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Cruella De Vil (Piano Solo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-19 Cruella De Vil (Piano Solo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "I Wan'na Be Like You (Piano Solo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-20 I Wan_na Be Like You (Piano Solo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "King Of New York (Piano Solo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-21 King Of New York (Piano Solo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Let's Go Fly A Kite (Piano Solo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-22 Let_s Go Fly A Kite (Piano Solo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Once Upon A Dream (Piano Solo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-23 Once Upon A Dream (Piano Solo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "True Love's Kiss (Piano Solo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-24 True Love_s Kiss (Piano Solo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Who's Afraid Of The Big Bad Wolf (Piano Solo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-25 Who_s Afraid Of The Big Bad Wolf (Piano Solo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Carthay Circle Restaurant: Area Music Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Buena Vista Street & Carthay Circle-26 Carthay Circle Restaurant_ Area Music Loop.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Hollywood Land",
    "poster": "AlbumArt/Hollywood Land.jpeg",
    "location": [33.80766800439404, -117.91715773135921],
    "tags": ["DCA"],
    "tracks": [
      {
        "title": "Hollywood Land: Area Loop (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-01 Hollywood Land_ Area Loop (2001).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Hollywood Land: Area Loop (2012)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-02 Hollywood Land_ Area Loop (2012).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Hollywood Land: Hooray For Hollywood",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-03 Hollywood Land_ Hooray For Hollywood.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Hollywood Land: Tower of Terror",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-04 Hollywood Land_ Tower of Terror.webm",
        "comments": "",
        "tags": []
      },
      "Muppet*Vision 3D (2001-2014)",
      {
        "title": "Muppet*Vision 3D: The Muppet Show Theme",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Muppet_Vision 3D_ The Muppet Show Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Muppet*Vision 3D: Bein' Green",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Muppet_Vision 3D_ Bein_ Green.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Muppet*Vision 3D: Mahna Mahna",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Muppet_Vision 3D_ Mahna Mahna.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Muppet*Vision 3D: The Rainbow Connection",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Muppet_Vision 3D_ The Rainbow Connection.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Muppet*Vision 3D: Movin' Right Along",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Muppet_Vision 3D_ Movin_ Right Along.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Muppet*Vision 3D: I Hope That Something Better Comes Along",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Muppet_Vision 3D_ I Hope That Something Better Comes Along.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Muppet*Vision 3D: Hey A Movie",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Muppet_Vision 3D_ Hey A Movie.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Muppet*Vision 3D: Happiness Hotel",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Muppet_Vision 3D_ Happiness Hotel.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Muppet*Vision 3D: Steppin' Out With A Star",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Muppet_Vision 3D_ Steppin_ Out With A Star.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Muppet*Vision 3D: Together Again",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Muppet_Vision 3D_ Together Again.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Muppet*Vision 3D: I'm Gonna Always Love You",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Muppet_Vision 3D_ I_m Gonna Always Love You.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Muppet*Vision 3D: Right Where I Belong",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Muppet_Vision 3D_ Right Where I Belong.webm",
        "comments": "",
        "tags": []
      },
      "PhilharMagic (2019)",
      {
        "title": "Philharmagic (2022)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Philharmagic (with Coco).webm",
        "comments": "",
        "tags": []
      },
      "Animation Courtyard",
      {
        "title": "Disney Studios: Animation Courtyard Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-05 Disney Studios_ Animation Courtyard Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Disney Studios: Animation Building Projection Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-06 Disney Studios_ Animation Building Projection Loop.webm",
        "comments": "",
        "tags": []
      },
      "Monsters, Inc. Mike & Sulley to the Rescue!",
      {
        "title": "Monsters, Inc. Mike & Sulley to the Rescue!: Queue",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Hollywood Land-Monsters Inc Queue Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Monsters, Inc. Mike & Sulley to the Rescue!: Ride",
        "artist": "Randy Newman",
        "mp3": BASE_URL + "/Hollywood Land-07 Mike and Sulley to the Rescue_ Ride.webm",
        "comments": "",
        "tags": []
      },
      "Aladdin - A Musical Spectacular (2003-2016)",
      {
        "title": "Aladdin - A Musical Spectacular: Curtain Call",
        "artist": "Alan Menken",
        "mp3": BASE_URL + "/Hollywood Land-08 Aladdin - A Musical Spectacular_ Curtain Call.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Aladdin - A Musical Spectacular: Princess Of Agrabah",
        "artist": "Alan Menken",
        "mp3": BASE_URL + "/Hollywood Land-09 Aladdin - A Musical Spectacular_ Princess Of Agrabah.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Tower of Terror",
    "poster": "AlbumArt/Tower of Terror.jpeg",
    "location": [33.80682870253609, -117.917145302168],
    "tags": ["DCA"],
    "tracks": [
      "Lobby",
      {
        "title": "Lobby: Queue Loop (Master Mix)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Tower of Terror-01 Lobby_ Queue Loop (Master Mix).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Loop (Reconstruction) (No Echo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Tower of Terror-02 Lobby_ Queue Loop (Reconstruction) (No Echo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Tower of Terror-03 Lobby_ Queue Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Loop (No Echo)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Tower of Terror-04 Lobby_ Queue Loop (No Echo).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: There's a House in Harlem for Sale",
        "artist": "Henry Allen",
        "mp3": BASE_URL + "/Tower of Terror-05 Lobby_ Queue Music_ There_s a House in Harlem for Sale.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Jungle Drums",
        "artist": "Sidney Bechet",
        "mp3": BASE_URL + "/Tower of Terror-06 Lobby_ Queue Music_ Jungle Drums.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Sleepy Time Gal",
        "artist": "Glenn Miller",
        "mp3": BASE_URL + "/Tower of Terror-07 Lobby_ Queue Music_ Sleepy Time Gal.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: I Can't Get Started",
        "artist": "Bunny Berigan",
        "mp3": BASE_URL + "/Tower of Terror-08 Lobby_ Queue Music_ I Can_t Get Started.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Mood Indigo",
        "artist": "Duke Ellington",
        "mp3": BASE_URL + "/Tower of Terror-09 Lobby_ Queue Music_ Mood Indigo.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Wishing Will Make It So",
        "artist": "Vera Lynn",
        "mp3": BASE_URL + "/Tower of Terror-10 Lobby_ Queue Music_ Wishing Will Make It So.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Uptown Blues",
        "artist": "Jimmie Lunceford",
        "mp3": BASE_URL + "/Tower of Terror-11 Lobby_ Queue Music_ Uptown Blues.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Remember",
        "artist": "Red Norvo",
        "mp3": BASE_URL + "/Tower of Terror-12 Lobby_ Queue Music_ Remember.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Dear Old Southland",
        "artist": "Noble Sissle",
        "mp3": BASE_URL + "/Tower of Terror-13 Lobby_ Queue Music_ Dear Old Southland.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Jeep's Blues",
        "artist": "Johnny Hodges",
        "mp3": BASE_URL + "/Tower of Terror-14 Lobby_ Queue Music_ Jeep_s Blues.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Pyramid",
        "artist": "Johnny Hodges",
        "mp3": BASE_URL + "/Tower of Terror-15 Lobby_ Queue Music_ Pyramid.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Deep Purple",
        "artist": "Turner Layton",
        "mp3": BASE_URL + "/Tower of Terror-16 Lobby_ Queue Music_ Deep Purple.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Jitterbug's Lullaby",
        "artist": "Johnny Hodges",
        "mp3": BASE_URL + "/Tower of Terror-17 Lobby_ Queue Music_ Jitterbug_s Lullaby.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: I'm in Another World",
        "artist": "Johnny Hodges",
        "mp3": BASE_URL + "/Tower of Terror-18 Lobby_ Queue Music_ I_m in Another World.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: We'll Meet Again",
        "artist": "Vera Lynn",
        "mp3": BASE_URL + "/Tower of Terror-19 Lobby_ Queue Music_ We_ll Meet Again.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: When the Sun Sets Down South",
        "artist": "Sidney Bechet",
        "mp3": BASE_URL + "/Tower of Terror-20 Lobby_ Queue Music_ When the Sun Sets Down South.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Delta Mood",
        "artist": "Cootie Williams",
        "mp3": BASE_URL + "/Tower of Terror-21 Lobby_ Queue Music_ Delta Mood.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Alabamy Home",
        "artist": "The Gotham Stompers",
        "mp3": BASE_URL + "/Tower of Terror-22 Lobby_ Queue Music_ Alabamy Home.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: There's No Two Ways About It",
        "artist": "Frankie Newton",
        "mp3": BASE_URL + "/Tower of Terror-23 Lobby_ Queue Music_ There_s No Two Ways About It.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Lobby: Queue Music: Inside (This Heart of Mine)",
        "artist": "Fats Waller",
        "mp3": BASE_URL + "/Tower of Terror-24 Lobby_ Queue Music_ Inside (This Heart of Mine).webm",
        "comments": "",
        "tags": []
      },
      "Library",
      {
        "title": "Library: Pre-Show Video",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-25 Library_ Pre-Show Video.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "It's Raining, it's Pouring",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-26 It_s Raining, it_s Pouring.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Little Girl Lost: Score",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-27 Little Girl Lost_ Score.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Little Girl Lost: Soundtrack",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-28 Little Girl Lost_ Soundtrack.webm",
        "comments": "",
        "tags": []
      },
      "Boiler Room",
      {
        "title": "Boiler Room: Ambience Audio",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-29 Boiler Room_ Ambience Audio.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Boiler Room: Radio Loop",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-30 Boiler Room_ Radio Loop.webm",
        "comments": "",
        "tags": []
      },
      "Elevator",
      {
        "title": "Elevator Sounds",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-31 Elevator Sounds.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Elevator Motor Shaft Sounds",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-32 Elevator Motor Shaft Sounds.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Elevator Shaft: Ambience Audio",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-33 Elevator Shaft_ Ambience Audio.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Return Spiel",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-34 Return Spiel.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ride Through",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-35 Ride Through.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ride Score",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-36 Ride Score.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Music",
        "artist": "Bernard Herrmann",
        "mp3": BASE_URL + "/Tower of Terror-37 Exit Music.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Avengers Campus",
    "poster": "AlbumArt/Guardians of the Galaxy.jpeg",
    "location": [33.80662585166978, -117.91691431318918],
    "tags": ["DCA"],
    "tracks": [
      {
        "title": "Summer of Heroes: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Guardians of the Galaxy-01 Summer of Heroes_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Black Widow Arrival",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Guardians of the Galaxy-02 Black Widow Arrival.webm",
        "comments": "",
        "tags": []
      },
      "Guardians of the Galaxy: Mission BREAKOUT!",
      {
        "title": "The Collector's Warehouse: Queue Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Guardians of the Galaxy-03 The Collector_s Warehouse_ Queue Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Guardians of the Galaxy: Mission BREAKOUT! Preshow",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Guardians of the Galaxy-Preshow.webm",
        "comments": "",
        "tags": []
      },
      "Spider-Man: Web Slingers",
      {
        "title": "Spider-Man: Web Slingers: Preshow",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Avengers Campus-Web Slingers Preshow.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Condor Flats",
    "poster": "AlbumArt/Condor Flats.jpeg",
    "location": [33.80799757160643, -117.92004628399128],
    "tags": ["DCA"],
    "tracks": [
      "Condor Flats (2001)",
      {
        "title": "Area Music (2001-2010): The Right Stuff: Breaking the Sound Barrier",
        "artist": "Bill Conti",
        "mp3": BASE_URL + "/Condor Flats-01 Area Music (2001-2010)_ The Right Stuff_ Breaking the Sound Barrier.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): The Right Stuff: Almost Ready",
        "artist": "Bill Conti",
        "mp3": BASE_URL + "/Condor Flats-02 Area Music (2001-2010)_ The Right Stuff_ Almost Ready.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): The Right Stuff: The Training",
        "artist": "Bill Conti",
        "mp3": BASE_URL + "/Condor Flats-03 Area Music (2001-2010)_ The Right Stuff_ The Training.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): The Right Stuff: Yeager's Triumph",
        "artist": "Bill Conti",
        "mp3": BASE_URL + "/Condor Flats-04 Area Music (2001-2010)_ The Right Stuff_ Yeager_s Triumph.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): The Last Starfighter: Main Theme",
        "artist": "Craig Safan",
        "mp3": BASE_URL + "/Condor Flats-05 Area Music (2001-2010)_ The Last Starfighter_ Main Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): Battle of the Midway: Midway March",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Condor Flats-06 Area Music (2001-2010)_ Battle of the Midway_ Midway March.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): Air Force One: The Parachutes",
        "artist": "Jerry Goldmsith",
        "mp3": BASE_URL + "/Condor Flats-07 Area Music (2001-2010)_ Air Force One_ The Parachutes.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): Air Force One: Welcome Aboard Sir",
        "artist": "Jerry Goldsmith",
        "mp3": BASE_URL + "/Condor Flats-08 Area Music (2001-2010)_ Air Force One_ Welcome Aboard Sir.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): Pops On March",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Condor Flats-09 Area Music (2001-2010)_ Pops On March.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): Liberty Fanfare",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Condor Flats-10 Area Music (2001-2010)_ Liberty Fanfare.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): 633 Squadron: Theme",
        "artist": "Ron Goodwin",
        "mp3": BASE_URL + "/Condor Flats-11 Area Music (2001-2010)_ 633 Squadron_ Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): The Last Starfighter: Big Victory March",
        "artist": "Craig Safan",
        "mp3": BASE_URL + "/Condor Flats-12 Area Music (2001-2010)_ The Last Starfighter_ Big Victory March.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): Space Camp: Space Camp",
        "artist": "John Williams",
        "mp3": BASE_URL + "/Condor Flats-13 Area Music (2001-2010)_ Space Camp_ Space Camp.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Music (2001-2010): The Planets: Jupiter",
        "artist": "Gustav Holst",
        "mp3": BASE_URL + "/Condor Flats-14 Area Music (2001-2010)_ The Planets_ Jupiter.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (2001-2010)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Condor Flats-15 Area Loop (2001-2010).webm",
        "comments": "",
        "tags": []
      },
      "Condor Flats (2011)",
      {
        "title": "Area Loop (2011-2015)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Condor Flats-16 Area Loop (2011-2015).webm",
        "comments": "",
        "tags": []
      },
      "Grizzly Peak Airfield (2015)",
      {
        "title": "Airfield: Area Loop (2015)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Grizzly Peak-01 Airfield_ Area Loop (2015).webm",
        "comments": "",
        "tags": []
      },
    ]
  },
  {
    "name": "Soarin' Over California",
    "poster": "AlbumArt/Soarin_ Over California.jpeg",
    "location": [33.80841423888216, -117.92001816908882],
    "tags": ["DCA"],
    "tracks": [
      "Queue",
      {
        "title": "Queue Loop (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Soarin' Over California-01 Queue Loop (2001-2005).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Queue Loop (2005)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Soarin' Over California-13 Queue Loop (2005).webm",
        "comments": "",
        "tags": [],
        "chapters": {
          "0:00": "Distinguished Gentleman: Girls of Many Nations - Randy Edelman",
          "1:41": "Distinguished Gentleman: Soft Rebellion - Randy Edelman",
          "2:50": "Distinguished Gentleman: Reprise - Randy Edelman",
          "5:15": "The American President: Main Titles - Marc Shaiman",
          "7:38": "Battle of the Atlantic Suite: Evening Tide - Dave Roylance & Bob Gavlin",
          "9:54": "Dave: You're On - James Newton Howard",
          "11:35": "Dragon: Victory at Ed Parker's - Randy Edelman",
          "12:34": "Dragon: The Premier of the Big Boss",
          "14:07": "The American President: End Titles - Marc Shaiman",
          "19:06": "The Blue Max Suite - Jerry Goldsmith",
          "20:54": "The Generals - Jerry Goldsmith"
        }
      },
      "Soarin' Over California (2001-2016)",
      {
        "title": "Preshow",
        "artist": "Jerry Goldsmith",
        "mp3": BASE_URL + "/Soarin' Over California-Preshow.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Load Music",
        "artist": "Jerry Goldsmith",
        "mp3": BASE_URL + "/Soarin' Over California-14 Load Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Soarin' Over California (Soundtrack)",
        "artist": "Jerry Goldsmith",
        "mp3": BASE_URL + "/Soarin' Over California-15 Soundtrack.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Soarin' Over California (Score)",
        "artist": "Jerry Goldsmith",
        "mp3": BASE_URL + "/Soarin' Over California-16 Score.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Music",
        "artist": "Jerry Goldsmith",
        "mp3": BASE_URL + "/Soarin' Over California-18 Exit Music.webm",
        "comments": "",
        "tags": []
      },
      "Soarin' Around the World (2016)",
      {
        "title": "Soarin' Around the World (Soundtrack)",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Soarin' Over California-17 Soarin_ Around the World_ Soundtrack.webm",
        "comments": "",
        "tags": []
      },
    ]
  },
  {
    "name": "Grizzly Peak",
    "poster": "AlbumArt/Grizzly Peak.jpeg",
    "location": [33.8070783843265, -117.9200004319301],
    "tags": ["DCA"],
    "tracks": [
      {
        "title": "Grand Californian Hotel: Entrance Path: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Grizzly Peak-02 Grand Californian Hotel_ Entrance Path_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Recreation Area: Area Music: Whistlin' Rufus",
        "artist": "Dan Watson",
        "mp3": BASE_URL + "/Grizzly Peak-03 Recreation Area_ Area Music_ Whistlin_ Rufus.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Recreation Area: Area Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Grizzly Peak-04 Recreation Area_ Area Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Recreation Area: Area Music: Caleb's Report",
        "artist": "Doyle Dykes",
        "mp3": BASE_URL + "/Grizzly Peak-05 Recreation Area_ Area Music_ Caleb_s Report.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Recreation Area: Area Music: Over the Pass",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Grizzly Peak-06 Recreation Area_ Area Music_ Over the Pass.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Recreation Area: Area Music: First Ride",
        "artist": "Don Ross",
        "mp3": BASE_URL + "/Grizzly Peak-07 Recreation Area_ Area Music_ First Ride.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Recreation Area: Area Music: Jazz in the Box",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Grizzly Peak-08 Recreation Area_ Area Music_ Jazz in the Box.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Recreation Area: Area Music: Celtic Cowboy",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Grizzly Peak-09 Recreation Area_ Area Music_ Celtic Cowboy.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Recreation Area: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Grizzly Peak-10 Recreation Area_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      "Grizzly River Run",
      {
        "title": "Grizzly River Run: Queue Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Grizzly Peak-11 Grizzly River Run_ Queue Loop.webm",
        "comments": "",
        "tags": []
      },
      "Redwood Creek Challenge Trail",
      {
        "title": "Redwood Creek Challenge Trail: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Grizzly Peak-12 Redwood Creek Challenge Trail_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Magic of Brother Bear Totem Ceremony",
        "artist": "Mark Mancina",
        "mp3": BASE_URL + "/Grizzly Peak-13 The Magic of Brother Bear Totem Ceremony.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "A Bug's Land",
    "poster": "AlbumArt/Hollywood Land 1.jpeg",
    "location": [33.80662585166978, -117.91691431318918],
    "tags": ["DCA"],
    "tracks": [
      {
        "title": "A Bug's Land - Area Music",
        "artist": "Randy Newman",
        "mp3": BASE_URL + "/Hollywood Land-10 A Bug_s Land - Area Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "It's Tough To Be a Bug!: Queue Loop",
        "artist": "Randy Newman",
        "mp3": BASE_URL + "/Hollywood Land-11 It_s Tough To Be a Bug!_ Queue Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "It's Tough To Be a Bug!: Full Show",
        "artist": "Randy Newman",
        "mp3": BASE_URL + "/Hollywood Land-12 It_s Tough To Be a Bug!_ Full Show.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "It's Tough To Be a Bug!: We're Pollinators",
        "artist": "Randy Newman",
        "mp3": BASE_URL + "/Hollywood Land-13 It_s Tough To Be a Bug!_ We_re Pollinators.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Cars Land",
    "poster": "AlbumArt/Cars Land.jpeg",
    "location": [33.805593738536125, -117.91866887040013],
    "tags": ["DCA"],
    "tracks": [
      {
        "title": "Welcome to Radiator Springs",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Cars Land-01 Welcome to Radiator Springs.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Courthouse Debate",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Cars Land-02 Courthouse Debate.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Radio Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Cars Land-03 Radio Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Route 66 Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Cars Land-04 Route 66 Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Flo's V8 Cafe: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Cars Land-06 Flo_s V8 Cafe_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ramone's House of Body Art: La Bamba",
        "artist": "Ritchie Valens/Traditional",
        "mp3": BASE_URL + "/Cars Land-07 Ramone_s House of Body Art_ La Bamba.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ramone's House of Body Art: Low Rider",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Cars Land-08 Ramone_s House of Body Art_ Low Rider.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ramone's House of Body Art: Why Can't We Be Friends?",
        "artist": "Papa Dee Allen, Charles Miller, Lee Oskar, Lonnie Jordan, B.B. Dickerson, Harold Brown, Howard Scott & Jerry Goldstein",
        "mp3": BASE_URL + "/Cars Land-09 Ramone_s House of Body Art_ Why Can_t We Be Friends_.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Ramone's House of Body Art: Wooly Bully",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Cars Land-10 Ramone_s House of Body Art_ Wooly Bully.webm",
        "comments": "",
        "tags": []
      },
      "Mater's Junkyard Jamboree",
      {
        "title": "Mater's Junkyard Jamboree: Area Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Cars Land-05 Mater_s Junkyard Jamboree_ Area Music.webm",
        "comments": "",
        "tags": []
      },
      "Luigi's Flying Tires",
      {
        "title": "Luigi's Flying Tires: Funiculi Funicula",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Cars Land-11 Luigi_s Flying Tires_ Funiculi Funicula.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Luigi's Flying Tires: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Cars Land-12 Luigi_s Flying Tires_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      "Radiator Springs Racers",
      {
        "title": "Radiator Springs Racers: Attraction Ride Through",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Cars Land-13 Radiator Springs Racers_ Attraction Ride Through.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Pacific Wharf",
    "poster": "AlbumArt/Pacific Wharf.jpeg",
    "location": [33.80566290872351, -117.9201429958598],
    "tags": ["DCA"],
    "tracks": [
      {
        "title": "Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Pacific Wharf-Area Loop.webm",
        "comments": "https://www.youtube.com/watch?v=f7GucOnYA0c",
        "tags": [],
        "chapters": {
          "0:00": "Don Quixote - Luis Villegas - Cafe Ole",
          "3:04": "Loco Por Ti - Oscar Lopez - Seduction",
          "8:10": "Whirl-Y-Reel 1 - Afro Celt Sound System - Sound Magic, Vol. 1",
          "15:30": "Rosa Rose - Oscar Lopez - Seduction",
          "19:44": "Baby Elephants - Luis Villegas - Cafe Ole",
          "23:22": "Rattle and Burn - Jesse Cook - Vertigo",
          "27:09": "Spanish Eyes - Carlos Villalobos - La Esperanza",
          "31:23": "Mercuriana - Jose Luis Encinas - Duende",
          "35:50": "Egüle-n Boru - Togtooliin Chagdarjav, Dashnym Enhtuya, Gurddrj Gantuya - Mongolian Instrumental Music",
          "37:58": "Olinda Road - Hapa - Islands",
          "41:16": "Tigris Palace - NovaMenco - Gypsy Fusion",
          "45:38": "Puerto Rican Gypsy - Banda Criolla, Jose Gonzalez - A World Instrumental Collection",
          "51:29": "At Play - Jim Lang - World Song (score piece from 1992 World Expo Short Film)",
          "52:43": "Köke Toran Degel ~ Goyar Sedgil - Doljin Enhtaivan, Togtooliin Chagdarjav, Dashnym Enhtuya, Tsegmid Gerelmaa, Gurddrj Gantuya - Mongolian Instrumental Music",
          "55:36": "S.O.B. - Luis Villegas - Cafe Ole",
          "59:37": "Nasca Lines - Brian Hughes - A World Instrumental Collection",
          "1:05:11": "Streetbeat - David Hewitt - A World Instrumental Collection"
        }
      },
      {
        "title": "The Bakery: Theme",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Pacific Wharf-03 The Bakery_ Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Cocina Cucamonga: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Pacific Wharf-04 Cocina Cucamonga_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      "Golden Vine Winery",
      {
        "title": "Golden Vine Winery: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Pacific Wharf-01 Golden Vine Winery_ Area Loop.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Golden Vine Winery: Seasons Of The Vine Medley",
        "artist": "Bruce Broughton",
        "mp3": BASE_URL + "/Pacific Wharf-02 Golden Vine Winery_ Seasons Of The Vine Medley.webm",
        "comments": "",
        "tags": []
      },
      "San Fransokyo Square (2023)",
      {
        "title": "San Fransokyo Square: Area Loop",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/San Fransokyo Square-Area Loop.webm",
        "comments": "Credit Mouskegamer and tox1cboy",
        "tags": [],
        "chapters": {
          "0:00": "ピュアなソルジャー (Pure Soldier) - Shiggy Jr.",
          "4:34": "Tokyo Highway - Kyary Pamyu Pamyu",
          "9:31": "One Sweet Ride (Instrumental) - Tokyo Disneyland",
          "11:03": "Spending All My Time - Perfume",
          "14:55": "Spinning World - Perfume",
          "18:50": "夜に駆ける (Yoru Ni Kakeru) - YOASOBI",
          "22:54": "飛燕 (Hien) - Kenshi Yonezu",
          "27:03": "再生 (Saisei) - Perfume",
          "31:37": "Go Way! - SILENT SIREN",
          "34:58": "19 summer note. - SILENT SIREN",
          "38:49": "だいじょばない (Daijyobanai) - Perfume",
          "41:43": "A New Angle (Instrumental) - Tokyo Disneyland",
          "43:16": "脱・借りてきた猫症候群 (Datsu Karitekita Neko Syoukougun) - Uru",
          "46:57": "ESCAPADE - Hige Dandism",
          "51:30": "Mela! - Ryokuoushoku Shakai",
          "55:03": "MY COLOR - Perfume",
          "59:57": "Happy Song (Instrumental) - Tokyo Disneyland",
          "1:01:36": "Peace Sign (Instrumental) - Kenshi Yonezu",
          "1:05:36": "PONPONPON - Kyary Pamyu Pamyu",
          "1:09:38": "レーザービーム (Laser Beam) - Perfume",
        }
      },
    ]
  },
  {
    "name": "Paradise Pier",
    "poster": "AlbumArt/Paradise Pier.jpeg",
    "location": [33.80581498569456, -117.92146321768644],
    "tags": ["DCA"],
    "tracks": [
      "Paradise Pier (2001-2010)",
      {
        "title": "Area Loop (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Paradise Pier-05 Paradise Pier_ Area Loop (2001-2010).webm",
        "comments": "",
        "tags": []
      },
      "Paradise Pier (2010-2018)",
      {
        "title": "Area Demo Loop (2010)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Paradise Pier-10 Paradise Pier_ Area Demo Loop (2010).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (2010)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Paradise Pier-11 Paradise Pier_ Area Loop (2010).webm",
        "comments": "",
        "tags": []
      },
      "Paradise Park",
      {
        "title": "Paradise Park: Area Loop (2010)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Paradise Pier-12 Paradise Park_ Area Loop (2010).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Festival of Holidays Loop (2016)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Festival of Holidays Loop.webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      "The Little Mermaid: Ariel's Undersea Adventure",
      {
        "title": "The Little Mermaid: Ariel's Undersea Adventure: Ride",
        "artist": "Alan Menken",
        "mp3": BASE_URL + "/Paradise Pier-01 The Little Mermaid_ Ariel_s Undersea Adventure_ Ride.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "The Little Mermaid: Ariel's Undersea Adventure: Ride Extended",
        "artist": "Alan Menken",
        "mp3": BASE_URL + "/Paradise Pier-02 The Little Mermaid_ Ariel_s Undersea Adventure_ Ride Extended.webm",
        "comments": "",
        "tags": []
      },
      "Silly Symphony Swings",
      {
        "title": "Silly Symphony Swings: Ride",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Paradise Pier-03 Silly Symphony Swings_ Ride.webm",
        "comments": "",
        "tags": []
      },
      "California Screamin'",
      {
        "title": "California Screamin': Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Paradise Pier-04 California Screamin__ Ride.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Pixar Pier",
    "poster": "AlbumArt/Pixar Pier.jpeg",
    "location": [33.805449805957664, -117.9208449032175],
    "tags": ["DCA"],
    "tracks": [
      {
        "title": "Pixar Promenade: Area Loop (2018)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Pixar Pier-01 Pixar Promenade_ Area Loop (2018).webm",
        "comments": "",
        "tags": []
      },
      "Toy Story: Midway Mania!",
      {
        "title": "The Cleaner",
        "artist": "Randy Newman",
        "mp3": BASE_URL + "/Pixar Pier-02 Toy Story Midway Mania_ Area Music_ The Cleaner.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "You've Got a Friend in Me",
        "artist": "Randy Newman",
        "mp3": BASE_URL + "/Pixar Pier-03 Toy Story Midway Mania_ Area Music_ You_ve Got a Friend in Me.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Hot Potato",
        "artist": "Randy Newman",
        "mp3": BASE_URL + "/Pixar Pier-04 Toy Story Midway Mania_ Hot Potato.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Theme",
        "artist": "Randy Newman",
        "mp3": BASE_URL + "/Pixar Pier-05 Toy Story Midway Mania_ Theme.webm",
        "comments": "",
        "tags": []
      },
      "Plaza de la Familia",
      {
        "title": "Plaza de la Familia: Area Loop",
        "artist": "Michael Giacchino",
        "mp3": BASE_URL + "/Plaza de la Familia-01 Plaza de la Familia_ Area Loop.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Parades",
    "poster": "AlbumArt/Parades.jpeg",
    "location": [33.81213005249728, -117.91867181968192],
    "tags": ["DL"],
    "tracks": [
      "Parade of Princesses",
      {
        "title": "Parade of Princesses: Overture",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-03 Parade of Princesses_ Overture.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Parade of Princesses: Sleeping Beauty",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-04 Parade of Princesses_ Sleeping Beauty.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Parade of Princesses: Cinderella",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-05 Parade of Princesses_ Cinderella.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Parade of Princesses: Snow White",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-06 Parade of Princesses_ Snow White.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Parade of Princesses: Beauty and the Beast",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-07 Parade of Princesses_ Beauty and the Beast.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Parade of Princesses: The Little Mermaid",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-08 Parade of Princesses_ The Little Mermaid.webm",
        "comments": "",
        "tags": []
      },
      "Poppins in the Parks",
      {
        "title": "Poppins in the Parks",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasyland Theatre-23 Parades and Shows_ Poppins in the Parks.webm",
        "comments": "",
        "tags": []
      },
      "Main Street Electrical Parade (1977-1996, 2010, 2022)",
      {
        "title": "Main Street Electrical Parade (2010)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-12 Parade_ Main Street Electrical Parade.webm",
        "comments": "",
        "tags": []
      },
      "Light Magic (1997)",
      {
        "title": "Light Magic",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-13 Parade_ Light Magic (1996).webm",
        "comments": "",
        "tags": []
      },
      "Parade of the Stars (2000-2005)",
      {
        "title": "Parade of The Stars",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-09 Parade_ Parade of The Stars.webm",
        "comments": "",
        "tags": []
      },
      "Walt Disney's Parade of Dreams (2005-2008)",
      {
        "title": "Walt Disney's Parade of Dreams",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-10 Parade_ Parade of Dreams Soundtrack.webm",
        "comments": "",
        "tags": []
      },
      "Toy Story Block Party Bash (2005-2008)",
      {
        "title": "Toy Story Block Party Bash",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-01 Toy Story Block Party Bash_ Full Show.webm",
        "comments": "",
        "tags": []
      },
      //"Celebrate! A Street Party (2009-2010) (missing)",
      "Mickey's Soundsational Parade (2011-2019)",
      {
        "title": "Mickey's Soundsational Parade",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-11 Parade_ Mickey_s Soundsational Parade.webm",
        "comments": "",
        "tags": []
      },
      "Pixar Play Parade (2012, 2018)",
      {
        "title": "Pixar Play Parade",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-Pixar Play Parade.webm",
        "comments": "",
        "tags": []
      },
      "Paint The Night (2015-2018)",
      {
        "title": "Paint the Night: Soundtrack",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-15 Parade_ Paint the Night_ Soundtrack (2015).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Paint The Night: Score",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-14 Parade_ Paint The Night_ Score (2015).webm",
        "comments": "",
        "tags": []
      },
      "Magic Happens (2020)",
      {
        "title": "Magic Happens",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Parades-Magic_Happens_Parade.webm",
        "comments": "",
        "tags": []
      },
      "Mickey's Costume Party Cavalcade (2010-2012)",
      {
        "title": "Mickey's Costume Party Cavalcade",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Halloweentime-04 Mickey_s Costume Party Cavalcade.webm",
        "comments": "",
        "tags": ["HALLOWEEN"]
      },
      //"Frightfully Fun Parade (missing)",
      "Mickey's Very Merry Christmas Parade (1977-1995)",
      {
        "title": "Mickey's Very Merry Christmas Parade",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-34 Parades_ Mickey_s Very Merry Christmas Parade.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      "A Christmas Fantasy Parade (1995)",
      {
        "title": "A Christmas Fantasy Parade",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-35 Parades_ A Christmas Fantasy Parade.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
    ]
  },
  {
    "name": "Fantasmic!",
    "poster": "AlbumArt/Fantasmic!.jpeg",
    "location": [33.81201782997649, -117.92118828573547],
    "tags": ["DL"],
    "tracks": [
      "Fantasmic! (1992-2012)",
      {
        "title": "Soundtrack (1992-2012)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasmic!-01 Soundtrack (1992-2012).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Score (1992-2012)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasmic!-02 Score (1992-2012).webm",
        "comments": "",
        "tags": []
      },
      "Fantasmic! 1.0 (2013-2017)",
      {
        "title": "Soundtrack (2013)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasmic!-04 Soundtrack (Extended).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Score (2013)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasmic!-03 Score (2013).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Score (2013, Extended)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasmic!-05 Score (Extended).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Music (2013)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasmic!-07 Exit Music.webm",
        "comments": "",
        "tags": []
      },
      "Fantasmic! 2.0 (2017-2022)",
      {
        "title": "Soundtrack (2017)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasmic!-08 Soundtrack (2017).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Music: Imagination (2017)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasmic!-09 Exit Music_ Imagine (2017).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Finale",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Fantasmic!-06 Finale.webm",
        "comments": "",
        "tags": []
      },
      
    ]
  },
  {
    "name": "World of Color",
    "poster": "AlbumArt/World of Color.jpeg",
    "location": [33.80545649489444, -117.92172977305096],
    "tags": ["DCA"],
    "tracks": [
      {
        "title": "Soundtrack (Pre-Premiere)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/World of Color-01 Soundtrack (Pre-Premiere).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Soundtrack (2010)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/World of Color-02 Soundtrack (2010).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Soundtrack (2013)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/World of Color-03 Soundtrack (2013).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Music",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/World of Color-04 Exit Music.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Theme Song and Finale",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/World of Color-05 Theme Song and Finale.webm",
        "comments": "",
        "tags": []
      },
      "World of Color: Winter Dreams (2013-2015)",
      {
        "title": "Winter Dreams: Theme",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-38 Winter Dreams_ Theme.webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "World of Color: Winter Dreams",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-39 World of Color_ Winter Dreams Soundtrack.webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      {
        "title": "Glow",
        "artist": "Eric Whitacre Virtual Choir",
        "mp3": BASE_URL + "/Holiday-37 Glow.webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      "World of Color: Season of Light (2016)",
      {
        "title": "Exit Music (This Is My Wish)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/World of Color-08 Season of Light_ Exit Music (This Is My Wish, 2016).webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
      "World of Color: Celebrate! (2015-2016)",
      {
        "title": "World of Color: Celebrate!",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/World of Color-06 Celebrate_ Soundtrack (2015).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Music: Forever Young & Disneyland",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/World of Color-07 Celebrate_ Exit Music (2015).webm",
        "comments": "",
        "tags": []
      },
      //"World of Color: Villainous (2019, missing)",
      //"World of Color: ONE (2023, missing)",
    ]
  },
  {
    "name": "Firework Shows",
    "poster": "AlbumArt/Firework Shows.jpeg",
    "location": [33.81247242624619, -117.91902105031294],
    "tags": ["DL"],
    "tracks": [
      "Fantasy in the Sky (1966-2000)",
      {
        "title": "Fantasy in the Sky",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-01 Tinkerbell_s Fantasy in the Sky.webm",
        "comments": "",
        "tags": []
      },
      "Believe... There's Magic in the Stars (2000-2004)",
      {
        "title": "Believe... There's Magic in the Stars",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-02 Believe, There_s Magic in the Stars.webm",
        "comments": "",
        "tags": []
      },
      //"Imagine... A Fantasy in the Sky (2004-2005, missing)",
      "Remember... Dreams Come True (2005-2009)",
      {
        "title": "Remember... Dreams Come True",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-03 Remember Dreams Come True.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Music: Remember When",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-07 Exit Music_ Remember Dreams Come True (Remember When).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Music: Remember When (Extended)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-08 Exit Music_ Remember Dreams Come True (Extended).webm",
        "comments": "",
        "tags": []
      },
      "Magical! (2009-2015)",
      {
        "title": "Magical!",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-04 Magical!.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Exit Music: A Dream is a Wish",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-09 Exit Music_ Magical! (A Dream is a Wish).webm",
        "comments": "",
        "tags": []
      },
      "Disneyland Forever (2015-2018)",
      {
        "title": "Disneyland Forever (2015)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-05 Disneyland Forever.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Exit Music: A Kiss Goodnight",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-11 Exit Music_ A Kiss Goodnight.webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Exit Music: Live the Magic",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-10 Exit Music_ Disneyland Forever (Live the Magic).webm",
        "comments": "",
        "tags": []
      },
      "Together Forever: A Pixar Nighttime Spectacular (2018)",
      {
        "title": "Together Forever: A Pixar Nighttime Spectacular (2018)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-Together Forever_ A Pixar Nighttime Spectacular.webm",
        "comments": "",
        "tags": []
      },
      "Mickey's Mix Magic (2019)",
      {
        "title": "Mickey's Mix Magic",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-Mickey_s Mix Magic.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Theme: It's a Good Time",
        "artist": "The DeeKompressors",
        "mp3": BASE_URL + "/Firework Shows-06 Mickey & Minnie_s 90th Celebration_ It_s a Good Time.webm",
        "comments": "",
        "tags": []
      },
      "Wonderous Journeys (2023)",
      {
        "title": "Wonderous Journeys",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-Wonderous Journeys.webm",
        "comments": "Credit @professorowlmusic",
        "tags": []
      },
      {
        "title": "Exit Music: It's Wonderous (Lawrence Version)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-It_s Wonderous (Lawrence Version).webm",
        "comments": "",
        "tags": []
      },
      "Halloween Screams: A Villainous Surprise in the Skies (2009)",
      {
        "title": "Halloween Screams: A Villainous Surprise in the Skies",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Halloweentime-06 Fireworks Show_ Halloween Screams_ A Villainous Surprise in the Skies.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HALLOWEEN"]
      },
      "Believe... in Holiday Magic (2000)",
      {
        "title": "Believe... in Holiday Magic",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-36 Fireworks Show_ Believe in Holiday Magic.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      "New Years",
      {
        "title": "A Dream is a Wish Your Heart Makes (Steps In Time, New Years)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/A Dream is A Wish Your Heart Makes (Steps In Time).webm",
        "comments": "",
        "tags": []
      },
      "Goodbye",
      {
        "title": "Disneyland Closing Music: When You Wish Upon a Star",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-15 Disneyland Closing Music_ When You Wish Upon a Star.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Disneyland Closing Spiel",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Firework Shows-16 Disneyland Closing Spiel.webm",
        "comments": "",
        "tags": []
      }
    ]
  },
  {
    "name": "Welcome to Disneyland",
    "poster": "AlbumArt/Welcome to Disneyland.jpeg",
    "location": [33.809738326449285, -117.91899009816206],
    "tags": ["DLR"],
    "tracks": [
      {
        "title": "Welcome to Disneyland: Disneyland Dedication",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Welcome to Disneyland-01 Welcome to Disneyland_ Disneyland Dedication.webm",
        "comments": "",
        "tags": []
      },
      "Mickey and Friends Tram",
      {
        "title": "Mickey and Friends Tram: Ride (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Welcome to Disneyland-02 Mickey and Friends Tram_ Ride (2001-2005).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        "title": "Mickey and Friends Tram: Narration (2006)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Welcome to Disneyland-03 Mickey and Friends Tram_ Narration (2006).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey and Friends Tram: Ride (2006)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Welcome to Disneyland-04 Mickey and Friends Tram_ Ride (2006).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      {
        title:"Mickey and Friends Tram: CD version",
        artist:"Walt Disney",
        mp3:BASE_URL + "/Disneyland Hotel-02 Tram.webm",
        comments:"Credit Chris Lyndon",
        tags: []
      },
      "Special Events",
      {
        title:"Disneyland: Pride Nite Soundtrack",
        artist:"Walt Disney",
        mp3:BASE_URL + "/Pride Nite.webm",
        comments:"Credit Magical Soundtracks",
        tags: [],
        chapters: {
          "0:00": "Love Yourself - Billy Porter",
          "4:19": "Physical - Dua Lipa",
          "7:23": "Welcome - The Blind Boys of Alambama",
          "10:30": "Believe - Cher",
          "13:36": "Man! I Feel Like A Woman! - Shania Twain",
          "17:45": "We're All In This Together - High School Musical Cast",
          "21:32": "Show Me Love - Robin S.",
          "25:49": "Dancing Queen - ABBA",
          "29:11": "Zero to Hero - Ariana Grande",
          "31:34": "Finally - CeCe Peniston",
          "35:29": "I Wanna Dance with Somebody - Whitney Houston",
          "40:09": "True to Your Heart - The Wailing Souls",
          "44:20": "I Feel Like Dancing - Jason Mraz",
          "48:08": "Together Again - Janet Jackson",
          "51:51": "Bajo El Mar - Alejandro Sanz",
          "55:43": "We Are Family - Sister Sledge",
          "58:53": "Stupid Love - Lady Gaga",
          "1:02:27": "Friend Like Me - Ne-Yo",
          "1:05:22": "Waiting for Tonight - Jennifer Lopez",
          "1:09:34": "I Am What I Am (Remix) - A. Williams, Gloria Gaynor",
          "1:13:00": "Dig a Little Deeper - China Anne McClain",
          "1:15:29": "Free Yourself - Jessie Ware",
          "1:19:10": "Spice Up Your Life - Spice Girls",
          "1:21:32": "I Wan'na Be Like You (The Monkey Song) - DCappella",
          "1:24:27": "I'm Coming Out / Upside Down (Eric Kupper Remix) - Diana Ross",
          "1:27:24": "Hold Me Closer - Elton John & Britney Spears",
          "1:30:15": "Let It Go (From \"Frozen\") - Rascal Flatts & Lucy Hale",
          "1:34:22": "Finally Ready - The Shapeshifters, Billy Porter",
          "1:38:17": "Express Yourself - Madonna",
          "1:42:06": "Try Everything - Shakira",
          "1:45:17": "Kill the Lights (with Nile Rodgers) [Audien Remix] - Alex Newell, Jess Glynne & DJ Cassidy",
          "1:48:40": "I Will Survive - Gloria Gaynor",
          "1:53:24": "What We Got (Mickey's Birthday Song) - Tony Ferrari",
          "1:54:12": "Magic - Kylie Minogue",
          "1:58:12": "A Dream Is a Wish (Reggae) - Shyam Moses"
        }
      },
    ]
  },
  {
    "name": "Disneyland Esplanade",
    "poster": "AlbumArt/Disneyland Esplanade.jpeg",
    "location": [33.80909460542662, -117.91898560453289],
    "tags": ["DLR"],
    "tracks": [
      "Esplanade, 2001",
      {
        "title": "When You Wish Upon a Star",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-01 When You Wish Upon a Star.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "You've Got a Friend in Me",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-02 You_ve Got a Friend in Me.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Hi-Diddle-Dee-Dee",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-03 Hi-Diddle-Dee-Dee.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Under the Sea",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-04 Under the Sea.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Indiana Jones Theme",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-05 Indiana Jones Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "California Girls",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-06 California Girls.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Tiki Tiki Room",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-07 Tiki Tiki Room.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Hooray For Hollywood",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-08 Hooray For Hollywood.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Yo Ho",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-09 Yo Ho.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "I Left My Heart in San Francisco",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-10 I Left My Heart in San Francisco.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Heigh Ho",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-11 Heigh Ho.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Smile Darn Ya Smile",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-12 Smile Darn Ya Smile.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "It's a Small World",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-13 It_s a Small World.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "March Of The Cards",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-14 March Of The Cards.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Mickey Mouse Club March",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-15 Mickey Mouse Club March.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Zip-a-dee-doo-da",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-16 Zip-a-dee-doo-da.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Fantasmic",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-17 Fantasmic.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Soarin' Over California",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-18 Soarin_ Over California.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Be Our Guest",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-19 Be Our Guest.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Davy Crockett",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-20 Davy Crockett.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "You Can Fly",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-21 You Can Fly.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Star Wars Theme",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-22 Star Wars Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Muppet Theme",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-23 Muppet Theme.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Minnie's Yoo Hoo",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-24 Minnie_s Yoo Hoo.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Honey I Shrunk the Audience",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-25 Honey I Shrunk the Audience.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "How Do You Do",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-26 How Do You Do.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Just One Dream",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-27 Just One Dream.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "In the Golden Afternoon",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-28 In the Golden Afternoon.webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop 1 (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-29 Area Loop 1 (2001-2005).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop 2 (2001)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-30 Area Loop 2 (2001-2005).webm",
        "comments": "Credit Chris Lyndon",
        "tags": []
      },
      "Esplanade, 2006",
      {
        "title": "Area Loop (2006)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-31 Area Loop (2006).webm",
        "comments": "",
        "tags": []
      },
      "Esplanade, Special Events",
      {
        "title": "Pixar Fest Area Loop (2018)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Disneyland Esplanade-32 Pixar Fest Area Loop (2018).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Pixar Fest Area Loop (2024)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Esplanade-Area Loop (Pixar Fest, 2024).webm",
        "comments": "",
        "tags": []
      },
      {
        "title": "Area Loop (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-01 Disneyland Esplanade_ Area Loop.webm",
        "comments": "",
        "tags": ["HOLIDAY"]
      },
    ]
  },
  {
    "name": "Disneyland Hotel",
    "poster": "AlbumArt/Disneyland Hotel.jpeg",
    "location": [33.8121, -117.9189],
    "tags": ["DLR"],
    "tracks": [
      {
        title:"Trader Sam's Enchanted Tiki Bar: Area Loop",
        artist:"Walt Disney",
        mp3:BASE_URL + "/Disneyland Hotel-01 Trader Sam Tiki Bar_ Area Loop.webm",
        comments:"",
        tags: []
      },
      {
        "title": "Trader Sam's Enchanted Tiki Bar: Area Loop (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-41 Trader Sam_s Enchanted Tiki Bar_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        title:"Area Loop",
        artist:"Walt Disney",
        mp3:BASE_URL + "/Disneyland Hotel-03 Area Loop.webm",
        comments:"",
        tags: []
      },
      {
        "title": "Area Loop (Holiday)",
        "artist": "Walt Disney",
        "mp3": BASE_URL + "/Holiday-40 Disneyland Hotel_ Area Loop.webm",
        "comments": "Credit Chris Lyndon",
        "tags": ["HOLIDAY"]
      },
      {
        title:"Area Loop: Lobby",
        artist:"Walt Disney",
        mp3:BASE_URL + "/Disneyland Hotel-04 Area Loop_ Lobby.webm",
        comments:"Credit Chris Lyndon",
        tags: []
      },
      {
        title:"Area Loop: Fantasy Tower",
        artist:"Walt Disney",
        mp3:BASE_URL + "/Disneyland Hotel-05 Area Loop_ Fantasy Tower.webm",
        comments:"Credit Chris Lyndon",
        tags: []
      },
      {
        title:"Area Loop: Adventure Tower",
        artist:"Walt Disney",
        mp3:BASE_URL + "/Disneyland Hotel-06 Area Loop_ Adventure Tower.webm",
        comments:"Credit Chris Lyndon",
        tags: []
      },
      {
        title:"Area Loop: Frontier Tower",
        artist:"Walt Disney",
        mp3:BASE_URL + "/Disneyland Hotel-07 Area Loop_ Frontier Tower.webm",
        comments:"Credit Chris Lyndon",
        tags: []
      },
      {
        title:"Fantasy & Adventure Tower Medley",
        artist:"Walt Disney",
        mp3:BASE_URL + "/Disneyland Hotel-08 Fantasy & Adventure Tower Medley.webm",
        comments:"",
        tags: []
      },
      {
        title:"Area Loop: Goofy's Kitchen",
        artist:"Walt Disney",
        mp3:BASE_URL + "/Disneyland Hotel-09 Area Loop_ Goofy_s Kitchen.webm",
        comments:"Credit Chris Lyndon",
        tags: []
      }
    ]
  },
  /*{
    "name": "The Grand Californian Hotel",
    "poster": "AlbumArt/Grand Californian.jpeg",
    "location": [33.8121, -117.9189],
    "tags": ["DLR"],
    "tracks": []
  },*/
  {
    "name": "Pixar Place Hotel",
    "poster": "AlbumArt/Pixar Place Hotel.jpeg",
    "location": [33.8121, -117.9189],
    "tags": ["DLR"],
    "tracks": [
      {
        title:"The Incredits",
        artist:"Cartographerr",
        mp3:BASE_URL + "/Pixar Place Hotel-The Incredits.webm",
        comments:"",
        tags: []
      },
      {
        title:"Remember Me",
        artist:"Chantry Johnson",
        mp3:BASE_URL + "/Pixar Place Hotel-Remember Me.webm",
        comments:"",
        tags: []
      },
      {
        title:"Define Dancing",
        artist:"Brain Tan",
        mp3:BASE_URL + "/Pixar Place Hotel-Define Dancing.webm",
        comments:"",
        tags: []
      },
      {
        title:"Nobody Like U",
        artist:"Last Trip To The Moon",
        mp3:BASE_URL + "/Pixar Place Hotel-Nobody Like U.webm",
        comments:"",
        tags: []
      },
      {
        title:"Married Life",
        artist:"PK, The Heavyweights",
        mp3:BASE_URL + "/Pixar Place Hotel-Married Life.webm",
        comments:"",
        tags: []
      },
      {
        title:"Bundle of Joy",
        artist:"Tomas Kovacs, Terry Joiner",
        mp3:BASE_URL + "/Pixar Place Hotel-Bundle of Joy.webm",
        comments:"",
        tags: []
      },
      {
        title:"Le Festin",
        artist:"ASHER YELO",
        mp3:BASE_URL + "/Pixar Place Hotel-Le Festin.webm",
        comments:"",
        tags: []
      },
      {
        title:"You've Got a Friend in Me",
        artist:"John Wilhelm, Keigan Jones",
        mp3:BASE_URL + "/Pixar Place Hotel-You've Got a Friend in Me.webm",
        comments:"",
        tags: []
      },
      {
        title:"Touch the Sky",
        artist:"Simon Oscroft",
        mp3:BASE_URL + "/Pixar Place Hotel-Touch the Sky.webm",
        comments:"",
        tags: []
      },
      {
        title:"Born to Play",
        artist:"Jintae Ko",
        mp3:BASE_URL + "/Pixar Place Hotel-Born to Play.webm",
        comments:"",
        tags: []
      },
    ]
  }
]

let tracks = albums.map(album => album.tracks.map(t => typeof t === "string" ? t : toTrackData(album, t))).flat();

export default tracks;
