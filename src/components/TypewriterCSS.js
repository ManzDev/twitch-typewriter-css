import "@/components/TypewriterCarriage.js";
import "@/components/TypewriterTypebars.js";
import "@/components/TypewriterKeyboard.js";

class TypewriterCSS extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --typewriter-width: 550px;
        --typewriter-height: 800px;
        --bgcolor: #c84c56;
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
          animation: type 6s steps(15) infinite;
        }
      }

      .typewriter-typebars {
        background: var(--bgcolor);
        overflow: hidden;
      }

      .typewriter-keyboard {
        background: var(--bgcolor);
        border-radius: 0 0 25px 25px;
      }

      typewriter-keyboard {
      }

      @keyframes type {
        0%, 100% {
          transform: translateX(75px);
        }
        90% {
          transform: translateX(-75px);
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TypewriterCSS.styles}</style>
    <div class="container">
      <div class="typewriter-carriage">
        <div class="carriage-back"></div>
        <typewriter-carriage></typewriter-carriage>
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
