(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))v(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&v(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function v(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
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
    </div>`}}customElements.define("typewriter-carriage",a);class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --light-color: #ff606d;
      }

      .container {
        width: 100%;
        height: 300px;
        background: var(--light-color);
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
            var(--light-color) -135deg 126deg,
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${o.styles}</style>
    <div class="container">
      <div class="circle-gap"></div>
    </div>`}}customElements.define("typewriter-typebars",o);const p=["1","2","3","4","5","6","7","8","9","0","+","-","q","w","e","r","t","y","u","i","o","p","|","capslock","a","s","d","f","g","h","j","k","l",".","enter","shift","z","x","c","v","b","n","m","<",">","/"],k=["key-1","key-2","ding-1","ding-2","carriage"],h=t=>{const e=document.createElement("link");e.rel="preload",e.as="audio",e.href=`${location.href}/sounds/${t}.mp3`,document.head.append(e)},g=()=>{k.forEach(t=>h(t))},y=t=>{new Audio(`sounds/${t}.mp3`).play()},s=t=>{if(t==="key"||t==="ding"){const e=1+Math.floor(Math.random()*2);y(`${t}-${e}`)}else t==="carriage"&&y(t)};g();setInterval(()=>{s("ding"),setTimeout(()=>s("carriage"),200)},5700);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
        background: #392f2d;
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

        width: var(--size);
        height: var(--size);
        background: var(--key-color);
        color: var(--key-text-color, #e03341);
        font-weight: 500;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-family: Jost, sans-serif;
        box-shadow: 0 3px 0 #0005;

        &.key-space {
          width: 300px;
          border-radius: 8px;
        }
      }

      .row:nth-child(1) .key,
      .row:nth-child(4) .key:first-child {
        --key-color: #888;
        --key-text-color: #222;
      }

      .row:nth-child(3) :is(.key:first-child, .key:last-child),
      .key-space {
        --key-color: #ff8690;
      }

      .row:nth-child(3) {
        & .key::before {
          content: "";
          position: absolute;
          width: 1px;
          background: var(--line-color);
          height: 175px;
          transform: translate(0, -85px);
          z-index: -1;
          bottom: 0;
        }

        & .key:nth-child(3)::before,
        & .key:nth-child(10)::before {
          bottom: -55px;
        }
      }

      .row:nth-child(4) {
        & .key::before {
          content: "";
          position: absolute;
          width: 1px;
          height: 140px;
          background: var(--line-color);
          transform: translate(0, -50px);
          z-index: -1;
          bottom: 0;
        }
      }
    `}connectedCallback(){this.render(),addEventListener("keydown",e=>this.onKey(e.key))}onKey(e){p.includes(e.toLowerCase())&&s("key")}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
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
          <div class="key-+ key">+</div>
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
          <div class="key-| key">|</div>
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

    </div>`}}customElements.define("typewriter-keyboard",c);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
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
    </div>`}}customElements.define("typewriter-css",l);
