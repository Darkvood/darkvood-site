import "./assets/main";
import { onWheel } from "./wheel";

document.addEventListener("DOMContentLoaded", bootstrap);

function bootstrap() {
  const fonts = document.createElement("link");
  fonts.href = "https://fonts.googleapis.com/css?family=Fjalla+One|Roboto:400,700&amp;display=swap";
  fonts.rel = "stylesheet";

  document.head.appendChild(fonts);

  const mainSection = document.getElementById("main-section");
  const nameEl = document.getElementById("name-el");
  const specEl = document.getElementById("spec-el");

  mainSection.addEventListener("wheel", e => onWheel(e, nameEl, specEl));
}
