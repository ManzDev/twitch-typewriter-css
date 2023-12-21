import "@/components/TypewriterCarriage.js";
import "@/components/TypewriterTypebars.js";
import "@/components/TypewriterKeyboard.js";

class TypewriterCSS extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.carriageState = 15;
  }

  static get styles() {
    return /* css */`
      :host {
        --typewriter-width: 550px;
        --typewriter-height: 800px;
        --carriage-state: 15;
        --shadow-color: #c84c56;
        --bgcolor: #ff606d;
        --iron-color: #111;
      }

      .container {
        display: inline-grid;
        grid-template-columns: var(--typewriter-width);
        grid-template-rows: 4.5fr 2.5fr 3fr;
        height: var(--typewriter-height);
      }

      .container > div {
        height: 100%;
      }

      .typewriter-carriage {
        position: relative;

        & .carriage-back {
          --rounded: 20px;

          width: 100%;
          height: 150px;
          background: var(--iron-color);
          border-radius: var(--rounded) var(--rounded) 0 0;
          position: absolute;
          bottom: 0;
        }

        & typewriter-carriage {
          position: absolute;
          bottom: 1rem;
          transform: translateX(calc(-75px + calc(var(--carriage-state) * 10px)));
        }
      }

      .typewriter-typebars {
        background: var(--bgcolor);
        overflow: hidden;
      }

      .typewriter-keyboard {
        background: var(--shadow-color);
        border-radius: 0 0 48px 48px;
      }

      .typebar {
        --size: 12px;

        position: absolute;
        background: #151515;
        width: var(--size);
        height: 0;
        z-index: 10;
        bottom: -150px;
        left: calc(50% - calc(var(--size) / 2));

        transition: height 0.05s ease-in-out;
      }

      /*
      :host(:hover) .typebar {
        height: 215px;
      }
      */
    `;
  }

  connectedCallback() {
    this.render();
    document.addEventListener("KEY_PRESSED", ({ detail }) => this.updateState());
  }

  updateState() {
    if (this.carriageState > 0) {
      this.carriageState--;
    } else {
      const keyboard = this.shadowRoot.querySelector("typewriter-keyboard");
      keyboard.block();
      const carriage = this.shadowRoot.querySelector("typewriter-carriage");
      const animation = carriage.cr();
      animation.finished.then(() => {
        this.carriageState = 15;
        this.style.setProperty("--carriage-state", this.carriageState);
        keyboard.unblock();
      });
    }
    this.style.setProperty("--carriage-state", this.carriageState);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TypewriterCSS.styles}</style>
    <div class="container">
      <div class="typewriter-carriage">
        <div class="carriage-back"></div>
        <typewriter-carriage></typewriter-carriage>
        <div class="typebar"></div>
      </div>
      <div class="typewriter-typebars">
        <typewriter-typebars></typewriter-typebars>
      </div>
      <div class="typewriter-keyboard">
        <typewriter-keyboard></typewriter-keyboard>
      </div>
    </div>`;
  }
}

customElements.define("typewriter-css", TypewriterCSS);
