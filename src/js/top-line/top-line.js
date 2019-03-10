import { showOnlineUsers } from './online.js';

const topLine = document.getElementById('top-line');

topLine.addEventListener('click', ({target}) => {
  //console.log(target);
  if (target.matches('.status__button')) {
    console.log('status');
  } else if (target.matches('.online__button')) {
    console.log('online');
    showOnlineUsers();

  } else {
    return;
  }

});
