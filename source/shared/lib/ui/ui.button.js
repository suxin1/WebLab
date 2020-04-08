import "./ui.button.style.scss";
console.log("[IMPORT] ui button")

export class Button {
    constructor(node) {
        this.node = node;
        node.onclick = this.onClick;
    }

    onClick(e) {
        e.preventDefault();
    }
}
