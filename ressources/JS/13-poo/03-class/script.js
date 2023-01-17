
import Human from "./Human.js";
import Dev from "./Dev.js";

const h1 = new Human("Patrick", "Chirac", 48);
console.log(h1.age, Human.categorie);
Human.description()
h1.salutation()
const h2 = new Human("Fred", "poulet", 33)
h2.salutation()

const d = new Dev("Jean", "Christian", 83, "JavaScript")
d.salutation();
console.log(d);
