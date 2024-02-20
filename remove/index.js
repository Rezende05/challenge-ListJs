const $div = document.querySelectorAll('.color');

const removeDiv = $div.forEach((item) => {
  item.addEventListener('click', () => {
    item.remove();
  });
});
