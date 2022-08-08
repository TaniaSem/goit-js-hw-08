import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

const savedPlayerTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);
if (savedPlayerTime) {
  player.setCurrentTime(savedPlayerTime);
}

player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

function onPlayerTimeupdate(time) {
  let currentPlayerTime = time.seconds;
  console.log(currentPlayerTime);
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, currentPlayerTime);
}

// const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';
// const iframe = document.querySelector('#vimeo-player');
// const player = new Player(iframe);
// const getSavedTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);

// if (getSavedTime) {
//   player.setCurrentTime(getSavedTime);
// }

// player.on('timeupdate', throttle(onTimeUpdate, 1000));

// function onTimeUpdate(time) {
//   let savedPausedPlayerTime = time.seconds;
//   localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, savedPausedPlayerTime);
// }
