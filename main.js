alert("Witaj na mojej stronie!");

const firstName = "Michał";
const age = "29";

const introduction = document.querySelector(".main__introduction--js");

introduction.innerHTML = "Kilka słów o mnie";



const greet = (age, firstName) => {
    console.log(`Nazywam się ${firstName} i mam ${age} lat. Witaj na mojej stronie!`);
}

greet(age, firstName);


if (2 ==='2') {
    console.log('Java to nie Javascript')
}

