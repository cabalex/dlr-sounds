export interface TrackData {
	title: string;
	artist: string;
	free: boolean;
	mp3: string;
	poster: string;
	album: string;
	comments: string;
}

const BASE_URL = "https://pub-9c3443886f92462bbbffc7cfe4e2b3a8.r2.dev"

const tracks: TrackData[] = [
	{
		title:"Welcome to Disneyland: Disneyland Dedication",
		artist:"Walt Disney",
		free:false,
		mp3:"Welcome to Disneyland-01 Welcome to Disneyland_ Disneyland Dedication.mp3",
		poster:"AlbumArt/Welcome to Disneyland.jpeg",
		album:"Welcome to Disneyland",
		comments:""
	},
	{
		title:"Mickey and Friends Tram: Ride (2001-2005)",
		artist:"Walt Disney",
		free:false,
		mp3:"Welcome to Disneyland-02 Mickey and Friends Tram_ Ride (2001-2005).mp3",
		poster:"AlbumArt/Welcome to Disneyland.jpeg",
		album:"Welcome to Disneyland",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mickey and Friends Tram: Narration (2006)",
		artist:"Walt Disney",
		free:false,
		mp3:"Welcome to Disneyland-03 Mickey and Friends Tram_ Narration (2006).mp3",
		poster:"AlbumArt/Welcome to Disneyland.jpeg",
		album:"Welcome to Disneyland",
		comments:""
	},
	{
		title:"Mickey and Friends Tram: Ride (2006)",
		artist:"Walt Disney",
		free:false,
		mp3:"Welcome to Disneyland-04 Mickey and Friends Tram_ Ride (2006).mp3",
		poster:"AlbumArt/Welcome to Disneyland.jpeg",
		album:"Welcome to Disneyland",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"When You Wish Upon a Star",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-01 When You Wish Upon a Star.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"You've Got a Friend in Me",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-02 You_ve Got a Friend in Me.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Hi-Diddle-Dee-Dee",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-03 Hi-Diddle-Dee-Dee.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Under the Sea",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-04 Under the Sea.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Indiana Jones Theme",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-05 Indiana Jones Theme.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"California Girls",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-06 California Girls.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Tiki Tiki Room",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-07 Tiki Tiki Room.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Hooray For Hollywood",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-08 Hooray For Hollywood.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Yo Ho",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-09 Yo Ho.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"I Left My Heart in San Francisco",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-10 I Left My Heart in San Francisco.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Heigh Ho",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-11 Heigh Ho.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Smile Darn Ya Smile",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-12 Smile Darn Ya Smile.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"It's a Small World",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-13 It_s a Small World.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"March Of The Cards",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-14 March Of The Cards.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Mickey Mouse Club March",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-15 Mickey Mouse Club March.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Zip-a-dee-doo-da",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-16 Zip-a-dee-doo-da.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Fantasmic",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-17 Fantasmic.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Soarin' Over California",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-18 Soarin_ Over California.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Be Our Guest",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-19 Be Our Guest.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Davy Crockett",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-20 Davy Crockett.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"You Can Fly",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-21 You Can Fly.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Star Wars Theme",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-22 Star Wars Theme.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Muppet Theme",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-23 Muppet Theme.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Minnie's Yoo Hoo",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-24 Minnie_s Yoo Hoo.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Honey I Shrunk the Audience",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-25 Honey I Shrunk the Audience.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"How Do You Do",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-26 How Do You Do.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Just One Dream",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-27 Just One Dream.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"In the Golden Afternoon",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-28 In the Golden Afternoon.mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Area Loop 1 (2001-2005)",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-29 Area Loop 1 (2001-2005).mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Area Loop 2 (2001-2005)",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-30 Area Loop 2 (2001-2005).mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Loop (2006)",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-31 Area Loop (2006).mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
	{
		title:"Pixar Fest Area Loop (2018)",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Esplanade-32 Pixar Fest Area Loop (2018).mp3",
		poster:"AlbumArt/Disneyland Esplanade.jpeg",
		album:"Disneyland Esplanade",
		comments:""
	},
		
	{
		title:"Area Background Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Gate-01 Area Background Music.mp3",
		poster:"AlbumArt/Main Gate.jpeg",
		album:"Main Gate",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Loop (1971)",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Gate-02 Area Loop (1971).mp3",
		poster:"AlbumArt/Main Gate.jpeg",
		album:"Main Gate",
		comments:""
	},
	{
		title:"Area Loop 1 (1992)",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Gate-03 Area Loop 1 (1992).mp3",
		poster:"AlbumArt/Main Gate.jpeg",
		album:"Main Gate",
		comments:""
	},
	{
		title:"Area Loop 2 (1992)",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Gate-04 Area Loop 2 (1992).mp3",
		poster:"AlbumArt/Main Gate.jpeg",
		album:"Main Gate",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Entry Whistle",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Gate-05 Entry Whistle.mp3",
		poster:"AlbumArt/Main Gate.jpeg",
		album:"Main Gate",
		comments:""
	},
	{
		title:"Entry Chime",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Gate-06 Entry Chime.mp3",
		poster:"AlbumArt/Main Gate.jpeg",
		album:"Main Gate",
		comments:""
	},
	{
		title:"Area Soundscape",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Gate-07 Area Soundscape.mp3",
		poster:"AlbumArt/Main Gate.jpeg",
		album:"Main Gate",
		comments:""
	},
	{
		title:"Fanfare",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Gate-08 Fanfare.mp3",
		poster:"AlbumArt/Main Gate.jpeg",
		album:"Main Gate",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Entrance Tunnel: Area Soundscape",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Gate-09 Entrance Tunnel_ Area Soundscape.mp3",
		poster:"AlbumArt/Main Gate.jpeg",
		album:"Main Gate",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Main Street U.S.A.: Morning Rope Drop Ceremony",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Gate-10 Main Street U.S.A._ Morning Rope Drop Ceremony.mp3",
		poster:"AlbumArt/Main Gate.jpeg",
		album:"Main Gate",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Main Street U.S.A.: Walt Disney's Dedication of Disneyland",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Gate-11 Main Street U.S.A._ Walt Disney_s Dedication of Disneyland.mp3",
		poster:"AlbumArt/Main Gate.jpeg",
		album:"Main Gate",
		comments:""
	},
		
	{
		title:"All Aboard!",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Railroad-01 All Aboard!.mp3",
		poster:"AlbumArt/Disneyland Railroad.jpeg",
		album:"Disneyland Railroad",
		comments:""
	},
	{
		title:"Depot Announcements Through the Decades",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Railroad-02 Depot Announcements Through the Decades.mp3",
		poster:"AlbumArt/Disneyland Railroad.jpeg",
		album:"Disneyland Railroad",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Depot Announcements",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Railroad-03 Depot Announcements.mp3",
		poster:"AlbumArt/Disneyland Railroad.jpeg",
		album:"Disneyland Railroad",
		comments:""
	},
	{
		title:"Grand Circle Tour (1972)",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Railroad-04 Grand Circle Tour (1972).mp3",
		poster:"AlbumArt/Disneyland Railroad.jpeg",
		album:"Disneyland Railroad",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Grand Circle Tour (2013)",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Railroad-05 Grand Circle Tour (2013).mp3",
		poster:"AlbumArt/Disneyland Railroad.jpeg",
		album:"Disneyland Railroad",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Grand Circle Tour Soundscape (2013)",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Railroad-06 Grand Circle Tour Soundscape (2013).mp3",
		poster:"AlbumArt/Disneyland Railroad.jpeg",
		album:"Disneyland Railroad",
		comments:""
	},
	{
		title:"Narration (2013)",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Railroad-07 Narration (2013).mp3",
		poster:"AlbumArt/Disneyland Railroad.jpeg",
		album:"Disneyland Railroad",
		comments:""
	},
	{
		title:"Grand Canyon and Primeval World: Grand Canyon Score",
		artist:"Ferde Grofe",
		free:false,
		mp3:"Disneyland Railroad-08 Grand Canyon and Primeval World_ Grand Canyon Score.mp3",
		poster:"AlbumArt/Disneyland Railroad.jpeg",
		album:"Disneyland Railroad",
		comments:""
	},
	{
		title:"Grand Canyon and Primeval World: Original Soundtrack",
		artist:"George Bruns",
		free:false,
		mp3:"Disneyland Railroad-09 Grand Canyon and Primeval World_ Original Soundtrack.mp3",
		poster:"AlbumArt/Disneyland Railroad.jpeg",
		album:"Disneyland Railroad",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Grand Canyon and Primeval World: Primeval Score",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Disneyland Railroad-10 Grand Canyon and Primeval World_ Primeval Score.mp3",
		poster:"AlbumArt/Disneyland Railroad.jpeg",
		album:"Disneyland Railroad",
		comments:""
	},
		
	{
		title:"Town Square: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-01 Town Square_ Area Loop.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:""
	},
	{
		title:"The Dapper Dans: Meet Me Down On Main Street",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-02 The Dapper Dans_ Meet Me Down On Main Street.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:""
	},
	{
		title:"The Dapper Dans: Disney Favorites Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-03 The Dapper Dans_ Disney Favorites Medley.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Dapper Dans: Street Performance",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-04 The Dapper Dans_ Street Performance.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:""
	},
	{
		title:"Main Street Performing Groups: Mellomen Quartet: Street Performance",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-05 Main Street Performing Groups_ Mellomen Quartet_ Street Performance.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Main Street Performing Groups: Saxophone Quartet: Street Performance",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-06 Main Street Performing Groups_ Saxophone Quartet_ Street Performance.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Main Street Performing Groups: The Firehouse Five, Plus Two: Street Performance",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-07 Main Street Performing Groups_ The Firehouse Five, Plus Two_ Street Performance.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Disneyland Band: Walt Disney Welcome Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-08 The Disneyland Band_ Walt Disney Welcome Medley.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Disneyland Band: March Down Main Street",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-09 The Disneyland Band_ March Down Main Street.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Disneyland Band: Mickey Mouse Club Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-10 The Disneyland Band_ Mickey Mouse Club Medley.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Disneyland Band: Disney Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-11 The Disneyland Band_ Disney Medley.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:""
	},
	{
		title:"The Disneyland Band: Disney Fantasy Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-12 The Disneyland Band_ Disney Fantasy Medley.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:""
	},
	{
		title:"The Disneyland Band: It's a Small World",
		artist:"Walt Disney",
		free:false,
		mp3:"Town Square-13 The Disneyland Band_ It_s a Small World.mp3",
		poster:"AlbumArt/Town Square.jpeg",
		album:"Town Square",
		comments:""
	},
		
	{
		title:"Spoon Full of Sugar",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-01 Spoon Full of Sugar.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Alice in Wonderland",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-02 Alice in Wonderland.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"I'm Late",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-03 I_m Late.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Lavender Blue Dilly Dilly",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-04 Lavender Blue Dilly Dilly.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"I Know You",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-05 I Know You.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Once Upon a Dream",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-06 Once Upon a Dream.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Love is a Song",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-07 Love is a Song.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Little April Showers",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-08 Little April Showers.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"The Work Song",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-09 The Work Song.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"So This is Love",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-10 So This is Love.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"The Second Star to the Right",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-11 The Second Star to the Right.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"You Can Fly",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-12 You Can Fly.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Part of Your World",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-13 Part of Your World.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Belle",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-14 Belle.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"I'm Wishing",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-15 I_m Wishing.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Heigh Ho",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-16 Heigh Ho.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Whistle While you Work",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-17 Whistle While you Work.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Hi Diddle Dee Dee",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-18 Hi Diddle Dee Dee.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Little Wooden Head",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-19 Little Wooden Head.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"I've Got No Strings",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-20 I_ve Got No Strings.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Give a Little Whistle",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-21 Give a Little Whistle.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Everybody Has a Laughin' Place",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-22 Everybody Has a Laughin_ Place.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Zip-a-Dee-Doo-Dah",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-23 Zip-a-Dee-Doo-Dah.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Music Loop (1987-2007)",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-24 Music Loop (1987-2007).mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Music Loop (2009)",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-25 Music Loop (2009).mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:""
	},
	{
		title:"Day One Disneyland",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-26 Day One Disneyland.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Happiest Fleet on Earth",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-27 The Happiest Fleet on Earth.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Colors of Mary Blair",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-28 The Colors of Mary Blair.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"All Aboard The Trains of Disney",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-29 All Aboard The Trains of Disney.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Crowning Achievements",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-30 Crowning Achievements.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Realms of Fantasy",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-31 Realms of Fantasy.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Disneyland Symphony",
		artist:"Walt Disney",
		free:false,
		mp3:"The Disney Gallery-32 The Disneyland Symphony.mp3",
		poster:"AlbumArt/The Disney Gallery.jpeg",
		album:"The Disney Gallery",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"Overture",
		artist:"Walt Disney",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-01 Overture.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:""
	},
	{
		title:"Pre-Show: Soundtrack",
		artist:"Walt Disney",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-02 Pre-Show_ Soundtrack.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:""
	},
	{
		title:"Main Show: Soundtrack",
		artist:"Walt Disney",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-03 Main Show_ Soundtrack.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:""
	},
	{
		title:"Overture & Pre-Show: Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-04 Overture & Pre-Show_ Score.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:""
	},
	{
		title:"Main Show: Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-05 Main Show_ Score.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:""
	},
	{
		title:"Golden Dream",
		artist:"Walt Disney",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-06 Golden Dream.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:""
	},
	{
		title:"America the Beautiful",
		artist:"Joel McNeely",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-07 America the Beautiful.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:""
	},
	{
		title:"The Gettysburg Address: Score",
		artist:"Joel McNeely",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-08 The Gettysburg Address_ Score.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:""
	},
	{
		title:"Exit Music",
		artist:"Joel McNeely",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-09 Exit Music.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:""
	},
	{
		title:"The Disneyland Story: Lobby Area Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-10 The Disneyland Story_ Lobby Area Music.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The First 50 Magical Years: If You Believe in Magic",
		artist:"Walt Disney",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-11 The First 50 Magical Years_ If You Believe in Magic.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The First 50 Magical Years: Suite",
		artist:"Walt Disney",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-12 The First 50 Magical Years_ Suite.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:""
	},
	{
		title:"The First 50 Magical Years: Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-13 The First 50 Magical Years_ Score.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The First 50 Magical Years: Show",
		artist:"Walt Disney",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-14 The First 50 Magical Years_ Show.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Walt Disney Story",
		artist:"Walt Disney",
		free:false,
		mp3:"Great Moments with Mr. Lincoln-15 The Walt Disney Story.mp3",
		poster:"AlbumArt/Great Moments with Mr. Lincoln.jpeg",
		album:"Great Moments with Mr. Lincoln",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"Main Street Emporium: Music Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street Emporium-01 Main Street Emporium_ Music Loop.mp3",
		poster:"AlbumArt/Main Street Emporium.jpeg",
		album:"Main Street Emporium",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Main Street Emporium: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street Emporium-02 Main Street Emporium_ Area Loop.mp3",
		poster:"AlbumArt/Main Street Emporium.jpeg",
		album:"Main Street Emporium",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Disney Clothiers Ltd.: Music Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street Emporium-03 Disney Clothiers Ltd._ Music Loop.mp3",
		poster:"AlbumArt/Main Street Emporium.jpeg",
		album:"Main Street Emporium",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Windows: Peter Pan",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street Emporium-04 Enchanted Windows_ Peter Pan.mp3",
		poster:"AlbumArt/Main Street Emporium.jpeg",
		album:"Main Street Emporium",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Windows: Cinderella",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street Emporium-05 Enchanted Windows_ Cinderella.mp3",
		poster:"AlbumArt/Main Street Emporium.jpeg",
		album:"Main Street Emporium",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Windows: The Princess and the Frog",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street Emporium-06 Enchanted Windows_ The Princess and the Frog.mp3",
		poster:"AlbumArt/Main Street Emporium.jpeg",
		album:"Main Street Emporium",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Windows: Toy Story",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street Emporium-07 Enchanted Windows_ Toy Story.mp3",
		poster:"AlbumArt/Main Street Emporium.jpeg",
		album:"Main Street Emporium",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Windows: Frozen",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street Emporium-08 Enchanted Windows_ Frozen.mp3",
		poster:"AlbumArt/Main Street Emporium.jpeg",
		album:"Main Street Emporium",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Windows: Aladdin",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street Emporium-09 Enchanted Windows_ Aladdin.mp3",
		poster:"AlbumArt/Main Street Emporium.jpeg",
		album:"Main Street Emporium",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Main Street Shops: The Storybook Store: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street Emporium-10 Main Street Shops_ The Storybook Store_ Area Loop.mp3",
		poster:"AlbumArt/Main Street Emporium.jpeg",
		album:"Main Street Emporium",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Main Street Shops: The Main Street Cinema: Music Loop",
		artist:"Spike Jones",
		free:false,
		mp3:"Main Street Emporium-11 Main Street Shops_ The Main Street Cinema_ Music Loop.mp3",
		poster:"AlbumArt/Main Street Emporium.jpeg",
		album:"Main Street Emporium",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Main Street U.S.A. (1971-1975): Area Loop",
		artist:"Jack Wagner",
		free:false,
		mp3:"Main Street Emporium-12 Main Street U.S.A. (1971-1975)_ Area Loop.mp3",
		poster:"AlbumArt/Main Street Emporium 1.jpeg",
		album:"Main Street Emporium",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Main Street U.S.A. (1971-1975): Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street Emporium-13 Main Street U.S.A. (1971-1975)_ Area Loop.mp3",
		poster:"AlbumArt/Main Street Emporium 1.jpeg",
		album:"Main Street Emporium",
		comments:""
	},
		
	{
		title:"Area Music: Black and White",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-01 Area Music_ Black and White.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Everybody's Doing It",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-02 Area Music_ Everybody_s Doing It.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Flying Arrows",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-03 Area Music_ Flying Arrows.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Golden Arrow",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-04 Area Music_ Golden Arrow.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Good Old Timers",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-05 Area Music_ Good Old Timers.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: The International Rag",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-06 Area Music_ The International Rag.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: King Chanticleer",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-07 Area Music_ King Chanticleer.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Maple Leaf Rag",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-08 Area Music_ Maple Leaf Rag.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Saddle Back",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-09 Area Music_ Saddle Back.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Wild Cherries",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-10 Area Music_ Wild Cherries.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: The Old Grey Mare",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-11 Area Music_ The Old Grey Mare.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Old Timers Waltz",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-12 Area Music_ Old Timers Waltz.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Pretty Baby",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-13 Area Music_ Pretty Baby.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Put Your Arms Around Me",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-14 Area Music_ Put Your Arms Around Me.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Razzazza Mazzazza",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-15 Area Music_ Razzazza Mazzazza.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Robert E Lee",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-16 Area Music_ Robert E Lee.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Mississippi Cabaret",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-17 Area Music_ Mississippi Cabaret.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Saxema",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-18 Area Music_ Saxema.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Silver Heels",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-19 Area Music_ Silver Heels.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Music: Tickle the Ivories",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-20 Area Music_ Tickle the Ivories.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Loop: Morning Loop",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-21 Area Loop_ Morning Loop.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
	{
		title:"Area Loop: Evening Loop",
		artist:"Albert White and his Gaslight Orchestra",
		free:false,
		mp3:"Main Street U.S.A. (1976-1992)-22 Area Loop_ Evening Loop.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1976-1992).jpeg",
		album:"Main Street U.S.A. (1976-1992)",
		comments:""
	},
		
	{
		title:"Area Music: Old Timers Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-01 Area Music_ Old Timers Medley.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Music: Beautiful Beulah",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-02 Area Music_ Beautiful Beulah.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Music: Fortuosity",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-03 Area Music_ Fortuosity.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Music: Goodbye My Coney Island Baby",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-04 Area Music_ Goodbye My Coney Island Baby.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Music: I Could Love a Million Girls",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-05 Area Music_ I Could Love a Million Girls.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Music: Lets Have a Drink on It",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-06 Area Music_ Lets Have a Drink on It.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Music: Mary is a Grand Ol Name",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-07 Area Music_ Mary is a Grand Ol Name.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Music: Yankee Doodle Boy",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-08 Area Music_ Yankee Doodle Boy.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Music: Smiles",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-09 Area Music_ Smiles.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Music: Summer Magic Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-10 Area Music_ Summer Magic Medley.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Music: Music Man Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-11 Area Music_ Music Man Medley.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Music: Hello Dolly Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-12 Area Music_ Hello Dolly Medley.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Music: Oklahoma Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-13 Area Music_ Oklahoma Medley.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
	{
		title:"Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (1992-2012)-14 Area Loop.mp3",
		poster:"AlbumArt/Main Street U.S.A. (1992-2012).jpeg",
		album:"Main Street U.S.A. (1992-2012)",
		comments:""
	},
		
	{
		title:"Area Music: Married Life",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (2013)-01 Area Music_ Married Life.mp3",
		poster:"AlbumArt/Main Street U.S.A. (2013).jpeg",
		album:"Main Street U.S.A. (2013)",
		comments:""
	},
	{
		title:"Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (2013)-02 Area Loop.mp3",
		poster:"AlbumArt/Main Street U.S.A. (2013).jpeg",
		album:"Main Street U.S.A. (2013)",
		comments:""
	},
	{
		title:"Area Loop 1",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (2013)-03 Area Loop 1.mp3",
		poster:"AlbumArt/Main Street U.S.A. (2013).jpeg",
		album:"Main Street U.S.A. (2013)",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Loop 2",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street U.S.A. (2013)-04 Area Loop 2.mp3",
		poster:"AlbumArt/Main Street U.S.A. (2013).jpeg",
		album:"Main Street U.S.A. (2013)",
		comments:""
	},
		
	{
		title:"Main Street U.S.A. Atmosphere: Penny Arcade Sounds & The Welte Orchestrion",
		artist:"Walt Disney",
		free:false,
		mp3:"Main Street-01 Main Street U.S.A. Atmosphere_ Penny Arcade Sounds & The Welte Orchestrion.mp3",
		poster:"AlbumArt/Main Street.jpeg",
		album:"Main Street",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Coke Corner: Alexander's Ragtime Band",
		artist:"Chris Calabrese",
		free:false,
		mp3:"Main Street-02 Coke Corner_ Alexander_s Ragtime Band.mp3",
		poster:"AlbumArt/Main Street.jpeg",
		album:"Main Street",
		comments:""
	},
	{
		title:"Coke Corner: Ragtime Favorites",
		artist:"Chris Calabrese",
		free:false,
		mp3:"Main Street-03 Coke Corner_ Ragtime Favorites.mp3",
		poster:"AlbumArt/Main Street.jpeg",
		album:"Main Street",
		comments:""
	},
	{
		title:"Coke Corner: Main Street Medley",
		artist:"Chris Calabrese",
		free:false,
		mp3:"Main Street-04 Coke Corner_ Main Street Medley.mp3",
		poster:"AlbumArt/Main Street.jpeg",
		album:"Main Street",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Coke Corner: Alice In Wonderland Medley",
		artist:"Chris Calabrese",
		free:false,
		mp3:"Main Street-05 Coke Corner_ Alice In Wonderland Medley.mp3",
		poster:"AlbumArt/Main Street.jpeg",
		album:"Main Street",
		comments:""
	},
	{
		title:"Coke Corner: Country Bear Jamboree Medley",
		artist:"Chris Calabrese",
		free:false,
		mp3:"Main Street-06 Coke Corner_ Country Bear Jamboree Medley.mp3",
		poster:"AlbumArt/Main Street.jpeg",
		album:"Main Street",
		comments:""
	},
	{
		title:"Coke Corner: Yo Ho & Grim Grinning Ghost Medley",
		artist:"Chris Calabrese",
		free:false,
		mp3:"Main Street-07 Coke Corner_ Yo Ho & Grim Grinning Ghost Medley.mp3",
		poster:"AlbumArt/Main Street.jpeg",
		album:"Main Street",
		comments:""
	},
	{
		title:"Coke Corner: Toontown Medley",
		artist:"Chris Calabrese",
		free:false,
		mp3:"Main Street-08 Coke Corner_ Toontown Medley.mp3",
		poster:"AlbumArt/Main Street.jpeg",
		album:"Main Street",
		comments:""
	},
	{
		title:"Coke Corner: One Little Spark",
		artist:"Chris Calabrese",
		free:false,
		mp3:"Main Street-09 Coke Corner_ One Little Spark.mp3",
		poster:"AlbumArt/Main Street.jpeg",
		album:"Main Street",
		comments:""
	},
	{
		title:"Coke Corner: World Showcase Medley",
		artist:"Chris Calabrese",
		free:false,
		mp3:"Main Street-10 Coke Corner_ World Showcase Medley.mp3",
		poster:"AlbumArt/Main Street.jpeg",
		album:"Main Street",
		comments:""
	},
		
	{
		title:"Jolly Holiday Bakery: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Jolly Holiday Bakery-01 Jolly Holiday Bakery_ Area Loop.mp3",
		poster:"AlbumArt/Jolly Holiday Bakery.jpeg",
		album:"Jolly Holiday Bakery",
		comments:""
	},
	{
		title:"The Plaza Inn: Character Breakfast Music Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Jolly Holiday Bakery-02 The Plaza Inn_ Character Breakfast Music Loop.mp3",
		poster:"AlbumArt/Jolly Holiday Bakery.jpeg",
		album:"Jolly Holiday Bakery",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Plaza Inn: Lunchtime Music Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Jolly Holiday Bakery-03 The Plaza Inn_ Lunchtime Music Loop.mp3",
		poster:"AlbumArt/Jolly Holiday Bakery.jpeg",
		album:"Jolly Holiday Bakery",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Plaza Inn: Evening Music Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Jolly Holiday Bakery-04 The Plaza Inn_ Evening Music Loop.mp3",
		poster:"AlbumArt/Jolly Holiday Bakery.jpeg",
		album:"Jolly Holiday Bakery",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Plaza Inn: Quartet",
		artist:"Walt Disney",
		free:false,
		mp3:"Jolly Holiday Bakery-05 The Plaza Inn_ Quartet.mp3",
		poster:"AlbumArt/Jolly Holiday Bakery.jpeg",
		album:"Jolly Holiday Bakery",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Carnation Plaza: Let's Dance at Disneyland",
		artist:"Walt Disney",
		free:false,
		mp3:"Jolly Holiday Bakery-06 Carnation Plaza_ Let_s Dance at Disneyland.mp3",
		poster:"AlbumArt/Jolly Holiday Bakery.jpeg",
		album:"Jolly Holiday Bakery",
		comments:""
	},
		
	{
		title:"Hub Introduction",
		artist:"Walt Disney",
		free:false,
		mp3:"Central Plaza-01 Hub Introduction.mp3",
		poster:"AlbumArt/Central Plaza.jpeg",
		album:"Central Plaza",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"A Gala Day at Disneyland",
		artist:"Walt Disney",
		free:false,
		mp3:"Central Plaza-02 A Gala Day at Disneyland.mp3",
		poster:"AlbumArt/Central Plaza.jpeg",
		album:"Central Plaza",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Central Plaza-03 Area Loop.mp3",
		poster:"AlbumArt/Central Plaza.jpeg",
		album:"Central Plaza",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Adventureland: Introduction & Theme Song",
		artist:"Walt Disney",
		free:false,
		mp3:"Central Plaza-04 Adventureland_ Introduction & Theme Song.mp3",
		poster:"AlbumArt/Central Plaza.jpeg",
		album:"Central Plaza",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Adventureland: Hawaiian Bandstand",
		artist:"Walt Disney",
		free:false,
		mp3:"Central Plaza-05 Adventureland_ Hawaiian Bandstand.mp3",
		poster:"AlbumArt/Central Plaza.jpeg",
		album:"Central Plaza",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Frontierland: Introduction & Theme Song",
		artist:"Walt Disney",
		free:false,
		mp3:"Central Plaza-06 Frontierland_ Introduction & Theme Song.mp3",
		poster:"AlbumArt/Central Plaza.jpeg",
		album:"Central Plaza",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Fronteirland: Stockade Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Central Plaza-07 Fronteirland_ Stockade Loop.mp3",
		poster:"AlbumArt/Central Plaza.jpeg",
		album:"Central Plaza",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Tomorrowland: Introduction & Theme Song",
		artist:"Walt Disney",
		free:false,
		mp3:"Central Plaza-08 Tomorrowland_ Introduction & Theme Song.mp3",
		poster:"AlbumArt/Central Plaza.jpeg",
		album:"Central Plaza",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Fantasyland: Introduction & Theme Song",
		artist:"Walt Disney",
		free:false,
		mp3:"Central Plaza-09 Fantasyland_ Introduction & Theme Song.mp3",
		poster:"AlbumArt/Central Plaza.jpeg",
		album:"Central Plaza",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Fantasyland: Sleeping Beauty Castle Drawbridge",
		artist:"Walt Disney",
		free:false,
		mp3:"Central Plaza-10 Fantasyland_ Sleeping Beauty Castle Drawbridge.mp3",
		poster:"AlbumArt/Central Plaza.jpeg",
		album:"Central Plaza",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"Clopin's Music Box: Clopin's Music Box",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasy Faire-01 Clopin_s Music Box_ Clopin_s Music Box.mp3",
		poster:"AlbumArt/Fantasy Faire.jpeg",
		album:"Fantasy Faire",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Princess Academy: Royal Coronation Ceremony",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasy Faire-02 Princess Academy_ Royal Coronation Ceremony.mp3",
		poster:"AlbumArt/Fantasy Faire.jpeg",
		album:"Fantasy Faire",
		comments:""
	},
	{
		title:"Princess Academy: Royal Coronation and Faire",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasy Faire-03 Princess Academy_ Royal Coronation and Faire.mp3",
		poster:"AlbumArt/Fantasy Faire.jpeg",
		album:"Fantasy Faire",
		comments:""
	},
	{
		title:"Princess Academy: Princesse's Entrance",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasy Faire-04 Princess Academy_ Princesse_s Entrance.mp3",
		poster:"AlbumArt/Fantasy Faire.jpeg",
		album:"Fantasy Faire",
		comments:""
	},
	{
		title:"Princess Academy: Royal Dance Training",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasy Faire-05 Princess Academy_ Royal Dance Training.mp3",
		poster:"AlbumArt/Fantasy Faire.jpeg",
		album:"Fantasy Faire",
		comments:""
	},
	{
		title:"Princess Academy: Royal Etiquette Training",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasy Faire-06 Princess Academy_ Royal Etiquette Training.mp3",
		poster:"AlbumArt/Fantasy Faire.jpeg",
		album:"Fantasy Faire",
		comments:""
	},
	{
		title:"Princess Academy: Royal Pledge and Celebration",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasy Faire-07 Princess Academy_ Royal Pledge and Celebration.mp3",
		poster:"AlbumArt/Fantasy Faire.jpeg",
		album:"Fantasy Faire",
		comments:""
	},
	{
		title:"Rapunzel's Tower",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasy Faire-08 Rapunzel_s Tower.mp3",
		poster:"AlbumArt/Fantasy Faire.jpeg",
		album:"Fantasy Faire",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Rapunzel's Tower: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasy Faire-09 Rapunzel_s Tower_ Area Loop.mp3",
		poster:"AlbumArt/Fantasy Faire.jpeg",
		album:"Fantasy Faire",
		comments:""
	},
	{
		title:"Royal Hall: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasy Faire-10 Royal Hall_ Area Loop.mp3",
		poster:"AlbumArt/Fantasy Faire.jpeg",
		album:"Fantasy Faire",
		comments:""
	},
	{
		title:"Princess Meet and Greet: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasy Faire-11 Princess Meet and Greet_ Area Loop.mp3",
		poster:"AlbumArt/Fantasy Faire.jpeg",
		album:"Fantasy Faire",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Village Area: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasy Faire-12 Village Area_ Area Loop.mp3",
		poster:"AlbumArt/Fantasy Faire.jpeg",
		album:"Fantasy Faire",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"Pixie Hollow: Area Loop: Suite",
		artist:"Joel McNeely",
		free:false,
		mp3:"Pixie Hollow-01 Pixie Hollow_ Area Loop_ Suite.mp3",
		poster:"AlbumArt/Pixie Hollow.jpeg",
		album:"Pixie Hollow",
		comments:""
	},
	{
		title:"Pixie Hollow: Area Loop: Soundtrack",
		artist:"Joel McNeely",
		free:false,
		mp3:"Pixie Hollow-02 Pixie Hollow_ Area Loop_ Soundtrack.mp3",
		poster:"AlbumArt/Pixie Hollow.jpeg",
		album:"Pixie Hollow",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Pixie Hollow: Area Loop: Soundtrack (Extended)",
		artist:"Joel McNeely",
		free:false,
		mp3:"Pixie Hollow-03 Pixie Hollow_ Area Loop_ Soundtrack (Extended).mp3",
		poster:"AlbumArt/Pixie Hollow.jpeg",
		album:"Pixie Hollow",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Triton's Garden & Ariel's Grotto: Entrance Music",
		artist:"Alan Menken",
		free:false,
		mp3:"Pixie Hollow-04 Triton_s Garden & Ariel_s Grotto_ Entrance Music.mp3",
		poster:"AlbumArt/Pixie Hollow.jpeg",
		album:"Pixie Hollow",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Triton's Garden & Ariel's Grotto: Area Loop",
		artist:"Alan Menken",
		free:false,
		mp3:"Pixie Hollow-05 Triton_s Garden & Ariel_s Grotto_ Area Loop.mp3",
		poster:"AlbumArt/Pixie Hollow.jpeg",
		album:"Pixie Hollow",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Triton's Garden & Ariel's Grotto: Area Loop (Extended)",
		artist:"Alan Menken",
		free:false,
		mp3:"Pixie Hollow-06 Triton_s Garden & Ariel_s Grotto_ Area Loop (Extended).mp3",
		poster:"AlbumArt/Pixie Hollow.jpeg",
		album:"Pixie Hollow",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Snow White's Grotto: Wishing Well",
		artist:"Walt Disney",
		free:false,
		mp3:"Pixie Hollow-07 Snow White_s Grotto_ Wishing Well.mp3",
		poster:"AlbumArt/Pixie Hollow.jpeg",
		album:"Pixie Hollow",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"Sleeping Beauty Castle: Area Music (1983): When You Wish Upon A Star",
		artist:"Walt Disney",
		free:false,
		mp3:"Sleeping Beauty Castle-01 Sleeping Beauty Castle_ Area Music (1983)_ When You Wish Upon A Star.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle.jpeg",
		album:"Sleeping Beauty Castle",
		comments:""
	},
	{
		title:"Sleeping Beauty Castle: Area Music (1992): Castle Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Sleeping Beauty Castle-02 Sleeping Beauty Castle_ Area Music (1992)_ Castle Medley.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle.jpeg",
		album:"Sleeping Beauty Castle",
		comments:""
	},
	{
		title:"Sleeping Beauty Castle: Walk Through",
		artist:"Walt Disney",
		free:false,
		mp3:"Sleeping Beauty Castle-03 Sleeping Beauty Castle_ Walk Through.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle.jpeg",
		album:"Sleeping Beauty Castle",
		comments:""
	},
	{
		title:"Sleeping Beauty Castle: Walk Through (Extended)",
		artist:"Walt Disney",
		free:false,
		mp3:"Sleeping Beauty Castle-04 Sleeping Beauty Castle_ Walk Through (Extended).mp3",
		poster:"AlbumArt/Sleeping Beauty Castle.jpeg",
		album:"Sleeping Beauty Castle",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Loop (1983): Castle Courtyard",
		artist:"Walt Disney",
		free:false,
		mp3:"Sleeping Beauty Castle-05 Area Loop (1983)_ Castle Courtyard.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle.jpeg",
		album:"Sleeping Beauty Castle",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Music (1983): When You Wish Upon a Star",
		artist:"Walt Disney",
		free:false,
		mp3:"Sleeping Beauty Castle-06 Area Music (1983)_ When You Wish Upon a Star.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle.jpeg",
		album:"Sleeping Beauty Castle",
		comments:""
	},
	{
		title:"Area Music (2013): When You Wish Upon a Star",
		artist:"Scott Erickson",
		free:false,
		mp3:"Sleeping Beauty Castle-07 Area Music (2013)_ When You Wish Upon a Star.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle.jpeg",
		album:"Sleeping Beauty Castle",
		comments:""
	},
	{
		title:"Area Music (2013): Be Our Guest",
		artist:"Walt Disney",
		free:false,
		mp3:"Sleeping Beauty Castle-08 Area Music (2013)_ Be Our Guest.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle.jpeg",
		album:"Sleeping Beauty Castle",
		comments:""
	},
	{
		title:"Area Music (2013): Touch the Sky",
		artist:"Walt Disney",
		free:false,
		mp3:"Sleeping Beauty Castle-09 Area Music (2013)_ Touch the Sky.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle.jpeg",
		album:"Sleeping Beauty Castle",
		comments:""
	},
	{
		title:"Area Music (2013): Someday My Prince Will Come",
		artist:"Scott Erickson",
		free:false,
		mp3:"Sleeping Beauty Castle-10 Area Music (2013)_ Someday My Prince Will Come.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle.jpeg",
		album:"Sleeping Beauty Castle",
		comments:""
	},
	{
		title:"Area Music (2013): Heigh Ho",
		artist:"Scott Erickson",
		free:false,
		mp3:"Sleeping Beauty Castle-11 Area Music (2013)_ Heigh Ho.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle.jpeg",
		album:"Sleeping Beauty Castle",
		comments:""
	},
	{
		title:"Disney Villian's Lair: Music Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Sleeping Beauty Castle-12 Disney Villian_s Lair_ Music Loop.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle.jpeg",
		album:"Sleeping Beauty Castle",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Casey Jr. Circus Train: Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Sleeping Beauty Castle-13 Casey Jr. Circus Train_ Ride.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle 1.jpeg",
		album:"Sleeping Beauty Castle",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mad Tea Party: Area Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Sleeping Beauty Castle-14 Mad Tea Party_ Area Music.mp3",
		poster:"AlbumArt/Sleeping Beauty Castle 2.jpeg",
		album:"Sleeping Beauty Castle",
		comments:""
	},
		
	{
		title:"Darkride Suite",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-01 Darkride Suite.mp3",
		poster:"AlbumArt/Dark Rides.jpeg",
		album:"Dark Rides",
		comments:""
	},
	{
		title:"Snow White's Scary Adventures: The Witch's Dungeon (1983)",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-02 Snow White_s Scary Adventures_ The Witch_s Dungeon (1983).mp3",
		poster:"AlbumArt/Dark Rides 1.jpeg",
		album:"Dark Rides",
		comments:""
	},
	{
		title:"Snow White's Scary Adventures: The Witch's Dungeon (1992)",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-03 Snow White_s Scary Adventures_ The Witch_s Dungeon (1992).mp3",
		poster:"AlbumArt/Dark Rides 1.jpeg",
		album:"Dark Rides",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Snow White's Scary Adventures: Queue Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-04 Snow White_s Scary Adventures_ Queue Loop.mp3",
		poster:"AlbumArt/Dark Rides 1.jpeg",
		album:"Dark Rides",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Snow White's Scary Adventures: Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-05 Snow White_s Scary Adventures_ Ride.mp3",
		poster:"AlbumArt/Dark Rides 1.jpeg",
		album:"Dark Rides",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Snow White's Scary Adventures: Ride Extended",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-06 Snow White_s Scary Adventures_ Ride Extended.mp3",
		poster:"AlbumArt/Dark Rides 1.jpeg",
		album:"Dark Rides",
		comments:""
	},
	{
		title:"Pinocchio's Daring Journey: Queue Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-07 Pinocchio_s Daring Journey_ Queue Loop.mp3",
		poster:"AlbumArt/Dark Rides 2.jpeg",
		album:"Dark Rides",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Pinocchio's Daring Journey: Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-08 Pinocchio_s Daring Journey_ Ride.mp3",
		poster:"AlbumArt/Dark Rides 2.jpeg",
		album:"Dark Rides",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Pinocchio's Daring Journey: Ride Extended",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-09 Pinocchio_s Daring Journey_ Ride Extended.mp3",
		poster:"AlbumArt/Dark Rides 2.jpeg",
		album:"Dark Rides",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Pinocchio's Daring Journey: Ride Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-10 Pinocchio_s Daring Journey_ Ride Score.mp3",
		poster:"AlbumArt/Dark Rides 2.jpeg",
		album:"Dark Rides",
		comments:""
	},
	{
		title:"Pinocchio's Daring Journey: Exit Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-11 Pinocchio_s Daring Journey_ Exit Loop.mp3",
		poster:"AlbumArt/Dark Rides 2.jpeg",
		album:"Dark Rides",
		comments:""
	},
	{
		title:"Peter Pan's Flight: Queue Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-12 Peter Pan_s Flight_ Queue Loop.mp3",
		poster:"AlbumArt/Dark Rides 3.jpeg",
		album:"Dark Rides",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Peter Pan's Flight: Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-13 Peter Pan_s Flight_ Ride.mp3",
		poster:"AlbumArt/Dark Rides 3.jpeg",
		album:"Dark Rides",
		comments:""
	},
	{
		title:"Peter Pan's Flight: Ride Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-14 Peter Pan_s Flight_ Ride Score.mp3",
		poster:"AlbumArt/Dark Rides 3.jpeg",
		album:"Dark Rides",
		comments:""
	},
	{
		title:"Mr. Toad's Wild Ride: Queue Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-15 Mr. Toad_s Wild Ride_ Queue Loop.mp3",
		poster:"AlbumArt/Dark Rides 4.jpeg",
		album:"Dark Rides",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mr. Toad's Wild Ride: Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-16 Mr. Toad_s Wild Ride_ Ride.mp3",
		poster:"AlbumArt/Dark Rides 4.jpeg",
		album:"Dark Rides",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mr. Toad's Wild Ride: Ride Extended",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-17 Mr. Toad_s Wild Ride_ Ride Extended.mp3",
		poster:"AlbumArt/Dark Rides 4.jpeg",
		album:"Dark Rides",
		comments:""
	},
	{
		title:"Mr. Toad's Wild Ride: Ride Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Dark Rides-18 Mr. Toad_s Wild Ride_ Ride Score.mp3",
		poster:"AlbumArt/Dark Rides 4.jpeg",
		album:"Dark Rides",
		comments:""
	},
		
	{
		title:"Area Music: Alice in Wonderland",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-01 Area Music_ Alice in Wonderland.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"Queue Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-02 Queue Loop.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Boarding Announcements",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-03 Boarding Announcements.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-04 Ride.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"Ride Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-05 Ride Score.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"Gloomy Wood (Entrance Tunnel)",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-06 Gloomy Wood (Entrance Tunnel).mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"Twas Brillig/The Tulgey Wood",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-07 Twas Brillig_The Tulgey Wood.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"Caucus Race",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-08 Caucus Race.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"In the Golden Afternoon 1",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-09 In the Golden Afternoon 1.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"In the Golden Afternoon 2",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-10 In the Golden Afternoon 2.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"AEIOU",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-11 AEIOU.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"The Tulgey Wood",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-12 The Tulgey Wood.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"Painting the Roses Red 1",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-13 Painting the Roses Red 1.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"Painting the Roses Red 2",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-14 Painting the Roses Red 2.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"March of the Cards 1",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-15 March of the Cards 1.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"March of the Cards 2",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-16 March of the Cards 2.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"March of the Cards 3",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-17 March of the Cards 3.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"March of the Cards 4",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-18 March of the Cards 4.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"Off with Her Head 1",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-19 Off with Her Head 1.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
	{
		title:"Off with Her Head 2",
		artist:"Walt Disney",
		free:false,
		mp3:"Alice in Wonderland-20 Off with Her Head 2.mp3",
		poster:"AlbumArt/Alice in Wonderland.jpeg",
		album:"Alice in Wonderland",
		comments:""
	},
		
	{
		title:"Clock Parade",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-01 Clock Parade.mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Area Music (1964)",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-02 Area Music (1964).mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Entrance Music (1964)",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-03 Entrance Music (1964).mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Queue Loop (1964)",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-04 Queue Loop (1964).mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Queue Loop (1983)",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-05 Queue Loop (1983).mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Theme",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-06 Theme.mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Variation I",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-07 Variation I.mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Variation II",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-08 Variation II.mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Medley",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-09 Medley.mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Float Through",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-10 Float Through.mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Float Through (Extended)",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-11 Float Through (Extended).mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Score 1",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-12 Score 1.mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Score 2",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-13 Score 2.mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Safety Spiel",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-14 Safety Spiel.mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
	{
		title:"Exit Music",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"It's a Small World-15 Exit Music.mp3",
		poster:"AlbumArt/It_s a Small World.jpeg",
		album:"It's a Small World",
		comments:""
	},
		
	{
		title:"Storybook Land: Grotto: Area Background Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Storybook Land-01 Storybook Land_ Grotto_ Area Background Music.mp3",
		poster:"AlbumArt/Storybook Land.jpeg",
		album:"Storybook Land",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Pinocchio's Village Haus: Area Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Matterhorn Bobsleds-01 Pinocchio_s Village Haus_ Area Music.mp3",
		poster:"AlbumArt/Matterhorn Bobsleds.jpeg",
		album:"Matterhorn Bobsleds",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Pinocchio's Village Haus: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Matterhorn Bobsleds-02 Pinocchio_s Village Haus_ Area Loop.mp3",
		poster:"AlbumArt/Matterhorn Bobsleds.jpeg",
		album:"Matterhorn Bobsleds",
		comments:""
	},
	{
		title:"Alpine Gardens: Sounds of the Matterhorn",
		artist:"Walt Disney",
		free:false,
		mp3:"Matterhorn Bobsleds-03 Alpine Gardens_ Sounds of the Matterhorn.mp3",
		poster:"AlbumArt/Matterhorn Bobsleds.jpeg",
		album:"Matterhorn Bobsleds",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Alpine Gardens: Swiss Polka Band",
		artist:"Walt Disney",
		free:false,
		mp3:"Matterhorn Bobsleds-04 Alpine Gardens_ Swiss Polka Band.mp3",
		poster:"AlbumArt/Matterhorn Bobsleds.jpeg",
		album:"Matterhorn Bobsleds",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Queue Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Matterhorn Bobsleds-05 Queue Loop.mp3",
		poster:"AlbumArt/Matterhorn Bobsleds.jpeg",
		album:"Matterhorn Bobsleds",
		comments:""
	},
	{
		title:"Queue Loop Reconstruction",
		artist:"Walt Disney",
		free:false,
		mp3:"Matterhorn Bobsleds-06 Queue Loop Reconstruction.mp3",
		poster:"AlbumArt/Matterhorn Bobsleds.jpeg",
		album:"Matterhorn Bobsleds",
		comments:""
	},
	{
		title:"Sounds",
		artist:"Walt Disney",
		free:false,
		mp3:"Matterhorn Bobsleds-07 Sounds.mp3",
		poster:"AlbumArt/Matterhorn Bobsleds.jpeg",
		album:"Matterhorn Bobsleds",
		comments:""
	},
	{
		title:"Remain Seated Narration",
		artist:"Walt Disney",
		free:false,
		mp3:"Matterhorn Bobsleds-08 Remain Seated Narration.mp3",
		poster:"AlbumArt/Matterhorn Bobsleds.jpeg",
		album:"Matterhorn Bobsleds",
		comments:""
	},
	{
		title:"Area Soundscape",
		artist:"Walt Disney",
		free:false,
		mp3:"Matterhorn Bobsleds-09 Area Soundscape.mp3",
		poster:"AlbumArt/Matterhorn Bobsleds.jpeg",
		album:"Matterhorn Bobsleds",
		comments:""
	},
	{
		title:"Climbers Announcements",
		artist:"Walt Disney",
		free:false,
		mp3:"Matterhorn Bobsleds-10 Climbers Announcements.mp3",
		poster:"AlbumArt/Matterhorn Bobsleds.jpeg",
		album:"Matterhorn Bobsleds",
		comments:""
	},
		
	{
		title:"Dumbo Flying Elephants: Area Music: Casey Jr.",
		artist:"Walt Disney",
		free:false,
		mp3:"Dumbo Flying Elephants-01 Dumbo Flying Elephants_ Area Music_ Casey Jr.mp3",
		poster:"AlbumArt/Dumbo Flying Elephants.jpeg",
		album:"Dumbo Flying Elephants",
		comments:""
	},
	{
		title:"Dumbo Flying Elephants: Area Music: Circus Parade",
		artist:"Walt Disney",
		free:false,
		mp3:"Dumbo Flying Elephants-02 Dumbo Flying Elephants_ Area Music_ Circus Parade.mp3",
		poster:"AlbumArt/Dumbo Flying Elephants.jpeg",
		album:"Dumbo Flying Elephants",
		comments:""
	},
	{
		title:"Dumbo Flying Elephants: Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Dumbo Flying Elephants-03 Dumbo Flying Elephants_ Ride.mp3",
		poster:"AlbumArt/Dumbo Flying Elephants.jpeg",
		album:"Dumbo Flying Elephants",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Fantasyland Band Organ: Once Upon a Dream",
		artist:"Walt Disney",
		free:false,
		mp3:"Dumbo Flying Elephants-04 Fantasyland Band Organ_ Once Upon a Dream.mp3",
		poster:"AlbumArt/Dumbo Flying Elephants.jpeg",
		album:"Dumbo Flying Elephants",
		comments:""
	},
	{
		title:"Fantasyland Band Organ: Sleeping Beauty Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Dumbo Flying Elephants-05 Fantasyland Band Organ_ Sleeping Beauty Medley.mp3",
		poster:"AlbumArt/Dumbo Flying Elephants.jpeg",
		album:"Dumbo Flying Elephants",
		comments:""
	},
	{
		title:"Fantasyland Band Organ: Mickey and Friends",
		artist:"Walt Disney",
		free:false,
		mp3:"Dumbo Flying Elephants-06 Fantasyland Band Organ_ Mickey and Friends.mp3",
		poster:"AlbumArt/Dumbo Flying Elephants.jpeg",
		album:"Dumbo Flying Elephants",
		comments:""
	},
	{
		title:"Fantasyland Band Organ: Bibbidi-Bobbidi-Boo",
		artist:"Walt Disney",
		free:false,
		mp3:"Dumbo Flying Elephants-07 Fantasyland Band Organ_ Bibbidi-Bobbidi-Boo.mp3",
		poster:"AlbumArt/Dumbo Flying Elephants.jpeg",
		album:"Dumbo Flying Elephants",
		comments:""
	},
	{
		title:"Fantasyland Band Organ: Loop (1983)",
		artist:"Walt Disney",
		free:false,
		mp3:"Dumbo Flying Elephants-08 Fantasyland Band Organ_ Loop (1983).mp3",
		poster:"AlbumArt/Dumbo Flying Elephants.jpeg",
		album:"Dumbo Flying Elephants",
		comments:""
	},
	{
		title:"Fantasyland Band Organ: Loop (2012)",
		artist:"Walt Disney",
		free:false,
		mp3:"Dumbo Flying Elephants-09 Fantasyland Band Organ_ Loop (2012).mp3",
		poster:"AlbumArt/Dumbo Flying Elephants.jpeg",
		album:"Dumbo Flying Elephants",
		comments:""
	},
		
	{
		title:"Adventureland Gateway - Native Drum Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Adventureland-01 Adventureland Gateway - Native Drum Loop.mp3",
		poster:"AlbumArt/Adventureland.jpeg",
		album:"Adventureland",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Adventureland Suite",
		artist:"George Bruns",
		free:false,
		mp3:"Adventureland-02 Adventureland Suite.mp3",
		poster:"AlbumArt/Adventureland.jpeg",
		album:"Adventureland",
		comments:""
	},
	{
		title:"Hawaiian Bandstand: Performance",
		artist:"The Kahauanu Trio",
		free:false,
		mp3:"Adventureland-03 Hawaiian Bandstand_ Performance.mp3",
		poster:"AlbumArt/Adventureland.jpeg",
		album:"Adventureland",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Veranda: Interior Loop (1971)",
		artist:"Jack Wagner",
		free:false,
		mp3:"Adventureland-04 Veranda_ Interior Loop (1971).mp3",
		poster:"AlbumArt/Adventureland.jpeg",
		album:"Adventureland",
		comments:""
	},
	{
		title:"Aladdin's Oasis: The Marketplace",
		artist:"Walt Disney",
		free:false,
		mp3:"Adventureland-05 Aladdin_s Oasis_ The Marketplace.mp3",
		poster:"AlbumArt/Adventureland.jpeg",
		album:"Adventureland",
		comments:""
	},
	{
		title:"Aladdins Oasis: Area Loop (1993)",
		artist:"Walt Disney",
		free:false,
		mp3:"Adventureland-06 Aladdins Oasis_ Area Loop (1993).mp3",
		poster:"AlbumArt/Adventureland.jpeg",
		album:"Adventureland",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Bazaar: Area Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Adventureland-07 Bazaar_ Area Music.mp3",
		poster:"AlbumArt/Adventureland.jpeg",
		album:"Adventureland",
		comments:""
	},
	{
		title:"Bazaar: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Adventureland-08 Bazaar_ Area Loop.mp3",
		poster:"AlbumArt/Adventureland.jpeg",
		album:"Adventureland",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Steel Drum Band",
		artist:"Walt Disney",
		free:false,
		mp3:"Adventureland-09 Steel Drum Band.mp3",
		poster:"AlbumArt/Adventureland.jpeg",
		album:"Adventureland",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"Enchanted Tiki Garden: Tiki Room Preshow",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-01 Enchanted Tiki Garden_ Tiki Room Preshow.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:""
	},
	{
		title:"Enchanted Tiki Garden: Tiki Room Preshow with background",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-02 Enchanted Tiki Garden_ Tiki Room Preshow with background.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:""
	},
	{
		title:"Enchanted Tiki Garden: Tiki Room Preshow - United Airlines",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-03 Enchanted Tiki Garden_ Tiki Room Preshow - United Airlines.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:""
	},
	{
		title:"Enchanted Tiki Garden: Moonlight Time in Old Hawaii (1963)",
		artist:"George Bruns",
		free:false,
		mp3:"Enchanted Tiki Room-04 Enchanted Tiki Garden_ Moonlight Time in Old Hawaii (1963).mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:""
	},
	{
		title:"Enchanted Tiki Garden: Area Loop (1963-1970)",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-05 Enchanted Tiki Garden_ Area Loop (1963-1970).mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Tiki Garden: Area Loop (1971-1985)",
		artist:"Jack Wagner",
		free:false,
		mp3:"Enchanted Tiki Room-06 Enchanted Tiki Garden_ Area Loop (1971-1985).mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Tiki Garden: Area Loop (1986)",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-07 Enchanted Tiki Garden_ Area Loop (1986).mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Tiki Juice Bar: Dole Pineapple Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-08 Enchanted Tiki Juice Bar_ Dole Pineapple Loop.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Tiki Room: The Tiki Tiki Tiki Room",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Enchanted Tiki Room-10 Enchanted Tiki Room_ The Tiki Tiki Tiki Room.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:""
	},
	{
		title:"Enchanted Tiki Room: Let's All Sing Like the Birdies Sing",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Enchanted Tiki Room-11 Enchanted Tiki Room_ Let_s All Sing Like the Birdies Sing.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:""
	},
	{
		title:"Enchanted Tiki Room: War Chant",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Enchanted Tiki Room-12 Enchanted Tiki Room_ War Chant.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:""
	},
	{
		title:"Enchanted Tiki Room: Finale",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Enchanted Tiki Room-13 Enchanted Tiki Room_ Finale.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:""
	},
	{
		title:"Enchanted Tiki Room: Full Show",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-14 Enchanted Tiki Room_ Full Show.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:""
	},
	{
		title:"Enchanted Tiki Room: The Tiki Tiki Tiki Room Score",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Enchanted Tiki Room-15 Enchanted Tiki Room_ The Tiki Tiki Tiki Room Score.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:""
	},
	{
		title:"Enchanted Tiki Room: Elfenchor from Die Rheinnixen Barcarolle Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-16 Enchanted Tiki Room_ Elfenchor from Die Rheinnixen Barcarolle Score.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Tiki Room: Lets All Sing Like the Birdies Sing Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-17 Enchanted Tiki Room_ Lets All Sing Like the Birdies Sing Score.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Tiki Room: Hawaiian War Chant Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-18 Enchanted Tiki Room_ Hawaiian War Chant Score.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Tiki Room: Farewell to You Heigh Ho Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-19 Enchanted Tiki Room_ Farewell to You Heigh Ho Score.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Enchanted Tiki Room: Demo Recording",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-20 Enchanted Tiki Room_ Demo Recording.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Tahitian Terrace: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-21 Tahitian Terrace_ Area Loop.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Tahitian Terrace: The Liki Tikis",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-22 Tahitian Terrace_ The Liki Tikis.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:""
	},
	{
		title:"Tahitian Terrace: Polynesian War Dance",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-23 Tahitian Terrace_ Polynesian War Dance.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Tahitian Terrace: The Legend of the Island Jewel",
		artist:"Walt Disney",
		free:false,
		mp3:"Enchanted Tiki Room-24 Tahitian Terrace_ The Legend of the Island Jewel.mp3",
		poster:"AlbumArt/Enchanted Tiki Room.jpeg",
		album:"Enchanted Tiki Room",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"Warrior Drums",
		artist:"Walt Disney",
		free:false,
		mp3:"Jungle Cruise-01 Warrior Drums.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Area Background Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Jungle Cruise-02 Area Background Music.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Tropical Imports: Shortwave Radio",
		artist:"Walt Disney",
		free:false,
		mp3:"Jungle Cruise-03 Tropical Imports_ Shortwave Radio.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Radio Queue Music (1991 - 1995): Here Comes My Ball and Chain",
		artist:"Coon-Sanders",
		free:false,
		mp3:"Jungle Cruise-04 Radio Queue Music (1991 - 1995)_ Here Comes My Ball and Chain.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1991 - 1995): With Plenty of Money and You",
		artist:"Harry Warren",
		free:false,
		mp3:"Jungle Cruise-05 Radio Queue Music (1991 - 1995)_ With Plenty of Money and You.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1991 - 1995): Jeepers Creepers",
		artist:"Louis Armstrong",
		free:false,
		mp3:"Jungle Cruise-06 Radio Queue Music (1991 - 1995)_ Jeepers Creepers.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1991 - 1995): Yes, Yes (My Baby Said Yes)",
		artist:"Ambrose and His Orchestra",
		free:false,
		mp3:"Jungle Cruise-07 Radio Queue Music (1991 - 1995)_ Yes, Yes (My Baby Said Yes).mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1991 - 1995): Song of India",
		artist:"Rimsky/Korsakoy/arr.Grofe",
		free:false,
		mp3:"Jungle Cruise-08 Radio Queue Music (1991 - 1995)_ Song of India.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1991 - 1995): It's the Girl",
		artist:"Baer",
		free:false,
		mp3:"Jungle Cruise-09 Radio Queue Music (1991 - 1995)_ It_s the Girl.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1991 - 1995): Rhythm King",
		artist:"Coon-Sanders",
		free:false,
		mp3:"Jungle Cruise-10 Radio Queue Music (1991 - 1995)_ Rhythm King.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1991 - 1995): Love Is Good For Anything That Ails You",
		artist:"Ida Sue McCune",
		free:false,
		mp3:"Jungle Cruise-11 Radio Queue Music (1991 - 1995)_ Love Is Good For Anything That Ails You.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1991 - 1995): Harlem River Quiver",
		artist:"Duke Ellington",
		free:false,
		mp3:"Jungle Cruise-12 Radio Queue Music (1991 - 1995)_ Harlem River Quiver.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1991 - 1995): What a Girl! What a Night!",
		artist:"Coon-Sanders",
		free:false,
		mp3:"Jungle Cruise-13 Radio Queue Music (1991 - 1995)_ What a Girl! What a Night!.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1991 - 1995): Anything Goes",
		artist:"Paul Whiteman",
		free:false,
		mp3:"Jungle Cruise-14 Radio Queue Music (1991 - 1995)_ Anything Goes.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1991 - 1995): The Mooche",
		artist:"Duke Ellington",
		free:false,
		mp3:"Jungle Cruise-15 Radio Queue Music (1991 - 1995)_ The Mooche.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1991 - 1995): The King's Horses",
		artist:" Jack Hylton",
		free:false,
		mp3:"Jungle Cruise-16 Radio Queue Music (1991 - 1995)_ The King_s Horses.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Loop (1991 - 1995)",
		artist:"Walt Disney",
		free:false,
		mp3:"Jungle Cruise-17 Radio Queue Loop (1991 - 1995).mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): As Time Goes By",
		artist:"Adelaide Hall",
		free:false,
		mp3:"Jungle Cruise-18 Radio Queue Music (1995)_ As Time Goes By.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): Moonglow",
		artist:"Will Hudson, Eddie DeLange & Irving Mills",
		free:false,
		mp3:"Jungle Cruise-19 Radio Queue Music (1995)_ Moonglow.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): Sentimental Journey",
		artist:"The Merry Macs",
		free:false,
		mp3:"Jungle Cruise-20 Radio Queue Music (1995)_ Sentimental Journey.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): Deep Purple",
		artist:"Peter DeRose & Mitchell Parish",
		free:false,
		mp3:"Jungle Cruise-22 Radio Queue Music (1995)_ Deep Purple.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): Moon Over Burma",
		artist:"Dorothy Lamour",
		free:false,
		mp3:"Jungle Cruise-23 Radio Queue Music (1995)_ Moon Over Burma.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): Flamingo",
		artist:"Duke Ellington & Herb Jeffries",
		free:false,
		mp3:"Jungle Cruise-24 Radio Queue Music (1995)_ Flamingo.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): On a Slow Boat to China",
		artist:"F. Loesser",
		free:false,
		mp3:"Jungle Cruise-25 Radio Queue Music (1995)_ On a Slow Boat to China.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): Sing, Sing, Sing",
		artist:"Louis Prima",
		free:false,
		mp3:"Jungle Cruise-26 Radio Queue Music (1995)_ Sing, Sing, Sing.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): I'll Be Seeing You",
		artist:"Sammy Fain",
		free:false,
		mp3:"Jungle Cruise-27 Radio Queue Music (1995)_ I_ll Be Seeing You.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): When Buddha Smiles",
		artist:"Nacio Herb Brown & Arthur Freed",
		free:false,
		mp3:"Jungle Cruise-28 Radio Queue Music (1995)_ When Buddha Smiles.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): Goodnight Wherever You Are",
		artist:"Harry Leader",
		free:false,
		mp3:"Jungle Cruise-29 Radio Queue Music (1995)_ Goodnight Wherever You Are.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): Moonlight On the Ganges",
		artist:"Jimmy Dorsey",
		free:false,
		mp3:"Jungle Cruise-30 Radio Queue Music (1995)_ Moonlight On the Ganges.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): Someone's Rocking My Dreamboat",
		artist:"Leon Rene, Otis Rene & Emerson Scott",
		free:false,
		mp3:"Jungle Cruise-31 Radio Queue Music (1995)_ Someone_s Rocking My Dreamboat.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): Moonlight Serenade",
		artist:"Mitchell Parish & Glenn Miller",
		free:false,
		mp3:"Jungle Cruise-32 Radio Queue Music (1995)_ Moonlight Serenade.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Loop (1995)",
		artist:"Walt Disney",
		free:false,
		mp3:"Jungle Cruise-33 Radio Queue Loop (1995).mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Dock Elements",
		artist:"Walt Disney",
		free:false,
		mp3:"Jungle Cruise-34 Dock Elements.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Jungle Sounds",
		artist:"Walt Disney",
		free:false,
		mp3:"Jungle Cruise-35 Jungle Sounds.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Float Through (1968)",
		artist:"Thurl Ravenscroft",
		free:false,
		mp3:"Jungle Cruise-36 Float Through (1968).mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
	{
		title:"Radio Queue Music (1995): Intermezzo",
		artist:"Robert Henning & Heinz Provost",
		free:false,
		mp3:"Jungle Cruise-21 Radio Queue Music (1995)_ Intermezzo.mp3",
		poster:"AlbumArt/Jungle Cruise.jpeg",
		album:"Jungle Cruise",
		comments:""
	},
		
	{
		title:"Jungle Sounds",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-01 Jungle Sounds.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Temple Grounds Ambience",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-02 Temple Grounds Ambience.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Radio Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-03 Radio Loop.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop (Reconstruction)",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-04 Radio Loop (Reconstruction).mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: (I Got Spurs That) Jingle, Jangle, Jingle",
		artist:"Kay Kyser and His Orchestra",
		free:false,
		mp3:"Indiana Jones Adventure-05 Radio Loop_ (I Got Spurs That) Jingle, Jangle, Jingle.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: Let's Dance",
		artist:"F. Baldridge, G. Stone & J. Bonime",
		free:false,
		mp3:"Indiana Jones Adventure-06 Radio Loop_ Let_s Dance.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: Deep Purple",
		artist:"Artie Shaw",
		free:false,
		mp3:"Indiana Jones Adventure-07 Radio Loop_ Deep Purple.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: Jukebox Saturday Night",
		artist:"Glenn Miller and His Orchestra",
		free:false,
		mp3:"Indiana Jones Adventure-08 Radio Loop_ Jukebox Saturday Night.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: In the Mood",
		artist:"Glenn Miller and His Orchestra",
		free:false,
		mp3:"Indiana Jones Adventure-09 Radio Loop_ In the Mood.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: There Goes That Song Again",
		artist:"Kay Kyser and His Orchestra",
		free:false,
		mp3:"Indiana Jones Adventure-10 Radio Loop_ There Goes That Song Again.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: In a Little Spanish Town",
		artist:"Tommy Dorsey",
		free:false,
		mp3:"Indiana Jones Adventure-11 Radio Loop_ In a Little Spanish Town.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: Indian Summer",
		artist:"Kay Kyser and His Orchestra & Ginny Simms",
		free:false,
		mp3:"Indiana Jones Adventure-12 Radio Loop_ Indian Summer.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: Harlem Rhythm Dance",
		artist:"Claude Hopkins",
		free:false,
		mp3:"Indiana Jones Adventure-13 Radio Loop_ Harlem Rhythm Dance.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: Little Brown Jug",
		artist:"Glenn Miller and His Orchestra",
		free:false,
		mp3:"Indiana Jones Adventure-14 Radio Loop_ Little Brown Jug.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: In the Shade of the Old Apple Tree",
		artist:"Claude Hopkins",
		free:false,
		mp3:"Indiana Jones Adventure-15 Radio Loop_ In the Shade of the Old Apple Tree.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: Song of India",
		artist:"Tommy Dorsey",
		free:false,
		mp3:"Indiana Jones Adventure-16 Radio Loop_ Song of India.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Radio Loop: Moonlight Serenade",
		artist:"Glenn Miller and His Orchestra",
		free:false,
		mp3:"Indiana Jones Adventure-17 Radio Loop_ Moonlight Serenade.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Temple Ambience",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-18 Temple Ambience.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Temple Area Drums",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-19 Temple Area Drums.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Bat Cave",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-20 Bat Cave.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Full Queue Walk Through",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-21 Full Queue Walk Through.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"News Reel",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-22 News Reel.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Sallah's Spiels",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-23 Sallah_s Spiels.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-24 Ride.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Score",
		artist:"John Williams",
		free:false,
		mp3:"Indiana Jones Adventure-25 Score.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Exit",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-26 Exit.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
	{
		title:"Indiana Jones: Stunt Spectacular",
		artist:"Walt Disney",
		free:false,
		mp3:"Indiana Jones Adventure-27 Indiana Jones_ Stunt Spectacular.mp3",
		poster:"AlbumArt/Indiana Jones Adventure.jpeg",
		album:"Indiana Jones Adventure",
		comments:""
	},
		
	{
		title:"Area Loop",
		artist:"Balaf????n Marimba Ensemble",
		free:false,
		mp3:"Bengal Barbecue-01 Area Loop.mp3",
		poster:"AlbumArt/Bengal Barbecue.jpeg",
		album:"Bengal Barbecue",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Music: I Already Have A Husband",
		artist:"Balaf????n Marimba Ensemble",
		free:false,
		mp3:"Bengal Barbecue-02 Area Music_ I Already Have A Husband.mp3",
		poster:"AlbumArt/Bengal Barbecue.jpeg",
		album:"Bengal Barbecue",
		comments:""
	},
	{
		title:"Area Music: Nhamo",
		artist:"Balaf????n Marimba Ensemble",
		free:false,
		mp3:"Bengal Barbecue-03 Area Music_ Nhamo.mp3",
		poster:"AlbumArt/Bengal Barbecue.jpeg",
		album:"Bengal Barbecue",
		comments:""
	},
	{
		title:"Area Music: Caderas",
		artist:"Balaf????n Marimba Ensemble",
		free:false,
		mp3:"Bengal Barbecue-04 Area Music_ Caderas.mp3",
		poster:"AlbumArt/Bengal Barbecue.jpeg",
		album:"Bengal Barbecue",
		comments:""
	},
	{
		title:"Area Music: Taireva (I Already Told You)",
		artist:"Balaf????n Marimba Ensemble",
		free:false,
		mp3:"Bengal Barbecue-05 Area Music_ Taireva (I Already Told You).mp3",
		poster:"AlbumArt/Bengal Barbecue.jpeg",
		album:"Bengal Barbecue",
		comments:""
	},
	{
		title:"Area Music: Temerina",
		artist:"Balaf????n Marimba Ensemble",
		free:false,
		mp3:"Bengal Barbecue-06 Area Music_ Temerina.mp3",
		poster:"AlbumArt/Bengal Barbecue.jpeg",
		album:"Bengal Barbecue",
		comments:""
	},
	{
		title:"Area Music: Amatoto",
		artist:"Balaf????n Marimba Ensemble",
		free:false,
		mp3:"Bengal Barbecue-07 Area Music_ Amatoto.mp3",
		poster:"AlbumArt/Bengal Barbecue.jpeg",
		album:"Bengal Barbecue",
		comments:""
	},
	{
		title:"Area Music: Nhimutimu",
		artist:"Balaf????n Marimba Ensemble",
		free:false,
		mp3:"Bengal Barbecue-08 Area Music_ Nhimutimu.mp3",
		poster:"AlbumArt/Bengal Barbecue.jpeg",
		album:"Bengal Barbecue",
		comments:""
	},
	{
		title:"Area Music: Mashamba Nzou",
		artist:"Balaf????n Marimba Ensemble",
		free:false,
		mp3:"Bengal Barbecue-09 Area Music_ Mashamba Nzou.mp3",
		poster:"AlbumArt/Bengal Barbecue.jpeg",
		album:"Bengal Barbecue",
		comments:""
	},
		
	{
		title:"Swiss Family Robinson Tree House: Swisskapolka",
		artist:"Walt Disney",
		free:false,
		mp3:"Adventureland Tree House-01 Swiss Family Robinson Tree House_ Swisskapolka.mp3",
		poster:"AlbumArt/Adventureland Tree House.jpeg",
		album:"Adventureland Tree House",
		comments:""
	},
	{
		title:"Tarzan's Treehouse: Queue Loop",
		artist:"Phil Collins",
		free:false,
		mp3:"Adventureland Tree House-02 Tarzan_s Treehouse_ Queue Loop.mp3",
		poster:"AlbumArt/Adventureland Tree House.jpeg",
		album:"Adventureland Tree House",
		comments:""
	},
	{
		title:"Tarzan's Treehouse: Sketchroom Loop",
		artist:"Phil Collins",
		free:false,
		mp3:"Adventureland Tree House-03 Tarzan_s Treehouse_ Sketchroom Loop.mp3",
		poster:"AlbumArt/Adventureland Tree House.jpeg",
		album:"Adventureland Tree House",
		comments:""
	},
	{
		title:"Tarzan's Treehouse: Medley",
		artist:"Phil Collins",
		free:false,
		mp3:"Adventureland Tree House-04 Tarzan_s Treehouse_ Medley.mp3",
		poster:"AlbumArt/Adventureland Tree House.jpeg",
		album:"Adventureland Tree House",
		comments:""
	},
	{
		title:"Tarzan's Treehouse: Medley Extended",
		artist:"Phil Collins",
		free:false,
		mp3:"Adventureland Tree House-05 Tarzan_s Treehouse_ Medley Extended.mp3",
		poster:"AlbumArt/Adventureland Tree House.jpeg",
		album:"Adventureland Tree House",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Hathi's Outpost: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Adventureland Tree House-06 Hathi_s Outpost_ Area Loop.mp3",
		poster:"AlbumArt/Adventureland Tree House.jpeg",
		album:"Adventureland Tree House",
		comments:""
	},
		
	{
		title:"The Bootstrappers Pirate Band: Yo Ho",
		artist:"Walt Disney",
		free:false,
		mp3:"Pirates of the Caribbean-01 The Bootstrappers Pirate Band_ Yo Ho.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"The Bootstrappers Pirate Band: Street Performance",
		artist:"Walt Disney",
		free:false,
		mp3:"Pirates of the Caribbean-02 The Bootstrappers Pirate Band_ Street Performance.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Overture",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-03 Overture.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Queue Loop",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-04 Queue Loop.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Bayou Banjo",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-05 Bayou Banjo.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"The Blue Bayou",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-06 The Blue Bayou.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Talking Jolly Roger",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-07 Talking Jolly Roger.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Dead Man's Cove",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-08 Dead Man_s Cove.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Dead Man's Cove (Score)",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-09 Dead Man_s Cove (Score).mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Yo Ho: Instrumental",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-10 Yo Ho_ Instrumental.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Yo Ho: Concertina",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-11 Yo Ho_ Concertina.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Scare Me Music",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-12 Scare Me Music.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"The Pirate Arcade",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-13 The Pirate Arcade.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Float Through (Version 1)",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-14 Float Through (Version 1).mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Float Through (Version 2)",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-15 Float Through (Version 2).mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Float Through (2006)",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-16 Float Through (2006).mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Float Through (Extended) (2006)",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-17 Float Through (Extended) (2006).mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Medley",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-18 Medley.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Safety Spiel",
		artist:"George Bruns & Xavier Antencio",
		free:false,
		mp3:"Pirates of the Caribbean-19 Safety Spiel.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Pirates: Port Royal Curios and Curiosities: Music Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Pirates of the Caribbean-20 Pirates_ Port Royal Curios and Curiosities_ Music Loop.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Pirates: Pirate Cove: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Pirates of the Caribbean-21 Pirates_ Pirate Cove_ Area Loop.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:""
	},
	{
		title:"Pirates: Lafittes Tavern: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Pirates of the Caribbean-22 Pirates_ Lafittes Tavern_ Area Loop.mp3",
		poster:"AlbumArt/Pirates of the Caribbean.jpeg",
		album:"Pirates of the Caribbean",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"So This is Love",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-01 So This is Love.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"Bella Notte",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-02 Bella Notte.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"Little April Showers",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-03 Little April Showers.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"Lavender Blue Dilly Dilly",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-04 Lavender Blue Dilly Dilly.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"The Second Star to the Right",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-05 The Second Star to the Right.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"You Can Fly You Can Fly You Can Fly",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-06 You Can Fly You Can Fly You Can Fly.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"Yo Ho A Pirates Life for Me",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-07 Yo Ho A Pirates Life for Me.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"It's a Small World",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-08 It_s a Small World.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"Alice in Wonderland",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-09 Alice in Wonderland.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"In a World of My Own",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-10 In a World of My Own.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"All in the Golden Afternoon",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-11 All in the Golden Afternoon.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"Part of Your World",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-12 Part of Your World.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"Feed the Birds",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-13 Feed the Birds.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"Beauty and the Beast",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-14 Beauty and the Beast.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"Grim Grinning Ghosts",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-15 Grim Grinning Ghosts.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:""
	},
	{
		title:"Music Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-16 Music Loop.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Dining Room: Music Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Club 33-17 Dining Room_ Music Loop.mp3",
		poster:"AlbumArt/Club 33.jpeg",
		album:"Club 33",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"The Royal Street Bachelors",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-01 The Royal Street Bachelors.mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Jambalaya Jazz Band",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-02 The Jambalaya Jazz Band.mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Reynolds Brothers (The Rhythm Rascals)",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-03 The Reynolds Brothers (The Rhythm Rascals).mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Dixieland Jazz Minors",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-04 The Dixieland Jazz Minors.mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Dukes of Dixieland (Rivers of America Medley)",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-05 The Dukes of Dixieland (Rivers of America Medley).mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Banjo Kings: Swanee River",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-06 The Banjo Kings_ Swanee River.mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:""
	},
	{
		title:"The French Market Bandstand",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-07 The French Market Bandstand.mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:""
	},
	{
		title:"The French Market (Side Street Strutters)",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-08 The French Market (Side Street Strutters).mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Swanee River",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-09 Swanee River.mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:""
	},
	{
		title:"Loading Dock: Deep in the Heart of Dixieland",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-10 Loading Dock_ Deep in the Heart of Dixieland.mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Waterfront Area Loop 1",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-11 Waterfront Area Loop 1.mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Waterfront Area Loop 2",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-12 Waterfront Area Loop 2.mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Rivers of America Area Loop",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-13 Rivers of America Area Loop.mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:""
	},
	{
		title:"Rivers of America Area Loop (Reconstruction)",
		artist:"George Bruns",
		free:false,
		mp3:"New Orleans Square-14 Rivers of America Area Loop (Reconstruction).mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:""
	},
	{
		title:"Tiana's Showboat Jubilee: Show",
		artist:"Walt Disney",
		free:false,
		mp3:"New Orleans Square-15 Tiana_s Showboat Jubilee_ Show.mp3",
		poster:"AlbumArt/New Orleans Square.jpeg",
		album:"New Orleans Square",
		comments:""
	},
		
	{
		title:"Ghostly Music Box",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-01 Ghostly Music Box.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Grim Grinning Ghosts Music Box",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-02 Grim Grinning Ghosts Music Box.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Foyer Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-03 Foyer Music.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Portrait Hall Background Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-04 Portrait Hall Background Music.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Doom Buggy Boarding Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-05 Doom Buggy Boarding Music.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Seance Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-06 Seance Music.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Seance Instruments Cue",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-07 Seance Instruments Cue.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Ballroom Organ",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-08 Ballroom Organ.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Otherworldly Concerto",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-09 Otherworldly Concerto.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Updated Disneyland Attic",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-10 Updated Disneyland Attic.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Graveyard Band 1",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-11 Graveyard Band 1.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Graveyard Band 2",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-12 Graveyard Band 2.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Graveyard Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-13 Graveyard Music.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Swinging Wake",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-14 Swinging Wake.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"999 Happy Haunts",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-15 999 Happy Haunts.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Exit Crypt Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-16 Exit Crypt Music.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Medley",
		artist:"Xavier Atencio/Buddy Baker",
		free:false,
		mp3:"Haunted Mansion-17 Medley.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Ride (1969)",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-18 Ride (1969).mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Ride (2006)",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-19 Ride (2006).mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
	{
		title:"Phantom Manor Suite",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion-20 Phantom Manor Suite.mp3",
		poster:"AlbumArt/Haunted Mansion.jpeg",
		album:"Haunted Mansion",
		comments:""
	},
		
	{
		title:"Critter Country Area Music: Area Loop",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-01 Critter Country Area Music_ Area Loop.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Critter Country Area Music: All I Want",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-02 Critter Country Area Music_ All I Want.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Critter Country Area Music: Sooner or Later",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-03 Critter Country Area Music_ Sooner or Later.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Critter Country Area Music: Song of the South",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-04 Critter Country Area Music_ Song of the South.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Critter Country Area Music: Carriage Ride",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-05 Critter Country Area Music_ Carriage Ride.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Critter Country Area Music: Uncle Remus Said",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-06 Critter Country Area Music_ Uncle Remus Said.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Critter Country Area Music: Who Wants to Live Like That",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-07 Critter Country Area Music_ Who Wants to Live Like That.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Critter Country Area Music: Let the Rain Pour Down",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-08 Critter Country Area Music_ Let the Rain Pour Down.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Critter Country Area Music: How Do You Do",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-09 Critter Country Area Music_ How Do You Do.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Critter Country Area Music: Everybody Has a Laughin' Place Variation I",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-10 Critter Country Area Music_ Everybody Has a Laughin_ Place Variation I.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Critter Country Area Music: Everybody Has a Laughin' Place Variation II",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-11 Critter Country Area Music_ Everybody Has a Laughin_ Place Variation II.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Critter Country Area Music: Zip-A-Dee-Doo-Dah",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-12 Critter Country Area Music_ Zip-A-Dee-Doo-Dah.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"How Do You Do",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-13 How Do You Do.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Everybody Has a Laughin' Place",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-14 Everybody Has a Laughin_ Place.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Everybody Has a Laughin' Place (Vocals)",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-15 Everybody Has a Laughin_ Place (Vocals).mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Zip-a-Dee-Doo-Dah",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-16 Zip-a-Dee-Doo-Dah.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Zip-a-Dee-Doo-Dah (Exit Version)",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-17 Zip-a-Dee-Doo-Dah (Exit Version).mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Medley (2006)",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-18 Medley (2006).mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Medley (2013)",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-19 Medley (2013).mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Float Through",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-20 Float Through.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
	{
		title:"Breakdown Spiel",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-21 Breakdown Spiel.mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Breakdown Spiel (Narration Only)",
		artist:"Allie Wrubel",
		free:false,
		mp3:"Splash Mountain-22 Breakdown Spiel (Narration Only).mp3",
		poster:"AlbumArt/Splash Mountain.jpeg",
		album:"Splash Mountain",
		comments:""
	},
		
	{
		title:"Area Music: The Rain Rain Rain",
		artist:"Buddy Baker",
		free:false,
		mp3:"The Many Adventures of Winnie the Pooh-01 Area Music_ The Rain Rain Rain.mp3",
		poster:"AlbumArt/The Many Adventures of Winnie the Pooh.jpeg",
		album:"The Many Adventures of Winnie the Pooh",
		comments:""
	},
	{
		title:"Area Music: Medley",
		artist:"Buddy Baker",
		free:false,
		mp3:"The Many Adventures of Winnie the Pooh-02 Area Music_ Medley.mp3",
		poster:"AlbumArt/The Many Adventures of Winnie the Pooh.jpeg",
		album:"The Many Adventures of Winnie the Pooh",
		comments:""
	},
	{
		title:"Area Loop",
		artist:"Buddy Baker",
		free:false,
		mp3:"The Many Adventures of Winnie the Pooh-03 Area Loop.mp3",
		poster:"AlbumArt/The Many Adventures of Winnie the Pooh.jpeg",
		album:"The Many Adventures of Winnie the Pooh",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Ride Through 1",
		artist:"Buddy Baker",
		free:false,
		mp3:"The Many Adventures of Winnie the Pooh-04 Ride Through 1.mp3",
		poster:"AlbumArt/The Many Adventures of Winnie the Pooh.jpeg",
		album:"The Many Adventures of Winnie the Pooh",
		comments:""
	},
	{
		title:"Ride Through 2",
		artist:"Buddy Baker",
		free:false,
		mp3:"The Many Adventures of Winnie the Pooh-05 Ride Through 2.mp3",
		poster:"AlbumArt/The Many Adventures of Winnie the Pooh.jpeg",
		album:"The Many Adventures of Winnie the Pooh",
		comments:""
	},
	{
		title:"Medley",
		artist:"Buddy Baker",
		free:false,
		mp3:"The Many Adventures of Winnie the Pooh-06 Medley.mp3",
		poster:"AlbumArt/The Many Adventures of Winnie the Pooh.jpeg",
		album:"The Many Adventures of Winnie the Pooh",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"Hoedown (1972)",
		artist:"Walt Disney",
		free:false,
		mp3:"Country Bear Jamboree-01 Hoedown (1972).mp3",
		poster:"AlbumArt/Country Bear Jamboree.jpeg",
		album:"Country Bear Jamboree",
		comments:""
	},
	{
		title:"Vacation Hoedown (1986)",
		artist:"Walt Disney",
		free:false,
		mp3:"Country Bear Jamboree-02 Vacation Hoedown (1986).mp3",
		poster:"AlbumArt/Country Bear Jamboree.jpeg",
		album:"Country Bear Jamboree",
		comments:""
	},
		
	{
		title:"Stockade Entrance: Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Frontierland-01 Stockade Entrance_ Loop.mp3",
		poster:"AlbumArt/Frontierland.jpeg",
		album:"Frontierland",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Stockade: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Frontierland-02 Stockade_ Area Loop.mp3",
		poster:"AlbumArt/Frontierland.jpeg",
		album:"Frontierland",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Music: Big Country/The Magnificent Seven/Rodeo",
		artist:"Walt Disney",
		free:false,
		mp3:"Frontierland-03 Area Music_ Big Country_The Magnificent Seven_Rodeo.mp3",
		poster:"AlbumArt/Frontierland.jpeg",
		album:"Frontierland",
		comments:""
	},
	{
		title:"Area Music: Silverado",
		artist:"Walt Disney",
		free:false,
		mp3:"Frontierland-04 Area Music_ Silverado.mp3",
		poster:"AlbumArt/Frontierland.jpeg",
		album:"Frontierland",
		comments:""
	},
	{
		title:"Area Music: Big Country",
		artist:"Walt Disney",
		free:false,
		mp3:"Frontierland-05 Area Music_ Big Country.mp3",
		poster:"AlbumArt/Frontierland.jpeg",
		album:"Frontierland",
		comments:""
	},
	{
		title:"Area Music: Pecos Bill",
		artist:"Walt Disney",
		free:false,
		mp3:"Frontierland-06 Area Music_ Pecos Bill.mp3",
		poster:"AlbumArt/Frontierland.jpeg",
		album:"Frontierland",
		comments:""
	},
	{
		title:"Area Music: Blazing Saddles",
		artist:"Walt Disney",
		free:false,
		mp3:"Frontierland-07 Area Music_ Blazing Saddles.mp3",
		poster:"AlbumArt/Frontierland.jpeg",
		album:"Frontierland",
		comments:""
	},
	{
		title:"Area Loop (1972)",
		artist:"Walt Disney",
		free:false,
		mp3:"Frontierland-08 Area Loop (1972).mp3",
		poster:"AlbumArt/Frontierland.jpeg",
		album:"Frontierland",
		comments:""
	},
	{
		title:"Area Loop (1992)",
		artist:"Walt Disney",
		free:false,
		mp3:"Frontierland-09 Area Loop (1992).mp3",
		poster:"AlbumArt/Frontierland.jpeg",
		album:"Frontierland",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Loop (2013)",
		artist:"Walt Disney",
		free:false,
		mp3:"Frontierland-10 Area Loop (2013).mp3",
		poster:"AlbumArt/Frontierland.jpeg",
		album:"Frontierland",
		comments:""
	},
	{
		title:"Rancho Del Zocalo: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Frontierland-11 Rancho Del Zocalo_ Area Loop.mp3",
		poster:"AlbumArt/Frontierland.jpeg",
		album:"Frontierland",
		comments:""
	},
	{
		title:"Rancho Del Zocalo: Mariachi Band: The Mexican Hat Dance",
		artist:"Walt Disney",
		free:false,
		mp3:"Frontierland-12 Rancho Del Zocalo_ Mariachi Band_ The Mexican Hat Dance.mp3",
		poster:"AlbumArt/Frontierland.jpeg",
		album:"Frontierland",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"Area Music: Big Thunder",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-01 Area Music_ Big Thunder.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Area Music: Roamin the Lawless West",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-02 Area Music_ Roamin the Lawless West.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Area Music: A Cowboy Needs a Horse",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-03 Area Music_ A Cowboy Needs a Horse.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Area Music: Pecos Bill",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-04 Area Music_ Pecos Bill.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Area Music: Buffalo Gals",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-05 Area Music_ Buffalo Gals.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Area Music: Dry Gulch Cowboy",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-06 Area Music_ Dry Gulch Cowboy.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Area Music: Apple Dumpling Gang",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-07 Area Music_ Apple Dumpling Gang.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Area Music: Whoopee Ti Yi Yo",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-08 Area Music_ Whoopee Ti Yi Yo.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Area Music: Big Rock Candy Mountain",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-09 Area Music_ Big Rock Candy Mountain.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Area Music: Saloon Willy",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-10 Area Music_ Saloon Willy.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Area Music: Old Betsy",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-11 Area Music_ Old Betsy.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Queue Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-12 Queue Loop.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Safety Spiel (1979-2013)",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-13 Safety Spiel (1979-2013).mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Ride (1979-2013)",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-14 Ride (1979-2013).mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Saftey Spiel (2014)",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-15 Saftey Spiel (2014).mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Big Thunder Ranch Barbecue: Little Patch of Heaven",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-16 Big Thunder Ranch Barbecue_ Little Patch of Heaven.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Big Thunder Ranch Barbecue: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-17 Big Thunder Ranch Barbecue_ Area Loop.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Big Thunder Ranch Barbecue: Music Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-18 Big Thunder Ranch Barbecue_ Music Loop.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Golden Horseshoe Stage: Billy Hill and the Hillbillies",
		artist:"Billy Hill and the Hillbillies",
		free:false,
		mp3:"Big Thunder Mountain Railroad-19 The Golden Horseshoe Stage_ Billy Hill and the Hillbillies.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Golden Horseshoe Stage: Woody's Roundup",
		artist:"Billy Hill and the Hillbillies",
		free:false,
		mp3:"Big Thunder Mountain Railroad-20 The Golden Horseshoe Stage_ Woody_s Roundup.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Mine Train Through Nature's Wonderland: Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Big Thunder Mountain Railroad-21 Mine Train Through Nature_s Wonderland_ Ride.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad 1.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
	{
		title:"Mine Train Through Nature's Wonderland: Rainbow Caverns",
		artist:"George Bruns",
		free:false,
		mp3:"Big Thunder Mountain Railroad-22 Mine Train Through Nature_s Wonderland_ Rainbow Caverns.mp3",
		poster:"AlbumArt/Big Thunder Mountain Railroad 2.jpeg",
		album:"Big Thunder Mountain Railroad",
		comments:""
	},
		
	{
		title:"Mark Twain River Boat: Queen of the River Theme",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-01 Mark Twain River Boat_ Queen of the River Theme.mp3",
		poster:"AlbumArt/Mark Twain River Boat.jpeg",
		album:"Mark Twain River Boat",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mark Twain River Boat: Float Through",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-02 Mark Twain River Boat_ Float Through.mp3",
		poster:"AlbumArt/Mark Twain River Boat.jpeg",
		album:"Mark Twain River Boat",
		comments:""
	},
	{
		title:"Sailing Ship Columbia: Float Through",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-03 Sailing Ship Columbia_ Float Through.mp3",
		poster:"AlbumArt/Mark Twain River Boat 1.jpeg",
		album:"Mark Twain River Boat",
		comments:""
	},
	{
		title:"Sailing Ship Columbia: Haul Boys Haul",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-04 Sailing Ship Columbia_ Haul Boys Haul.mp3",
		poster:"AlbumArt/Mark Twain River Boat 1.jpeg",
		album:"Mark Twain River Boat",
		comments:""
	},
	{
		title:"Sailing Ship Columbia: Oh Johnny Come to Hilo",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-05 Sailing Ship Columbia_ Oh Johnny Come to Hilo.mp3",
		poster:"AlbumArt/Mark Twain River Boat 1.jpeg",
		album:"Mark Twain River Boat",
		comments:""
	},
	{
		title:"Sailing Ship Columbia: Song of the Fishes",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-06 Sailing Ship Columbia_ Song of the Fishes.mp3",
		poster:"AlbumArt/Mark Twain River Boat 1.jpeg",
		album:"Mark Twain River Boat",
		comments:""
	},
	{
		title:"Sailing Ship Columbia: A Whale of a Tale",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-07 Sailing Ship Columbia_ A Whale of a Tale.mp3",
		poster:"AlbumArt/Mark Twain River Boat 1.jpeg",
		album:"Mark Twain River Boat",
		comments:""
	},
	{
		title:"Sailing Ship Columbia: An American Frigate",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-08 Sailing Ship Columbia_ An American Frigate.mp3",
		poster:"AlbumArt/Mark Twain River Boat 1.jpeg",
		album:"Mark Twain River Boat",
		comments:""
	},
	{
		title:"Sailing Ship Columbia: Blow the Man Down",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-09 Sailing Ship Columbia_ Blow the Man Down.mp3",
		poster:"AlbumArt/Mark Twain River Boat 1.jpeg",
		album:"Mark Twain River Boat",
		comments:""
	},
	{
		title:"Sailing Ship Columbia: A Long Time Ago",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-10 Sailing Ship Columbia_ A Long Time Ago.mp3",
		poster:"AlbumArt/Mark Twain River Boat 1.jpeg",
		album:"Mark Twain River Boat",
		comments:""
	},
	{
		title:"Sailing Ship Columbia: Drunken Sailor",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-11 Sailing Ship Columbia_ Drunken Sailor.mp3",
		poster:"AlbumArt/Mark Twain River Boat 1.jpeg",
		album:"Mark Twain River Boat",
		comments:""
	},
	{
		title:"Fort Wilderness: Nature Sounds Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-12 Fort Wilderness_ Nature Sounds Loop.mp3",
		poster:"AlbumArt/Mark Twain River Boat 2.jpeg",
		album:"Mark Twain River Boat",
		comments:""
	},
	{
		title:"Fort Wilderness: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Mark Twain River Boat-13 Fort Wilderness_ Area Loop.mp3",
		poster:"AlbumArt/Mark Twain River Boat 2.jpeg",
		album:"Mark Twain River Boat",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"Steamboat Willie",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-01 Steamboat Willie.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Minnie's Yoo-Hoo 1",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-02 Minnie_s Yoo-Hoo 1.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Minnies Yoo-Hoo 2",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-03 Minnies Yoo-Hoo 2.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Goofy's Theme",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-04 Goofy_s Theme.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Donald Duck Themes",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-05 Donald Duck Themes.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Little Toot",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-06 Little Toot.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"The Tortoise and the Hare",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-07 The Tortoise and the Hare.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"The Skeleton Dance (March of the Dwarfs)",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-08 The Skeleton Dance (March of the Dwarfs).mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Springtime (Dance of the Hours)",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-09 Springtime (Dance of the Hours).mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Who Killed Cock Robin",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-10 Who Killed Cock Robin.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"The Three Little Pigs (Who's Afraid of the Big Bad Wolf)",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-11 The Three Little Pigs (Who_s Afraid of the Big Bad Wolf).mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"The Pied Piper",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-12 The Pied Piper.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Funny Little Bunnies",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-13 Funny Little Bunnies.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"The Grasshopper and the Ants (The World Owes Me a Living)",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-14 The Grasshopper and the Ants (The World Owes Me a Living).mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Casey at the Bat / A Hot Time in the Old Town Tonight",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-15 Casey at the Bat _ A Hot Time in the Old Town Tonight.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-16 Area Loop.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Mickey's Neighborhood: Mickey's Movie Barn Area Music: Camping Out",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-17 Mickey_s Neighborhood_ Mickey_s Movie Barn Area Music_ Camping Out.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Mickey's Neighborhood: Minnie's House Area Music: Puppy Love",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-18 Mickey_s Neighborhood_ Minnie_s House Area Music_ Puppy Love.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Mickey's Neighborhood: Area Music: Through the Mirror",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-19 Mickey_s Neighborhood_ Area Music_ Through the Mirror.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Mickey's Neighborhood: Mickey's House W.A.C.K.Y Radio Jingle",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-20 Mickey_s Neighborhood_ Mickey_s House W.A.C.K.Y Radio Jingle.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Mickey's Neighborhood: Mickey's Answering Machine",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-21 Mickey_s Neighborhood_ Mickey_s Answering Machine.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
	{
		title:"Mickey's Neighborhood: Toontown Post Office",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-22 Mickey_s Neighborhood_ Toontown Post Office.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Roger Rabbit's Car Toon Spin: Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Toontown Area Music-23 Roger Rabbit_s Car Toon Spin_ Ride.mp3",
		poster:"AlbumArt/Toontown Area Music.jpeg",
		album:"Toontown Area Music",
		comments:""
	},
		
	{
		title:"Galaxy's Edge: Symphonic Suite",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-01 Galaxy_s Edge_ Symphonic Suite.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Main Title and the Attack on the Jakku Village",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-02 Galaxy_s Edge_ Main Title and the Attack on the Jakku Village.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: The Imperial March",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-03 Galaxy_s Edge_ The Imperial March.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Rey's Theme",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-04 Galaxy_s Edge_ Rey_s Theme.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: The March of the Resistance",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-05 Galaxy_s Edge_ The March of the Resistance.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Flying with Chewie",
		artist:"John Powell",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-06 Galaxy_s Edge_ Flying with Chewie.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Corellia Chase",
		artist:"John Powell",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-07 Galaxy_s Edge_ Corellia Chase.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Kylo Ren Arrives at the Battle",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-08 Galaxy_s Edge_ Kylo Ren Arrives at the Battle.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Scherzo for X-Wings",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-09 Galaxy_s Edge_ Scherzo for X-Wings.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Guardians of the Whills Suite",
		artist:"Michael Giacchino",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-10 Galaxy_s Edge_ Guardians of the Whills Suite.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: The Last Jedi",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-11 Galaxy_s Edge_ The Last Jedi.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Jyn Erso & Hope Suite",
		artist:"Michael Giacchino",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-12 Galaxy_s Edge_ Jyn Erso & Hope Suite.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: The Imperial Suite",
		artist:"Michael Giacchino",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-13 Galaxy_s Edge_ The Imperial Suite.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Across the Stars",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-14 Galaxy_s Edge_ Across the Stars.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Love Pledge and the Arena",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-15 Galaxy_s Edge_ Love Pledge and the Arena.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Revenge of the Sith",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-16 Galaxy_s Edge_ Revenge of the Sith.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Anakin vs. Obi-Wan",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-17 Galaxy_s Edge_ Anakin vs. Obi-Wan.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Yoda's Theme",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-18 Galaxy_s Edge_ Yoda_s Theme.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: The Return of the Jedi",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-19 Galaxy_s Edge_ The Return of the Jedi.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Anakin's Theme",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-20 Galaxy_s Edge_ Anakin_s Theme.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Jedi Steps and Finale",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-21 Galaxy_s Edge_ Jedi Steps and Finale.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Main Title",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-22 Galaxy_s Edge_ Main Title.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
	{
		title:"Galaxy's Edge: Ewok Celebration and Finale",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge-23 Galaxy_s Edge_ Ewok Celebration and Finale.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge.jpeg",
		album:"Star Wars: Galaxy's Edge",
		comments:""
	},
		
	{
		title:"R3X's Playlist #1: Mad About Mad About Me (feat. Figrin D'an and the Modal Nodes)",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-01 R3X_s Playlist No.1_ Mad About Mad About Me (feat. Figrin D_an and the Modal Nodes).mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Turbulence",
		artist:"Tamir Muskat & Ori Kaplan",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-02 R3X_s Playlist No.1_ Turbulence.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Bright Suns",
		artist:"Tamir Muskat & Ori Kaplan",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-03 R3X_s Playlist No.1_ Bright Suns.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Nama Heh",
		artist:"Francis Ralls",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-04 R3X_s Playlist No.1_ Nama Heh.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Oola Shuka",
		artist:"Judith Hill",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-05 R3X_s Playlist No.1_ Oola Shuka.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Beep Boop Bop",
		artist:"Melissa Atwell",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-06 R3X_s Playlist No.1_ Beep Boop Bop.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Aloogahoo",
		artist:"Ryan O'Connell & Valerie Vigoda",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-07 R3X_s Playlist No.1_ Aloogahoo.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Bai Tee Tee (feat. Gubz)",
		artist:"Adam Gubman",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-08 R3X_s Playlist No.1_ Bai Tee Tee (feat. Gubz).mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Modal Notes",
		artist:"Michael Kr????mer",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-09 R3X_s Playlist No.1_ Modal Notes.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Una Duey Dee",
		artist:"Michael Kr????mer",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-10 R3X_s Playlist No.1_ Una Duey Dee.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Goola Bukee (feat. YS-5755)",
		artist:"Zain Effendi & Tyler Martens",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-11 R3X_s Playlist No.1_ Goola Bukee (feat. YS-5755).mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Droid World",
		artist:"Zain Effendi & Dylan Lane",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-12 R3X_s Playlist No.1_ Droid World.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Utinni",
		artist:"Yossi Cohen & Avishay Goren",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-13 R3X_s Playlist No.1_ Utinni.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Batuu Boogie (feat. MW-59)",
		artist:"Jason Mater",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-14 R3X_s Playlist No.1_ Batuu Boogie (feat. MW-59).mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Moulee-Rah (feat. RB Snootles)",
		artist:"Dan Fontana & Roger Butterley",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-15 R3X_s Playlist No.1_ Moulee-Rah (feat. RB Snootles).mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Doshka",
		artist:"Tamir Muskat & Ori Kaplan",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-16 R3X_s Playlist No.1_ Doshka.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Huttuk Cheeka",
		artist:"Dan Fontana & Roger Butterley",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-17 R3X_s Playlist No.1_ Huttuk Cheeka.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"R3X's Playlist #1: Yocola Ateema",
		artist:"Dan Fontana & Roger Butterley",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-18 R3X_s Playlist No.1_ Yocola Ateema.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"Cantina Band",
		artist:"John Williams",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-19 Cantina Band.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
	{
		title:"Jabba Flow",
		artist:"Shag Kava",
		free:false,
		mp3:"Star Wars_ Galaxy's Edge Oga's Cantina-20 Jabba Flow.mp3",
		poster:"AlbumArt/Star Wars  Galaxy_s Edge Oga_s Cantina.jpeg",
		album:"Star Wars: Galaxy's Edge Oga's Cantina",
		comments:""
	},
		
	{
		title:"Tomorrowland: Area Loop (1989-2003)",
		artist:"Walt Disney",
		free:false,
		mp3:"Tomorrowland-01 Tomorrowland_ Area Loop (1989-2003).mp3",
		poster:"AlbumArt/Tomorrowland.jpeg",
		album:"Tomorrowland",
		comments:""
	},
	{
		title:"Tomorrowland: Area Loop (2003)",
		artist:"Walt Disney",
		free:false,
		mp3:"Tomorrowland-02 Tomorrowland_ Area Loop (2003).mp3",
		poster:"AlbumArt/Tomorrowland.jpeg",
		album:"Tomorrowland",
		comments:""
	},
	{
		title:"Tomorrowland: Season of the Force Area Loop (2015-2017)",
		artist:"Walt Disney",
		free:false,
		mp3:"Tomorrowland-03 Tomorrowland_ Season of the Force Area Loop (2015-2017).mp3",
		poster:"AlbumArt/Tomorrowland.jpeg",
		album:"Tomorrowland",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Tomorrowland Area Music: Miracles from Molecules/Strange Things (2006)",
		artist:"Walt Disney",
		free:false,
		mp3:"Tomorrowland-04 Tomorrowland Area Music_ Miracles from Molecules_Strange Things (2006).mp3",
		poster:"AlbumArt/Tomorrowland.jpeg",
		album:"Tomorrowland",
		comments:""
	},
	{
		title:"Tomorrowland Area Music: PeopleMover Loading Platform (1960's Medley)",
		artist:"Walt Disney",
		free:false,
		mp3:"Tomorrowland-05 Tomorrowland Area Music_ PeopleMover Loading Platform (1960_s Medley).mp3",
		poster:"AlbumArt/Tomorrowland.jpeg",
		album:"Tomorrowland",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Tomorrowland 2055: Theme",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Tomorrowland-06 Tomorrowland 2055_ Theme.mp3",
		poster:"AlbumArt/Tomorrowland.jpeg",
		album:"Tomorrowland",
		comments:""
	},
	{
		title:"Tomorrowland 2055: Theme and Fanfare",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Tomorrowland-07 Tomorrowland 2055_ Theme and Fanfare.mp3",
		poster:"AlbumArt/Tomorrowland.jpeg",
		album:"Tomorrowland",
		comments:""
	},
	{
		title:"Tomorrowland 2055: Theme: From the Earth to the Moon",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Tomorrowland-08 Tomorrowland 2055_ Theme_ From the Earth to the Moon.mp3",
		poster:"AlbumArt/Tomorrowland.jpeg",
		album:"Tomorrowland",
		comments:""
	},
	{
		title:"Tomorrowland 2055: Theme: From the Earth to the Moon (Extended)",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Tomorrowland-09 Tomorrowland 2055_ Theme_ From the Earth to the Moon (Extended).mp3",
		poster:"AlbumArt/Tomorrowland.jpeg",
		album:"Tomorrowland",
		comments:""
	},
	{
		title:"Buzz Light Year's Astro Blasters: Ride",
		artist:"Randy Newman",
		free:false,
		mp3:"Tomorrowland-10 Buzz Light Year_s Astro Blasters_ Ride.mp3",
		poster:"AlbumArt/Tomorrowland 1.jpeg",
		album:"Tomorrowland",
		comments:""
	},
		
	{
		title:"Soundtrack: From the Earth to the Moon",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Tomorrowland Observatron-01 Soundtrack_ From the Earth to the Moon.mp3",
		poster:"AlbumArt/Tomorrowland Observatron.jpeg",
		album:"Tomorrowland Observatron",
		comments:""
	},
	{
		title:"Soundtrack: Iron Will",
		artist:"Joel McNeely",
		free:false,
		mp3:"Tomorrowland Observatron-02 Soundtrack_ Iron Will.mp3",
		poster:"AlbumArt/Tomorrowland Observatron.jpeg",
		album:"Tomorrowland Observatron",
		comments:""
	},
	{
		title:"Soundtrack: The Rocketeer",
		artist:"James Horner",
		free:false,
		mp3:"Tomorrowland Observatron-03 Soundtrack_ The Rocketeer.mp3",
		poster:"AlbumArt/Tomorrowland Observatron.jpeg",
		album:"Tomorrowland Observatron",
		comments:""
	},
	{
		title:"Soundtrack: Timekeeper",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Tomorrowland Observatron-04 Soundtrack_ Timekeeper.mp3",
		poster:"AlbumArt/Tomorrowland Observatron.jpeg",
		album:"Tomorrowland Observatron",
		comments:""
	},
	{
		title:"Score: From the Earth to the Moon",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Tomorrowland Observatron-05 Score_ From the Earth to the Moon.mp3",
		poster:"AlbumArt/Tomorrowland Observatron.jpeg",
		album:"Tomorrowland Observatron",
		comments:""
	},
	{
		title:"Score: Iron Will",
		artist:"Joel McNeely",
		free:false,
		mp3:"Tomorrowland Observatron-06 Score_ Iron Will.mp3",
		poster:"AlbumArt/Tomorrowland Observatron.jpeg",
		album:"Tomorrowland Observatron",
		comments:""
	},
	{
		title:"Score: The Rocketeer",
		artist:"James Horner",
		free:false,
		mp3:"Tomorrowland Observatron-07 Score_ The Rocketeer.mp3",
		poster:"AlbumArt/Tomorrowland Observatron.jpeg",
		album:"Tomorrowland Observatron",
		comments:""
	},
	{
		title:"Score: Timekeeper",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Tomorrowland Observatron-08 Score_ Timekeeper.mp3",
		poster:"AlbumArt/Tomorrowland Observatron.jpeg",
		album:"Tomorrowland Observatron",
		comments:""
	},
	{
		title:"Score: Time Keeper (Extended)",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Tomorrowland Observatron-09 Score_ Time Keeper (Extended).mp3",
		poster:"AlbumArt/Tomorrowland Observatron.jpeg",
		album:"Tomorrowland Observatron",
		comments:""
	},
		
	{
		title:"Disneyland Alweg Monorail System",
		artist:"Buddy Baker",
		free:false,
		mp3:"Disneyland Monorail-01 Disneyland Alweg Monorail System.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mark III Disneyland Monorail",
		artist:"Buddy Baker",
		free:false,
		mp3:"Disneyland Monorail-02 Mark III Disneyland Monorail.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mark V Disneyland Monorail",
		artist:"Buddy Baker",
		free:false,
		mp3:"Disneyland Monorail-03 Mark V Disneyland Monorail.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mark VII Tomorrowland to Downtown Disney",
		artist:"Buddy Baker",
		free:false,
		mp3:"Disneyland Monorail-04 Mark VII Tomorrowland to Downtown Disney.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mark VII Round Trip",
		artist:"Buddy Baker",
		free:false,
		mp3:"Disneyland Monorail-05 Mark VII Round Trip.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Monorail Song & SFX",
		artist:"Buddy Baker",
		free:false,
		mp3:"Disneyland Monorail-06 The Monorail Song & SFX.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
	{
		title:"The Monorail Song",
		artist:"Buddy Baker",
		free:false,
		mp3:"Disneyland Monorail-07 The Monorail Song.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
	{
		title:"The Monorail Song / Nation on Wheels",
		artist:"Buddy Baker",
		free:false,
		mp3:"Disneyland Monorail-08 The Monorail Song _ Nation on Wheels.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
	{
		title:"Music to Ride Monorails By",
		artist:"Buddy Baker",
		free:false,
		mp3:"Disneyland Monorail-09 Music to Ride Monorails By.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Nation on Wheels: Peoplemover Theme",
		artist:"Buddy Baker",
		free:false,
		mp3:"Disneyland Monorail-10 Nation on Wheels_ Peoplemover Theme.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
	{
		title:"World of Tomorrow Theme",
		artist:"George Bruns",
		free:false,
		mp3:"Disneyland Monorail-11 World of Tomorrow Theme.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
	{
		title:"World Clock: The South American Way",
		artist:"George Bruns",
		free:false,
		mp3:"Disneyland Monorail-12 World Clock_ The South American Way.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
	{
		title:"World Clock: Flubber Waltz",
		artist:"George Bruns",
		free:false,
		mp3:"Disneyland Monorail-13 World Clock_ Flubber Waltz.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
	{
		title:"World Clock: Serengeti Serenade",
		artist:"George Bruns",
		free:false,
		mp3:"Disneyland Monorail-14 World Clock_ Serengeti Serenade.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
	{
		title:"World Clock: Moonlight Time in Old Hawaii",
		artist:"George Bruns",
		free:false,
		mp3:"Disneyland Monorail-15 World Clock_ Moonlight Time in Old Hawaii.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
	{
		title:"World Clock: Flyin' Ford",
		artist:"George Bruns",
		free:false,
		mp3:"Disneyland Monorail-16 World Clock_ Flyin_ Ford.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
	{
		title:"World Clock: La Gaviota",
		artist:"George Bruns",
		free:false,
		mp3:"Disneyland Monorail-17 World Clock_ La Gaviota.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
	{
		title:"World Clock: Join The Swing",
		artist:"George Bruns",
		free:false,
		mp3:"Disneyland Monorail-18 World Clock_ Join The Swing.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
	{
		title:"World Clock: Disneyland '61",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Disneyland Monorail-19 World Clock_ Disneyland _61.mp3",
		poster:"AlbumArt/Disneyland Monorail.jpeg",
		album:"Disneyland Monorail",
		comments:""
	},
		
	{
		title:"Soundtrack (1987: 2011)",
		artist:"John Williams",
		free:false,
		mp3:"Star Tours-01 Soundtrack (1987_ 2011).mp3",
		poster:"AlbumArt/Star Tours.jpeg",
		album:"Star Tours",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Score (1987: 2011)",
		artist:"John Williams",
		free:false,
		mp3:"Star Tours-02 Score (1987_ 2011).mp3",
		poster:"AlbumArt/Star Tours.jpeg",
		album:"Star Tours",
		comments:""
	},
	{
		title:"Exit Music (1987: 2011)",
		artist:"John Williams",
		free:false,
		mp3:"Star Tours-03 Exit Music (1987_ 2011).mp3",
		poster:"AlbumArt/Star Tours.jpeg",
		album:"Star Tours",
		comments:""
	},
	{
		title:"The Adventures Continue: Queue Music (2011)",
		artist:"John Williams",
		free:false,
		mp3:"Star Tours-04 The Adventures Continue_ Queue Music (2011).mp3",
		poster:"AlbumArt/Star Tours.jpeg",
		album:"Star Tours",
		comments:""
	},
	{
		title:"The Adventures Continue: Music Cues (2011)",
		artist:"Walt Disney",
		free:false,
		mp3:"Star Tours-05 The Adventures Continue_ Music Cues (2011).mp3",
		poster:"AlbumArt/Star Tours.jpeg",
		album:"Star Tours",
		comments:""
	},
	{
		title:"The Adventures Continue: Exit Music (2011)",
		artist:"John Williams",
		free:false,
		mp3:"Star Tours-06 The Adventures Continue_ Exit Music (2011).mp3",
		poster:"AlbumArt/Star Tours.jpeg",
		album:"Star Tours",
		comments:""
	},
		
	{
		title:"Concourse: Monorail Song",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-01 Concourse_ Monorail Song.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Concourse: There's a Great Big Beautiful Tomorrow",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-02 Concourse_ There_s a Great Big Beautiful Tomorrow.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Concourse: Miracles from Molecules",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-03 Concourse_ Miracles from Molecules.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Concourse: Energy You Make the World Go Round",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-04 Concourse_ Energy You Make the World Go Round.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Concourse: Golden Dream",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-05 Concourse_ Golden Dream.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Concourse: It's Fun to be Free",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-06 Concourse_ It_s Fun to be Free.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Concourse: Listen to the Land",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-07 Concourse_ Listen to the Land.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Concourse: Universe of Energy",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-08 Concourse_ Universe of Energy.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Concourse: One Little Spark",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-09 Concourse_ One Little Spark.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Concourse: Nemo's Theme",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-10 Concourse_ Nemo_s Theme.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Concourse: Love Theme",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-11 Concourse_ Love Theme.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Area Music & SFX",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-12 Area Music & SFX.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Ambience Audio",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-13 Ambience Audio.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Full Com Chat Audio",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-14 Full Com Chat Audio.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Star Tunnel",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-15 Star Tunnel.mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Ride (1977-2001)",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-16 Ride (1977-2001).mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Exit Loop (1977-2001)",
		artist:"Walt Disney",
		free:false,
		mp3:"Space Mountain-17 Exit Loop (1977-2001).mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Ride (2001)",
		artist:"Michael Giacchino",
		free:false,
		mp3:"Space Mountain-18 Ride (2001).mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Score (2001)",
		artist:"Michael Giacchino",
		free:false,
		mp3:"Space Mountain-19 Score (2001).mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
	{
		title:"Exit Loop (2001)",
		artist:"Michael Giacchino",
		free:false,
		mp3:"Space Mountain-20 Exit Loop (2001).mp3",
		poster:"AlbumArt/Space Mountain.jpeg",
		album:"Space Mountain",
		comments:""
	},
		
	{
		title:"Horizons: New Horizons",
		artist:"Walt Disney",
		free:false,
		mp3:"Innoventions-01 Horizons_ New Horizons.mp3",
		poster:"AlbumArt/Innoventions.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Horizons: Space",
		artist:"Walt Disney",
		free:false,
		mp3:"Innoventions-02 Horizons_ Space.mp3",
		poster:"AlbumArt/Innoventions.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"The Character Shop: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Innoventions-03 The Character Shop_ Area Loop.mp3",
		poster:"AlbumArt/Innoventions.jpeg",
		album:"Innoventions",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Magic Journeys: Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Innoventions-04 Magic Journeys_ Score.mp3",
		poster:"AlbumArt/Innoventions.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Captain E.O.: Entrance Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Innoventions-05 Captain E.O._ Entrance Music.mp3",
		poster:"AlbumArt/Innoventions.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Captain E.O.: Area Background Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Innoventions-06 Captain E.O._ Area Background Music.mp3",
		poster:"AlbumArt/Innoventions.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Honey, I Shrunk the Audience: Suite",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Innoventions-07 Honey, I Shrunk the Audience_ Suite.mp3",
		poster:"AlbumArt/Innoventions.jpeg",
		album:"Innoventions",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Honey, I Shrunk the Audience: Fanfare",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Innoventions-08 Honey, I Shrunk the Audience_ Fanfare.mp3",
		poster:"AlbumArt/Innoventions.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Honey, I Shrunk the Audience: Finale",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Innoventions-09 Honey, I Shrunk the Audience_ Finale.mp3",
		poster:"AlbumArt/Innoventions.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Honey, I Shrunk the Audience: Exit Music",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Innoventions-10 Honey, I Shrunk the Audience_ Exit Music.mp3",
		poster:"AlbumArt/Innoventions.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Autopia: Safety Spiel",
		artist:"Walt Disney",
		free:false,
		mp3:"Innoventions-11 Autopia_ Safety Spiel.mp3",
		poster:"AlbumArt/Innoventions 1.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Stitch: Galactic Anthem",
		artist:"Walt Disney",
		free:false,
		mp3:"Innoventions-12 Stitch_ Galactic Anthem.mp3",
		poster:"AlbumArt/Innoventions 2.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Spaceship Earth: Soundtrack",
		artist:"Walt Disney",
		free:false,
		mp3:"Innoventions-13 Spaceship Earth_ Soundtrack.mp3",
		poster:"AlbumArt/Innoventions 2.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Energy Adventure: Medley",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Innoventions-14 Energy Adventure_ Medley.mp3",
		poster:"AlbumArt/Innoventions 2.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"CTX: Theme",
		artist:"Walt Disney",
		free:false,
		mp3:"Innoventions-15 CTX_ Theme.mp3",
		poster:"AlbumArt/Innoventions 2.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"20,000 Leagues Under the Sea: Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Innoventions-16 20,000 Leagues Under the Sea_ Medley.mp3",
		poster:"AlbumArt/Innoventions 3.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Submarine Voyage: Ride Through",
		artist:"Walt Disney",
		free:false,
		mp3:"Innoventions-17 Submarine Voyage_ Ride Through.mp3",
		poster:"AlbumArt/Innoventions 3.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Finding Nemo Submarine Voyage: Medley",
		artist:"Thomas Newman",
		free:false,
		mp3:"Innoventions-18 Finding Nemo Submarine Voyage_ Medley.mp3",
		poster:"AlbumArt/Innoventions 3.jpeg",
		album:"Innoventions",
		comments:""
	},
	{
		title:"Finding Nemo Submarine Voyage: Area Music",
		artist:"Thomas Newman",
		free:false,
		mp3:"Innoventions-19 Finding Nemo Submarine Voyage_ Area Music.mp3",
		poster:"AlbumArt/Innoventions 3.jpeg",
		album:"Innoventions",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Finding Nemo Submarine Voyage: Score",
		artist:"Thomas Newman",
		free:false,
		mp3:"Innoventions-20 Finding Nemo Submarine Voyage_ Score.mp3",
		poster:"AlbumArt/Innoventions 3.jpeg",
		album:"Innoventions",
		comments:""
	},
		
	{
		title:"There's a Great Big Beautiful Tomorrow: Chorus",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-01 There_s a Great Big Beautiful Tomorrow_ Chorus.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Instrumental",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-02 There_s a Great Big Beautiful Tomorrow_ Instrumental.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Kaleidophonic Opening",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-03 There_s a Great Big Beautiful Tomorrow_ Kaleidophonic Opening.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: 1890's Variation",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-04 There_s a Great Big Beautiful Tomorrow_ 1890_s Variation.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Dixieland Variation",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-05 There_s a Great Big Beautiful Tomorrow_ Dixieland Variation.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: 1920's Variation",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-06 There_s a Great Big Beautiful Tomorrow_ 1920_s Variation.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: 1930's Variation",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-07 There_s a Great Big Beautiful Tomorrow_ 1930_s Variation.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Swing Variation",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-08 There_s a Great Big Beautiful Tomorrow_ Swing Variation.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: 1960's Variation",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-09 There_s a Great Big Beautiful Tomorrow_ 1960_s Variation.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Horizons Variation",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-10 There_s a Great Big Beautiful Tomorrow_ Horizons Variation.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Mirror Maze",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-11 There_s a Great Big Beautiful Tomorrow_ Mirror Maze.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Medallion City: Music To Buy Toasters By",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-12 There_s a Great Big Beautiful Tomorrow_ Medallion City_ Music To Buy Toasters By.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Medallion City: Christmas",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-13 There_s a Great Big Beautiful Tomorrow_ Medallion City_ Christmas.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Progress City: Score I",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-14 There_s a Great Big Beautiful Tomorrow_ Progress City_ Score I.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Progress City: Score II",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-15 There_s a Great Big Beautiful Tomorrow_ Progress City_ Score II.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Progressland Spectacular",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-16 There_s a Great Big Beautiful Tomorrow_ Progressland Spectacular.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Speed Ramp March",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-17 There_s a Great Big Beautiful Tomorrow_ Speed Ramp March.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Great Big Beautiful Tomorrow: Talking Machine Music",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-18 There_s a Great Big Beautiful Tomorrow_ Talking Machine Music.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"There's a Bright New World of Innoventions",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-19 There_s a Bright New World of Innoventions.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Show Medley",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-20 Show Medley.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"Full Show",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-21 Full Show.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"Full Show (Alternate Universe Version)",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-22 Full Show (Alternate Universe Version).mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"Skydome Spectacular: Full Show",
		artist:"Sherman & Sherman",
		free:false,
		mp3:"Carousel of Progress-23 Skydome Spectacular_ Full Show.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"Adventure Through Inner Space: Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Carousel of Progress-24 Adventure Through Inner Space_ Ride.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"Adventure Through Inner Space: Miracles from Molecules",
		artist:"Walt Disney",
		free:false,
		mp3:"Carousel of Progress-25 Adventure Through Inner Space_ Miracles from Molecules.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"Adventure Through Inner Space: Miracles from Molecules (Lounge Version, unreleased)",
		artist:"Walt Disney",
		free:false,
		mp3:"Carousel of Progress-26 Adventure Through Inner Space_ Miracles from Molecules (Lounge Version, unreleased).mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
	{
		title:"Adventure Through Inner Space: Miracles from Molecules Variation",
		artist:"Walt Disney",
		free:false,
		mp3:"Carousel of Progress-27 Adventure Through Inner Space_ Miracles from Molecules Variation.mp3",
		poster:"AlbumArt/Carousel of Progress.jpeg",
		album:"Carousel of Progress",
		comments:""
	},
		
	{
		title:"Buena Vista Street: Area Music Loop (2012)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-01 Buena Vista Street_ Area Music Loop (2012).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Some Day My Prince Will Come",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-02 Some Day My Prince Will Come.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"A Dream Is A Wish Your Heart Makes",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-03 A Dream Is A Wish Your Heart Makes.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Alice In Wonderland",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-04 Alice In Wonderland.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"He's A Tramp",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-05 He_s A Tramp.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Ev'rybody Wants To Be A Cat",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-06 Ev_rybody Wants To Be A Cat.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Winnie The Pooh",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-07 Winnie The Pooh.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Be Our Guest",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-08 Be Our Guest.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"A Whole New World",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-09 A Whole New World.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Can You Feel The Love Tonight",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-10 Can You Feel The Love Tonight.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"You've Got A Friend In Me",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-11 You_ve Got A Friend In Me.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"If I Didn't Have You",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-12 If I Didn_t Have You.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Married Life",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-13 Married Life.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Some Day My Prince Will Come (Piano Solo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-14 Some Day My Prince Will Come (Piano Solo).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Alice In Wonderland (Piano Solo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-15 Alice In Wonderland (Piano Solo).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Ev'rybody Wants To Be A Cat (Piano Solo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-16 Ev_rybody Wants To Be A Cat (Piano Solo).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Winnie The Pooh (Piano Solo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-17 Winnie The Pooh (Piano Solo).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Married Life (Piano Solo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-18 Married Life (Piano Solo).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Cruella De Vil (Piano Solo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-19 Cruella De Vil (Piano Solo).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"I Wan'na Be Like You (Piano Solo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-20 I Wan_na Be Like You (Piano Solo).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"King Of New York (Piano Solo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-21 King Of New York (Piano Solo).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Let's Go Fly A Kite (Piano Solo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-22 Let_s Go Fly A Kite (Piano Solo).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Once Upon A Dream (Piano Solo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-23 Once Upon A Dream (Piano Solo).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"True Love's Kiss (Piano Solo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-24 True Love_s Kiss (Piano Solo).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Who's Afraid Of The Big Bad Wolf (Piano Solo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-25 Who_s Afraid Of The Big Bad Wolf (Piano Solo).mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
	{
		title:"Carthay Circle Restaurant: Area Music Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Buena Vista Street & Carthay Circle-26 Carthay Circle Restaurant_ Area Music Loop.mp3",
		poster:"AlbumArt/Buena Vista Street & Carthay Circle.jpeg",
		album:"Buena Vista Street & Carthay Circle",
		comments:""
	},
		
	{
		title:"Hollywood Land: Area Loop (2001)",
		artist:"Walt Disney",
		free:false,
		mp3:"Hollywood Land-01 Hollywood Land_ Area Loop (2001).mp3",
		poster:"AlbumArt/Hollywood Land.jpeg",
		album:"Hollywood Land",
		comments:""
	},
	{
		title:"Hollywood Land: Area Loop (2012)",
		artist:"Walt Disney",
		free:false,
		mp3:"Hollywood Land-02 Hollywood Land_ Area Loop (2012).mp3",
		poster:"AlbumArt/Hollywood Land.jpeg",
		album:"Hollywood Land",
		comments:""
	},
	{
		title:"Hollywood Land: Hooray For Hollywood",
		artist:"Walt Disney",
		free:false,
		mp3:"Hollywood Land-03 Hollywood Land_ Hooray For Hollywood.mp3",
		poster:"AlbumArt/Hollywood Land.jpeg",
		album:"Hollywood Land",
		comments:""
	},
	{
		title:"Hollywood Land: Tower of Terror",
		artist:"Walt Disney",
		free:false,
		mp3:"Hollywood Land-04 Hollywood Land_ Tower of Terror.mp3",
		poster:"AlbumArt/Hollywood Land.jpeg",
		album:"Hollywood Land",
		comments:""
	},
	{
		title:"Disney Studios: Animation Courtyard Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Hollywood Land-05 Disney Studios_ Animation Courtyard Area Loop.mp3",
		poster:"AlbumArt/Hollywood Land.jpeg",
		album:"Hollywood Land",
		comments:""
	},
	{
		title:"Disney Studios: Animation Building Projection Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Hollywood Land-06 Disney Studios_ Animation Building Projection Loop.mp3",
		poster:"AlbumArt/Hollywood Land.jpeg",
		album:"Hollywood Land",
		comments:""
	},
	{
		title:"Mike and Sulley to the Rescue: Ride",
		artist:"Randy Newman",
		free:false,
		mp3:"Hollywood Land-07 Mike and Sulley to the Rescue_ Ride.mp3",
		poster:"AlbumArt/Hollywood Land.jpeg",
		album:"Hollywood Land",
		comments:""
	},
	{
		title:"Aladdin - A Musical Spectacular: Curtain Call",
		artist:"Alan Menken",
		free:false,
		mp3:"Hollywood Land-08 Aladdin - A Musical Spectacular_ Curtain Call.mp3",
		poster:"AlbumArt/Hollywood Land.jpeg",
		album:"Hollywood Land",
		comments:""
	},
	{
		title:"Aladdin - A Musical Spectacular: Princess Of Agrabah",
		artist:"Alan Menken",
		free:false,
		mp3:"Hollywood Land-09 Aladdin - A Musical Spectacular_ Princess Of Agrabah.mp3",
		poster:"AlbumArt/Hollywood Land.jpeg",
		album:"Hollywood Land",
		comments:""
	},
	{
		title:"A Bug's Land - Area Music",
		artist:"Randy Newman",
		free:false,
		mp3:"Hollywood Land-10 A Bug_s Land - Area Music.mp3",
		poster:"AlbumArt/Hollywood Land 1.jpeg",
		album:"Hollywood Land",
		comments:""
	},
	{
		title:"It's Tough To Be a Bug!: Queue Loop",
		artist:"Randy Newman",
		free:false,
		mp3:"Hollywood Land-11 It_s Tough To Be a Bug!_ Queue Loop.mp3",
		poster:"AlbumArt/Hollywood Land 2.jpeg",
		album:"Hollywood Land",
		comments:""
	},
	{
		title:"It's Tough To Be a Bug!: Full Show",
		artist:"Randy Newman",
		free:false,
		mp3:"Hollywood Land-12 It_s Tough To Be a Bug!_ Full Show.mp3",
		poster:"AlbumArt/Hollywood Land 2.jpeg",
		album:"Hollywood Land",
		comments:""
	},
	{
		title:"It's Tough To Be a Bug!: We're Pollinators",
		artist:"Randy Newman",
		free:false,
		mp3:"Hollywood Land-13 It_s Tough To Be a Bug!_ We_re Pollinators.mp3",
		poster:"AlbumArt/Hollywood Land 2.jpeg",
		album:"Hollywood Land",
		comments:""
	},
		
	{
		title:"Area Music (2001-2010): The Right Stuff: Breaking the Sound Barrier",
		artist:"Bill Conti",
		free:false,
		mp3:"Condor Flats-01 Area Music (2001-2010)_ The Right Stuff_ Breaking the Sound Barrier.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): The Right Stuff: Almost Ready",
		artist:"Bill Conti",
		free:false,
		mp3:"Condor Flats-02 Area Music (2001-2010)_ The Right Stuff_ Almost Ready.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): The Right Stuff: The Training",
		artist:"Bill Conti",
		free:false,
		mp3:"Condor Flats-03 Area Music (2001-2010)_ The Right Stuff_ The Training.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): The Right Stuff: Yeager's Triumph",
		artist:"Bill Conti",
		free:false,
		mp3:"Condor Flats-04 Area Music (2001-2010)_ The Right Stuff_ Yeager_s Triumph.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): The Last Starfighter: Main Theme",
		artist:"Craig Safan",
		free:false,
		mp3:"Condor Flats-05 Area Music (2001-2010)_ The Last Starfighter_ Main Theme.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): Battle of the Midway: Midway March",
		artist:"John Williams",
		free:false,
		mp3:"Condor Flats-06 Area Music (2001-2010)_ Battle of the Midway_ Midway March.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): Air Force One: The Parachutes",
		artist:"Jerry Goldmsith",
		free:false,
		mp3:"Condor Flats-07 Area Music (2001-2010)_ Air Force One_ The Parachutes.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): Air Force One: Welcome Aboard Sir",
		artist:"Jerry Goldsmith",
		free:false,
		mp3:"Condor Flats-08 Area Music (2001-2010)_ Air Force One_ Welcome Aboard Sir.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): Pops On March",
		artist:"John Williams",
		free:false,
		mp3:"Condor Flats-09 Area Music (2001-2010)_ Pops On March.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): Liberty Fanfare",
		artist:"John Williams",
		free:false,
		mp3:"Condor Flats-10 Area Music (2001-2010)_ Liberty Fanfare.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): 633 Squadron: Theme",
		artist:"Ron Goodwin",
		free:false,
		mp3:"Condor Flats-11 Area Music (2001-2010)_ 633 Squadron_ Theme.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): The Last Starfighter: Big Victory March",
		artist:"Craig Safan",
		free:false,
		mp3:"Condor Flats-12 Area Music (2001-2010)_ The Last Starfighter_ Big Victory March.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): Space Camp: Space Camp",
		artist:"John Williams",
		free:false,
		mp3:"Condor Flats-13 Area Music (2001-2010)_ Space Camp_ Space Camp.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Music (2001-2010): The Planets: Jupiter",
		artist:"Gustav Holst",
		free:false,
		mp3:"Condor Flats-14 Area Music (2001-2010)_ The Planets_ Jupiter.mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Loop (2001-2010)",
		artist:"Walt Disney",
		free:false,
		mp3:"Condor Flats-15 Area Loop (2001-2010).mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
	{
		title:"Area Loop (2011-2015)",
		artist:"Walt Disney",
		free:false,
		mp3:"Condor Flats-16 Area Loop (2011-2015).mp3",
		poster:"AlbumArt/Condor Flats.jpeg",
		album:"Condor Flats",
		comments:""
	},
		
	{
		title:"Queue Loop (2001-2005)",
		artist:"Walt Disney",
		free:false,
		mp3:"Soarin' Over California-01 Queue Loop (2001-2005).mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Queue Music (2005): Distinguished Gentleman: Girls of Many Nations",
		artist:"Randy Edelman",
		free:false,
		mp3:"Soarin' Over California-02 Queue Music (2005)_ Distinguished Gentleman_ Girls of Many Nations.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Queue Music (2005): Distinguished Gentleman: Soft Rebellion",
		artist:"Randy Edelman",
		free:false,
		mp3:"Soarin' Over California-03 Queue Music (2005)_ Distinguished Gentleman_ Soft Rebellion.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Queue Music (2005): Distinguished Gentleman: Reprise",
		artist:"Randy Edelman",
		free:false,
		mp3:"Soarin' Over California-04 Queue Music (2005)_ Distinguished Gentleman_ Reprise.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Queue Music (2005): The American President: Main Titles",
		artist:"Marc Shaiman",
		free:false,
		mp3:"Soarin' Over California-05 Queue Music (2005)_ The American President_ Main Titles.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Queue Music (2005): Battle of the Atlantic Suite: Evening Tide",
		artist:"Dave Roylance / Bob Gavlin",
		free:false,
		mp3:"Soarin' Over California-06 Queue Music (2005)_ Battle of the Atlantic Suite_ Evening Tide.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Queue Music (2005): Dave: You're On",
		artist:"James Newton Howard",
		free:false,
		mp3:"Soarin' Over California-07 Queue Music (2005)_ Dave_ You_re On.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Queue Music (2005): Dragon: Victory at Ed Parker's",
		artist:"Randy Edelman",
		free:false,
		mp3:"Soarin' Over California-08 Queue Music (2005)_ Dragon_ Victory at Ed Parker_s.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Queue Music (2005): Dragon: The Premier of the Big Boss",
		artist:"Randy Edelman",
		free:false,
		mp3:"Soarin' Over California-09 Queue Music (2005)_ Dragon_ The Premier of the Big Boss.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Queue Music (2005): The American President: End Titles",
		artist:"Marc Shaiman",
		free:false,
		mp3:"Soarin' Over California-10 Queue Music (2005)_ The American President_ End Titles.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Queue Music (2005): The Blue Max Suite",
		artist:"Jerry Goldsmith",
		free:false,
		mp3:"Soarin' Over California-11 Queue Music (2005)_ The Blue Max Suite.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Queue Music (2005): The Generals",
		artist:"Jerry Goldsmith",
		free:false,
		mp3:"Soarin' Over California-12 Queue Music (2005)_ The Generals.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Queue Loop (2005)",
		artist:"Walt Disney",
		free:false,
		mp3:"Soarin' Over California-13 Queue Loop (2005).mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Load Music",
		artist:"Jerry Goldsmith",
		free:false,
		mp3:"Soarin' Over California-14 Load Music.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Soundtrack",
		artist:"Jerry Goldsmith",
		free:false,
		mp3:"Soarin' Over California-15 Soundtrack.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Score",
		artist:"Jerry Goldsmith",
		free:false,
		mp3:"Soarin' Over California-16 Score.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Soarin' Around the World: Theme",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Soarin' Over California-17 Soarin_ Around the World_ Theme.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
	{
		title:"Exit Music",
		artist:"Jerry Goldsmith",
		free:false,
		mp3:"Soarin' Over California-18 Exit Music.mp3",
		poster:"AlbumArt/Soarin_ Over California.jpeg",
		album:"Soarin' Over California",
		comments:""
	},
		
	{
		title:"Airfield: Area Loop (2015)",
		artist:"Walt Disney",
		free:false,
		mp3:"Grizzly Peak-01 Airfield_ Area Loop (2015).mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
	{
		title:"Grand Californian Hotel: Entrance Path: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Grizzly Peak-02 Grand Californian Hotel_ Entrance Path_ Area Loop.mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
	{
		title:"Recreation Area: Area Music: Whistlin' Rufus",
		artist:"Dan Watson",
		free:false,
		mp3:"Grizzly Peak-03 Recreation Area_ Area Music_ Whistlin_ Rufus.mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
	{
		title:"Recreation Area: Area Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Grizzly Peak-04 Recreation Area_ Area Music.mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
	{
		title:"Recreation Area: Area Music: Caleb's Report",
		artist:"Doyle Dykes",
		free:false,
		mp3:"Grizzly Peak-05 Recreation Area_ Area Music_ Caleb_s Report.mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
	{
		title:"Recreation Area: Area Music: Over the Pass",
		artist:"Walt Disney",
		free:false,
		mp3:"Grizzly Peak-06 Recreation Area_ Area Music_ Over the Pass.mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
	{
		title:"Recreation Area: Area Music: First Ride",
		artist:"Don Ross",
		free:false,
		mp3:"Grizzly Peak-07 Recreation Area_ Area Music_ First Ride.mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
	{
		title:"Recreation Area: Area Music: Jazz in the Box",
		artist:"Walt Disney",
		free:false,
		mp3:"Grizzly Peak-08 Recreation Area_ Area Music_ Jazz in the Box.mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
	{
		title:"Recreation Area: Area Music: Celtic Cowboy",
		artist:"Walt Disney",
		free:false,
		mp3:"Grizzly Peak-09 Recreation Area_ Area Music_ Celtic Cowboy.mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
	{
		title:"Recreation Area: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Grizzly Peak-10 Recreation Area_ Area Loop.mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
	{
		title:"Grizzly River Run: Queue Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Grizzly Peak-11 Grizzly River Run_ Queue Loop.mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
	{
		title:"Redwood Creek Challenge Trail: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Grizzly Peak-12 Redwood Creek Challenge Trail_ Area Loop.mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
	{
		title:"The Magic of Brother Bear Totem Ceremony",
		artist:"Mark Mancina",
		free:false,
		mp3:"Grizzly Peak-13 The Magic of Brother Bear Totem Ceremony.mp3",
		poster:"AlbumArt/Grizzly Peak.jpeg",
		album:"Grizzly Peak",
		comments:""
	},
		
	{
		title:"Golden Vine Winery: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Pacific Wharf-01 Golden Vine Winery_ Area Loop.mp3",
		poster:"AlbumArt/Pacific Wharf.jpeg",
		album:"Pacific Wharf",
		comments:""
	},
	{
		title:"Golden Vine Winery: Seasons Of The Vine Medley",
		artist:"Bruce Broughton",
		free:false,
		mp3:"Pacific Wharf-02 Golden Vine Winery_ Seasons Of The Vine Medley.mp3",
		poster:"AlbumArt/Pacific Wharf.jpeg",
		album:"Pacific Wharf",
		comments:""
	},
	{
		title:"The Bakery: Theme",
		artist:"Walt Disney",
		free:false,
		mp3:"Pacific Wharf-03 The Bakery_ Theme.mp3",
		poster:"AlbumArt/Pacific Wharf.jpeg",
		album:"Pacific Wharf",
		comments:""
	},
	{
		title:"Cocina Cucamonga: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Pacific Wharf-04 Cocina Cucamonga_ Area Loop.mp3",
		poster:"AlbumArt/Pacific Wharf.jpeg",
		album:"Pacific Wharf",
		comments:""
	},
		
	{
		title:"The Little Mermaid: Ariel's Undersea Adventure: Ride",
		artist:"Alan Menken",
		free:false,
		mp3:"Paradise Pier-01 The Little Mermaid_ Ariel_s Undersea Adventure_ Ride.mp3",
		poster:"AlbumArt/Paradise Pier.jpeg",
		album:"Paradise Pier",
		comments:""
	},
	{
		title:"The Little Mermaid: Ariel's Undersea Adventure: Ride Extended",
		artist:"Alan Menken",
		free:false,
		mp3:"Paradise Pier-02 The Little Mermaid_ Ariel_s Undersea Adventure_ Ride Extended.mp3",
		poster:"AlbumArt/Paradise Pier.jpeg",
		album:"Paradise Pier",
		comments:""
	},
	{
		title:"Silly Symphony Swings: Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Paradise Pier-03 Silly Symphony Swings_ Ride.mp3",
		poster:"AlbumArt/Paradise Pier.jpeg",
		album:"Paradise Pier",
		comments:""
	},
	{
		title:"California Screamin': Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Paradise Pier-04 California Screamin__ Ride.mp3",
		poster:"AlbumArt/Paradise Pier.jpeg",
		album:"Paradise Pier",
		comments:""
	},
	{
		title:"Paradise Pier: Area Loop (2001-2010)",
		artist:"Walt Disney",
		free:false,
		mp3:"Paradise Pier-05 Paradise Pier_ Area Loop (2001-2010).mp3",
		poster:"AlbumArt/Paradise Pier.jpeg",
		album:"Paradise Pier",
		comments:""
	},
	{
		title:"Paradise Pier: Area Demo Loop (2010)",
		artist:"Walt Disney",
		free:false,
		mp3:"Paradise Pier-10 Paradise Pier_ Area Demo Loop (2010).mp3",
		poster:"AlbumArt/Paradise Pier.jpeg",
		album:"Paradise Pier",
		comments:""
	},
	{
		title:"Paradise Pier: Area Loop (2010)",
		artist:"Walt Disney",
		free:false,
		mp3:"Paradise Pier-11 Paradise Pier_ Area Loop (2010).mp3",
		poster:"AlbumArt/Paradise Pier.jpeg",
		album:"Paradise Pier",
		comments:""
	},
	{
		title:"Paradise Park: Area Loop (2010)",
		artist:"Walt Disney",
		free:false,
		mp3:"Paradise Pier-12 Paradise Park_ Area Loop (2010).mp3",
		poster:"AlbumArt/Paradise Pier.jpeg",
		album:"Paradise Pier",
		comments:""
	},
		
	{
		title:"Pixar Promenade: Area Loop (2018)",
		artist:"Walt Disney",
		free:false,
		mp3:"Pixar Pier-01 Pixar Promenade_ Area Loop (2018).mp3",
		poster:"AlbumArt/Pixar Pier.jpeg",
		album:"Pixar Pier",
		comments:""
	},
	{
		title:"Toy Story Midway Mania: Area Music: The Cleaner",
		artist:"Randy Newman",
		free:false,
		mp3:"Pixar Pier-02 Toy Story Midway Mania_ Area Music_ The Cleaner.mp3",
		poster:"AlbumArt/Pixar Pier.jpeg",
		album:"Pixar Pier",
		comments:""
	},
	{
		title:"Toy Story Midway Mania: Area Music: You've Got a Friend in Me",
		artist:"Randy Newman",
		free:false,
		mp3:"Pixar Pier-03 Toy Story Midway Mania_ Area Music_ You_ve Got a Friend in Me.mp3",
		poster:"AlbumArt/Pixar Pier.jpeg",
		album:"Pixar Pier",
		comments:""
	},
	{
		title:"Toy Story Midway Mania: Hot Potato",
		artist:"Randy Newman",
		free:false,
		mp3:"Pixar Pier-04 Toy Story Midway Mania_ Hot Potato.mp3",
		poster:"AlbumArt/Pixar Pier.jpeg",
		album:"Pixar Pier",
		comments:""
	},
	{
		title:"Toy Story Midway Mania: Theme",
		artist:"Randy Newman",
		free:false,
		mp3:"Pixar Pier-05 Toy Story Midway Mania_ Theme.mp3",
		poster:"AlbumArt/Pixar Pier.jpeg",
		album:"Pixar Pier",
		comments:""
	},
		
	{
		title:"Plaza de la Familia: Area Loop",
		artist:"Michael Giacchino",
		free:false,
		mp3:"Plaza de la Familia-01 Plaza de la Familia_ Area Loop.mp3",
		poster:"AlbumArt/Plaza de la Familia.jpeg",
		album:"Plaza de la Familia",
		comments:""
	},
		
	{
		title:"Lobby: Queue Loop (Master Mix)",
		artist:"Walt Disney",
		free:false,
		mp3:"Tower of Terror-01 Lobby_ Queue Loop (Master Mix).mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Loop (Reconstruction) (No Echo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Tower of Terror-02 Lobby_ Queue Loop (Reconstruction) (No Echo).mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Tower of Terror-03 Lobby_ Queue Loop.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Loop (No Echo)",
		artist:"Walt Disney",
		free:false,
		mp3:"Tower of Terror-04 Lobby_ Queue Loop (No Echo).mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: There's a House in Harlem for Sale",
		artist:"Henry Allen",
		free:false,
		mp3:"Tower of Terror-05 Lobby_ Queue Music_ There_s a House in Harlem for Sale.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Jungle Drums",
		artist:"Sidney Bechet",
		free:false,
		mp3:"Tower of Terror-06 Lobby_ Queue Music_ Jungle Drums.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Sleepy Time Gal",
		artist:"Glenn Miller",
		free:false,
		mp3:"Tower of Terror-07 Lobby_ Queue Music_ Sleepy Time Gal.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: I Can't Get Started",
		artist:"Bunny Berigan",
		free:false,
		mp3:"Tower of Terror-08 Lobby_ Queue Music_ I Can_t Get Started.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Mood Indigo",
		artist:"Duke Ellington",
		free:false,
		mp3:"Tower of Terror-09 Lobby_ Queue Music_ Mood Indigo.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Wishing Will Make It So",
		artist:"Vera Lynn",
		free:false,
		mp3:"Tower of Terror-10 Lobby_ Queue Music_ Wishing Will Make It So.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Uptown Blues",
		artist:"Jimmie Lunceford",
		free:false,
		mp3:"Tower of Terror-11 Lobby_ Queue Music_ Uptown Blues.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Remember",
		artist:"Red Norvo",
		free:false,
		mp3:"Tower of Terror-12 Lobby_ Queue Music_ Remember.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Dear Old Southland",
		artist:"Noble Sissle",
		free:false,
		mp3:"Tower of Terror-13 Lobby_ Queue Music_ Dear Old Southland.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Jeep's Blues",
		artist:"Johnny Hodges",
		free:false,
		mp3:"Tower of Terror-14 Lobby_ Queue Music_ Jeep_s Blues.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Pyramid",
		artist:"Johnny Hodges",
		free:false,
		mp3:"Tower of Terror-15 Lobby_ Queue Music_ Pyramid.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Deep Purple",
		artist:"Turner Layton",
		free:false,
		mp3:"Tower of Terror-16 Lobby_ Queue Music_ Deep Purple.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Jitterbug's Lullaby",
		artist:"Johnny Hodges",
		free:false,
		mp3:"Tower of Terror-17 Lobby_ Queue Music_ Jitterbug_s Lullaby.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: I'm in Another World",
		artist:"Johnny Hodges",
		free:false,
		mp3:"Tower of Terror-18 Lobby_ Queue Music_ I_m in Another World.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: We'll Meet Again",
		artist:"Vera Lynn",
		free:false,
		mp3:"Tower of Terror-19 Lobby_ Queue Music_ We_ll Meet Again.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: When the Sun Sets Down South",
		artist:"Sidney Bechet",
		free:false,
		mp3:"Tower of Terror-20 Lobby_ Queue Music_ When the Sun Sets Down South.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Delta Mood",
		artist:"Cootie Williams",
		free:false,
		mp3:"Tower of Terror-21 Lobby_ Queue Music_ Delta Mood.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Alabamy Home",
		artist:"The Gotham Stompers",
		free:false,
		mp3:"Tower of Terror-22 Lobby_ Queue Music_ Alabamy Home.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: There's No Two Ways About It",
		artist:"Frankie Newton",
		free:false,
		mp3:"Tower of Terror-23 Lobby_ Queue Music_ There_s No Two Ways About It.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Lobby: Queue Music: Inside (This Heart of Mine)",
		artist:"Fats Waller",
		free:false,
		mp3:"Tower of Terror-24 Lobby_ Queue Music_ Inside (This Heart of Mine).mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Library: Pre-Show Video",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-25 Library_ Pre-Show Video.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"It's Raining, it's Pouring",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-26 It_s Raining, it_s Pouring.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Little Girl Lost: Score",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-27 Little Girl Lost_ Score.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Little Girl Lost: Soundtrack",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-28 Little Girl Lost_ Soundtrack.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Boiler Room: Ambience Audio",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-29 Boiler Room_ Ambience Audio.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Boiler Room: Radio Loop",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-30 Boiler Room_ Radio Loop.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Elevator Sounds",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-31 Elevator Sounds.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Elevator Motor Shaft Sounds",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-32 Elevator Motor Shaft Sounds.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Elevator Shaft: Ambience Audio",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-33 Elevator Shaft_ Ambience Audio.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Return Spiel",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-34 Return Spiel.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Ride Through",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-35 Ride Through.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Ride Score",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-36 Ride Score.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
	{
		title:"Exit Music",
		artist:"Bernard Herrmann",
		free:false,
		mp3:"Tower of Terror-37 Exit Music.mp3",
		poster:"AlbumArt/Tower of Terror.jpeg",
		album:"Tower of Terror",
		comments:""
	},
		
	{
		title:"Summer of Heroes: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Guardians of the Galaxy-01 Summer of Heroes_ Area Loop.mp3",
		poster:"AlbumArt/Guardians of the Galaxy.jpeg",
		album:"Guardians of the Galaxy",
		comments:""
	},
	{
		title:"Black Widow Arrival",
		artist:"Walt Disney",
		free:false,
		mp3:"Guardians of the Galaxy-02 Black Widow Arrival.mp3",
		poster:"AlbumArt/Guardians of the Galaxy.jpeg",
		album:"Guardians of the Galaxy",
		comments:""
	},
	{
		title:"The Collector's Warehouse: Queue Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Guardians of the Galaxy-03 The Collector_s Warehouse_ Queue Loop.mp3",
		poster:"AlbumArt/Guardians of the Galaxy.jpeg",
		album:"Guardians of the Galaxy",
		comments:""
	},
		
	{
		title:"Welcome to Radiator Springs",
		artist:"Walt Disney",
		free:false,
		mp3:"Cars Land-01 Welcome to Radiator Springs.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
	{
		title:"Courthouse Debate",
		artist:"Walt Disney",
		free:false,
		mp3:"Cars Land-02 Courthouse Debate.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
	{
		title:"Radio Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Cars Land-03 Radio Loop.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
	{
		title:"Route 66 Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Cars Land-04 Route 66 Area Loop.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
	{
		title:"Mater's Junkyard Jamboree: Area Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Cars Land-05 Mater_s Junkyard Jamboree_ Area Music.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
	{
		title:"Flo's V8 Cafe: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Cars Land-06 Flo_s V8 Cafe_ Area Loop.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
	{
		title:"Ramone's House of Body Art: La Bamba",
		artist:"Ritchie Valens/Traditional",
		free:false,
		mp3:"Cars Land-07 Ramone_s House of Body Art_ La Bamba.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
	{
		title:"Ramone's House of Body Art: Low Rider",
		artist:"Walt Disney",
		free:false,
		mp3:"Cars Land-08 Ramone_s House of Body Art_ Low Rider.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
	{
		title:"Ramone's House of Body Art: Why Can't We Be Friends?",
		artist:"Papa Dee Allen, Charles Miller, Lee Oskar, Lonnie Jordan, B.B. Dickerson, Harold Brown, Howard Scott & Jerry Goldstein",
		free:false,
		mp3:"Cars Land-09 Ramone_s House of Body Art_ Why Can_t We Be Friends_.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
	{
		title:"Ramone's House of Body Art: Wooly Bully",
		artist:"Walt Disney",
		free:false,
		mp3:"Cars Land-10 Ramone_s House of Body Art_ Wooly Bully.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
	{
		title:"Luigi's Flying Tires: Funiculi Funicula",
		artist:"Walt Disney",
		free:false,
		mp3:"Cars Land-11 Luigi_s Flying Tires_ Funiculi Funicula.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
	{
		title:"Luigi's Flying Tires: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Cars Land-12 Luigi_s Flying Tires_ Area Loop.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
	{
		title:"Radiator Springs Racers: Attraction Ride Through",
		artist:"Walt Disney",
		free:false,
		mp3:"Cars Land-13 Radiator Springs Racers_ Attraction Ride Through.mp3",
		poster:"AlbumArt/Cars Land.jpeg",
		album:"Cars Land",
		comments:""
	},
		
	{
		title:"Videopolis Theatre: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasyland Theatre-01 Videopolis Theatre_ Area Loop.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Fantasyland Theatre: Beauty and the Beast",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasyland Theatre-02 The Fantasyland Theatre_ Beauty and the Beast.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"The Fantasyland Theatre: Snow White, an Enchanting Musical",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasyland Theatre-03 The Fantasyland Theatre_ Snow White, an Enchanting Musical.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"The Fantasyland Theatre: Animazement",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasyland Theatre-04 The Fantasyland Theatre_ Animazement.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"The Fantasyland Theatre: The Spirit of Pocahontas",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasyland Theatre-05 The Fantasyland Theatre_ The Spirit of Pocahontas.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"The Festival of Fools: The Hunchback of Notre Dame Festival of Fools",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasyland Theatre-06 The Festival of Fools_ The Hunchback of Notre Dame Festival of Fools.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey and the Magical Map: Area Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasyland Theatre-07 Mickey and the Magical Map_ Area Music.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mickey and the Magical Map: Soundtrack",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasyland Theatre-08 Mickey and the Magical Map_ Soundtrack.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mickey and the Magical Map: Ultimate Soundtrack Mix",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasyland Theatre-09 Mickey and the Magical Map_ Ultimate Soundtrack Mix.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: Instrumental",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-10 Mickey_s Magical Party Time_ Instrumental.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: Theme",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-11 Mickey_s Magical Party Time_ Theme.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: Following The Leader",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-12 Mickey_s Magical Party Time_ Following The Leader.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: The Bare Necessities",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-13 Mickey_s Magical Party Time_ The Bare Necessities.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: Tigger Medley",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-14 Mickey_s Magical Party Time_ Tigger Medley.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: Hakuna Matata",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-15 Mickey_s Magical Party Time_ Hakuna Matata.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: Peter Pan Medley",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-16 Mickey_s Magical Party Time_ Peter Pan Medley.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: Mickey (Final)",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-17 Mickey_s Magical Party Time_ Mickey (Final).mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: Main Street USA Version",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-18 Mickey_s Magical Party Time_ Main Street USA Version.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: Remix",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-19 Mickey_s Magical Party Time_ Remix.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: He's A Pirate (Remix)",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-20 Mickey_s Magical Party Time_ He_s A Pirate (Remix).mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: The Hill Billy Trio",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-21 Mickey_s Magical Party Time_ The Hill Billy Trio.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Mickey's Magical Party Time: The African Tam Tam",
		artist:"Scott Erickson",
		free:false,
		mp3:"Fantasyland Theatre-22 Mickey_s Magical Party Time_ The African Tam Tam.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
	{
		title:"Parades and Shows: Poppins in the Parks",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasyland Theatre-23 Parades and Shows_ Poppins in the Parks.mp3",
		poster:"AlbumArt/Fantasyland Theatre.jpeg",
		album:"Fantasyland Theatre",
		comments:""
	},
		
	{
		title:"Toy Story Block Party Bash: Full Show",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-01 Toy Story Block Party Bash_ Full Show.mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade: Fantillusion",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-02 Parade_ Fantillusion.mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade of Princesses: Overture",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-03 Parade of Princesses_ Overture.mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade of Princesses: Sleeping Beauty",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-04 Parade of Princesses_ Sleeping Beauty.mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade of Princesses: Cinderella",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-05 Parade of Princesses_ Cinderella.mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade of Princesses: Snow White",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-06 Parade of Princesses_ Snow White.mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade of Princesses: Beauty and the Beast",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-07 Parade of Princesses_ Beauty and the Beast.mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade of Princesses: The Little Mermaid",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-08 Parade of Princesses_ The Little Mermaid.mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade: Parade of The Stars",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-09 Parade_ Parade of The Stars.mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade: Parade of Dreams Soundtrack",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-10 Parade_ Parade of Dreams Soundtrack.mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade: Mickey's Soundsational Parade",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-11 Parade_ Mickey_s Soundsational Parade.mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade: Main Street Electrical Parade",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-12 Parade_ Main Street Electrical Parade.mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade: Light Magic (1996)",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-13 Parade_ Light Magic (1996).mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade: Paint The Night: Score (2015)",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-14 Parade_ Paint The Night_ Score (2015).mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
	{
		title:"Parade: Paint the Night: Soundtrack (2015)",
		artist:"Walt Disney",
		free:false,
		mp3:"Parades-15 Parade_ Paint the Night_ Soundtrack (2015).mp3",
		poster:"AlbumArt/Parades.jpeg",
		album:"Parades",
		comments:""
	},
		
	{
		title:"Soundtrack (1992-2012)",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasmic!-01 Soundtrack (1992-2012).mp3",
		poster:"AlbumArt/Fantasmic!.jpeg",
		album:"Fantasmic!",
		comments:""
	},
	{
		title:"Score (1992-2012)",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasmic!-02 Score (1992-2012).mp3",
		poster:"AlbumArt/Fantasmic!.jpeg",
		album:"Fantasmic!",
		comments:""
	},
	{
		title:"Score (2013)",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasmic!-03 Score (2013).mp3",
		poster:"AlbumArt/Fantasmic!.jpeg",
		album:"Fantasmic!",
		comments:""
	},
	{
		title:"Soundtrack (Extended)",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasmic!-04 Soundtrack (Extended).mp3",
		poster:"AlbumArt/Fantasmic!.jpeg",
		album:"Fantasmic!",
		comments:""
	},
	{
		title:"Score (Extended)",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasmic!-05 Score (Extended).mp3",
		poster:"AlbumArt/Fantasmic!.jpeg",
		album:"Fantasmic!",
		comments:""
	},
	{
		title:"Finale",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasmic!-06 Finale.mp3",
		poster:"AlbumArt/Fantasmic!.jpeg",
		album:"Fantasmic!",
		comments:""
	},
	{
		title:"Exit Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Fantasmic!-07 Exit Music.mp3",
		poster:"AlbumArt/Fantasmic!.jpeg",
		album:"Fantasmic!",
		comments:""
	},
		
	{
		title:"Soundtrack (Pre-Premiere)",
		artist:"Walt Disney",
		free:false,
		mp3:"World of Color-01 Soundtrack (Pre-Premiere).mp3",
		poster:"AlbumArt/World of Color.jpeg",
		album:"World of Color",
		comments:""
	},
	{
		title:"Soundtrack (2010)",
		artist:"Walt Disney",
		free:false,
		mp3:"World of Color-02 Soundtrack (2010).mp3",
		poster:"AlbumArt/World of Color.jpeg",
		album:"World of Color",
		comments:""
	},
	{
		title:"Soundtrack (2013)",
		artist:"Walt Disney",
		free:false,
		mp3:"World of Color-03 Soundtrack (2013).mp3",
		poster:"AlbumArt/World of Color.jpeg",
		album:"World of Color",
		comments:""
	},
	{
		title:"Exit Music",
		artist:"Walt Disney",
		free:false,
		mp3:"World of Color-04 Exit Music.mp3",
		poster:"AlbumArt/World of Color.jpeg",
		album:"World of Color",
		comments:""
	},
	{
		title:"Theme Song and Finale",
		artist:"Walt Disney",
		free:false,
		mp3:"World of Color-05 Theme Song and Finale.mp3",
		poster:"AlbumArt/World of Color.jpeg",
		album:"World of Color",
		comments:""
	},
	{
		title:"Celebrate: Soundtrack (2015)",
		artist:"Walt Disney",
		free:false,
		mp3:"World of Color-06 Celebrate_ Soundtrack (2015).mp3",
		poster:"AlbumArt/World of Color.jpeg",
		album:"World of Color",
		comments:""
	},
	{
		title:"Celebrate: Exit Music (2015)",
		artist:"Walt Disney",
		free:false,
		mp3:"World of Color-07 Celebrate_ Exit Music (2015).mp3",
		poster:"AlbumArt/World of Color.jpeg",
		album:"World of Color",
		comments:""
	},
		
	{
		title:"Tinkerbell's Fantasy in the Sky",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-01 Tinkerbell_s Fantasy in the Sky.mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
	{
		title:"Believe, There's Magic in the Stars",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-02 Believe, There_s Magic in the Stars.mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
	{
		title:"Remember Dreams Come True",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-03 Remember Dreams Come True.mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
	{
		title:"Magical!",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-04 Magical!.mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
	{
		title:"Disneyland Forever",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-05 Disneyland Forever.mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mickey & Minnie's 90th Celebration: It's a Good Time",
		artist:"The DeeKompressors",
		free:false,
		mp3:"Firework Shows-06 Mickey & Minnie_s 90th Celebration_ It_s a Good Time.mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
	{
		title:"Exit Music: Remember Dreams Come True (Remember When)",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-07 Exit Music_ Remember Dreams Come True (Remember When).mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
	{
		title:"Exit Music: Remember Dreams Come True (Extended)",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-08 Exit Music_ Remember Dreams Come True (Extended).mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
	{
		title:"Exit Music: Magical! (A Dream is a Wish)",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-09 Exit Music_ Magical! (A Dream is a Wish).mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
	{
		title:"Exit Music: Disneyland Forever (Live the Magic)",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-10 Exit Music_ Disneyland Forever (Live the Magic).mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
	{
		title:"Exit Music: A Kiss Goodnight",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-11 Exit Music_ A Kiss Goodnight.mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Small World Night Show: The Magic, the Memories, and You",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-12 Small World Night Show_ The Magic, the Memories, and You.mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Celebrate the Magic: Soundtrack",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-13 Celebrate the Magic_ Soundtrack.mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
	{
		title:"Nightfall Glow: Soundtrack",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-14 Nightfall Glow_ Soundtrack.mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
	{
		title:"Disneyland Closing Music: When You Wish Upon a Star",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-15 Disneyland Closing Music_ When You Wish Upon a Star.mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
	{
		title:"Disneyland Closing Spiel",
		artist:"Walt Disney",
		free:false,
		mp3:"Firework Shows-16 Disneyland Closing Spiel.mp3",
		poster:"AlbumArt/Firework Shows.jpeg",
		album:"Firework Shows",
		comments:""
	},
		
	{
		title:"Trader Sam Tiki Bar: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Hotel-01 Trader Sam Tiki Bar_ Area Loop.mp3",
		poster:"AlbumArt/Disneyland Hotel.jpeg",
		album:"Disneyland Hotel",
		comments:""
	},
	{
		title:"Tram",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Hotel-02 Tram.mp3",
		poster:"AlbumArt/Disneyland Hotel.jpeg",
		album:"Disneyland Hotel",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Hotel-03 Area Loop.mp3",
		poster:"AlbumArt/Disneyland Hotel.jpeg",
		album:"Disneyland Hotel",
		comments:""
	},
	{
		title:"Area Loop: Lobby",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Hotel-04 Area Loop_ Lobby.mp3",
		poster:"AlbumArt/Disneyland Hotel.jpeg",
		album:"Disneyland Hotel",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Loop: Fantasy Tower",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Hotel-05 Area Loop_ Fantasy Tower.mp3",
		poster:"AlbumArt/Disneyland Hotel.jpeg",
		album:"Disneyland Hotel",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Loop: Adventure Tower",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Hotel-06 Area Loop_ Adventure Tower.mp3",
		poster:"AlbumArt/Disneyland Hotel.jpeg",
		album:"Disneyland Hotel",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Area Loop: Frontier Tower",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Hotel-07 Area Loop_ Frontier Tower.mp3",
		poster:"AlbumArt/Disneyland Hotel.jpeg",
		album:"Disneyland Hotel",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Fantasy & Adventure Tower Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Hotel-08 Fantasy & Adventure Tower Medley.mp3",
		poster:"AlbumArt/Disneyland Hotel.jpeg",
		album:"Disneyland Hotel",
		comments:""
	},
	{
		title:"Area Loop: Goofy's Kitchen",
		artist:"Walt Disney",
		free:false,
		mp3:"Disneyland Hotel-09 Area Loop_ Goofy_s Kitchen.mp3",
		poster:"AlbumArt/Disneyland Hotel.jpeg",
		album:"Disneyland Hotel",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"The Cadaver Dans: Rivers of America",
		artist:"Walt Disney",
		free:false,
		mp3:"Halloweentime-01 The Cadaver Dans_ Rivers of America.mp3",
		poster:"AlbumArt/Halloweentime.jpeg",
		album:"Halloweentime",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mickey's Not So Scary Halloween Party: Area Loop (2015-2018) (NEW)",
		artist:"Walt Disney",
		free:false,
		mp3:"Halloweentime-03 Mickey_s Not So Scary Halloween Party_ Area Loop (2015-2018).mp3",
		poster:"AlbumArt/Halloweentime.jpeg",
		album:"Halloweentime",
		comments:""
	},
	{
		title:"Mickey's Costume Party Cavalcade",
		artist:"Walt Disney",
		free:false,
		mp3:"Halloweentime-04 Mickey_s Costume Party Cavalcade.mp3",
		poster:"AlbumArt/Halloweentime.jpeg",
		album:"Halloweentime",
		comments:""
	},
	{
		title:"Space Mountain Ghost Galaxy: Score",
		artist:"Walt Disney",
		free:false,
		mp3:"Halloweentime-05 Space Mountain Ghost Galaxy_ Score.mp3",
		poster:"AlbumArt/Halloweentime.jpeg",
		album:"Halloweentime",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Fireworks Show: Halloween Screams: A Villainous Surprise in the Skies",
		artist:"Walt Disney",
		free:false,
		mp3:"Halloweentime-06 Fireworks Show_ Halloween Screams_ A Villainous Surprise in the Skies.mp3",
		poster:"AlbumArt/Halloweentime.jpeg",
		album:"Halloweentime",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"Music Box: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion Holiday-01 Music Box_ Area Loop.mp3",
		poster:"AlbumArt/Haunted Mansion Holiday.jpeg",
		album:"Haunted Mansion Holiday",
		comments:""
	},
	{
		title:"Scarols: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion Holiday-02 Scarols_ Area Loop.mp3",
		poster:"AlbumArt/Haunted Mansion Holiday.jpeg",
		album:"Haunted Mansion Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Foyer (2001)",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion Holiday-03 Foyer (2001).mp3",
		poster:"AlbumArt/Haunted Mansion Holiday.jpeg",
		album:"Haunted Mansion Holiday",
		comments:""
	},
	{
		title:"Endless Hall (2001)",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion Holiday-04 Endless Hall (2001).mp3",
		poster:"AlbumArt/Haunted Mansion Holiday.jpeg",
		album:"Haunted Mansion Holiday",
		comments:""
	},
	{
		title:"Attic (2001)",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion Holiday-06 Attic (2001).mp3",
		poster:"AlbumArt/Haunted Mansion Holiday.jpeg",
		album:"Haunted Mansion Holiday",
		comments:""
	},
	{
		title:"Ballroom (2001)",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion Holiday-05 Ballroom (2001).mp3",
		poster:"AlbumArt/Haunted Mansion Holiday.jpeg",
		album:"Haunted Mansion Holiday",
		comments:""
	},
	{
		title:"Crypt Band (2001)",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion Holiday-07 Crypt Band (2001).mp3",
		poster:"AlbumArt/Haunted Mansion Holiday.jpeg",
		album:"Haunted Mansion Holiday",
		comments:""
	},
	{
		title:"Crypt Party (2001)",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion Holiday-08 Crypt Party (2001).mp3",
		poster:"AlbumArt/Haunted Mansion Holiday.jpeg",
		album:"Haunted Mansion Holiday",
		comments:""
	},
	{
		title:"Ride (2001)",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion Holiday-09 Ride (2001).mp3",
		poster:"AlbumArt/Haunted Mansion Holiday.jpeg",
		album:"Haunted Mansion Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Ride (2002)",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion Holiday-10 Ride (2002).mp3",
		poster:"AlbumArt/Haunted Mansion Holiday.jpeg",
		album:"Haunted Mansion Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"French Market: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Haunted Mansion Holiday-11 French Market_ Area Loop.mp3",
		poster:"AlbumArt/Haunted Mansion Holiday.jpeg",
		album:"Haunted Mansion Holiday",
		comments:"Credit Chris Lyndon"
	},
		
	{
		title:"Disneyland Esplanade: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-01 Disneyland Esplanade_ Area Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:""
	},
	{
		title:"Main Street: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-02 Main Street_ Area Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Main Street: Area Loop (Remastered)",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-03 Main Street_ Area Loop (Remastered).mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:""
	},
	{
		title:"Main Street: Music Box",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-04 Main Street_ Music Box.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Buena Vista Street: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-05 Buena Vista Street_ Area Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:""
	},
	{
		title:"The Jingle Cruise: Queue Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-06 The Jingle Cruise_ Queue Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Swiss Family Treehouse: Christmas Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-07 Swiss Family Treehouse_ Christmas Medley.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Rivers of America: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-08 Rivers of America_ Area Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"New Orleans Square: Live Performances",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-09 New Orleans Square_ Live Performances.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Blue Bayou: Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-10 The Blue Bayou_ Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Frontierland: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-11 Frontierland_ Area Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Big Thunder Ranch: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-12 Big Thunder Ranch_ Area Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Jingle Jangle Jamboree: Billy Hill and the Hillbillies",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-13 Jingle Jangle Jamboree_ Billy Hill and the Hillbillies.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Critter Country: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-14 Critter Country_ Area Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mickey's Toontown: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-15 Mickey_s Toontown_ Area Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"It's a Small World: Toy Clock Parade",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-16 It_s a Small World_ Toy Clock Parade.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"It's a Small World: Area Music",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-17 It_s a Small World_ Area Music.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:""
	},
	{
		title:"It's a Small World: Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-18 It_s a Small World_ Medley.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"It's a Small World: Ride",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-19 It_s a Small World_ Ride.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:""
	},
	{
		title:"It's a Small World: Projection Show",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-20 It_s a Small World_ Projection Show.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Babes in Toyland Exhibit",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-21 Babes in Toyland Exhibit.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Mickey's Christmas Chalet: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-22 Mickey_s Christmas Chalet_ Area Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Main Street: Tree Lighting Ceremony",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-23 Main Street_ Tree Lighting Ceremony.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Sleeping Beauty Castle: Winter Castle Lighting Ceremony",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-24 Sleeping Beauty Castle_ Winter Castle Lighting Ceremony.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Candlelight Processional",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-25 Candlelight Processional.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Dickens Yuletide Band",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-26 Dickens Yuletide Band.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Charles Dickens Carolers",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-27 Charles Dickens Carolers.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Dapper Dans: Christmas Medley",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-28 Dapper Dans_ Christmas Medley.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"The Brass",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-29 The Brass.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Christmas in Disneyland: Jack Wagner",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-30 Christmas in Disneyland_ Jack Wagner.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Shows: The Magic of Christmas",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-31 Shows_ The Magic of Christmas.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Shows: Mickey's Nutcracker",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-32 Shows_ Mickey_s Nutcracker.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Shows: Minnie's Christmas Party",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-33 Shows_ Minnie_s Christmas Party.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Parades: Mickey's Very Merry Christmas Parade",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-34 Parades_ Mickey_s Very Merry Christmas Parade.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Parades: A Christmas Fantasy Parade",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-35 Parades_ A Christmas Fantasy Parade.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Fireworks Show: Believe in Holiday Magic",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-36 Fireworks Show_ Believe in Holiday Magic.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Glow",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-37 Glow.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:""
	},
	{
		title:"Winter Dreams: Theme",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-38 Winter Dreams_ Theme.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:""
	},
	{
		title:"World of Color: Winter Dreams Soundtrack",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-39 World of Color_ Winter Dreams Soundtrack.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:""
	},
	{
		title:"Disneyland Hotel: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-40 Disneyland Hotel_ Area Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},
	{
		title:"Trader Sam's Enchanted Tiki Bar: Area Loop",
		artist:"Walt Disney",
		free:false,
		mp3:"Holiday-41 Trader Sam_s Enchanted Tiki Bar_ Area Loop.mp3",
		poster:"AlbumArt/Holiday.jpeg",
		album:"Holiday",
		comments:"Credit Chris Lyndon"
	},	
	{
		title:"How Do You Do? (1946)",
		artist:"Johnny Mercer",
		free:false,
		mp3:"Brair Patch Tribute-01 How Do You Do_ (1946).mp3",
		poster:"AlbumArt/Brair Patch Tribute.jpeg",
		album:"Brair Patch Tribute",
		comments:""
	},
	{
		title:"Everybody's Got a Laughin' Place (1946)",
		artist:"Johnny Mercer",
		free:false,
		mp3:"Brair Patch Tribute-02 Everybody_s Got a Laughin_ Place (1946).mp3",
		poster:"AlbumArt/Brair Patch Tribute.jpeg",
		album:"Brair Patch Tribute",
		comments:""
	},
	{
		title:"Zip-A-Dee-Doo-Dah (1946)",
		artist:"Johnny Mercer",
		free:false,
		mp3:"Brair Patch Tribute-03 Zip-A-Dee-Doo-Dah (1946).mp3",
		poster:"AlbumArt/Brair Patch Tribute.jpeg",
		album:"Brair Patch Tribute",
		comments:""
	}
]

tracks.forEach(track => track.mp3 = `${BASE_URL}/${track.mp3}`)

// TODO: Hardcode this?
// Reversed twice to get proper posters for albums
const albumNames = [...new Map(
		tracks.map(track => {
			return {name: track.album, poster: track.poster}
		}).reverse()
		.map(item => [item.name, item])).values()
	].reverse();

export const albums = Array.from(albumNames)
	.map(albumName => {
		return {...albumName, tracks: tracks.filter(track => track.album === albumName.name)}
	})

export default tracks;
