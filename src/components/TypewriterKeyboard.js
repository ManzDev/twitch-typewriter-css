import { playSound } from "@/modules/playSound.js";

const KEYS = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-",
  "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "|",
  "capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ".", "enter",
  "shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "/", " "
];

const EXCEPTION_KEYS = {
  "+": "plus",
  "|": "pipe",
  "<": "less",
  ">": "great",
  ".": "dot",
  "/": "slash",
  " ": "space"
};

const mapKey = (key) => {
  const isException = Object.keys(EXCEPTION_KEYS).includes(key);
  const map = isException ? EXCEPTION_KEYS[key] : key.toLowerCase();
  return `.key-${map}`;
};

const isValidKey = (key) => KEYS.includes(key.toLowerCase());

class TypewriterKeyboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --line-color: #8f3630;
        --key-color: #f5e9cf;

        display: grid;
        place-items: center;
        height: 100%;
      }

      .container {
        width: 90%;
        height: 80%;
        background: #222;
        border-radius: 0 0 40px 40px;
        position: relative;
        overflow: hidden;
      }

      .keys {
        display: grid;
        grid-template-rows: repeat(4, 35px);
        height: 90%;
        place-items: center;
        padding: 0.5rem;
        position: relative;
        z-index: 5;
      }

      .row {
        display: flex;
        width: 90%;
        justify-content: space-between;
      }

      .row:nth-child(even) {
        width: 88%;
        justify-content: space-evenly;
      }

      .row:nth-child(5) {
        margin-top: 6px;
        justify-content: center;
      }

      .key {
        --size: 25px;
        --shadow-key-color: color-mix(in srgb, var(--key-color), black 50%);

        width: var(--size);
        height: var(--size);
        background: var(--key-color);
        color: var(--key-text-color, #e03341);
        font-weight: 500;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-family: Jost, sans-serif;
        box-shadow: 0 3px 0 var(--shadow-key-color);
        position: relative;
        top: 0;

        &.key-space {
          width: 300px;
          border-radius: 8px;
        }

        &.active {
          top: 3px;
        }
      }

      .row:nth-child(1) .key,
      .row:nth-child(4) .key:first-child {
        --key-color: #888;
        --key-text-color: #222;
      }

      .row:nth-child(3) :is(.key:first-child, .key:last-child),
      .key-space {
        --key-color: var(--bgcolor);
        color: #333;
      }

      .row:nth-child(3) {
        & .key::before {
          content: "";
          position: absolute;
          width: 1px;
          background: var(--line-color);
          height: 185px;
          z-index: -1;
          bottom: 0;
        }

        & .key:nth-child(3)::before,
        & .key:nth-child(10)::before {
          bottom: -50px;
        }
      }

      .row:nth-child(4) {
        & .key::before {
          content: "";
          position: absolute;
          width: 1px;
          height: 150px;
          background: var(--line-color);
          bottom: 0px;
          z-index: -1;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
    addEventListener("keydown", (ev) => this.onKey(ev.key));
    addEventListener("keyup", (ev) => this.onReleaseKey(ev.key));
  }

  onKey(key) {
    if (!isValidKey(key) || this.blocked) return;

    const selectedKey = this.shadowRoot.querySelector(mapKey(key));
    selectedKey.classList.add("active");
    playSound("key");
    const event = new CustomEvent("KEY_PRESSED", { bubbles: true, composed: true, detail: { key } });
    this.dispatchEvent(event);
  }

  onReleaseKey(key) {
    if (!isValidKey(key) || this.blocked) return;

    const keys = [...this.shadowRoot.querySelectorAll(".row .key")];
    keys.forEach(key => key.classList.remove("active"));
  }

  block() {
    this.blocked = true;
  }

  unblock() {
    this.blocked = false;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TypewriterKeyboard.styles}</style>
    <div class="container">

      <div class="keylines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="keys">
        <div class="row">
          <div class="key-1 key">1</div>
          <div class="key-2 key">2</div>
          <div class="key-3 key">3</div>
          <div class="key-4 key">4</div>
          <div class="key-5 key">5</div>
          <div class="key-6 key">6</div>
          <div class="key-7 key">7</div>
          <div class="key-8 key">8</div>
          <div class="key-9 key">9</div>
          <div class="key-0 key">0</div>
          <div class="key-plus key">+</div>
          <div class="key-- key">-</div>
        </div>

        <div class="row">
          <div class="key-q key">Q</div>
          <div class="key-w key">W</div>
          <div class="key-e key">E</div>
          <div class="key-r key">R</div>
          <div class="key-t key">T</div>
          <div class="key-y key">Y</div>
          <div class="key-u key">U</div>
          <div class="key-i key">I</div>
          <div class="key-o key">O</div>
          <div class="key-p key">P</div>
          <div class="key-pipe key">|</div>
        </div>

        <div class="row">
          <div class="key-capslock key">❖</div>
          <div class="key-a key">A</div>
          <div class="key-s key">S</div>
          <div class="key-d key">D</div>
          <div class="key-f key">F</div>
          <div class="key-g key">G</div>
          <div class="key-h key">H</div>
          <div class="key-j key">J</div>
          <div class="key-k key">K</div>
          <div class="key-l key">L</div>
          <div class="key-dot key">.</div>
          <div class="key-enter key">●</div>
        </div>

        <div class="row">
          <div class="key-shift key">◆</div>
          <div class="key-z key">Z</div>
          <div class="key-x key">X</div>
          <div class="key-c key">C</div>
          <div class="key-v key">V</div>
          <div class="key-b key">B</div>
          <div class="key-n key">N</div>
          <div class="key-m key">M</div>
          <div class="key-less key">&lt;</div>
          <div class="key-great key">&gt;</div>
          <div class="key-slash key">/</div>
        </div>

        <div class="row">
          <div class="key-space key"></div>
        </div>
      </div>

    </div>`;
  }
}

customElements.define("typewriter-keyboard", TypewriterKeyboard);
