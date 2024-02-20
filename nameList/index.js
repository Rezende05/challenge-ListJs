const $ul = document.querySelector('.ul');

const names = ['Marcos', 'Gabriel', 'Eliana', 'Zildo', 'Ariadyne', 'Sophia'];

for (const name of names) {
  $ul.innerHTML += '<li>' + name + '</li>';
}
