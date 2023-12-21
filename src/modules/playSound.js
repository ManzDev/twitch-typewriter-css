const SOUNDS = ["key-1", "key-2", "ding-1", "ding-2", "carriage"];

const preloadSound = (id) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "audio";
  link.href = `${location.href}/sounds/${id}.mp3`;
  document.head.append(link);
};

const preloadSounds = () => {
  SOUNDS.forEach(id => preloadSound(id));
};

preloadSounds();

const play = (id) => {
  const audio = new Audio(`sounds/${id}.mp3`);
  audio.play();
};

export const playSound = (id) => {
  if (id === "key" || id === "ding") {
    const n = 1 + Math.floor(Math.random() * 2);
    play(`${id}-${n}`);
  } else if (id === "carriage") {
    play(id);
  }
};
