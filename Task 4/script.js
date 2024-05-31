document.body.innerHTML = "<h1>Header</h1> <hr>";

for (let i = 1; i <= 6; i++)
    document.body.innerHTML += `<h${i}>This is header number ${i}</h${i}>`;
