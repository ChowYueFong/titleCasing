const titleInput = document.getElementById("title");
const output = document.getElementById("output");
let title =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint tempora suscipit nam fugiat molestias quibusdam voluptatem optio? Beatae, eum ut.";

let lower = "";
let upper = "";

titleInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    title = titleInput.value;
    lower = toLower(title);
    upper = lower[0].toUpperCase() + final(lower);
    output.innerHTML = upper;
    upper = "";
    lower = "";
    console.log(upper);
    console.log(lower);
  }
});

function toLower(title) {
  for (let i = 0; i < title.length; i++) {
    lower = lower + title[i].toLowerCase();
  }
  return lower;
}

function final(title) {
  for (let i = 1; i < title.length; i++) {
    upper = upper + title[i];
  }
  return upper;
}

let copy = "";

function copyToClipboard() {
  copy = output.innerHTML;
  //   copy.select();
  //   copy.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copy);
}
