while (true) {
    name = prompt("Enter your name:");
    if (/^[A-Za-z]+$/.test(name) && name.length > 0) {
        break;
    } else {
        alert("Please enter a valid name");
    }
}

while (true) {
    birthYear = prompt("Enter your birth year:");
    if (Number(birthYear) < 2010 && Number(birthYear) > 1900) {
        break;
    } else {
        alert("Please enter a valid birth year");
    }
}

age = new Date().getFullYear() - Number(birthYear);

document.body.innerHTML = ` <h1> Name: ${name}<br>Birth year: ${birthYear}<br>Age: ${age} </h1>`;
