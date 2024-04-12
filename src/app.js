/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const randomIndexFunction = length => {
    return Math.floor(Math.random() * length);
  };

  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];

  for (let i in (pronoun, adj, noun)) {
    const randomIndex1 = randomIndexFunction(pronoun.length);
    const randomIndex2 = randomIndexFunction(adj.length);
    const randomIndex3 = randomIndexFunction(noun.length);
    const randomName1 = pronoun[randomIndex1];
    const randomName2 = adj[randomIndex2];
    const randomName3 = noun[randomIndex3];

    const randomIndex = randomName1 + randomName2 + randomName3 + ".com";
    document.getElementById("name").innerHTML = randomIndex;

    console.log(randomName1 + randomName2 + randomName3 + ".com");
  }
};
