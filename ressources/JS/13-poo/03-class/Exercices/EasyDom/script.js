import EasyDom from "./EasyDom.js";

const test = new EasyDom()
// const test2 = new EasyDom("h1", "dzdz")

// test.newElem("h3", "louis", "guerin", "Bienvenue");

const div = test.tag("div",{id: "poulet", clas: "vitrine", tt: "WIWIWIWI"} );
document.body.append(div)
// test2.newElem()

test.select(".cis")


