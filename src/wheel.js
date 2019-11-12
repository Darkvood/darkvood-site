let pos = 0;

const stages = [
  {
    name: { size: "7" },
    spec: { size: "2" }
  },
  {
    name: { size: "10" },
    spec: { size: "3" }
  },
  {
    name: { size: "12" },
    spec: { size: "4" }
  },
  {
    name: { size: "15" },
    spec: { size: "6" }
  },
  {
    name: { size: "19" },
    spec: { size: "9" }
  }
];

const needToScroll = stages.length - 1;

export function onWheel(event, nameEl, specEl) {
  // scroll top
  if (event.deltaY < 0) {
    pos = Math.max(pos - 1, 0);
  }
  // scroll bottom
  else {
    if (pos < needToScroll) event.preventDefault();

    pos = Math.min(pos + 1, needToScroll);
  }

  setStage(nameEl, specEl);
}

function setStage(nameEl, specEl) {
  const stage = stages[pos];

  nameEl.style.fontSize = stage.name.size + "rem";
  specEl.style.fontSize = stage.spec.size + "rem";
}
