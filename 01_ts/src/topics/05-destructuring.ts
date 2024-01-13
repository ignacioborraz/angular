interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Detail;
}

interface Detail {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015
  }
}
const { song: anotherSong, details } = audioPlayer
const { author } = details
console.log(anotherSong, author);

const songs: string[] = ["toxic", "womanicer", "three", "love game", "monster"]
const another: string = songs[6] || "no song"
console.log(another);
const [, , britney] = songs
console.log(britney);
const [, , , , , , , , beyonce = "hallo"] = songs
console.log(beyonce);

export { }