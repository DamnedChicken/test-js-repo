/* initialize thw count as zero
clicks gets the increment
increment the count variable when the button is clicked
*/

let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}
function save() {
  let saveEl = document.getElementById("save-el");
  let saveEnt = count + "-";
  saveEl.innerText += saveEnt;
  console.log(count);
}
