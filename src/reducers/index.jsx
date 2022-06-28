
import { createStore } from "redux";
import musicList from '../reducers/radioList';
import levels from '../image/Avicii - Levels.mp3';

const music = {
  radioImg:
    "https://upload.wikimedia.org/wikipedia/en/2/2c/Levelssong.jpg",
  radioURL: levels,
  radioName: "Avicii",
  type: "Levels"
}
const musicIndex = 0;

const reducerFn = (state = { musicPlaying: music }, action) => {

  if (action.type === "SELECTED")
    return { musicPlaying: action.payload }


  return state;
};

const store = createStore(reducerFn);

export default store;
