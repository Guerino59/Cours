export default class SuperDiv extends HTMLDivElement
{
    constructor()
    {
        super();
        this.#setStyle();
        this.addEventListener('click', this.hide);
    }
    #setStyle()
    {
        //par defaut les elements personnalisés sont traites comme inline
        this.style.display = "block"
        this.style.overflow = "hidden"
        this.style.backgroundColor = this.getAttribute("bg")??"red";
        this.style.transition = "height 0.3s linear"
        this.sizes = this.getBoundingClientRect();
        this.style.height = this.sizes.height + "px"
    }
    hide()
    {
        if(this.style.height == "1rem")
            this.style.height = this.sizes.height + "px";
        else
        this.style.height = "1rem"
    }

    connectedCallback()
    {
        console.log("message affiché quand l'element est ajouté a la page");
    }
    disconnectedCallback()
    {
        console.log("message affiché quand l'element est retiré de la page");
    }
    adoptedCallback()
    {
        console.log("Message affiché quand l'element change de document");
    }
    attributeChangeCallback(name, old, now)
    {
        console.log(`L'attribut "${name}" est passé de : "${old}" à "${now}"`);
    }
    static get observedAttributes()
    {
        return ["style"];
    }
}
customElements.define("super-div", SuperDiv, {extends: "div"})
