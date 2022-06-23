import { createStore } from "redux";

const music = {
  musicName: "Avicci",
  musicTitle: "Levels",
  musicImg: "https://upload.wikimedia.org/wikipedia/en/2/2c/Levelssong.jpg",
  musicPath: "../image/Avicii - Levels.mp3"
}

const reducerFn = (state = { musicPlaying: music }, action) => {
  return state;
};

const store = createStore(reducerFn);

export default store;
