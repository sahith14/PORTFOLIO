const modal = document.getElementById('videoModal');
const modalFrame = document.getElementById('modalFrame');
const modalTitle = document.getElementById('modalTitle');
const closeModalButton = document.getElementById('closeModal');
const videoCards = document.querySelectorAll('.video-card');

function openVideo(videoUrl, title) {
  modalTitle.textContent = title;
  modalFrame.src = `${videoUrl}?autoplay=1`;
  modal.showModal();
}

function closeVideo() {
  modalFrame.src = '';
  modal.close();
}

videoCards.forEach((card) => {
  card.addEventListener('click', () => {
    const videoUrl = card.dataset.video;
    const title = card.dataset.title;
    openVideo(videoUrl, title);
  });
});

closeModalButton.addEventListener('click', closeVideo);

modal.addEventListener('click', (event) => {
  const dialogDimensions = modal.getBoundingClientRect();
  const clickInsideDialog =
    event.clientX >= dialogDimensions.left &&
    event.clientX <= dialogDimensions.right &&
    event.clientY >= dialogDimensions.top &&
    event.clientY <= dialogDimensions.bottom;

  if (!clickInsideDialog) {
    closeVideo();
  }
});
