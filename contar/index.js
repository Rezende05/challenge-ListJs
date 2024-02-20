const $input = document.querySelector('.input');
const $form = document.querySelector('.form');
const $countArea = document.querySelector('.countArea');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  $countArea.textContent = '';
  const number = Number($input.value);
  for (let index = 0; index <= number; index++) {
    $countArea.textContent += index + ' ';
  }
});
