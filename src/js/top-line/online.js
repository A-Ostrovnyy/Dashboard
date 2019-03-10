export default function showOnlineUsers() {
  const onlineList = document.querySelector('.online__list');
  onlineList.classList.toggle('.online__list--active');
}
