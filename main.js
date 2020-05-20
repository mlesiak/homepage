alert("Witaj na mojej stronie!");

const name = "Michał";
const age = "29";

console.log(`Nazywam się ${name} i mam ${age} lat.`);
console.log(age);

const introduction = document.querySelector(".main__introduction--js");

introduction.innerHTML = "Kilka słów o mnie";
