let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-txt');

let count = 0;

function increment() {
  console.log('button clicked');
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;

}
