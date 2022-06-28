import levels from "../image/Avicii - Levels.mp3";
import coldplay from "../image/Coldplay - A Sky Full Of Stars (Official audio) (mp3cut.net).mp3";
import poison from "../image/Martin Garrix - Poison (Official Video) (mp3cut.net).mp3";

const radioStations = [
  {
    radioImg:
      "http://www.coldplayzone.it/images/stories/discografia/album/parachutes.jpg",
    radioURL: coldplay,
    radioName: "ColdPlay",
    type: "Sky full of stars",
  },
  {
    radioImg: "https://i1.sndcdn.com/artworks-000333029064-u67e5l-t500x500.jpg",
    radioURL: poison,
    radioName: "Martin Garrix",
    type: "Poision",
  },
  {
    radioImg: "https://upload.wikimedia.org/wikipedia/en/2/2c/Levelssong.jpg",
    radioURL: levels,
    radioName: "Avicii",
    type: "Levels",
  },
  {
    radioImg:
      "https://www.piterpan.it/wp-content/uploads/2020/01/piterpan-logo-ico.png",
    radioURL: "https://ice01.fluidstream.net/piterpan?FLID=6",
    radioName: "Piter Pan",
    type: "Radio",
  },
  {
    radioImg:
      "https://upload.wikimedia.org/wikipedia/it/thumb/2/25/RTL_102_5_logo.svg/1200px-RTL_102_5_logo.svg.png",
    radioURL: "https://streamingv2.shoutcast.com/rtl-1025_48.aac",
    radioName: "RTL",
    type: "Radio",
  },
];
export default radioStations;
