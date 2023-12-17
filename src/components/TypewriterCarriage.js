class TypewriterCarriage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --offset: 65px;
        --carriage-excess: calc(var(--offset) / 3);
        /* --max: calc(var(--offset) * -1); */
        --x: calc(-1 * var(--carriage-excess));

        --light-color: #d0d2cd;
        --dark-color: #b1b6af;
      }

      .container {
        width: calc(var(--typewriter-width) + calc(var(--offset) * 2));
        height: 100px;
        transform: translate(calc(var(--offset) * -1), 0); /* rodillo: de -2 a 0 */
        display: grid;
        grid-template-columns: var(--offset) 1fr var(--offset);
        justify-content: center;
      }

      .carriage-tip {
        display: flex;
        align-items: center;

        &::before {
          content: "";
          background: var(--iron-color);
          width: 10px;
          height: 25px;
          display: block;
        }

        &.left {
          justify-self: end;

          & .tip {
            order: -1;
            border-radius: 8px 0 0 8px;
            background: var(--light-color);

            &::after {
              background: var(--dark-color);
              justify-self: end;
              align-self: end;
            }
          }
        }

        .tip {
          display: grid;
          width: 35px;
          height: 100%;
          background: var(--dark-color);
          border-radius: 0 8px 8px 0;

          &::after {
            content: "";
            width: 75%;
            height: 50%;
            display: block;
            background: var(--light-color);
          }
        }
      }

      .carriage-container {
        width: calc(var(--typewriter-width) + calc(var(--carriage-excess) * 2));
        height: 100%;
        background: linear-gradient(to bottom, #626262 50%, #424242 50%);
        display: flex;
        justify-content: space-between;

        & .end {
          width: 10px;
          height: 100%;
          background: linear-gradient(var(--light-color) 25%, var(--dark-color) 25%);
        }
      }

      .paper,
      .carriage-lock {
        position: absolute;
        bottom: 0;
      }

      .paper {
        background: #ecece2;
        width: 400px;
        height: 300px;
        left: 20%;
        font-family: "Special Elite", sans-serif;
        font-size: 3rem;
        color: #333;
        text-align: center;

        & p {
          margin-top: 7rem;
        }
      }

      .carriage-lock {
        width: calc(var(--typewriter-width) + var(--carriage-excess));
        top: 18%;
        left: 7%;
        height: 15px;
        padding: 0 5px;
        background: linear-gradient(var(--light-color) 50%, var(--dark-color) 50%);

        display: flex;
        justify-content: space-around;

        &::after,
        &::before {
          content: "";
          background: #343434;
          width: 45px;
          height: 20px;
          display: block;
          transform: translate(0, -2px);
        }
      }

      .paper-back {
        position: absolute;
        background: #dedbcc;
        right: 6rem;
        bottom: 100px;
        width: 50px;
        height: 80px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TypewriterCarriage.styles}</style>
    <div class="container">
      <div class="paper-back"></div>
      <div class="carriage-tip left">
        <div class="tip"></div>
      </div>
      <div class="carriage-container">
        <div class="end"></div>
        <div class="end"></div>
      </div>
      <div class="carriage-tip right">
        <div class="tip"></div>
      </div>
      <div class="paper">
        <p>Manz.dev</p>
      </div>
      <div class="carriage-lock"></div>
    </div>`;
  }
}

customElements.define("typewriter-carriage", TypewriterCarriage);
