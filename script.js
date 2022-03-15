 /* variables */
  
let adviceId = document.getElementById("adviceId");
let contentQuote = document.getElementById("contentQuote");
let btnRandom = document.getElementById("btnRandom");
/* get data */

getData = () => 
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .catch((error) => {
      console.log(`this is the error: ${error}`);
    });

addQuote = () => {
    getData().then((data) => {
        console.log(data.slip.id);
        adviceId.innerText = data.slip.id;
        contentQuote.innerText = `" ${data.slip.advice} "`;
      });
}

window.addEventListener("load", () => {
 addQuote();
});

btnRandom.addEventListener("click", () => {
    addQuote();
})
