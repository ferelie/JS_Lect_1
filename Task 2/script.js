function hotOrCold() {
    let temperature = document.getElementById("temperature").value;
    let newElement = document.createElement("h1");
    
    newElement.textContent = (temperature <= 30) ? "It's a little cold" : "It's hot";
    document.body.appendChild(newElement);
}
