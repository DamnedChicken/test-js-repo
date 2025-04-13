/* initializw thw count as zero
cliicks gets the increment
increment the count variable when the button is clicked
*/

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}
