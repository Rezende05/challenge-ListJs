const $text = document.querySelector('.text');
const $input = document.querySelector('.inputText');
const $form = document.querySelector('.form');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  $text.textContent = $input.value;
});

$input.addEventListener('input', () => {
  $text.textContent = $input.value;
});
