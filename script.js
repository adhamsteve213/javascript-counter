let count = 0; 

const decreasebtn = document.getElementById("deceasebtn");
const resetbtn = document.getElementById('resetbtn');
const increasebtn = document.getElementById('increasebtn');
const countlabel = document.getElementById('countlabel');

increasebtn.onclick = function() {
  count++;
  countlabel.textContent = count;
}

decreasebtn.onclick = function() {
  count--;
  countlabel.textContent = count;
}

resetbtn.onclick = function() {
  count = 0;
  countlabel.textContent = count;
}