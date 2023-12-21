class TypewriterTypebars extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
      }

      .container {
        width: 100%;
        height: 300px;
        background: var(--shadow-color);
        overflow: hidden;
        position: relative;
        display: grid;
        justify-items :center;

        &::after {
          content: "";
          display: block;
          background: var(--bgcolor);
          width: 100%;
          height: 100%;
          clip-path: polygon(0 23%, 13% 15%, 85% 15%, 100% 23%, 100% 100%, 0 100%);
        }
      }

      .circle-gap {
        --size: 500px;

        background-image:
          repeating-conic-gradient(
            var(--shadow-color) -135deg 126deg,
            #af1a20 126deg 135deg,
            transparent 135deg 225.5deg,
            #af1a20 226deg 235deg
          ),
          radial-gradient(
            #000 40%,
            #000b 40% 45%,
            transparent 45% 67%,
            #0006 67%
          ),
          repeating-conic-gradient(
            #fff 0 1deg,
            #000 1.25deg 3deg,
            #fff 3.25deg 4deg
          );
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        position: absolute;
        bottom: 150px;
        z-index: 5;
      }

      /*
      .typebar {
        --size: 8px;

        position: absolute;
        background: gold;
        width: var(--size);
        height: 300px;
        z-index: 5;
        bottom: 0;
        left: calc(50% - calc(var(--size) / 2));
      }
      */
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TypewriterTypebars.styles}</style>
    <div class="container">
      <div class="circle-gap">
      </div>
    </div>`;
  }
}

customElements.define("typewriter-typebars", TypewriterTypebars);
