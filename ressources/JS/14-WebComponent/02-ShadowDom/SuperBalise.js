export default class SuperBalise extends HTMLElement
{
    constructor()
    {
        super();
        // Je crée le shadow DOM
        this.shadow = this.attachShadow({mode: "open"})
        this.shadow.textContent = this.getAttribute("text")|| "rien a dire"
        this.info = document.createElement("div");
        this.info.textContent = this.getAttribute("hide")||"rien a dire";
        // J'ajoute ma div au shadow DOM
        this.shadow.append(this.info);
        this.initStyle();
        this.addEventListener("mouseenter", this.toggle);
        this.addEventListener("mouseleave", this.toggle);
    }
    initStyle()
    {
        const style = document.createElement("style")
        this.shadow.append(style)
        style.textContent = /* CSS */
        `
        :host{
            font-weight: 900;
            color: red;
            position: relative;
        }
        div{
            position: absolute;
            bottom: -2rem;
            right: -1rem;
            border: 2px solid blue;
            background-color: rgba(0,0,255,0.7)
        }
        `
        this.info.style.display = "none"
    }
    toggle()
    {
        if(this.info.style.display == "none")
            this.info.style.display = "";
        else
        this.info.style.display == "none";
    }
}
customElements.define("super-balise", SuperBalise);