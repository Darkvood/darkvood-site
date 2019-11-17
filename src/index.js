import "./assets/main";
import { onWheel } from "./wheel";

document.addEventListener("DOMContentLoaded", bootstrap);

function bootstrap() {
  const mainSection = document.getElementById("main-section");
  const nameEl = document.getElementById("name-el");
  const specEl = document.getElementById("spec-el");

  mainSection.addEventListener("wheel", e => onWheel(e, nameEl, specEl));
}
