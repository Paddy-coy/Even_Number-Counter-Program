const increaseBtn = document.getElementById("increaseBtn")
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
let countH1 = document.getElementById("countH1")
let count =0;

increaseBtn.onclick = function() {
   count = count +2;
    countH1.textContent = count;
}
decreaseBtn.onclick = function() {
   count = count -2;
    countH1.textContent = count;
}
resetBtn.onclick = function() {
   count = 0;
    countH1.textContent = count;
}